import React, { useState } from "react";
import NavBar from '../../src/components/NavBar.jsx';
import BodyLogo from '../../src/components/BodyLogo.jsx';
import { Helmet } from "react-helmet-async";


export default function Gallery(){
  const [isHovered,setIsHovered]= useState(false);
  
  return (
    <article className="flex relative">
        <Helmet>
            <title>Luxury Fine Dining Ambiance | Fagito Gallery </title>
            <meta name="description" content=" Step inside our fancy restaurant. Browse our gallery to see stunning interiors and the ultimate fine dining atmosphere" />
            <meta property="og:title" content="Fagito | Luxury Fine Dining" />
            <meta property="og:image" content="/images/pancakes.avif" />
        </Helmet>
        <NavBar/>
        <BodyLogo/>

        <section
         className="group bg-cover bg-no-repeat h-screen relative bg-[url('/images/conference-room.jpg')] w-[14.28%] hover:bg-cover hover:w-full" 
         style={{ backgroundPosition: "10% center" }}
        >
          <p className="max-sm:group-hover:text-xl! max-sm:group-hover:start-2.5 max-md:group-hover:text-2xl! max-md:group-hover:start-2.5 max-lg:group-hover:text-4xl! max-lg:group-hover:start-6 
          text-2xl font-bold absolute top-[40%] text-center transition-all duration-300 group-hover:text-[4rem]! group-hover:left-1/2">
            The Conference Room
          </p>
        </section>
        <section className="group bg-cover bg-no-repeat h-screen relative bg-[url('/images/the-bar.jpg')] w-[14.28%] hover:bg-cover hover:w-full">
            <p className="max-sm:group-hover:text-xl! max-sm:group-hover:start-2.5  max-md:group-hover:text-2xl! max-md:group-hover:start-35  max-lg:group-hover:text-4xl! max-lg:group-hover:start-6 
            text-2xl font-bold absolute top-[40%] text-center transition-all duration-300 group-hover:text-[4rem]! group-hover:left-1/2">The Bar</p>
        </section> 
        <section className="group bg-cover bg-no-repeat h-screen relative bg-[url('/images/dining-hall.jpg')] w-[14.28%] hover:bg-cover hover:w-full bg-center">
            <p className="max-sm:group-hover:text-xl! max-sm:group-hover:start-2.5 max-md:group-hover:text-2xl! max-md:group-hover:start-15 max-md:top-100  max-lg:group-hover:text-4xl! max-lg:group-hover:start-6 max-lg:top-100
            text-2xl font-bold absolute top-[40%] text-center transition-all duration-300 group-hover:text-[4rem]! group-hover:left-1/2">The Dining Hall</p>
        </section>
        <section className="group bg-cover bg-no-repeat h-screen relative bg-[url('/images/vip-room.jpg')] w-[14.28%] hover:bg-cover hover:w-full bg-center">
            <p className="max-sm:group-hover:text-xl! max-sm:group-hover:start-2.5 max-md:group-hover:text-2xl! max-md:group-hover:start-2.5  max-lg:group-hover:text-4xl! max-lg:group-hover:start-6 
            text-2xl font-bold absolute top-[40%] text-center transition-all duration-300 group-hover:text-[4rem]! group-hover:left-1/2">
                The VIP Room
            </p>
        </section>
       
        <section className="group bg-cover bg-no-repeat h-screen relative bg-[url('/images/vip-conference.jpg')] w-[14.28%] hover:bg-cover hover:w-full bg-bottom">
            <p className="max-sm:group-hover:text-xl! max-sm:group-hover:start-2.5 max-md:group-hover:text-2xl! max-md:group-hover:start-2.5 max-md:top-96 max-lg:group-hover:text-4xl! max-lg:group-hover:start-6 max-lg:group-hover:top-96
            text-2xl font-bold absolute top-[40%] text-center transition-all duration-300 group-hover:text-[4rem]! group-hover:left-1/2">
                The VIP Conference Room
            </p>
        </section>
    
        <section className="group bg-cover bg-no-repeat h-screen relative bg-[url('/images/our-chefs.jpg')] w-[14.28%] hover:bg-cover hover:w-full" style={{backgroundPosition:"right 10%"}}>
            <p className="max-sm:group-hover:text-xl! max-sm:group-hover:start-2.5 max-sm:group-hover:top-60 max-sm:group-hover:left-15 max-md:group-hover:text-2xl! max-md:group-hover:start-35 max-md:group-hover:top-90  max-lg:group-hover:text-4xl! max-lg:group-hover:start-6 
            text-2xl font-bold absolute top-[40%] text-center transition-all duration-300 group-hover:text-[4rem]! group-hover:top-130 group-hover:left-1/2">Our Chefs</p>
        </section> 
        <section className="group bg-cover bg-no-repeat h-screen relative bg-[url('/images/wine-cellar.jpg')] w-[14.28%] hover:bg-cover hover:w-full" style={{backgroundPosition:'right'}}>
            <p className="max-sm:group-hover:text-xl! max-sm:group-hover:start-2.5 max-md:group-hover:text-2xl! max-md:group-hover:start-2.5 max-lg:group-hover:text-4xl! max-lg:group-hover:start-6 
            text-2xl font-bold absolute top-[40%] text-center transition-all duration-300 group-hover:text-[4rem]! group-hover:left-1/2">The Wine Cellar</p>
        </section> 


    </article>
      
  )
}


