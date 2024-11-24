import Link from "next/link";
import { SearchMinigame } from "@/components/general/navbar";
import { Gamepad2Icon } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-center sticky top-0 p-4 z-50 bg-white">
      <div className="w-full sm:w-[1000px] flex items-center justify-between gap-4">
        <Link className="hover:scale-110 transition-all" href="/">
          <Gamepad2Icon />
        </Link>
        <SearchMinigame />
        <Link
          href="https://github.com/NBN7/minigames"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-all"
        >
          <IoLogoGithub className="size-6" />
        </Link>
      </div>
    </nav>
  );
};
