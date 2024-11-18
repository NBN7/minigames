interface KeyProps {
  letter: string;
}

export const Key = ({ letter }: KeyProps) => {
  return (
    <div className="size-12 border uppercase flex items-center justify-center font-semibold text-2xl rounded">
      {letter}
    </div>
  );
};
