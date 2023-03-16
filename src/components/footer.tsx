import { type NextPage } from "next";

const Footer: NextPage = () => {

  return (
    <footer className="max-h-min bg-black p-5">
      <h1 className="mb-7 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Made with <span className="text-[hsl(280,100%,70%)]">❤️</span>
      </h1>
    </footer>
  );
};

export default Footer;
