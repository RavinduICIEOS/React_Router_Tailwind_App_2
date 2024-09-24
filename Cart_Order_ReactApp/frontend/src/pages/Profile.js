import PageContent from '../components/PageContent';
import ProImg from '../assets/Group 427320635.png';

function Profile() {
  return (
    <PageContent
      title={
        <div className="absolute w-[492px] h-[75px] top-[245px] left-[855px] gap-0 font-['Josefin_Sans'] text-[50px] font-semibold leading-[75px] text-center">
          I am James Anderson
        </div>
      }
    >
      <div className="flex justify-between items-center m-[150px]">
        <img
          src={ProImg}
          alt="A restaurant"
          className="w-[639px] h-[779px] mr-[40px]"
        />
        <p className="absolute w-[595px] h-[502px] top-[363px] left-[866px] gap-0 font-['Josefin_Sans'] text-[20px] font-normal leading-[34.1px] text-left">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          <br />
          accusantium doloremque laudantium, totam rem aperiam, eaque
          <br />
          ipsa quae ab illo inventore veritatis et quasi architecto beatae
          <br />
          vitae dicta sunt explicabo. <br />
          <br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          <br />
          odit aut fugit, sed quia consequuntur magni dolores <br />
          <br />
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          <br />
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          <br />
          velit, sed quia non numquam eius modi tempora incidunt ut
          <br />
          labore et dolore magnam aliquam quaerat voluptatem. <br />
          <br />
          Ut enim ad minima veniam, quis nostrum exercitationem ullam
          <br />
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi <br />
          consequatur? Quis autem vel eum iure reprehenderit qui in ea
          <br />
          voluptate velit esse quam nihil molestiae consequatur, vel illum
          <br />
          qui dolorem eum fugiat quo voluptas nulla pariatur.
        </p>
      </div>
    </PageContent>
  );
}
export default Profile;