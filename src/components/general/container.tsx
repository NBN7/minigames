import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className={twMerge("w-full sm:w-[1000px] min-h-[100dvh] p-2", className)}>{children}</div>
    </div>
  );
};
