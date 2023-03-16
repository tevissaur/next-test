import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import slugify from "slugify";

import { api } from "~/utils/api";

const Header: NextPage = () => {
  const [navButtons, setNavButtons] = useState([
    "Skills",
    "About Me",
    "Projects",
  ]);

  return (
    <header className="max-h-min bg-black p-5">
      <h1 className="mb-7 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Hey, I'm <span className="text-[hsl(280,100%,70%)]">Tevis</span>
      </h1>
      <div className="flex justify-center">
        {navButtons.map((item, index) => (
          <Link
            className="mx-4 max-w-max rounded-md bg-white/10 px-4 py-2 text-lg text-white hover:bg-white/20"
            href={`/${slugify(item, { lower: true })}`}
            key={index}
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
