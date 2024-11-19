interface BoxProps {
  letter?: string;
}

export const Box = ({ letter }: BoxProps) => {
  return <div className="size-[72px] border-2 flex items-center justify-center uppercase text-lg">{letter}</div>;
};
