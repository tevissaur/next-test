import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();


  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {!sessionData && (
          <>
            Sign in to leave a note
          </>
        )}
        {sessionData && (
          <>
            <Image
              width={100}
              height={100}
              src={sessionData.user?.image || ""}
              alt={sessionData.user?.name || ""}
            />
            <span>Logged in as {sessionData.user?.name}</span>
          </>
        )}
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

export default AuthShowcase;
