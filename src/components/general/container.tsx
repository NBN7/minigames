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
        "w-full flex items-center justify-center",
        outerClassName
      )}
    >
      <div className={twMerge("w-full sm:w-[1000px] px-2", innerClassName)}>
        {children}
      </div>
    </div>
  );
};
