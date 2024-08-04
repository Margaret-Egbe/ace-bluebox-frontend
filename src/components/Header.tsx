
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import mainLogo from "../assets/mainLogo.svg";
import mobileLogo from "../assets/mobileLogo.svg";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="border-b-2 py-1 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center ">
        <Link
          to="/"
          style={{
            color: "#6375BD",
            fontSize: "1.875rem",
            fontWeight: "bold",
            letterSpacing: "tight",
          }}
          className="text-3xl font-bold tracking-tight"
        >
          <img src={isMobile ? mobileLogo : mainLogo} alt="Logo" />
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
