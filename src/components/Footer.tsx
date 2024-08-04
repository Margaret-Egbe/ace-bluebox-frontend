import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#708090] py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          OrderBite
        </span>

        <span className="text-white font-bold tracking-tight flex gap-4">
          <Link to="/">
            <span>Privacy Policy </span>
          </Link>
          <Link to="/">
            <span>Terms of Service </span>
          </Link>
          <Link to="/">
            <span>FAQ </span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
