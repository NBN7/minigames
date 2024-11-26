import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
}

export const Container = ({
  children,
  outerClassName,
  innerClassName,
}: ContainerProps) => {
  return (
    <div
      className={twMerge(
        "flex w-full items-center justify-center",
        outerClassName,
      )}
    >
      <div
        className={twMerge("w-full px-2 sm:w-[1000px] sm:p-0", innerClassName)}
      >
        {children}
      </div>
    </div>
  );
};
