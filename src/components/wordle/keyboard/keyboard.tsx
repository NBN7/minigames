import { Key } from "@/components/wordle/keyboard";
import { LETTERS } from "@/constants/wordle";
import { DeleteIcon, ForwardIcon } from "lucide-react";

export const Keyboard = () => {
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex justify-center gap-1">
        {LETTERS.FIRST_ROW.map((letter) => (
          <Key key={letter} letter={letter} />
        ))}
      </div>
      <div className="flex justify-center gap-1">
        {LETTERS.SECOND_ROW.map((letter) => (
          <Key key={letter} letter={letter} />
        ))}
      </div>
      <div className="flex justify-center gap-1">
        <Key icon={<DeleteIcon />} del />
        {LETTERS.THIRD_ROW.map((letter) => (
          <Key key={letter} letter={letter} />
        ))}
        <Key icon={<ForwardIcon />} enter />
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
};
