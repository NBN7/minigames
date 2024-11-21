"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Calculator, Calendar, Smile, BoxIcon } from "lucide-react";

export const SearchMinigame = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [recentlyPlayed, setRecentlyPlayed] = useState<string[]>([]);

  useEffect(() => {
    // Cargar juegos recientemente jugados desde localStorage al cargar el componente
    const savedGames = localStorage.getItem("recentlyPlayed");
    if (savedGames) {
      setRecentlyPlayed(JSON.parse(savedGames) as string[]);
    }

    const down = (e: KeyboardEvent) => {
      if (e.key === "g" && (e.metaKey || e.ctrlKey)) {
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
          <span className="text-xs">⌘</span>G
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
                <Link key={index} href={game}>
                  <CommandItem>
                    <BoxIcon />
                    <span className="capitalize">{game}</span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          )}

          {/* suggestions */}
          <CommandGroup heading="Sugerencias">
            <Link href="/wordle">
              <CommandItem>
                <BoxIcon />
                <span>Wordle</span>
              </CommandItem>
            </Link>
            <CommandItem>
              <Calendar />
              <span>Calendario</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculadora</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};
