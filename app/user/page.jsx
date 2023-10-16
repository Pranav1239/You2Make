"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function page() {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div className="flex justify-center items-center flex-col gap-6">
        <button
          onClick={() => signOut()}
          className="bg-red-600 p-3 font-bold hover:bg-red-800 w-[20%]"
        >
          Logout
        </button>
        </div>

      ) : (
        <div className="flex justify-center items-center flex-col gap-6">
          <button
            onClick={() => signIn("google")}
            className="bg-blue-600 p-3 font-bold hover:bg-blue-800 w-[20%]"
          >
            Login with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="bg-blue-600 p-3 font-bold hover:bg-blue-800 w-[20%]"
          >
            Login with Github
          </button>
        </div>
      )}
    </div>
  );
}
