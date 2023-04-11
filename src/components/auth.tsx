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
        className="rounded-full bg-gradient-to-r from-[rgba(212,124,121,0.4)] to-[rgba(36,38,37,0.4)] px-10 py-3 font-semibold text-white no-underline transition-all duration-300 shadow-md hover:shadow-xl hover:from-[rgba(212,124,121,0.8)] hover:to-[rgba(36,38,37,0.8)]"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export default AuthShowcase;
