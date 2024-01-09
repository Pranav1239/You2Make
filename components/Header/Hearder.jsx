"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Hearder() {
  const { status } = useSession();
  return (
    <nav className="flex justify-around p-4 items-center">
      <div>
        <Link href={"/"}>
          <h1 className="text-xl lg:text-2xl font-extrabold cursor-default">You2Make.</h1>
        </Link>
      </div>
      <div className="flex flex-row">
        <div>
          <Link href={"/"} className="mx-2 hover:underline">
            Home
          </Link>
        </div>

        <Link href={"/Blogs"} className="mx-2 hover:underline">
          Blogs
        </Link>
        <div>
          <div>
            {status === "authenticated" ? (
              <Link href={"/user"} className="mx-2 hover:underline">
                Logout
              </Link>
            ) : (
              <Link href={"/user"} className="mx-2 hover:underline">
                Login
              </Link>
            )}
          </div>
          {/* <SignInOut /> */}
        </div>
      </div>
    </nav>
  );
}
