import Link from "next/link";
import { SearchMinigame } from "@/components/general/navbar";
import { Gamepad2Icon } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between gap-4">
      <button className="hover:scale-110 transition-all">
        <Gamepad2Icon />
      </button>
      <SearchMinigame />
      <Link
        href="https://github.com/NBN7/minigames"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition-all"
      >
        <IoLogoGithub className="size-6" />
      </Link>
    </nav>
  );
};
