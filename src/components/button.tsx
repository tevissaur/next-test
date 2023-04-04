import { type NextPage } from "next";
import Link from "next/link";
import { ReactNode, useEffect } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const Button: NextPage<ButtonProps> = ({ href, children, className }) => {
  return (
    <>
      <Link
        className={`${className} max-w-max transition-all duration-200`}
        href={href}
        target="_blank"
      >
        {children}
      </Link>
    </>
  );
};

export default Button;

export const DefaultStyleButton: NextPage<ButtonProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Button
      className={`text-white rounded-md text-lg px-4 py-2 mx-4 bg-white/30 hover:bg-white/60`}
      href={href}
    >
      {children}
    </Button>
  );
};
export const ProjectTileButton: NextPage<ButtonProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Button
      className={`text-white text-lg rounded-lg bg-black/60 hover:bg-black/90 px-4 py-2`}
      href={href}
    >
      {children}
    </Button>
  );
};
