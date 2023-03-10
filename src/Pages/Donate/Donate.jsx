import React from "react";
 import img from '../../assets/Donate-part-voluteer/donate.jpeg'
import "./donate.css";

const Donate = () => {

   return (
    <section className="max-w-screen-xl w-[90%] mx-auto my-16">
    <h4 className="md:text-4xl text-2xl text-center font-serif font-semibold mb-3">
       Donate us
    </h4>
    <div className="grid md:grid-cols-2 gap-10 place-content-center">
       <div className="md:w-[90%] mx-auto grid place-content-center mt-5">
          <img src={img} alt="" className="rounded-lg w-full bg-cover" />
       </div>
       <div className="grid place-content-center md:w-[90%] leading-3 ">
          <p className=" text-lg font-serif w-[90%]">
         <main>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name..."/>
        
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter your email..."/>
        <a  href="mailto:thechange2k19@gmail.com"  className="btn btn-warning">Donate</a> 
      </form>
    </main>
          </p>
       </div>
    </div>
 </section>
   );
};

export default Donate;
