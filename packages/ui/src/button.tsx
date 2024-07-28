import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, appName, className }: ButtonProps) => {
  return (
    <button
      className={className}
    >
      {children}
    </button>
  );
};
