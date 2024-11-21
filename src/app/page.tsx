import Link from "next/link";
import { Container, SearchMinigame } from "@/components/general";
import { Gamepad2Icon } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";

export default function Page() {
  return (
    <Container container="min-h-screen">
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
    </Container>
  );
}
