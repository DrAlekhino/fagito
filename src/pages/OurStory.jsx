import React, { useState } from "react";
import NavBar from '../../src/components/NavBar.jsx';
import BodyLogo from '../../src/components/BodyLogo.jsx';
import { Helmet } from "react-helmet-async";

export default function OurStory() {
    return(
      
      <main className="bg-[#111515]  pt-20 scale-75">
        
         <Helmet>
            <title>The Story Behind Fagito – Fine Dining Excellence</title>
            <meta name="description" content=" Learn the rich history of Fagito. Our passion for fine dining and gourmet cuisine makes us the top fancy restaurant in town.

" />
            <meta property="og:title" content="Fagito | Luxury Fine Dining" />
            <meta property="og:image" content="/images/pancakes.avif" />
         </Helmet>
          {/* Background Pattern */}
         <div 
          className="fixed inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url('/images/lineart-fast-food-pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "300px"
          }}
        />
        <section className=" max-sm:h-100vh">
        
          <NavBar />
          <h1 className="text-center font-bold mt-22 max-sm:mt-12 text-[#ecdca7]!">Our Story</h1>
    
          <section  id="ourStory__storyImage" className="max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col
          flex justify-center gap-10 p-9 mt-1 text-start
          
              ">
    
                  <BodyLogo/>
                
                <img src="./images/Untitled.png" alt="food plate" width={600} className=" W-2/3 h-1/3"/>
                <article id="ourStory__storyArticle" className="max-sm:w-[90%] max-sm:pt-0  pt-9 w-1/2 my-7">
                    <h2 className=" text-[#ecdca7]! max-sm:mb-2">
                      A Culinary Journey Like No Other
                    </h2>

                    <p className="mb-7 text-[#584910] max-sm:mt-3">
                      At Fagito, we believe that dining is more than just a meal—it’s an experience. 
                      Our journey began in 2010 during the FIFA World Cup in South Africa, where we 
                      started as a humble food stand outside the bustling stadiums of Gauteng. 
                      The overwhelming response from football fans and food lovers alike inspired us 
                      to take a bold step forward. 
                    </p>

                    <p className="text-[#584910]">
                      Rooted in excellence, innovation, and a deep respect for culinary traditions, 
                      Fagito is a celebration of flavor. Inspired by the rich tastes of African cuisine, 
                      we have curated a menu that seamlessly blends time-honored techniques with 
                      contemporary creativity, offering a truly unforgettable gastronomic adventure.
                    </p>
                </article>
          </section>
    
        </section>
        <section className="
          min-h- overflow-hidden 
        ">
          <div className="relative max-sm:flex max-sm:flex-col max-sm:w-full ">
          <BodyLogo/>
      
          <article className="max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col
          flex justify-center gap-10 p-9 mt-1 text-start bg-[#463714]">
            <aside  id="ourStory__chefArticle"className=" max-sm:w-full max-sm:mt-3 max-md:w-full max-md:mt-3 items-center
            w-1/2 mt-9 ">
                <h2 className="font-bold text-3xl pt-6 max-sm:pt-2 text-[#ecdca7]!">Meet the Chef</h2>
              <p><span className="text-2xl font-bold">Mathew Booth</span>— 
              <span className="italic">The Mastermind Behind the Flavors</span></p>
              <p>
              Mathew Booth is the heart and soul of our kitchen. Growing up on a farm in Bloemfontein, 
              he developed a deep appreciation for fresh, locally sourced ingredients. With 20 years of experience in fine dining 
              and a background working at the prestigious Radisson Hotel, he has honed his craft by collaborating with some of the world’s 
              most renowned chefs.
            </p>
            <p>
              In 2015, Mathew earned third place in the esteemed National Chef of the Year competition, one of the UK's most prestigious culinary contests. 
              Passionate about delivering an exquisite dining experience, Mathew sources only the finest ingredients and infuses every dish with artistry and expert craftsmanship.
            </p>
            <p className="italic text-xl">&#x275D; Cooking is not just about ingredients; it’s about creating emotions and lasting memories.&#x275E;  – 
              <span className="font-bold"> Mathew Booth</span>
            </p>
  
            </aside>
            <img  id="ourStory__chefImage"src="./images/Chef.jpg" alt="Our head chef" className=" rounded-3xl max-sm:w-2/3 max-sm:h-auto max-sm:max-h-[300px] max-sm:top-0 max-md:w-[50%] max-md:h-auto max-md:max-h-[300px] max-md:mx-auto
            min-xl:max-h-[500px]! max-xl:w-1/3 h-[500px] w-[500px] opacity-90 min-xl:top-15"/>
          </article>
          </div>
        </section> 
        <section className="pb-2
        ">
          
          <h2 className="text-center text-3xl font-bold pt-4
          "> Our Ingredients</h2>
          <article className="flex jus ga items-center m-6 max-sm:flex max-sm:flex-col 
          ">
            <section className="flex items-center justify-center max-w-screen-lg mx-auto p-15 gap-16 mb-6 max-sm:flex max-sm:flex-col max-sm:pt-4 max-md:flex max-md:flex-col ">
          {/* <img 
            id="ourStory__ingredientsImage"
            src="./images/our-ingredients.jpg" 
            alt="food plate" 
            className="rounded-3xl w-1/3 max-sm:w-full max-sm:h-1/2! max-sm:max-h-[300px] opacity-100 max-md:w-[90%] max-md:max-h-[19rem]"
          /> */}
  
          <article id="ourStory__ingredientsArticle" className="bg-[#463714] p-6 rounded-3xl w-full max-sm:w-full max-md:w-full z-50">
          <p>At Fagito, we take pride in using only the freshest, locally sourced, and ethically harvested ingredients. Our partnerships with sustainable farms and trusted suppliers ensure that every dish is crafted with integrity and care.</p>
            <ul className="pl-6"
            >
              <li className="list-disc"
              ><p>Farm-to-Table Excellence – We work closely with local farmers to bring you seasonal, organic produce at its peak freshness.</p></li>
              <li className="list-disc"
              ><p>Sustainable Seafood & Meats – We prioritize responsibly sourced seafood and humanely raised meats to support ethical practices.</p></li>
              <li className="list-disc"
              ><p>Zero-Waste Philosophy – Our kitchen is dedicated to minimizing waste, utilizing every part of an ingredient to reduce our environmental impact.</p></li>
            </ul>
            <p>Join us at Fagito and embark on a journey that celebrates heritage, innovation, and an unwavering passion for fine dining.</p>
          </article>
        </section>
          
          </article>
          <BodyLogo/>
        </section>
       </main>
  
    
   )
    
  }