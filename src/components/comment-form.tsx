import { useSession } from "next-auth/react";
import { useState } from "react";
import { api } from "~/utils/api";

const CommentForm: React.FC = () => {
  const [comment, setComment] = useState("");
  const { data: session } = useSession();
  const mutation = api.example.addComment.useMutation()

  const postComment = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    if (comment === "") return;
    await mutation.mutateAsync({ content: comment, author: session?.user.name || "Unknown" })
    setComment("");
  } 

  return (
    <form className="flex flex-col items-center justify-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl px-6 py-4" onSubmit={postComment}>
      <label
        htmlFor="message"
        className=" text-3xl font-extrabold tracking-tight text-white"
      >
        Send me a note!
      </label>
      <textarea
        className=" text-3xl transition-colors duration-200 font-extrabold tracking-tight text-white p-3 rounded-lg border-black border-2 bg-black/40 hover:bg-black/100 focus:bg-black/100"
        name="message"
        id="message"
        rows={10}
        value={comment}
        placeholder="This is a cool site!"
        onChange={(e) => setComment(e.currentTarget.value)}
      />

      <button type="submit" className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20">
        Send!
      </button>
    </form>
  );
};

export default CommentForm;
