import { type NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Image from "next/image";

type ArticleProps = {
  title: string;
  content: string;
};

const Article: NextPage<ArticleProps> = ({ title, content }) => {

  return (
    <>
      <div
        className="flex w-96 flex-col rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
      >
        <h3 className="text-2xl font-bold text-center">{title}</h3>
        <div className="text-lg">{content}</div>
      </div>
    </>
  );
};

export default Article;
