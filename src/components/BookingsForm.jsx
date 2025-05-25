import React, { useEffect, useState } from "react";
import "../../src/index.css";
import "../../src/App.css";
import NavBar from '../../src/components/NavBar.jsx';
import BodyLogo from '../../src/components/BodyLogo.jsx';
import { Helmet } from "react-helmet-async";
import SittingPreference from "./SittingPreference.jsx";




 export default function BookingsForm ({children}) {
    var [currentDate,setCurrentDate]=useState("");
        var stringDate=currentDate.toString();
        var [currentTime,setCurrentTime]=useState("");
      
        //gets current date 
        function GetDate() {
          const today = new Date();
          const year = today.getFullYear();
          var month = (today.getMonth() + 1).toString().padStart(2, '0'); // Fix month format
          var day = today.getDate().toString().padStart(2, '0'); // Fix day format
          return (`${year}-${month}-${day}`)
        }
        function GetTime() {
          const today = new Date();
          const hours = today.getHours().toString().padStart(2, '0'); // Ensure two digits
          const minutes = today.getMinutes().toString().padStart(2, '0'); // Ensure two digits
          return `${hours}:${minutes}`;
        }
       
        useEffect(() => {
          // Set the initial date and time
          setCurrentDate(GetDate());
          setCurrentTime(GetTime()); // Call GetTime() to get the current time
      
          // Update the time every minute (60000 milliseconds)
          const interval = setInterval(() => {
            setCurrentTime(GetTime()); // Update the time every minute
          }, 60000);
      
          // Cleanup the interval on component unmount
          return () => clearInterval(interval);
        }, []);
      
    return(
          <form 
        id="reservations_form" 
        action="" 
        className="flex flex-col items-center w-[35%] start-16 absolute top-63
        justify-center p-6  mb-4 rounded-2xl gap-3 bg-[#463714] 
        max-sm:w-[80%] max-sm:m-auto max-sm:p-8 max-sm:mt-2 max-sm:mb-10
        max-md:w-[70%] max-md:mx-auto max-md:p-4 max-md:pt-5 max-md:mt-5 max-md:mb-8
        max-lg:w-[50%] max-lg:mx-auto max-lg:p-4 max-lg:pt-5 max-lg:mt-5 max-lg:mb-8
        
        "
      > 
      <h3 className="text-center font-bold text-md text-[#ecdca7]!">Reservations Details</h3>
      
      <div className="w-full">
        <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#c4a350]! mb-1">FULL NAME</label>
        <input 
          id="name" 
          type="text" 
          placeholder="Name & Surname" 
          className="w-full bg-transparent border-b-3 border-[#c4a350] input-form px-1 text-sm text-white placeholder-[#f5f0e6]"
        />
      </div>
      
      <div className="w-full">
        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#c4a350]! mb-1">EMAIL ADDRESS</label>
        <input 
          id="email" 
          type="text" 
          placeholder="Email Address" 
          className="w-full bg-transparent border-b-3 border-[#c4a350]  px-1 text-sm text-white placeholder-[#f5f0e6]"
        />
      </div>
      
      <div className="w-full">
        <label htmlFor="cellphone" className="block text-xs uppercase tracking-wider text-[#c4a350]! mb-1">CELLPHONE NUMBER</label>
        <input 
          type="text" 
          placeholder="Cellphone Number" 
          className="w-full bg-transparent border-b-3 border-[#c4a350]  px-1 text-sm text-white placeholder-[#f5f0e6]"
        />
      </div>
      
      <div className="w-full grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="date" className="block text-xs uppercase tracking-wider text-[#c4a350]! mb-1">BOOKING DATE</label>
          <input 
            id="date" 
            type="date" 
            value={currentDate} 
            min={stringDate} 
            className="w-full bg-transparent border-b-3 border-[#c4a350]  px-1 text-sm [&::-webkit-datetime-edit]:text-white [&::-webkit-calendar-picker-indicator]:invert"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-xs uppercase tracking-wider text-[#c4a350]! mb-1">BOOKING TIME</label>
          <input 
            id="time" 
            type="time" 
            value={currentTime} 
            className="w-full bg-transparent border-b-3 border-[#c4a350]  px-1 text-sm [&::-webkit-calendar-picker-indicator]:invert"
          />
        </div>
      </div>
      
      <div className="w-full grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="guests" className="block text-xs uppercase tracking-wider text-[#c4a350]! mb-1">GUESTS</label>
          <input 
            id="guests" 
            type="number" 
            placeholder="2" 
            min="1" 
            className="w-full bg-transparent border-b-3 border-[#c4a350] px-1 text-sm text-white placeholder-[#f5f0e6]"
          />
        </div>
        <div>
          <label htmlFor="preference" className="block text-xs uppercase tracking-wider text-[#c4a350]! font-medium mb-1 ">PREFERENCE</label>
          <select 
            id="preference" 
            className="w-full bg-transparent border-b-3 border-[#c4a350] px-1 text-sm"
          >
            {children || <SittingPreference showGeneral={true} />}
          
          </select>
        </div>
      </div>
      
      <div className="w-full">
        <label htmlFor="textarea" className="block text-xs uppercase tracking-wider text-[#c4a350]! mb-1">YOUR MESSAGE</label>
        <textarea 
          id="textarea" 
          name="bookingsMessage" 
          placeholder="Special requests,allergies,etc..." 
          className="w-full bg-transparent border-b-3 border-[#c4a350]  px-1 text-sm text-white placeholder-[#f5f0e6] h-16"
        ></textarea>
      </div>
      
      <button className=" 
      max-sm:w-1/3 max-sm:px-1 max-sm:pl-8 max-sm:mt-1.5 
      max-md:w-1/3 max-md:px-1 max-md:pl-10 max-md:mt-3.5 
      max-lg:pl-8 font-bold max-lg:w-1/2 max-lg:px-1 
      max-xl:justify-center

      text-white bg-indigo-800 border-2 border-[#003cc1] rounded-xl py-2 px-10 mt-3 w-1/3 mx-auto flex mb-3 hover:bg-[#002a8f] transition-colors">
        Book A Table
      </button>
          </form>
    )
    
  }