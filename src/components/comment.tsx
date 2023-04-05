import { type NextPage } from "next";

type CommentProps = {
  author: string;
  content: string;
};

const Comment: NextPage<CommentProps> = ({ author, content }) => {

  return (
      <div
        className="flex flex-col w-full md:w-2/5 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 transition-all duration-200"
      >
        <div className="text-lg">{content}</div>
        <span className="text-2xl font-bold text-center"> - {author}</span>
      </div>
  );
};

export default Comment;
