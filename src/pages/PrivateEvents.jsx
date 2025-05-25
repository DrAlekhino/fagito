
import NavBar from '../components/NavBar.jsx';
import BodyLogo from "../components/BodyLogo.jsx";
import { Helmet } from 'react-helmet-async';
import BookingsForm from '../components/BookingsForm.jsx'
import SittingPreference from '../components/SittingPreference.jsx';
import { useState } from "react";

export default function PrivateEvents() {
  const [showModal,setShowModal]=useState(false);
  const [showGeneral, setShowGeneral] = useState(true); 

  const handleBookTableClick = () => {
      setShowModal(true);
      setShowGeneral(false); // HIDE GENERAL OPTIONS ON BUTTON CLICK
      };


  return (
    <>
    {showModal&& (
      <main className="fixed inset-0 z-20 flex items-center justify-center scale-80">
        <div className="absolute inset-0 bg-[#1a1919] opacity-70"></div>
        <section className="absolute top-0 left-0 w-full  bg-black bg-opacity-30">
            <BookingsForm>
              <SittingPreference 
                showGeneral={false} 
              
              />
            </BookingsForm>
        </section>
        <button onClick={()=>setShowModal(false)} className='absolute top-45 right-10 text-7xl text-white z-50 cursor-pointer outline-none focus:outline-none active:outline-none select-none'>
         &#128473;
        </button>
      </main>)   
      }
    <section
      className="bg-no-repeat h-screen relative bg-[url('/images/private-event.jpg')] w-full bg-cover scale-75 "
      style={{backgroundPosition: 'left bottom 30%'}}
    >
      <Helmet>
            <title>Exclusive Private Dining & Events | Fagito</title>
            <meta name="description" content="Host an unforgettable private dining experience at our upscale fine dining restaurant. Perfect for elegant celebrations & corporate events." />
            <meta property="og:title" content="Fagito | Luxury Fine Dining" />
            <meta property="og:image" content="/images/pancakes.avif" />
      </Helmet>
     
      
      <NavBar/>
      <BodyLogo/>
     
      <article id="private__booking" className="bg-[#584910] rounded-2xl p-3
      max-sm:w-[80%] max-sm:absolute max-sm:top-30 max-sm:left-8
      max-md:w-[80%] max-md:absolute max-md:top-40 max-md:left-8
      max-lg:w-[70%] max-lg:absolute max-lg:top-40 max-lg:left-8
      w-[40%] absolute top-45 left-8
      " >
        <h3 className="text-center ">Private Events</h3>
        <p className='max-sm:text-xs! max-md:text-sm! min-lg:text-[1.2rem]!'>
        Fagito offers a selection of private and semi-private event spaces, ideal for both personal celebrations and professional gatherings.
        </p>
        <p className='max-sm:text-xs! max-md:text-sm! min-lg:text-[1.2rem]!'>
        Each Small Private Dining Room accommodates up to 16 guests and includes a projector screen.
        </p>
        <p className='max-sm:text-xs! max-md:text-sm! min-lg:text-[1.2rem]!'>
          Our Executive Private Dining Room seats up to 34 guests, providing an elegant setting for exclusive events.
        </p>
        <p className='max-sm:text-xs! max-md:text-sm! min-lg:text-[1.2rem]!'>
          The Bar and Lounge are perfect for cocktail receptions, accommodating up to 75 guests.
        </p>
        <p className='max-sm:text-xs! max-md:text-sm! min-lg:text-[1.2rem]!'>
          For larger parties, we offer full or partial restaurant buyouts to create a truly personalized experience
        </p>
        <p className='max-sm:text-xs! max-md:text-sm! min-lg:text-[1.2rem]!'>
           To start planning your event or to learn more about our available spaces, please contact our Events Coordinator at <span className="font-bold">bookings@fagito.co.za</span>, or simply use the "Book a Table" button below to reserve your spot.
        </p>
        <button onClick={()=>setShowModal(true)} className="
        max-sm:w-1/3 max-sm:mx-auto max-sm:rounded-xl max-sm:py-1 
        max-md:w-1/3 max-md:mx-auto
        max-lg:w-1/3 max-lg:mx-auto
        min-xl:w-1/3 min-xl:mx-auto min-xl:my-auto
        
        bg-indigo-800  rounded-xl z-10 flex justify-center  hover:bg-[#002a8a] transition-colors duration-300 ">
            <p className='max-sm:mb-0'>Book A Table</p>
        </button>

      </article>
    </section>
    </>
  );
}
