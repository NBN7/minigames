"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { WORDS } from "@/constants/wordle";

interface Guess {
  word: string;
  [key: number]: string;
}

interface WordContextValues {
  word: string | undefined;
  guess: Guess;
  setGuess: React.Dispatch<React.SetStateAction<Guess>>;
  reset: () => void;
}

const WordContext = createContext<WordContextValues | undefined>(undefined);

interface WordContextProviderProps {
  children: React.ReactNode;
}

export const WordContextProvider = ({ children }: WordContextProviderProps) => {
  const [word, setWord] = useState<string | undefined>(undefined);

  // guess.word is the user's guess (before they press enter)
  // guess[0-4] are the user's tries
  const [guess, setGuess] = useState<Guess>({
    word: "",
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const reset = () => {
    setWord(undefined);
    setGuess({
      word: "",
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
    });
    localStorage.removeItem("word");
    localStorage.removeItem("guess");
  };

  useEffect(() => {
    // the word can be undefined if the user refreshes the page or if the user retry the game
    if (!word) {
      const storedWord = localStorage.getItem("word");
      const storedGuess = localStorage.getItem("guess");

      if (storedWord) {
        setWord(storedWord);
      } else {
        const randomWord =
          WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
        localStorage.setItem("word", randomWord);
        setWord(randomWord);
      }

      if (storedGuess) {
        setGuess(JSON.parse(storedGuess));
      }
    }
  }, [word]);

  useEffect(() => {
    localStorage.setItem("guess", JSON.stringify(guess));
  }, [guess]);

  return (
    <WordContext.Provider
      value={{
        word,
        guess,
        setGuess,
        reset,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export const useWordContext = () => {
  const context = useContext(WordContext);

  if (!context) {
    throw new Error("useWordContext must be used within a WordContextProvider");
  }

  return context;
};
