import React, { useEffect, useState } from "react";
import "../../src/index.css";
import "../../src/App.css";
import NavBar from '../../src/components/NavBar.jsx';
import BookingsForm from "../../src/components/BookingsForm.jsx";
import BodyLogo from '../../src/components/BodyLogo.jsx';
import { Helmet } from "react-helmet-async";
import SittingPreference from "../../src/components/SittingPreference.jsx";

export default function Bookings () {
  const [showGeneral, setShowGeneral] = useState(true); 
    return(
      <section  className="relative bg-[url('/images/lounge-flop.avif')] min-h-screen bg-cover bg-center flex flex-col items-center justify-start overflow-hidden max-md:h-screen">
         <Helmet>
          <link rel="preload" href="/images/hero-image.avif" as="image" fetchpriority="high"/>
          <title>Book a Fine Dining Experience | Fagito Reservations</title>
          <meta name="description" content="Reserve your table for a luxury fine dining experience at Fagito. Secure your spot at the top fancy restaurant today!" />
          <meta property="og:title" content="Fagito | Luxury Fine Dining" />
          <meta property="og:image" content="/images/pancakes.avif" />
         </Helmet>
         <div 
          className="fixed inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url('/images/lineart-fast-food-pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "300px"
          }}
        />
      <NavBar/>
      <h1 className="mt-45 text-center font-bold  
      max-sm:mt-30 
      max-md:mb-3 max-md:p-3 max-md:mt-25
      max-lg:mt-30 " >Book A Table</h1>  
      <div className="-mt-20">
        <BookingsForm/>
      </div>
    
    
      </section>
    )
    
  }