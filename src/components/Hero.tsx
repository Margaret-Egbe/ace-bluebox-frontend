import { useState, useEffect } from "react";
import fish from "../assets/fish.png";
import zuch from "../assets/zuch.png";
import Restaurant from "../assets/Restaurant.jpeg";
import Restaurant2 from "../assets/Restaurant2.png";
import shrimps from "../assets/shrimps.png";
import Ramen from "../assets/Ramen.png";

const MobileHero = () => {
  return (
    <section className="py-10 px-4 mb-5 bg-white text-center rounded-lg shadow-md">
      
      <div className="relative left-[15px] right-0 w-full h-auto overflow-hidden -top-[20px]">
        <div className="relative img-mobile ">
          <img
            src={zuch}
            alt="Zucchini"
            className="w-[250px] h-auto object-contain food-img"
          />
        </div>
      </div>

      <h1 className="text-heading font-bold text-5xl text-[#FF2442] mb-7 text-left">
        Order your favorite meals with ease
      </h1>

      <p className="my-2 text-gray-500  text-left text-xl mobile-text">
        Orderbite app is a modern platform designed to simplify food ordering
        for both vendors and customers, making mealtime effortless.
      </p>

      <div className="relative left-[15px] right-0 w-full h-auto overflow-hidden">
        <div className="relative  img-mobile">
          <img
            src={fish}
            alt="Zucchini"
            className="w-[250px] h-auto object-contain food-img"
          />
        </div>
      </div>

      {/* Media Queries for Responsiveness */}
      <style>
        {`

          @media (max-width: 912px) {
              .food-img {
               width: 50%;
               }

              .img-mobile {
               right: -55%;
               }

               .mobile-text {
                 font-size: 1.2rem;
                 width: 500px !important;
                }

             .text-heading  {
               width: 600px 
               }
              }

            @media (max-width: 540px) {

               .text-heading  {
               width: auto; 
               }

               .mobile-text {
                 font-size: 1.2rem;
                 width: 500px !important;
                }
              }

             @media (max-width: 430px) {
               .food-img {
               width: 250px;
               }

             .img-mobile {
                right: -40%;
               }

             .mobile-text {
               width: 360px !important;
                font-size: 1.2rem;
               }
             }

            @media (max-width: 360px) {
              .img-mobile {
                right: -30%;
              }
            }

        `}
      </style>
    </section>
  );
};

const Hero = () => {
  const [image, setImage] = useState(Restaurant);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 913);
      setImage(window.innerWidth <= 1024 ? Restaurant2 : Restaurant);
    }; 

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileHero />
      ) : (
        <section className="hero px-[100px] justify-between items-center  md:flex md:flex-col lg:flex-row bg-white">

          <div className="max-w-xl md:mb-0 lg:flex-grow-1">
            <h1 className="font-bold text-5xl text-[#FF2442] mb-7 text-left">
              Order your favorite meals with ease
            </h1>

            <p className="my-6 text-gray-500 text-2xl">
              Orderbite app is a modern platform designed to simplify food
              ordering for both vendors and customers, making mealtime
              effortless.
            </p>
          </div>
         
          <div className="relative img-mobile mb-10">
            <img
              src={image}
              alt="restaurant-image"
              className="w-auto restaurant-img h-[400px] object-contain rounded-tl-[50px] rounded-br-[50px]"
            />

            <img
              src={Ramen}
              alt="restaurant-image"
              className="w-auto ramen-img absolute  -left-[35%] right-0 h-auto overflow-hidden -bottom-[10%]"
            />

            <img
              src={shrimps}
              alt="restaurant-image"
              className="w-[200px] shrimp-img absolute  -right-[20%] h-auto overflow-hidden top-[10%]"
            />
          </div>


            {/* Media Queries for Mobile Responsiveness */}
      <style>
        {`
          @media (max-width: 1024px) {
              .hero {
               padding-left: 70px;
               }

               .ramen-img {
                 bottom: 40px;
                }

                 .shrimp-img {
                 right: -30%;
                 top: 20%;
                }
         }

        `}
      </style>
        </section>
      )}
    </>
  );
};

export default Hero;
