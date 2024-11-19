"use client";

import { useState, useEffect } from "react";
import { useWordContext } from "@/context/wordle/word-context";
import { Guesser } from "@/components/wordle/guesser";
import { Keyboard } from "@/components/wordle/keyboard";
import { PlayAgain } from "@/components/wordle/dialog";
import { Dialog } from "@/components/ui/dialog";

export const Game = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"win" | "lose" | undefined>(undefined);
  const [gameOver, setGameOver] = useState(false);
  const { word, guess } = useWordContext();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { word: _, ...guesses } = guess;

  useEffect(() => {
    if (!gameOver) {
      if (Object.values(guesses).some((guess) => guess === word)) {
        setStatus("win");
        setIsOpen(true);
        setGameOver(true);
      } else if (Object.values(guesses).every((guess) => guess)) {
        setStatus("lose");
        setIsOpen(true);
        setGameOver(true);
      }
    }
  }, [guesses, word, gameOver]);

  if (!word) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <PlayAgain word={word} win={status === "win"} />
      <div className="w-full flex justify-center">
        <div className="max-w-[350px] sm:max-w-[1000px] min-h-[100dvh] flex flex-col justify-evenly">
          <Guesser />
          <Keyboard />
        </div>
      </div>
    </Dialog>
  );
};
