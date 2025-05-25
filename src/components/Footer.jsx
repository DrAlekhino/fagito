import React, { useEffect, useState } from "react";
import "../../src/index.css";
import "../../src/App.css";





export default function Footer() {
  const currentYear = new Date().getFullYear();
  return(
    <footer className="bg-gray-800 ">
      <section className="flex flex-row justify-around space-x-3">
        <figure className="my-5 max-md:w-1/4 max-sm:pt-10 max-md:my-auto 
        max-lg:w-1/4 max-lg:pt-6">
          <img src="public/images/Nav-logo.avif" 
          srcSet="/images/Nav-logo-sm.avif 649w,
          /images/Nav-logo-md.avif 800w,
          /images/Nav-logo-lg.avif 1000w"
  
          
          alt="Logo" />
        </figure>
        <article className="mt-12 max-sm:w-1/4 max-md:w-1/5 max-lg:w-1/3">
          <h5 className="font-bold mb-3.5">CONTACT US</h5>
          <p className="max-md:text-sm!">📞  012 345 6789 </p>
          <p className="max-md:text-sm!">📧  bookings@fagito.co.za</p>
          <p className="wrap max-md:text-sm!"> <span className="rotate-45 ">&#128205;</span>  123 Fine Dining Str,Sandton,S.A</p>


        </article>
        <article className="mt-12 max-md:w-1/5">
          <h5 className="font-bold mb-3.5">TRADING HOURS</h5>
          <p className="max-md:text-sm!">Sun-Thurs 10AM - 9:30PM</p>
          <p className="max-md:text-sm!">Fri-Sat 10AM - 11PM</p>
          
        </article>
        
        <article className="mt-12 max-md:w-1/5">
          <h5 className="font-bold mb-3.5">FOLLOW US</h5>
          <section className="flex max-sm:flex-col max-sm:items-center  max-sm:start-35 max-sm:gap-2">
            <figure>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook icon"><img src="images/icons-facebook.png.png" alt="facebook icon"  className="w-10 max-sm:w-5" /></a>
            </figure>
            <figure>
              <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" aria-label="x/twitter icon"><img src="images/icons-x-logo.png" alt="X icon" className="w-10 max-sm:w-5" /></a>
            </figure>
            <figure>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="instagram label"><img src="images/icons-instagram.png" alt="instagram-icon" className="w-10 max-sm:w-5" /></a>
            </figure>
          </section>
      
      
    
        </article>
      </section>
      <section className="flex  justify-center">Copyright &copy;{currentYear}.All Rights Reserved</section>
    </footer>
  )
  
}
