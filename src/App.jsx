import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2  from './components/Category/Category2.jsx';
import Services from './components/Services/Services.jsx';
import Banner from "./components/Banner/Banner";
import Headphone from './assets/hero/headphone.png';
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png'; 
import Products from './components/Products/Products.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Partners from './components/Partners/Partners.jsx';
import Footer from './components/Footer/Footer.jsx';
import Popup from './components/Popup/Popup.jsx';
import AOS from 'aos';
import "aos/dist/aos.css";










const BannerData = {
   discount: "30% OFF",
   title: "Fine Smile",
   date: "10 jan to 28 jan",
   image:Headphone,
    title2 : "Air Solo Bass",
    title3 : "Winter Sale",
    title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ",
    bgColor:"#f42c37",
};


const  BannerData2 = {
   discount: "30% OFF",
   title: "Happy Hours",
   date: "14 jan to 28 jan",
   image: smartwatch2,
   title2: "Smart Solo",
   title3: "Winter Sale",
   title4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, illo!" ,
   bgColor: "#2dcc6f",
}







const  App = () => {

const [orderPopup, setOrderPopup] = React.useState(false);

const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
};


React.useEffect(() => {
  AOS.init({
     duration: 800,
     easing: "ease-in-sine",
     delay: 100,
     offset: 100, 


  });
  AOS.refresh();
},[]);





  return (
    <div>
       <Navbar handleOrderPopup={handleOrderPopup} />
       <Hero   handleOrderPopup={handleOrderPopup}   />
       <Category /> 
       <Category2 />
       <Services />
       <Banner data = {BannerData} />
       <Products />
       <Banner  data={BannerData2}  />
       <Blogs />
       <Partners />
       <Footer />
         <Popup 
         orderPopup={orderPopup} 
         handleOrderPopup={handleOrderPopup} 
         />
    </div>
  )
}

export default App;
