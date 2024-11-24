"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { BoxIcon } from "lucide-react";
import { BsQuestion } from "react-icons/bs";

export const SearchMinigame = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [recentlyPlayed, setRecentlyPlayed] = useState<string[]>([]);
  const router = useRouter();

  const handleGameClick = (game: string) => {
    setIsOpen(false);
    router.push(`/${game}`);
  };

  useEffect(() => {
    // recover recently played games from local storage
    const savedGames = localStorage.getItem("recentlyPlayed");
    if (savedGames) {
      setRecentlyPlayed(JSON.parse(savedGames) as string[]);
    }

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <Button
        variant="outline"
        className="w-full sm:w-80 text-zinc-500 justify-between"
        onClick={() => setIsOpen(true)}
      >
        Buscar minijuego...
        <kbd className="hidden pointer-events-none sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Buscar minijuego..." />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>

          {/* recently played */}
          {recentlyPlayed.length > 0 && (
            <CommandGroup heading="Jugado recientemente">
              {recentlyPlayed.map((game, index) => (
                <button
                  className="w-full"
                  key={index}
                  onClick={() => handleGameClick(game)}
                >
                  <CommandItem>
                    <BoxIcon />
                    <span className="capitalize">{game}</span>
                  </CommandItem>
                </button>
              ))}
            </CommandGroup>
          )}

          {/* suggestions */}
          <CommandGroup heading="Sugerencias">
            <button
              className="w-full"
              onClick={() => handleGameClick("wordle")}
            >
              <CommandItem>
                <BoxIcon />
                <span>Wordle</span>
              </CommandItem>
            </button>
            <CommandItem>
              <BsQuestion />
              <span>Próximamente</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};
