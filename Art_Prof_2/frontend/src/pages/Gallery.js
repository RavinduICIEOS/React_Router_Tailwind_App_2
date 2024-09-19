import PageContent from '../components/PageContent';
import img1 from '../assets/Rectangle 39.png';
import img2 from '../assets/Rectangle 40.png';
import img3 from '../assets/Rectangle 42.png';
import img4 from '../assets/Rectangle 43.png';
import Footer from '../components/Footer'; 


function Gallery() {
  return (
    <div className="grid  gap-10 text-center " >
      <PageContent title="">
        <div className="flex justify-around items-center gap-10 mb-10 ">
          <div>
            <img src={img4} alt="A restaurant" className="w-[600px] h-[720px] absolute top-[251px] left-[150px] m-5" />
            <div className="text-left mt-1 ml-5 w-[600px] h-[720px] absolute top-[1001px] left-[150px]">
              <h2 className="text-[30px] mb-[20px]">Circus - 2023</h2>
              <p className="text-[18px]">
                Acrylic Polymer on Canvas <br />
                1.6m x 1.6m <br />
                Available on The Artling - www.theartling.com
              </p>
            </div>
          </div>

          <div>
            <img src={img1} alt="A restaurant" className="w-[600px] h-[720px] absolute top-[251px] left-[850px] m-5" />
            <div className="text-left mt-1 ml-5 w-[600px] h-[720px]  absolute top-[1001px] left-[850px]">
              <h2 className="text-[30px] mb-[20px]">Bond - 2023</h2>
              <p className="text-[18px]">
                Acrylic Polymer on Canvas <br />
                1.6m x 1.6m <br />
                Available on The Artling - www.theartling.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center gap-10 mb-10">
          <div>
            <img src={img2} alt="A restaurant" className="w-[600px] h-[720px] absolute top-[1221px] left-[150px] m-5" />
            <div className="text-left mt-1 ml-5 w-[600px] h-[720px] absolute top-[1971px] left-[150px]">
              <h2 className="text-[30px] mb-[20px]">Circus - 2023</h2>
              <p className="text-[18px]">
                Acrylic Polymer on Canvas <br />
                1.6m x 1.6m <br />
                Available on The Artling - www.theartling.com
              </p>
            </div>
          </div>

          <div>
            <img src={img3} alt="A restaurant" className="w-[600px] h-[720px] absolute top-[1221px] left-[850px] m-5" />
            <div className="text-left mt-1 ml-5 w-[600px] h-[720px] absolute top-[1971px] left-[850px]">
              <h2 className="text-[30px] mb-[20px]">Bond - 2023</h2>
              <p className="text-[18px]">
                Acrylic Polymer on Canvas <br />
                1.6m x 1.6m <br />
                Available on The Artling - www.theartling.com
              </p>
            </div>
          </div>
        </div>

        <div className=" gap-10 mb-10  ">
          <div>
            <img src={img1} alt="A restaurant" className="w-[600px] h-[720px] absolute top-[2191px] left-[150px] m-5" />
            <div className="text-left mt-1 ml-5 absolute top-[2941px] left-[150px]">
              <h2 className="text-[30px] mb-[20px]">Circus - 2023</h2>
              <p className="text-[18px]">
                Acrylic Polymer on Canvas <br />
                1.6m x 1.6m <br />
                Available on The Artling - www.theartling.com
              </p>
            </div>
          </div>

          <div>
            <img src={img4} alt="A restaurant" className="w-[600px] h-[720px] absolute top-[2191px] left-[850px] m-5" />
            <div className="text-left mt-1 ml-5 absolute top-[2941px] left-[850px]">
              <h2 className="text-[30px] mb-[20px]" >Bond - 2023</h2>
              <p className="text-[18px]">
                Acrylic Polymer on Canvas <br />
                1.6m x 1.6m <br />
                Available on The Artling - www.theartling.com
              </p>
            </div>
          </div>
        </div>
      </PageContent>
        </div>
  );
}

export default Gallery;
