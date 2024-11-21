"use client";

import { useState, useEffect } from "react";
import { useGameContext } from "@/context/wordle";
import { Container } from "@/components/general";
import { Guesser } from "@/components/wordle/guesser";
import { Keyboard } from "@/components/wordle/keyboard";
import { PlayAgain } from "@/components/wordle/dialog";
import { Dialog } from "@/components/ui/dialog";

export const Game = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { word, guess, gameStatus, setGameStatus } = useGameContext();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { word: _, ...guesses } = guess;

  useEffect(() => {
    if (!gameStatus) {
      if (Object.values(guesses).some((guess) => guess === word)) {
        setGameStatus("win");
        setIsOpen(true);
      } else if (Object.values(guesses).every((guess) => guess)) {
        setGameStatus("lose");
        setIsOpen(true);
      }
    }
  }, [guesses, word, gameStatus, setGameStatus]);

  if (!word) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <PlayAgain word={word} win={gameStatus === "win"} />
      <Container className="flex flex-col justify-evenly">
        <Guesser />
        <Keyboard />
      </Container>
    </Dialog>
  );
};
