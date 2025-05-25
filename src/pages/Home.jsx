import BackgroundImage from '../components/BackgroundImage.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import BodyLogo from '../components/BodyLogo.jsx';
import { Container } from 'postcss';
import "@blueprintjs/core/lib/css/blueprint.css"; 
import "../../src/index.css";
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

export default function Home() {
  const [home__h1__article, home__h1__articleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [home__h1__container, home__h1__containerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [home__h1, home__h1InView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [home__locationHours, home__locationHoursInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [home__location, home__locationInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <main>
      <Helmet>
        <title>Luxury Fine Dining Experience | Fagito </title>
        <meta name="description" content="Indulge in an exquisite fine dining experience at Fagito. A fancy restaurant where gourmet flavors meet sophistication. Reserve your table today" />
        <meta property="og:title" content="Fagito | Luxury Fine Dining" />
        <meta property="og:image" content="/images/pancakes.avif" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-cover bg-no-repeat h-screen relative flex justify-center items-center">
        <BackgroundImage />
        <NavBar/>
         <button className=" max-sm:start-50 max-md:mx-auto max-md:flex max-md:start-60
        bg-indigo-800 rounded-[1.5rem] z-10 my-auto! mx-auto! text-white text-lg absolute  transform -translate-x-1/2 -translate-y-1/2 font-semibold px-8 py-4 hover:bg-indigo-800 transition-colors duration-300">
           <Link 
                  to="/reservations" 
                  className="text-white! transition-colors hover:bg-indigo-800 hover:scale-y-150 hover:w-[120%] hover:p-2 hover:rounded-2xl hover:text-3xl"
                >
                  Book A Table
          </Link>
        </button>
       
        <BodyLogo/>
      </section>
      {/* Pancakes Section*/}
      <section ref={home__h1__article} className="
      max-sm:flex max-sm:flex-col
      max-md:flex max-md:flex-col
      bg-cover bg-fixed bg-no-repeat h-[80vh] relative bg-[url('/images/pancakes.avif')] flex items-center justify-center px-10
      ">
        <div className="absolute inset-0 bg-[#1a1919] opacity-70"></div>
  
        <article className="relative z-10 flex flex-row w-full max-w-6xl gap-x-16 max-sm:flex max-sm:flex-col max-md:flex max-md:flex-col">
          <div id={home__h1__containerInView?`home__h1__container`:""} ref={home__h1__container} className="w-1/2 flex items-center max-sm:w-full max-sm:mb-8 max-md:w-full max-md:mb-8" style={{ backgroundColor: "rgba(70, 55, 20, 0.69)" }}>
            <h1 id={home__h1InView?`home__h1`:""} ref={home__h1} className=" leading-snug p-6 max-sm:mt-0 max-sm:p-2">
              Treat your taste buds to a dining experience like no other.
            </h1>
          </div>
          
          <aside id={home__h1__articleInView?"home__h1__article":""} className="w-1/2 flex flex-col space-y-6 max-sm:w-full max-md:w-full">
            <p>
              At Fagito, we believe that dining is more than just a meal—it's an art form. Rooted in tradition yet inspired by innovation, our chefs craft dishes that awaken the senses and create lasting memories.
            </p>
            <p>
              From the finest ingredients to the impeccable presentation, every detail is designed to provide an unparalleled fine dining experience.
            </p>
            <p>
              Indulge in exquisite flavors, enjoy a warm and sophisticated ambiance, and let us take you on a gastronomic journey like no other.
            </p>
          </aside>
        </article>
        <BodyLogo/>
      </section> 
  
      
      {/* Background Pattern - Added lazy loading */}
      <div 
        className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: home__locationHoursInView ? "url('/images/lineart-fast-food-pattern.avif')" : "none",
          backgroundRepeat: "repeat",
          backgroundSize: "300px"
        }}
      />
      
      {/* Reviews Section - Completely unchanged from your original */}
      <section className="bg-cover bg-no-repeat min-h-screen relative pb-2 bg-[#111515] max-sm:pb-4"> 
        <BodyLogo />
        <h2 className="font-bold text-center p-3 pb-9 
        max-sm:pb-12 max-sm:pt-1">Customer Reviews</h2>
      
        <blockquote className="relative bp4-blockquote text-3xl w-3/4 mx-auto p-4 bg-[#463714] rounded-xl mb-3 leading-tight shadow-lg 
        max-sm:text-sm max-sm:w-[95%] max-sm:p-2 max-sm:pb-2
        max-md:text-xl">
          <p className="text-center relative 
          max-sm:text-xm! max-sm:mb-2 max-sm:p-1">
            <span className='text-8xl absolute left-0 top-0 text-indigo-800! 
            max-sm:text-xm max-sm:pt-0
            max-md:text-6xl
            max-lg:text-7xl
            '>&#x275D;</span>
            <span className="italic text-white text-3xl 
            max-sm:text-xl max-sm:ml-12
            max-md:ml-10 max-md:text-2xl
            max-lg:ml-15 max-lg:text-4xl 
            ">A true masterpiece in fine dining!</span>
            <span className="italic
           max-sm:italic max-sm:pb-0 max-sm:mb-0 text-[#d4af37]!"> – Gourmet Insider Magazine</span>
          </p>
          Every dish at Fagito tells a story of precision, passion, and pure culinary artistry. 
          The flavors are perfectly balanced, leaving an unforgettable impression. 
          A must-visit for any true food lover!
        </blockquote>
        
        <blockquote className="relative bp4-blockquote text-3xl w-3/4 mx-auto p-4 bg-[#463714] rounded-xl mb-3 leading-tight shadow-lg 
        max-sm:text-sm max-sm:w-[95%] max-sm:p-2 max-sm:pb-2 max-md:text-xl">
          <p className="text-center relative
            max-sm:text-xm! max-sm:mb-2 max-sm:p-1">
            <span className='text-8xl absolute left-0 top-0 mb-5 text-indigo-800! 
            max-sm:text-xm max-sm:pt-0
            max-md:text-6xl
            max-lg:text-7xl

            '>&#x275D;</span>
            <span className="italic text-white text-3xl
            max-sm:text-xl max-sm:ml-12
            max-md:ml-10 max-md:text-2xl
            max-lg:ml-15 max-lg:text-4xl 
            ">An extraordinary blend of tradition and innovation</span> 
            <span className="italic
            max-sm:italic max-sm:pb-0 max-sm:mb-0 text-[#d4af37]!"> – The Culinary Critic</span>
          </p>
          Few restaurants balance classic techniques with innovation—Fagito does exactly that. 
          The ambiance, service, and food make for an experience worth savoring.
        </blockquote>
        
        <blockquote className="relative bp4-blockquote text-3xl w-3/4 mx-auto p-4 bg-[#463714] rounded-xl mb-3 leading-tight shadow-lg max-sm:text-sm max-sm:w-[95%] max-sm:p-2 max-sm:pb-2 max-md:text-xl">
          <p className="text-center relative max-sm:text-sm max-sm:mb-2 max-sm:p-1">
            <span className='text-8xl absolute left-0 top-0 text-indigo-800! 
              max-sm:text-xm max-sm:pt-0
              max-md:text-6xl
              max-lg:text-7xl
            '>&#x275D;</span>
            <span className="italic text-white text-3xl
              max-sm:text-xl max-sm:ml-12
              max-md:ml-10 max-md:text-2xl
              max-lg:ml-15 max-lg:text-4xl
            ">Every bite is an experience!</span> 
            <span className="italic max-sm:italic max-sm:pb-0 max-sm:mb-0 text-[#d4af37]!"> 
              – Michelin Guide Reviewer
            </span>
          </p>
          From the moment you step in, you know you're in for something special. 
          Attention to detail, fresh ingredients, and flawless execution set Fagito apart.
        </blockquote>
        
        <blockquote className="relative bp4-blockquote text-3xl w-3/4 mx-auto p-4 bg-[#463714] rounded-xl mb-3 leading-tight shadow-lg max-sm:text-sm max-sm:w-[95%] max-sm:p-2 max-sm:pb-2 max-md:text-xl">
          <p className="text-center relative 
          max-sm:text-xm! max-sm:mb-2 max-sm:p-1">
            <span className='text-8xl absolute left-0 top-0 text-indigo-800! 
            max-sm:text-xm max-sm:pt-0
            max-md:text-6xl
            max-lg:text-7xl
            '>&#x275D;</span>
            <span className="italic text-white text-3xl
            max-sm:text-xl max-sm:ml-12
            max-md:ml-10  max-md:text-2xl
            max-md:lg-15  max-lg:text-4xl max-lg:ml-15
            ">The pinnacle of fine dining.</span> 
            <span className="italic
            max-sm:italic
            max-sm:pb-0 max-sm:mb-0 text-[#d4af37]!
            
            "> – Food & Wine Journal</span>
          </p>
          With a menu celebrating both heritage and creativity, 
          Fagito takes guests on a journey of culinary excellence.
        </blockquote>
      </section>
      

      {/* <section 
        ref={home__locationHours}
        className="bg-cover bg-fixed bg-no-repeat h-screen relative flex flex-col items-center justify-center max-sm:h-auto max-sm:py-6
        max-md:max-h-[80vh] max-md:py-8
        "
        style={{ backgroundImage: home__locationHoursInView ? "url(/images/lounge.avif)" : "none" }}
      >
        <h3 className="font-bold text-white mb-15 max-sm:mb-3 max-md:p-1">Location and Hours</h3>
        
        <div className="flex space-x-20 justify-center w-3/4 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4
        max-md:flex max-md:flex-col max-md:space-x-0 max-md:space-y-8 max-md:w-5/6
        ">
          <article id={home__locationHoursInView?"home__hours":""} className="text-lg w-1/3 h-auto border-4 border-[#584910] bg-[#9a8228] p-4 text-center rounded-3xl shadow-lg max-sm:w-full max-sm:h-auto max-sm:p-3
             max-md:w-full max-md:p-5

          ">
            <h4 className="text-center mb-4 max-sm:mb-2 max-sm:max-h-1/3!
            max-md:mb-2 max-md:max-h-1/3!
            ">Hours</h4>
            <div className="items-center">
              <h6 className="font-semibold mb-1">Restaurant</h6>
              <p>Sun-Thurs 10AM - 9:30PM</p>
              <p>Fri-Sat 10AM - 11PM</p>
            </div>
            <div className="items-center mb-2">
              <h6 className="font-semibold">Breakfast</h6>
              <p>Everyday 10AM - 12:30PM</p>
            </div>
            <div className="items-center mb-2">
              <h6 className="font-semibold">Brunch</h6>
              <p>Everyday 12:30PM - 4PM</p>
            </div>
            <div className="items-center mb-2">
              <h6 className="font-semibold">Dinner</h6>
              <p>Everyday 4PM - Closing Time</p>
            </div>
          </article>
          
          <aside id={home__locationHoursInView?"home__location":""} className="bg-[#584910] rounded-3xl items-center flex flex-col p-4 
          max-sm:w-full max-sm:h-auto max-sm:p-3 max-sm:items-center max-sm:flex max-sm:flex-col">
            <h4 className="text-center mt-4 max-sm:mt-2">Location</h4>
            <p className="text-center max-sm:pt-1 text-xs!">123 Fine Dining Str, Sandton, South Africa</p>
            <figure className="w-1/2 rounded-2xl
            max-sm:w-1/2 max-sm:m-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.739864176183!2d28.052212910382497!3d-26.107409077040938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95732d696538a9%3A0x7ad76c28e647f6f4!2sNelson%20Mandela%20Square!5e0!3m2!1sen!2sza!4v1743577449628!5m2!1sen!2sza" 
                width="200" 
                height="200" 
                style={{border:0}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"/> 
            </figure>
            <button className="text-white font-bold bg-[#363861] border-3 rounded-2xl border-[#003cc1] p-2 mt-3 text-sm mx-auto">
              Get Directions
            </button>
          </aside>
        </div>
        
        <BodyLogo />
      </section> */}
  <section 
    ref={home__locationHours}
    className="bg-cover bg-fixed bg-no-repeat min-h-screen relative flex flex-col items-center justify-center py-7 bg-[url(/images/lounge.avif)]
    max-sm:h-auto max-sm:py-6
    max-md:min-h-[80vh] max-md:py-8
    max-lg:min-h-[100vh] max-lg:py-8
    "
    // style={{ backgroundImage: home__locationHoursInView ? "url(/images/lounge.avif)" : "none" }}
  >
    <h2 className="font-bold text-white mb-10 text-3xl 
      max-sm:mb-3 max-sm:text-2xl
      max-md:mb-6 max-md:text-2xl
      max-lg:mb-15
      ">
      Location and Hours
    </h2>
    
    <div className="flex space-x-20 justify-around  
      max-sm:flex-col max-sm:space-x-0 max-sm:space-y-6 max-sm:w-11/12
      max-md:flex-col max-md:space-x-0 max-md:space-y-8 max-md:w-5/6
      max-lg:flex-row max-lg:w-full max-lg:justify-around max-lg:px-3
      max-xl:flex-row max-xl:w-full max-xl:gap-12
    ">
      <article 
        id={home__locationHoursInView ? "home__hours" : ""} 
        className="text-lg w-1/2 border-4 border-[#584910] bg-[#9a8228] p-6 text-center rounded-3xl shadow-lg text-[#463714]
          max-sm:w-full max-sm:p-4
          max-md:w-full max-md:p-5
          max-lg:w-full max-lg:p-5
          "
      >
        <h3 className="text-center mb-6 text-xl font-bold
          max-sm:mb-3
          max-md:mb-4">Hours</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold">Restaurant</h4>
            <p>Sun-Thurs 10AM - 9:30PM</p>
            <p>Fri-Sat 10AM - 11PM</p>
          </div>
          <div>
            <h4 className="font-semibold">Breakfast</h4>
            <p>Everyday 10AM - 12:30PM</p>
          </div>
          <div>
            <h4 className="font-semibold">Brunch</h4>
            <p>Everyday 12:30PM - 4PM</p>
          </div>
          <div>
            <h4 className="font-semibold">Dinner</h4>
            <p>Everyday 4PM - Closing Time</p>
          </div>
        </div>
      </article>
      
      <aside 
        id={home__locationHoursInView ? "home__location" : ""} 
        className="bg-[#463714] rounded-3xl flex flex-col items-center p-6 w-1/2
          max-sm:w-full max-sm:p-4
          max-md:w-full max-md:p-5
          max-lg:w-full! 
          "
      >
        <h3 className="text-center mb-4 font-bold">Location</h3>
        <p className="text-center mb-6">123 Fine Dining Str, Sandton, South Africa</p>
        <figure className="w-full rounded-2xl mb-6">
          <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Nelson+Mandela+Square&destination_place_id=ChIJW6AIeXOHx44Rmg5VdJdX0k0" 
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.739864176183!2d28.052212910382497!3d-26.107409077040938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95732d696538a9%3A0x7ad76c28e647f6f4!2sNelson%20Mandela%20Square!5e0!3m2!1sen!2sza!4v1743577449628!5m2!1sen!2sza" 
                className="max-sm:w-2/3! mx-auto! h-[200px]"
                style={{border:0}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
        </a>
        </figure>
        <button 
            onClick={() => window.open("https://www.google.com/maps?q=Nelson+Mandela+Square&ftid=0x1e95732d696538a9:0x7ad76c28e647f6f4", "_blank")}
            className="text-white font-bold bg-indigo-800 rounded-2xl px-6 py-2 text-sm hover:bg-[#002a8a] transition-colors"
          >
            Get Directions
        </button>
      </aside>
    </div>
    
    <BodyLogo className="mt-10 max-md:mt-8" />
  </section>
</main>
  );
}