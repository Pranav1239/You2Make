import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer
      id="dark-theme"
      className="bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-16 md:gap-12"
    >
      <div className="opacity-40">
        <hr />
      </div>
      <div className="flex justify-evenly flex-row ">
        <div className="flex flex-col gap-6">
          <label className="text-gray-400">Category</label>
          <ul className="flex flex-col gap-6">
            <Link 
            className="opacity-40 hover:opacity-100" href={"/Blogs?cat=coding"}
            >Coding</Link>
            <Link 
            className="opacity-40 hover:opacity-100" href={"/Blogs?cat=food"}
            >Foods</Link>
            <Link 
            className="opacity-40 hover:opacity-100" href={"/Blogs?cat=travel"}
            >Travling</Link>
            <Link 
            className="opacity-40 hover:opacity-100" href={"/Blogs?cat=others"}
            >Others</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-400">Main</label>
          <ul className="flex flex-col gap-6 ">
            <Link className="opacity-40 hover:opacity-100" href={"/Blogs"}>Blogs</Link>
            <Link className="opacity-40 hover:opacity-100" href={"/Blogs"}>Category blogs</Link>
            <Link className="opacity-40 hover:opacity-100" href={"/"}>Home</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-400">Contact</label>
          <ul className="flex flex-col gap-6  cursor-pointer ">
            <Link
            href={"https://www.instagram.com/pranav._pk9/"}
            className="opacity-40 hover:opacity-100">
              <FaInstagram />
            </Link>
            <Link
            href={"https://github.com/Pranav1239"}
            className="opacity-40 hover:opacity-100">
              <FaGithub />
            </Link>
            <Link
            href={"https://twitter.com/pranav7_X"}
            className="opacity-40 hover:opacity-100">
              <FaTwitter />
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
