"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer , toast  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddBlogBtn() {
    const { status } = useSession();
    const HandleError = () => {
        toast.error("Please login to access", { theme: "colored" });
      };
    
  return (
    <div>
         {
        status === 'authenticated' ? (
          <Link href={"/addBlog"} className="">
          <div className="mt-4 mb-4  bg-blue-600 hover:bg-blue-800 py-2 w-full text-center">
            Add a Blog
          </div>
        </Link>
        ) : (
          <div onClick={HandleError}>
          <div className="mt-4 mb-4  cursor-pointer bg-blue-600 hover:bg-blue-800 py-2 w-full text-center">
            Add a Blog
          </div>
        </div>
        )
      }
    </div>
  )
}
