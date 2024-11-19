import { WordContextProvider } from "@/context/wordle/word-context";
import { Guesser } from "@/components/wordle/guesser";
import { Keyboard } from "@/components/wordle/keyboard";

export default function WordlePage() {
  return (
    <WordContextProvider>
      <div className="w-full flex justify-center">
        <div className="max-w-[350px] sm:max-w-[1000px] min-h-[100dvh] flex flex-col justify-evenly">
          <Guesser />
          <Keyboard />
        </div>
      </div>
    </WordContextProvider>
  );
}
