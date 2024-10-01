"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";

import { logOut } from "@/src/services/AuthServices";
import { useUser } from "@/src/context/user.provider";

const NavberDropDown = () => {
  const router = useRouter();
  const { user, isSetLoading: UserLoading } = useUser();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleLogOut = () => {
    logOut();
    UserLoading(true);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profileImage} />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Example with disabled actions"
        disabledKeys={["edit", "delete"]}
      >
        <DropdownItem
          key="dashboard"
          onClick={() => handleNavigation("/dashboard")}
        >
          Dashboard
        </DropdownItem>
        <DropdownItem key="login" onClick={() => handleNavigation("/login")}>
          Log In
        </DropdownItem>
        <DropdownItem key="logout" onClick={() => handleLogOut()}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavberDropDown;
