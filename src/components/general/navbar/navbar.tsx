import Link from "next/link";
import { SearchMinigame } from "@/components/general/navbar";
import { Gamepad2Icon } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-center bg-white p-4">
      <div className="flex w-full items-center justify-between gap-4 sm:w-[1000px]">
        <Link className="transition-all hover:scale-110" href="/">
          <Gamepad2Icon />
        </Link>
        <SearchMinigame />
        <Link
          href="https://github.com/NBN7/minigames"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:scale-110"
        >
          <IoLogoGithub className="size-6" />
        </Link>
      </div>
    </nav>
  );
};
