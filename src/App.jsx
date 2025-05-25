import React, { useEffect, useState,lazy,Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Accordion, ButtonGroup, Button, Divider } from "rsuite";
import { Link } from "react-router-dom";
import './index.css';
import './App.css';
import Home from "./pages/Home.jsx";
// import NavBar from "./components/NavBar.jsx";npm install react-helmet-async
// import Footer from "./components/Footer.jsx";
import BodyLogo from "./components/BodyLogo.jsx";
import BackgroundImage from "./components/BackgroundImage.jsx";

const NavBar = lazy(() => import("./components/NavBar.jsx"));
const Menu = lazy(() => import("./pages/Menu.jsx"));
const PrivateEvents = lazy(() => import("./pages/PrivateEvents.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const OurStory = lazy(() => import("./pages/OurStory.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Bookings = lazy(() => import("./pages/Bookings.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

// import Menu  from "../public/pages/Menu.jsx"
// import PrivateEvents from "../public/pages/PrivateEvents.jsx"
// import Gallery from "../public/pages/Gallery.jsx";
// import OurStory from "../public/pages/OurStory.jsx";
// import Contact from "../public/pages/Contact.jsx";
// import Bookings from "../public/pages/Bookings.jsx";
// import Footer from "./components/Footer.jsx";




function PrivateEventsClick() {
  return(
     <div className='inset-0 absolute top-0 left-0 bg-black opacity-40 bg-cover z-40'>
            <BookingsForm/>
            alert("Hello")
    
    </div>
  )
    
}

function App() {
 
  return (
    // <Router>
    //   {/* <NavBar /> */}
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <Route path="/menu" element={<Menu />} />
    //       <Route path="/private-events" element={<PrivateEvents />} />
    //       <Route path="/gallery" element={<Gallery />} />
    //       <Route path="/our-story" element={<OurStory />} />
    //       <Route path="/contact" element={<Contact/>} />
    //       <Route path="/reservations" element={<Bookings/>} />
    //     </Suspense>

    //   </Routes>
    //   <Footer/>
    // </Router>

  //    <Router>
  //    <NavBar />
  //    <Routes>
  //      <Route path="/" element={<Home />} />
  //      <Suspense fallback={<div>Loading...</div>}>
  //        <Route path="/menu" element={<Menu />} />
  //        <Route path="/private-events" element={<PrivateEvents />} />
  //        <Route path="/gallery" element={<Gallery />} />
  //        <Route path="/our-story" element={<OurStory />} />
  //        <Route path="/contact" element={<Contact />} />
  //        <Route path="/reservations" element={<Bookings />} />
  //      </Suspense>
  //    </Routes>
  //    <Footer />
  //  </Router>
  <Router>
      <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/private-events" element={<PrivateEvents />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservations" element={<Bookings />} />
          <Route path="/events" element={<PrivateEventsClick />} />
      </Routes>
        </Suspense>
      <Footer />
    </Router>
  );
}

export default App;


