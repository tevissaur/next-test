import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Article from "~/components/article";
import AuthShowcase from "~/components/auth";
import { DefaultStyleButton } from "~/components/button";
import Comment from "~/components/comment";
import { api } from "~/utils/api";
import Alert from "~/components/alert";
import { useEffect, useState } from "react";

const AboutMe: NextPage = () => {
  const {
    data: aboutMeArticle,
    isLoading,
    isError,
    isSuccess,
    error,
  } = api.example.getArticlesByTitle.useQuery({ title: "About Me" });
  const {
    data: commentsData,
    isLoading: commentsLoading,
    isError: commentsIsError,
    isSuccess: commentsIsSuccess,
    error: commentsError,
    refetch,
    isRefetching,
  } = api.example.getArticlesByTitle.useQuery({ title: "review" });
  const { data: sessionData } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(commentsData);
  const { mutate } = api.example.addComment.useMutation();

  useEffect(() => {
    setComments(commentsData);
  }, [commentsData]);

  useEffect(() => {
    if (commentsIsSuccess) {
      console.log(commentsData)
      setComments(commentsData);
    };
  }, [isRefetching, commentsIsSuccess])

  const postComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment === "") return;
    mutate({
      content: comment,
      author: sessionData?.user.name || "Unknown",
    })
    setComment("");
    refetch();
  };

  return (
    <div className="flex flex-col w-full md:w-3/4 lg:w-7/12 xl:w-1/2 2xl:w-1/4 items-center justify-center gap-10 p-5 py-10">
      <Image
        className="rounded-full shadow-xl"
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
      <div className="flex flex-row items-center justify-center gap-20 ">
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
        <div className="flex flex-col items-center gap-5">
          <form
            className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-white/20 px-6 py-4"
            onSubmit={(e) => postComment(e)}
          >
            <label
              htmlFor="message"
              className=" text-3xl font-extrabold tracking-tight text-white"
            >
              Send me a note!
            </label>
            <textarea
              className="w-full rounded-lg border-2 border-black bg-black/40 p-2 text-[1.5rem] font-semibold tracking-tight text-white transition-colors duration-200 hover:bg-black/80 focus:bg-black/80 sm:text-3xl md:font-extrabold"
              name="message"
              id="message"
              rows={10}
              value={comment}
              placeholder="This is a cool site!"
              onChange={(e) => setComment(e.currentTarget.value)}
            />

            <button
              type="submit"
              className="rounded-full bg-white/20 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/40 hover:shadow-lg"
            >
              Send!
            </button>
          </form>
          <div className="flex flex-row flex-wrap items-center justify-center gap-6">
            {commentsLoading && <Alert loading variant="primary" />}
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
        </div>
      )}
    </div>
  );
};

export default AboutMe;
