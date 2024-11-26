interface KeyProps {
  letter?: string;
  icon?: React.ReactNode;
  keyColor?: string;
  onClick: () => void;
}

export const Key = ({ letter, icon, keyColor, onClick }: KeyProps) => {
  return (
    <button
      className={`${keyColor || "bg-white"} ${
        icon ? "sm:w-[86px] w-14" : "sm:size-14 size-9"
      } flex items-center justify-center border uppercase rounded text-lg transition-all hover:brightness-90`}
      onClick={onClick}
    >
      {letter || icon}
    </button>
  );
};
