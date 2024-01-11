import './App.css';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BuildingGallery from './components/BuildingGallery';
import HeaderSec from './components/HeaderSec';
import LoremCard from './components/LoremCard';
import MakeConstruction from './components/MakeConstruction';
import MakeUnique from './components/MakeUnique';
import OtherServices from './components/OtherServices';
import OurServices from './components/OurServices';
import OurWorks from './components/OurWorks';
import Testimonials from './components/Testimonials';
import WorkGallery from './components/WorkGallery';
import InputSec from './components/InputSec';
import FooterSec from './components/FooterSec';
import BackToTop from "./assets/images/webp/backtop.png"
import Preloader from './components/Preloader';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  // =======================aos============================
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  // ========================back-to-top=======================
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // =======================preloader======================
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <>
          <div className='overflow-hidden'>
            <HeaderSec />
            <OurServices />
            <MakeUnique />
            <MakeConstruction />
            <OurWorks />
            <LoremCard />
            <OtherServices />
            <WorkGallery />
            <BuildingGallery />
            <Testimonials />
            <InputSec />
            <FooterSec />
            <div>
              <img src={BackToTop} alt="Arrow" className={`${backToTop ? "fixed right-[1%] bottom-[2%] z-30 !cursor-pointer md:w-[45px] w-[30px]" : "d-none"} bg-[#1a555e] rounded-[50%] updown_animation`} onClick={() => top()} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
