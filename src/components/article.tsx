import { type NextPage } from "next";

type ArticleProps = {
  title: string;
  content: string;
};

const Article: NextPage<ArticleProps> = ({ title, content }) => {

  return (
    <>
      <div
        className="flex w-5/6 md:w-1/2 lg:w-1/3 flex-col rounded-xl bg-[#242625]/40 p-4 text-white hover:bg-[#242625]/70 transition-all duration-500 shadow-xl"
      >
        <h3 className="text-2xl font-bold text-center">{title}</h3>
        <div className="text-lg">{content}</div>
      </div>
    </>
  );
};

export default Article;
