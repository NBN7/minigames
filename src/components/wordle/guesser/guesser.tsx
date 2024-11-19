"use client";

import { useWordContext } from "@/context/wordle/word-context";
import { Box } from "@/components/wordle/guesser";

export const Guesser = () => {
  const { guess, word } = useWordContext();

  return (
    <div className="w-full flex flex-col items-center justify-center sm:gap-2 gap-1">
      <div className="w-full flex items-center justify-center sm:gap-2 gap-1">
        {guess[0]
          ? guess[0]
              .split("")
              .map((letter, index) => (
                <Box key={index} letter={letter} index={index} compare />
              ))
          : word
              .split("")
              .map((_, index) => (
                <Box
                  key={index}
                  letter={guess.word.split("")[index]}
                  index={index}
                />
              ))}
      </div>

      <div className="w-full flex items-center justify-center sm:gap-2 gap-1">
        {guess[1]
          ? guess[1]
              .split("")
              .map((letter, index) => (
                <Box key={index} letter={letter} index={index} compare />
              ))
          : guess[0]
          ? word
              .split("")
              .map((_, index) => (
                <Box
                  key={index}
                  letter={guess.word.split("")[index]}
                  index={index}
                />
              ))
          : word.split("").map((_, index) => <Box key={index} index={index} />)}
      </div>

      <div className="w-full flex items-center justify-center sm:gap-2 gap-1">
        {guess[2]
          ? guess[2]
              .split("")
              .map((letter, index) => (
                <Box key={index} letter={letter} index={index} compare />
              ))
          : guess[1]
          ? word
              .split("")
              .map((_, index) => (
                <Box
                  key={index}
                  letter={guess.word.split("")[index]}
                  index={index}
                />
              ))
          : word.split("").map((_, index) => <Box key={index} index={index} />)}
      </div>

      <div className="w-full flex items-center justify-center sm:gap-2 gap-1">
        {guess[3]
          ? guess[3]
              .split("")
              .map((letter, index) => (
                <Box key={index} letter={letter} index={index} compare />
              ))
          : guess[2]
          ? word
              .split("")
              .map((_, index) => (
                <Box
                  key={index}
                  letter={guess.word.split("")[index]}
                  index={index}
                />
              ))
          : word.split("").map((_, index) => <Box key={index} index={index} />)}
      </div>

      <div className="w-full flex items-center justify-center sm:gap-2 gap-1">
        {guess[4]
          ? guess[4]
              .split("")
              .map((letter, index) => (
                <Box key={index} letter={letter} index={index} compare />
              ))
          : guess[3]
          ? word
              .split("")
              .map((_, index) => (
                <Box
                  key={index}
                  letter={guess.word.split("")[index]}
                  index={index}
                />
              ))
          : word.split("").map((_, index) => <Box key={index} index={index} />)}
      </div>
    </div>
  );
};
