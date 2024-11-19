"use client";

import { createContext, useContext, useState } from "react";
import { WORDS } from "@/constants/wordle";

interface Guess {
  word: string;
  [key: number]: string;
}

interface WordContextValues {
  word: string;
  guess: Guess;
  setGuess: React.Dispatch<React.SetStateAction<Guess>>;
}

const WordContext = createContext<WordContextValues | undefined>(undefined);

interface WordContextProviderProps {
  children: React.ReactNode;
}

export const WordContextProvider = ({ children }: WordContextProviderProps) => {
  const [word] = useState(
    () => WORDS[Math.floor(Math.random() * WORDS.length)]
  );

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

  console.log({ guess, word });

  return (
    <WordContext.Provider
      value={{
        word,
        guess,
        setGuess,
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
