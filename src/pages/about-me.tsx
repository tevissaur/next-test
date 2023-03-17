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
    data: reviews,
    isLoading: reviewsLoading,
    isError: reviewsError,
    isSuccess: reviewsSuccess,
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
          <div className="flex flex-row flex-wrap justify-center items-center gap-10">
            {reviewsSuccess && reviews && !reviewsLoading
              ? reviews.map((review) => (
                  <Comment
                    author={review.author}
                    content={review.content}
                    key={review.id}
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
