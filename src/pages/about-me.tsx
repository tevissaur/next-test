import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Article from "~/components/article";
import AuthShowcase from "~/components/auth";
import Comment from "~/components/comment";
import CommentForm from "~/components/comment-form";
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
    <div className="flex flex-col items-center justify-center gap-20">
      <Image
        className="rounded-full"
        src="https://via.placeholder.com/640x640"
        alt="this is a placeholder image"
        width={360}
        height={360}
      />
      {!isLoading && isSuccess && aboutMeArticle
        ? aboutMeArticle.map((article) => (
            <Article
              title={article.title}
              content={article.content}
              key={article.id}
            />
          ))
        : "Loading!"}

      <AuthShowcase />
      {sessionData && (
        <>
          <CommentForm />
          <div className="flex flex-row flex-wrap justify-center items-center gap-6">
            {commentsSuccess && comments && !commentsLoading
              ? comments.map((comment) => (
                  <Comment
                    author={comment.author}
                    content={comment.content}
                    key={comment.id}
                  />
                ))
              : "Loading!"}
          </div>
        </>
      )}
    </div>
  );
};

export default AboutMe;
