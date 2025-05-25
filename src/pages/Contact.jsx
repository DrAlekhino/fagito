import React, { useState } from "react";
import NavBar from '../../src/components/NavBar.jsx';
import BodyLogo from '../../src/components/BodyLogo.jsx';
import { Helmet } from "react-helmet-async";

export default function Contact () {
  return ( 
    <main className="min-h-screen bg-[#111515] p-8 flex flex-col items-center">
       <Helmet>
          <title>Contact Fagito | Fine Dining Reservations & Inquiries</title>
          <meta name="description" content="Have questions or want to book a table? Contact Fagito,for your go-to fine dining and fancy restaurant experience." />
          <meta property="og:title" content="Fagito | Luxury Fine Dining" />
          <meta property="og:image" content="/images/pancakes.avif" />
       </Helmet>
       {/* Background Pattern */}
       <div 
          className="fixed inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url('/images/lineart-fast-food-pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "300px",
          
          }}
        />
      <NavBar/>
      
      <h1 className="mt-28 text-[#ecdca7]!">Contact Us</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mt-8">
        <article id="contact__writeToUsTile" className="flex flex-col justify-between bg-transparent border-[#795914] border-2 text-white p-6 rounded-2xl">
          
          <aside id="contact__writeToUsForm" className="flex flex-col 
          max-md:flex-col max-md:items-center max-md:justify-between mb-6 
          min-sm:flex min-sm:flex-row">
            <div className="w-1/2 max-md:w-full
            max-xl:pt-25
            max-lg:pt-25

            ">
              <h1 id="contact__writeToUsH1" className="text-3xl font-bold mb-4 md:mb-0 text-[#ecdca7]!">Write to us</h1>
              <p id="contact__writeToUsP">We would like to hear from you</p>
            </div>
            <form className="flex! flex-col gap-4 mt-12 max-md:w-full">
              <input type="text" placeholder="Name & Surname" className="bg-[#463714] p-3 rounded outline-none border-2 border-[#795914]" />
              <input type="email" placeholder="Email Address" className="bg-[#463714] border-2 border-[#795914] p-3 rounded outline-none" />
              <input type="text" placeholder="Cellphone" className="bg-[#463714] border-2 border-[#795914] p-3 rounded outline-none" />
              <textarea placeholder="Type your message here..." className="bg-[#463714] border-2 border-[#795914] p-3 rounded h-24 outline-none"></textarea>
              <button type="submit" className="bg-indigo-800 p-3 rounded-xl font-bold">Submit</button>
            </form>
          </aside>
        </article>       
        <section class="flex flex-col gap-4 justify-between h-full">
          <article id="contact__locationTile" class="bg-[#463714] text-white p-4 rounded-2xl flex flex-row items-center gap-20
          max-sm:gap-2
          min-sm:gap-2
          max-md:gap-2
          ">
            <aside>
              <h3 class="font-bold mb-2 text-start text-[#c4a350]!">Location</h3>
              <p class="text-start mb-2">123 Fine Dining Str, Sandton, South Africa</p>
              <div className="space-x-2.5">
              <button 
                onClick={() => window.open("https://www.google.com/maps?q=Nelson+Mandela+Square&ftid=0x1e95732d696538a9:0x7ad76c28e647f6f4", "_blank")}
                className="text-white font-bold bg-indigo-800 rounded-2xl px-6 py-2 text-sm hover:bg-[#002a8a] transition-colors"
              >Get Directions
              </button>
                <button 
                onClick={() => {
                  if (window.innerWidth >= 1024) {
                    alert("Please call us at: +27 12 345 6789");
                  } else {
                    window.location.href = "tel:+27123456789";
                  }
                }}
                class="border-indigo-800 border-2 p-2 rounded-xl text-sm w-1/3 font-bold"> Call Us</button>
              </div>
            </aside>
            <figure className="w-1/2 rounded-2xl max-sm:w-1/">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.739864176183!2d28.052212910382497!3d-26.107409077040938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95732d696538a9%3A0x7ad76c28e647f6f4!2sNelson%20Mandela%20Square!5e0!3m2!1sen!2sza!4v1743577449628!5m2!1sen!2sza" 
                width="200" 
                height="200" 
                style={{border:0}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"/> 
                {/* </iframe> */}
            </figure>
          </article>

          {/* <!-- Business Hours --> */}
          <article id="contact__businessHoursTile" class="bg-[#463714] text-white p-4 rounded-2xl text-center">
            <h3 class="font-bold mb-2 text-[#c4a350]!">Business Hours</h3>
            <p>Sun-Thurs 10AM-9:30PM</p>
            <p>Fri-Sun 10AM-11PM</p>
          </article>

          {/* <!-- Social Icons --> */}
          <article id="contact__followUsTile" class="bg-[#463714] text-white p-4 rounded-2xl ">
            <h3 class="text-center font-bold mb-2 text-[#c4a350]!">Follow Us</h3>
            <div class="flex justify-around items-center">
            <figure>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook icon"><img src="images/icons-facebook.png.png" alt="facebook icon"  className="w-10 max-sm:w-5" /></a>
            </figure>
            <figure>
              <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" aria-label="x/twitter icon"><img src="images/icons-x-logo.png" alt="X icon" className="w-10 max-sm:w-5" /></a>
            </figure>
            <figure>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="instagram label"><img src="images/icons-instagram.png" alt="instagram-icon" className="w-10 max-sm:w-5" /></a>
            </figure>
           
   
            </div>
          </article>
        </section>
      </section>
    </main> 
   
  )
  
}