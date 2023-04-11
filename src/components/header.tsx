import autoAnimate from "@formkit/auto-animate";
import { type NextPage } from "next"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import slugify from "slugify";
import PageTitle from "./page-title";

const Header: NextPage = () => {
  const [navButtons, setNavButtons] = useState([
    {
      name: "About Me",
      active: true,
    },
    {
      name: "Services",
      active: false,
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
  useEffect(() => {
    if (window) {
      const page = window.location.href.split("/").pop();
      const navStatus = navButtons.map((button) => {
        return {
          name: button.name,
          active: slugify(button.name, { lower: true }) === page,
        };
      });
      setNavButtons(navStatus);
    }
  }, [])

  const showPageHeader = (e: React.MouseEvent) => {
    const navStatus = navButtons.map((button) => {
      return {
        name: button.name,
        active:
          e.currentTarget.innerHTML === button.name && (button.active = true),
      };
    });
    setNavButtons(navStatus);
  };

  return (
    <header className="max-h-min bg-[#242625] p-5 shadow-xl" ref={parent}>
      <h1 className="mb-7 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Hey, I&apos;m <span className="text-[#42F2F7]">Tevis</span>
      </h1>
      <div className="flex justify-center gap-4">
        {navButtons.map((item, index) => (
          <Link
            className="min-w-max rounded-md bg-[#498C8A]/40 px-4 py-2 text-lg text-white hover:bg-[#498C8A]/90 hover:shadow-xl hover:shadow-[#498C8A]/10 transition-all duration-200"
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
          <>A little </>
          <span className="text-[#D47C79]">About Me</span>
        </PageTitle>
      )}
      {navButtons[1]?.active && (
        <PageTitle>
          <span className="text-[#D47C79]">Services</span>
          <> I Offer</>
        </PageTitle>
      )}
      {navButtons[2]?.active && (
        <PageTitle>
          <>Some of my </>
          <span className="text-[#D47C79]">Projects</span>
        </PageTitle>
      )}
    </header>
  );
};

export default Header;
