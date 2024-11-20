"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { WORDS } from "@/constants/wordle";

interface Guess {
  word: string;
  [key: number]: string;
}

type GameStatus = "win" | "lose" | undefined;

interface GameContextValues {
  word: string | undefined;
  guess: Guess;
  setGuess: React.Dispatch<React.SetStateAction<Guess>>;
  gameStatus: GameStatus;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
  reset: () => void;
}

const GameContext = createContext<GameContextValues | undefined>(undefined);

interface GameContextProviderProps {
  children: React.ReactNode;
}

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
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
  const [gameStatus, setGameStatus] = useState<GameStatus>(undefined);

  const reset = useCallback(() => {
    setWord(undefined);
    setGuess({
      word: "",
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
    });
    setGameStatus(undefined);
    localStorage.removeItem("word");
    localStorage.removeItem("guess");
  }, []);

  useEffect(() => {
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
    <GameContext.Provider
      value={{
        word,
        guess,
        setGuess,
        gameStatus,
        setGameStatus,
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error(
      "useGameContext debe ser utilizado dentro de un GameContextProvider"
    );
  }

  return context;
};
