import landindImg from "../assets/shawarmA.png"
import appDownloadImage from "../assets/downloadApp.png"
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md shadow-top-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-[#6375BD]">
          Tuck into takeway today
        </h1>
        <span className="text-xl font-bold text-[#FFC214]">
          Food is just one click away!</span>
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
