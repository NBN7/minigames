import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  container?: string;
  className?: string;
}

export const Container = ({ children, container, className }: ContainerProps) => {
  return (
    <div className={twMerge("w-full flex items-center justify-center", container)}>
      <div className={twMerge("w-full sm:w-[1000px] min-h-[100dvh] p-2", className)}>{children}</div>
    </div>
  );
};
