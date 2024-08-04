import landindImg from "../assets/shawarmA.png";
import appDownloadImage from "../assets/downloadApp.png";
import { Link, useNavigate } from "react-router-dom";
import SearchBar, { SearchForm } from "@/components/SearchBar";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12 ">
      <div className="bg-white rounded-lg shadow-md shadow-top-md py-8 flex flex-col gap-5 text-center mt-7 md:px-32 px-2">
        <h1 className="text-5xl font-bold tracking-tight text-[#2E8B57]">
          Savor Every Bite Today
        </h1>
        <span className="text-xl font-medium text-[#2F4F4F]">
          Food is just one click away!
        </span>
        <SearchBar
          placeHolder="Search for Restaurants by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>

      <div className="flex flex-col bg-white rounded-lg text-center my-8 py-8">
        <h2 className="font-semibold text-2xl text-gray-500">our story</h2>

        <h4 className="font-bold text-4xl text-[#2E8B57] mb-5">About us</h4>

        <div className="max-w-md mx-auto mt-4 text-gray-500 px-4">
          <p>
            Welcome to OrderBite, your ultimate destination for convenient and
            delicious food ordering. At OrderBite, we believe that every meal
            should be an experience worth savoring, and we're here to make that
            happen with just a few clicks.
          </p>
          <br />

          <p>
            Our platform brings together a diverse range of restaurants and
            cuisines, offering you a world of flavors right at your fingertips.
            Whether you're craving a quick bite, planning a family dinner, or
            exploring new culinary delights, OrderBite has got you covered.
          </p>

          <br />

          <p>
            With a user-friendly interface, personalized recommendations, and
            seamless ordering process, we strive to elevate your dining
            experience. Our mission is to connect you with your favorite foods
            and make every meal enjoyable and hassle-free.
          </p>

          <br />

          <p>
            Thank you for choosing OrderBite. We are dedicated to providing you
            with the best service and a delightful food journey. Bon appétit!
          </p>
        </div>

        <div className="my-16">
          <h2 className="font-semibold text-2xl text-gray-500">
            Dont Hestitate
          </h2>

          <h4 className="font-bold text-4xl text-[#2E8B57]">Contact us</h4>

          <div className="mt-8">
            <a
              className="text-4xl underline text-gray-500"
              href="tel:+2347068081317"
            >
              +234 706 808 1317
            </a>
          </div>
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-5 bg-white rounded-lg py-8 px-2">
        <img src={landindImg} className="mx-auto" alt="mockup img" />
        <div className="flex flex-col items-center justify-center  gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeway even faster!
          </span>
          <span>
            Get the OrderBite app for quicker ordering and tailored
            recommendations.
          </span>

          <Link to="/">
            <img src={appDownloadImage} />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
