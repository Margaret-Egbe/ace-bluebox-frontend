import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  const firstName = user?.name?.split(" ")[0];
  const greeting = `Welcome, ${firstName}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-[#FF2442] gap-2">
        <CircleUserRound className="text-[#FF2442]" />
        {greeting}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        
        <DropdownMenuItem>
          <Link to="/manage-restaurant" className="font-bold hover:text-[#FF2442]">
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
 
        <Separator />

        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-[#FF2442]">
            User Profile
          </Link>
        </DropdownMenuItem>

        <Separator />

        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-[#FF2442]"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
