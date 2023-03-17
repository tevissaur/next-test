import { type NextPage } from "next";
import Link from "next/link";
import { ReactNode, useEffect } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
}

const Button: NextPage<ButtonProps> = ({ href, children }) => {
  return (
    <>
        <Link
            className="mx-4 max-w-max rounded-md bg-white/10 px-4 py-2 text-lg text-white hover:bg-white/20"
            href={href}
            target="_blank"
          >
            {children}
          </Link>
    </>
  );
};

export default Button;