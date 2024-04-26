import hero from "../assets/Hero-bg-lg.png";
import leaf from "../assets/leaf.png";
import onion from "../assets/onion.png";
import salad2 from "../assets/salad2.png";

const Hero = () => {
 return (
    <section className="hero py-20 md:flex md:flex-col lg:flex-row pl-7 mb-11">

      <div className="max-w-xl md:mr-10 mb-10 md:mb-0 lg:flex-grow-1">
        <h1 className="font-semibold text-5xl md:text-7xl">
          Elevate Every Moment with the Magic of <br />
          <span className="text-primary" style={{ whiteSpace: "nowrap" }}>
            Ace Shawarma
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-lg">
          Ace Shawarma, as a culinary delight, has the power to transform every
          experience into a perfect symphony of flavors and satisfaction.
        </p>
        <div className="flex gap-4 items-center text-sm">
          <button className="bg-primary flex gap-2 text-white px-4 py-2 rounded-full uppercase items-center">
            Order now
          </button>
          <button className="flex gap-2 text-gray-600 py-2 font-semibold">
            Learn more
          </button>
        </div>
      </div>

      <div className="relative max-w-xl mt-10 md:mt-0 md:w-1/2">
        {/* onion beneath */}
        <div className="absolute left-0 top-2/3 transform -translate-y-3/3">
          <img
            src={onion}
            className="h-40 w-40 rounded-full"
            alt="chopped-onion"
          />
        </div>

        {/* Salad on the right side */}
        <div className="absolute right-0 top-2/2 transform -translate-y-1/2">
          <img src={salad2} className="h-40 w-40" alt="salad" />
        </div>

        {/* Shawarma in the center */}
        <div className="relative">
          <img
            src={hero}
            className="w-full max-h-[1000px] object-cover"
            alt="shawarma"
          />

          {/* Leaf at the top */}
          <div className="absolute top-0 left-2/2 transform -translate-x-1/3">
            <img src={leaf} className="h-40 w-40" alt="leaf" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
