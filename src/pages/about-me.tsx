import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Article from "~/components/article";
import AuthShowcase from "~/components/auth";
import { DefaultStyleButton } from "~/components/button";
import Comment from "~/components/comment";
import CommentForm from "~/components/comment-form";
import Loading from "~/components/alert";
import { api } from "~/utils/api";
import Alert from "~/components/alert";

const AboutMe: NextPage = () => {
  const {
    data: aboutMeArticle,
    isLoading,
    isError,
    isSuccess,
    error,
  } = api.example.getArticlesByTitle.useQuery({ title: "About Me" });
  const {
    data: comments,
    isLoading: commentsLoading,
    isError: commentsIsError,
    isSuccess: commentsIsSuccess,
    error: commentsError,
  } = api.example.getArticlesByTitle.useQuery({ title: "review" });
  const { data: sessionData } = useSession();

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-20 w-full sm:w-1/2">
      <Image
        className="rounded-full"
        src="https://avatars.githubusercontent.com/u/65460369?s=400&u=5d8067fcf2e854dba1e991ab49be147da697114c&v=4"
        alt="this is a placeholder image"
        width={360}
        height={360}
      />
        {isLoading && <Alert loading variant="warning" />}
        {isError && <Alert error={error.message} variant="error" />}
        {!isLoading &&
          isSuccess &&
          aboutMeArticle &&
          aboutMeArticle.map((article) => (
            <Article
              title={article.title}
              content={article.content}
              key={article.id}
            />
          ))}
      <div className="flex flex-row items-center justify-center gap-20">
        <DefaultStyleButton
          href={"https://www.linkedin.com/in/tevis-r-34014147/"}
        >
          {" "}
          LinkedIn{" "}
        </DefaultStyleButton>
        <DefaultStyleButton href={"https://github.com/tevissaur"}>
          {" "}
          Github{" "}
        </DefaultStyleButton>
      </div>
      <AuthShowcase />
      {sessionData && (
        <>
          <CommentForm />
          <div className="flex w-full flex-row flex-wrap items-center justify-center gap-6">
            {commentsLoading && (
              <Alert loading variant="primary" />
            )}
            {commentsIsError && (
              <Alert error={commentsError.message} variant="error" />
            )}

            {commentsIsSuccess &&
              comments &&
              !commentsLoading &&
              comments.map((comment) => (
                <Comment
                  author={comment.author}
                  content={comment.content}
                  key={comment.id}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AboutMe;
