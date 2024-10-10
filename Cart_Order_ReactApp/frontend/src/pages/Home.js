import PageContent from '../components/PageContent';
import img1 from '../assets/Group 14.png';
import img2 from '../assets/art image.png';
import img3 from '../assets/Rectangle 40.png';
import img4 from '../assets/art image2.png';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import Cloths from '../Cloths';
import useHttp from '../hooks/useHttp';
import Error from './Error.js';
import { useState } from 'react';

const requestConfig = {};

function HomePage() {
  const navigate = useNavigate();

  const [startIndex, setStartIndex] = useState(0); 

  const handleViewGallery = () => {
    navigate('/gallery');
  };

  const handleViewMerchandise = () => {
    navigate('/merchandise');
  };

  const handleNext = () => {
    if (startIndex + 4 < loadedMeals.length) {
      setStartIndex(startIndex + 1); 
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1); 
    }
  };

  const {
    data: loadedMeals,
    isLoading,
    error
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className="text-center">Fetching meals Home Page...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals Home Page" message={error} />;
  }

  const visibleMeals = loadedMeals.slice(startIndex, startIndex + 4);

  return (
    <PageContent title={""}>
      <h2 className="text-7xl leading-snug text-center my-5 absolute top-[188px] left-[315px] font-josefin">
        Love of Beauty is Taste. The <br />Creation of <span className="text-[#01ADB4]">Beauty is Art</span>
      </h2>
      <p className="text-center  absolute top-[434px] left-[425px] font-josefin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit bibendum cras augue<br />
        donec porttitor risus, quisque. Tristique quis ullamcorper tempus nisi.
      </p>
      <img src={img1} alt='A restaurant' className='relative top-[602px]' />

      <h2 className="text-7xl leading-snug text-center my-5 absolute top-[1406px] left-[595px] font-josefin ">
        Our <span className="text-[#01ADB4]">Gallery</span>
      </h2>

      <div className="flex justify-center space-x-4 absolute top-[1594px] left-[150px]">
        <img src={img2} alt="A restaurant" className="w-[400px] h-[461px]" />
        <img src={img3} alt="A restaurant" className="w-[400px] h-[461px]" />
        <img src={img4} alt="A restaurant" className="w-[400px] h-[461px]" />
      </div>
      <br /><br />

      <Button textOnly className="text-base px-4 py-2 absolute left-[712px] top-[2105px] font-josefin" onClick={handleViewGallery}>
        View Gallery
      </Button>

      <h2 className="text-7xl leading-snug text-center my-5 absolute top-[2286px] left-[488px] font-josefin">
        Your <span className="text-[#01ADB4]">Merchandise</span>
      </h2>

      <ul className="flex  p-20 m-10 gap-20 justify-between absolute top-[2313px] left-[121px] ">
        {visibleMeals.map(({ color, ...meal }) => (
          <Cloths key={meal.id} meal={meal} showBuyNowButton={false} />
        ))}
      </ul>

      <div className="items-center text-base px-4 py-2 font-josefin">
  <div className=" text-center">
    <Button textOnly className=" absolute left-[712px] top-[2951px] font-josefin" onClick={handleViewMerchandise}>
      View More
    </Button>
  </div>

  <div className="flex space-x-5 absolute top-[2951px]">
    <Button textOnly
      className="text-base px-5 py-2.5 absolute left-[1377px]"
      onClick={handlePrevious}
      disabled={startIndex === 0}
    >
    ⬅
    </Button>

    <Button textOnly
      className="text-base px-5 py-2.5 absolute left-[1442px]"
      onClick={handleNext}
      disabled={startIndex + 4 >= loadedMeals.length}
    >
      ➔
    </Button>
  </div>
</div> 
    </PageContent>
  );
}

export default HomePage;