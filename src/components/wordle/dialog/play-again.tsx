"use client";

import { useGameContext } from "@/context/wordle/game-context";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

interface PlayAgainProps {
  word: string;
  win: boolean;
}

export const PlayAgain = ({ word, win }: PlayAgainProps) => {
  const { reset } = useGameContext();

  const title = win ? "¡Ganaste!" : "¡Perdiste!";
  const buttonText = win ? "Volver a jugar" : "Reintentar";

  return (
    <DialogContent
      className="w-11/12 sm:max-w-md"
      onOpenAutoFocus={(e) => e.preventDefault()}
    >
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>La palabra era {word}</DialogDescription>
      </DialogHeader>
      <DialogFooter className="justify-start">
        <DialogClose asChild>
          <Button onClick={reset}>{buttonText}</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};
