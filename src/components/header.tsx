import autoAnimate from "@formkit/auto-animate";
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import slugify from "slugify";

import { api } from "~/utils/api";
import PageTitle from "./page-title";

const Header: NextPage = () => {
  const [navButtons, setNavButtons] = useState([
    {
      name: "Skills",
      active: false,
    },
    {
      name: "About Me",
      active: true,
    },
    {
      name: "Projects",
      active: false,
    },
  ]);
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const showPageHeader = (e: React.MouseEvent) => {
    let navStatus = navButtons.map((button) => {
      return {
        name: button.name,
        active:
          e.currentTarget.innerHTML === button.name && (button.active = true),
      };
    });
    setNavButtons(navStatus);
  };

  return (
    <header className="max-h-min bg-black p-5" ref={parent}>
      <h1 className="mb-7 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Hey, I'm <span className="text-[hsl(280,100%,70%)]">Tevis</span>
      </h1>
      <div className="flex justify-center">
        {navButtons.map((item, index) => (
          <Link
            className="mx-4 max-w-max rounded-md bg-white/10 px-4 py-2 text-lg text-white hover:bg-white/20"
            href={`/${slugify(item.name, { lower: true })}`}
            key={index}
            onClick={showPageHeader}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {navButtons[0]?.active && (
        <PageTitle>
          <>These are my </>
          <span className="text-[hsl(280,100%,70%)]">Skills</span>
        </PageTitle>
      )}
      {navButtons[1]?.active && (
        <PageTitle>
          <>A little </>
          <span className="text-[hsl(280,100%,70%)]">About Me</span>
        </PageTitle>
      )}
      {navButtons[2]?.active && (
        <PageTitle>
          <>Some of my </>
          <span className="text-[hsl(280,100%,70%)]">Projects</span>
        </PageTitle>
      )}
    </header>
  );
};

export default Header;