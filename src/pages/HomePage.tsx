import landindImg from "../assets/shawarmA.png";
import food from "../assets/food.jpg";
import restaurant from "../assets/restaurant.jpg";
import appDownloadImage from "../assets/downloadApp.png";
import { Link, useNavigate } from "react-router-dom";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useState, useEffect } from "react";
import chef from "../assets/chef.jpg";

const MobileHomepage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <>
      <div className="py-10 px-4  bg-white text-center rounded-lg shadow-md mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#FF2442] mb-5">
            Welcome to OrderBite!
          </h1>

          <p className="mb-5 text-xl text-gray-500">
            Discover the best meals. Start your search to find top restaurants
            in Lagos and Abuja.
          </p>

          <SearchBar
            placeHolder="Search for Abuja or Lagos"
            onSubmit={handleSearchSubmit}
          />
        </div>

        {/* Media Queries for Mobile Responsiveness */}
        <style>
          {`
            @media (max-width: 540px) {
              .img-mobile {
               right: -55%;
               }

               .mobile-text {
                 width: 400px;
                }
              }

             @media (max-width: 430px) {
               .img-mobile {
                right: -40%;
               }

                 .mobile-text {
                  width: 320px;
                }
             }

            @media (max-width: 360px) {
              .img-mobile {
                right: -30%;
              }
            }

        `}
        </style>
      </div>

      <div className="py-10 px-4 mt-5  bg-white text-center rounded-lg shadow-md mb-10">
        <h2 className="font-semibold text-2xl text-gray-500">Discover</h2>

        <h1 className="text-3xl font-bold tracking-tight text-[#FF2442] mb-5">
          Our Story
        </h1>

        <p className="mb-5 text-xl text-gray-500">
          Our platform brings together a diverse range of restaurants and
          cuisines, offering you a world of flavors right at your fingertips.
        </p>

        <div className="homepage-img grid gap-5">
          <img
            src={food}
            className="mx-auto rounded-lg mb-5"
            alt="food image"
          />

          <img
            src={restaurant}
            className="mx-auto rounded-lg"
            alt="restaurant image"
          />
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

      {/* Media Queries */}
      <style>
        {`
          @media (min-width: 768px) {
            .homepage-img {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
          }
        `}
      </style>
    </>
  );
};

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 913);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <>
      {isMobile ? (
        <MobileHomepage />
      ) : (
        <div className="flex flex-col gap-12 px-[70px]">
          <div className="bg-white rounded-lg shadow-md shadow-top-md py-8 flex flex-col gap-5 text-center mt-7 px-32">
            <h1 className="text-5xl font-bold tracking-tight text-[#FF2442]">
              Welcome to OrderBite
            </h1>

            <span className="text-xl font-medium w-[60%] text-gray-500 mx-auto home">
              Discover the best meals. Start your search to find top restaurants
              in Lagos and Abuja.
            </span>

            <SearchBar
              placeHolder="Search for Abuja or Lagos"
              onSubmit={handleSearchSubmit}
            />
          </div>

          <div className="flex  bg-white rounded-lg text-center my-8 py-8 px-10 hover gap-10">
            <div className="shadow-inner w-[50%]">
              <h2 className="font-semibold text-2xl text-gray-500 mt-8">
                Discover
              </h2>

              <h1 className="text-3xl font-bold tracking-tight text-[#FF2442] mb-5">
                Our Story
              </h1>

              <p className="px-4 mb-5 text-xl text-gray-500">
                Our platform brings together a diverse range of restaurants and
                cuisines, offering you a world of flavors right at your
                fingertips.
              </p>
            </div>

            <div className="w-[50%] relative">
              <img
                src={restaurant}
                className="mx-auto rounded-lg h-[400px] object-contain rounded-tl-[50px] rounded-br-[50px]"
                alt="restaurant image"
              />

              <img
                src={food}
                className="h-[200px] object-contain rounded-tr-[50px] rounded-bl-[50px] absolute  -right-[20%]  overflow-hidden top-[10%] food"
                alt="food image"
              />

              <img
                src={chef}
                className=" h-[200px] object-contain rounded-tr-[50px] rounded-bl-[50px] absolute -left-[10%]  overflow-hidden bottom-[4%] chef"
                alt="chef image"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 bg-white rounded-lg py-8 px-10">
            <img src={landindImg} alt="mockup img" />
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

          {/* Media Queries for Responsiveness */}
          <style>
            {`
          @media (max-width: 1024px) {
              .home {
               width: auto;
               }

                .food {
               height: 150px;
               right: -20%;
               }

                .chef {
                 height: 150px;
               left: -20%;
               bottom: 40px;
               }
            }

        `}
          </style>
        </div>
      )}
    </>
  );
};

export default HomePage;
