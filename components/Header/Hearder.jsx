import Link from "next/link";
import SignInOut from "./SignInOut";
export default function Hearder() {
  return (
    <nav className="flex justify-around p-4 items-center">
      <div>
        <h1 className="text-xl font-extrabold cursor-default">You2Make.</h1>
      </div>
      <div className="flex flex-row">
        <Link href={"/"} className="mx-2 hover:underline">
          Home
        </Link>
        <Link href={"/Blogs"} className="mx-2 hover:underline">
          Blogs
        </Link>
      </div>
      <div>
        <SignInOut />
        </div>
    </nav>
  );
}
