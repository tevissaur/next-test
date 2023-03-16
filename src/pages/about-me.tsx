import { type NextPage } from "next";
import { useSession, signOut, signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Article from "~/components/article";
import Card from "~/components/card";
import Header from "~/components/header";
import { api } from "~/utils/api";

const AboutMe: NextPage = () => {
  const {
    data: article,
    isLoading,
    isError,
    isSuccess,
  } = api.example.getArticleByTitle.useQuery({ title: "About Me" });
  return (
    <>
      <Image
        className="m-10 rounded-full"
        src="https://via.placeholder.com/640x640"
        alt="this is a placeholder image"
        width={360}
        height={360}
      />
      {!isLoading && isSuccess && article ? (
        <Article
          title={article.title}
          content={article.content}
          key={article.id}
        />
      ) : (
        "Loading!"
      )}
      <AuthShowcase />
    </>
  );
};

export default AboutMe;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
