import { WordContextProvider } from "@/context/wordle/word-context";
import { Game } from "@/components/wordle/game";

export default function WordlePage() {
  return (
    <WordContextProvider>
      <Game />
    </WordContextProvider>
  );
}
