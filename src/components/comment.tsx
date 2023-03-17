import { type NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Image from "next/image";

type CommentProps = {
  author: string;
  content: string;
};

const Comment: NextPage<CommentProps> = ({ author, content }) => {

  return (
      <div
        className="flex w-full md:w-1/3 flex-col rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 transition-all duration-200"
      >
        <div className="text-lg">{content}</div>
        <span className="text-2xl font-bold text-center"> - {author}</span>
      </div>
  );
};

export default Comment;
