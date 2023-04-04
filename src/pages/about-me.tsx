import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Article from "~/components/article";
import AuthShowcase from "~/components/auth";
import Button, { DefaultStyleButton } from "~/components/button";
import Comment from "~/components/comment";
import CommentForm from "~/components/comment-form";
import Loading from "~/components/loading";
import { api } from "~/utils/api";

const AboutMe: NextPage = () => {
  const {
    data: aboutMeArticle,
    isLoading,
    isError,
    isSuccess,
  } = api.example.getArticlesByTitle.useQuery({ title: "About Me" });
  const {
    data: comments,
    isLoading: commentsLoading,
    isError: commentsError,
    isSuccess: commentsSuccess,
  } = api.example.getArticlesByTitle.useQuery({ title: "review" });
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-20 mt-10">
      <Image
        className="rounded-full"
        src="https://avatars.githubusercontent.com/u/65460369?s=400&u=5d8067fcf2e854dba1e991ab49be147da697114c&v=4"
        alt="this is a placeholder image"
        width={360}
        height={360}
      />
      {!isLoading && isSuccess && aboutMeArticle ? (
        aboutMeArticle.map((article) => (
          <Article
            title={article.title}
            content={article.content}
            key={article.id}
          />
        ))
      ) : (
        <Loading />
      )}
      <div className="flex flex-row items-center justify-center gap-20">
        <DefaultStyleButton href={"https://www.linkedin.com/in/tevis-r-34014147/"}>
          {" "}
          LinkedIn{" "}
        </DefaultStyleButton>
        <DefaultStyleButton href={"https://github.com/tevissaur"}> Github </DefaultStyleButton>
      </div>
      <AuthShowcase />
      {sessionData && (
        <>
          <CommentForm />
          <div className="flex w-full flex-row flex-wrap items-center justify-center gap-6">
            {commentsSuccess && comments && !commentsLoading ? (
              comments.map((comment) => (
                <Comment
                  author={comment.author}
                  content={comment.content}
                  key={comment.id}
                />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AboutMe;
