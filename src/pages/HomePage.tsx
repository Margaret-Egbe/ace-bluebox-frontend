import landindImg from "../assets/shawarmA.png"
import appDownloadImage from "../assets/downloadApp.png"
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
      <div className="bg-white rounded-lg shadow-md shadow-top-md py-8 flex flex-col gap-5 text-center mt-7 md:px-32 px-4">
        <h1 className="text-5xl font-bold tracking-tight text-[#6375BD]">
          Tuck into takeway today
        </h1>
        <span className="text-xl font-bold text-[#FFC214]">
          Food is just one click away!</span>
          <SearchBar 
            placeHolder="Search for Restaurants by City or Town" onSubmit={handleSearchSubmit} />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
          <img
            src={landindImg}
            className="mx-auto"
            alt="mockup img"
          />
          <div className="flex flex-col items-center justify-center  gap-4 text-center">
              <span className="font-bold text-3xl tracking-tighter">Order takeway even faster!</span>
              <span>Download the Bluebox app for faster ordering and personalised recommendations</span>

              <Link to="/"><img src={appDownloadImage} />
              </Link>

          </div>
      </div>
    </div>
  );
};

export default HomePage;
