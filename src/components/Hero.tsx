
import foodImg from "../assets/foodImage.png";

const Hero = () => {
 return (
    <section className=" py-11 md:flex md:flex-col lg:flex-row mb-9 mt-5 bg-white">

      <div className="ml-9 mr-9 max-w-xl md:mr-10 mb-10 md:mb-0  lg:flex-grow-1">
        <h1 className="font-semibold text-5xl md:text-6xl">
          Elevate Every Meal with the Magic of OrderBite
         
        </h1>

        <p className="my-6 text-gray-500
        text-2xl 
        ">
          OrderBite brings a symphony of flavors to your doorstep, transforming every meal into a delightful experience. Discover the ease and joy of ordering your favorite dishes with just a few clicks.
          </p>
       
      </div>

      <div className="relative mx-auto max-w-4xl mt-10 md:mt-0 md:w-1/2 flex justify-center 
      ">
  <img src={foodImg} alt="Food" className="w-full h-auto max-w-sm mx-auto " />
</div>

      
    </section>
  );
};

export default Hero;




