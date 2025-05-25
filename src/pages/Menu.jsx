import { useState, useRef } from "react";
import NavBar from "../../src/components/NavBar";
import BackgroundImage from "../../src/components/BackgroundImage";
import { Helmet } from "react-helmet-async";
import BodyLogo from "../../src/components/BodyLogo";
import { useInView } from 'react-intersection-observer';

export default function Menu() {
    const [activeKey, setActiveKey] = useState(1);
    const [activeTab, setActiveTab] = useState(1);
    const accordionRefs = useRef([]);
    const [buttonsVisible, setButtonsVisible] = useInView({ threshold: 0.3, triggerOnce: true });

    const menuItems = [
        { key: 1, label: "Beverages Menu", image: null },
        { key: 2, label: "Breakfast Menu", image: "/images/breakfast-menu.png" },
        { key: 3, label: "Brunch Menu", image: "/images/brunch-menu.png" },
        { key: 4, label: "Desserts Menu", image: "/images/dessert-menu.png" },
        { key: 5, label: "Dinner Menu", image: "/images/dinner-menu.png" },
        { key: 6, label: "Starters Menu", image: "/images/starters-menu.png" },
        { key: 7, label: "Wine Paired Dinner Menu", image: "/images/wine-dinner.png" },
    ];

    const handleSelection = (key) => {
        setActiveTab(key);
        setActiveKey(key);
        if (accordionRefs.current[key]) {
            accordionRefs.current[key].scrollIntoView({ behavior: 'instant' });
        }
    };

    return (
      <main className="flex flex-col bg-[#111515] relative scale-90">
        <Helmet>
            <title>Gourmet Fine Dining Menu | Fagito </title>
            <meta name="description" content="Explore our fine dining menu featuring world-class cuisine. Experience elegant dishes at our fancy restaurant. See our chef’s creations today!" />
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
        
        <section className="bg-[url('/images/menu-hero.jpg')] bg-cover top-0 left-0 w-full min-h-screen relative">
          <NavBar />
          <BodyLogo/>
          <div id="menu__h1__section" className="w-1/2 h-full bg-black flex justify-center opacity-60 absolute start-[25%] 
             max-sm:w-2/3 max-sm:start-[20%]
          ">
          <h1 id="menu__h1" className="flex flex-col justify-center text-center text-[#ecdca7]!
          max-sm:top-35 max-sm:absolute
          max-md:top-30 max-md:absolute

          ">
            <span >Our Exquisite </span>
            <span>Fine Dining</span>
            <span>Menu</span>
            
         </h1>
          </div>
        </section>
        
  
        <section  className="flex flex-wrap justify-center gap-3 mb-10 absolute top-155
         start-25 shadow-2xl! bg-transparent
        max-sm:top-75 max-sm:start-7
        max-md:top-80 max-md:start-4
        max-lg:top-135 max-lg:start-5
        ">
            {menuItems.map(({ key, label }, index) => (
  <button
    key={key}
    id={buttonsVisible ? `animated-button-${index}` : ""}
    onClick={() => handleSelection(key)}
    className={`text-xl px-6 py-2 font-bold rounded-2xl transition-colors w-1/9
      max-sm:w-1/4 max-sm:font-normal max-sm:text-sm max-sm:py-3
      max-md:w-1/5
      max-lg:w-1/4
      ${activeTab === key ? 
        'bg-indigo-800 text-[#FFD700] border-2 border-indigo-800' : 
        'bg-[#463714] text-black hover:bg-indigo-800'}`}
  >
    {label}
  </button>
))}

            {/* {menuItems.map(({ key, label }) => (
                   <button
                       key={key}
                   onClick={() => handleSelection(key)}
                     className={`text-xl px-6 py-2 font-bold rounded-2xl transition-colors w-1/9
                        max-sm:w-1/4 max-sm:font-normal max-sm:text-xs
                            ${activeTab === key ? 
                              'bg-[#363861] text-[#FFD700] border-2 border-[#003cc1]' : 
                              'bg-[#584910] text-black hover:bg-[#363861]'}`}
                    >
                        {label}
                    </button>
               ))} */}
        </section>
        <div>
            <BodyLogo/>
           <section className="max-w-4xl mx-auto mt-20 w-1/2 min-h-screen relative">
               
               {menuItems.map(({ key, label, image }) => (
                   <div 
                       key={key}
                      ref={el => accordionRefs.current[key] = el}
                       className="mb-4 overflow-hidden rounded-lg shadow-lg"
                   >
                       <button 
                           onClick={() => {
                               setActiveKey(activeKey === key ? null : key);
                               if (activeKey !== key) {
                                   accordionRefs.current[key].scrollIntoView({ behavior: 'instant' });
                               }
                           }}
                           className={`w-full text-left flex justify-between items-center
                               bg-[#463714] text-[#FFD700] p-8  text-xl font-bold
                               transition-colors duration-200 hover:bg-indigo-800 bg-opacity-100`}
                       >
                           <span>{label}</span>
                           <span className={`transform transition-transform ${activeKey === key ? 'rotate-180' : ''}`}>
                               ⌄
                           </span>
                       </button>
                        
                       <div
                       className={`bg-white transition-all duration-300 overflow-hidden bg-opacity-100 
                           ${activeKey === key ? 'max-h-[2000px]' : 'max-h-0'}`}
                       >
                           {image && (
                               <div className="p-0 shadow-2xl">
                                   <img 
                                       src={image} 
                                       alt={label} 
                                       className="w-full h-auto object-contain "
                                   />
                               </div>
                           )}
                       </div>
                   </div>
               ))}
           </section>
        </div>
      </main>
    );
}