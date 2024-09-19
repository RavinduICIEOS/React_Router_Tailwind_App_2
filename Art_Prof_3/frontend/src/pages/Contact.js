import React from 'react';
import PageContent from '../components/PageContent';
import meadia from '../assets/Group 1823b.png';
import img from '../assets/Group 427320664.png';

function Contact() {
  return (
    <PageContent title="">
      <div>
     
        <div className="w-[425px] h-[188px] relative top-[421px] left-[150px] text-left font-josefin">
          <h1 className="text-left ">
            <span className="text-[75px] leading-[1.1]">Get in touch</span> <br />
            <span className="text-[75px] text-skyblue leading-[1.1]">with me</span>
          </h1>
          <br />
          <p className="text-[30px] text-skyblue">JamesAnderson@gmail.com</p>
          <p>
            <img className="w-[140px] h-[36px] top-[714px] left-[767px]"  src={meadia} alt="A restaurant"  />
          </p>
        </div>

        <div >
          <p >
            <img src={img} alt="A restaurant" className=" h-[819px]  absolute w-[833px] top-[176px] left-[767px]" />
          </p>
        </div>
      </div>
    </PageContent>
  );
}

export default Contact;