import type { Metadata } from "next";
import { GameContextProvider } from "@/context/wordle";
import { Game } from "@/components/wordle/game";

export const metadata: Metadata = {
  title: "Wordle",
  description:
    "¡Probá este Wordle en español y quemate la cabeza adivinando palabras al azar! Las pistas de colores te van a ir dando una mano para que llegues a la respuesta. Perfecto para pasar el rato y retar a tus amigos. ¿Te la bancás?",
};

export default function WordlePage() {
  return (
    <GameContextProvider>
      <Game />
    </GameContextProvider>
  );
}
