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
        icon ? "w-14 sm:w-[86px]" : "size-9 sm:size-14"
      } flex items-center justify-center rounded border text-lg uppercase transition-all hover:brightness-90`}
      onClick={onClick}
    >
      {letter || icon}
    </button>
  );
};
