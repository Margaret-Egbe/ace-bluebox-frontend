import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
     <Link
        to="/order-status"
        className="flex items-center font-bold hover:text-[#2E8B57]"
      >
        Order Status
      </Link>

      <Link
        to="/manage-restaurant"
        className="flex items-center font-bold hover:text-[#2E8B57]"
      >
        Manage Restaurant
      </Link>

      <Link
        to="/user-profile"
        className="flex items-center font-bold hover:text-[#2E8B57]"
      >
        User Profile
      </Link>

      <Button
        onClick={() => logout()}
        className="flex items-center px-3 font-bold bg-[#2E8B57] hover:bg-gray-500"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
