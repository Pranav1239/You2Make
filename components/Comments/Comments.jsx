"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    mutate();
    setDesc(""); // Clear the input field after submission
  };

  return (
    <div>
      {status === "authenticated" ? (
        <div className="mt-8 mb-12 lg:mt-14">
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Add your comment..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="p-2 focus:outline-1 focus:outline-blue-500 font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-[60vw]"
            ></textarea>
            <div className="">
              <button
                type="submit"
                className="text-sm font-semibold absolute bg-[#4F46E5] w-fit text-white py-2 rounded px-3"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="mt-6 font-bold text-red-500 text-xl">
          Sign in to leave a comment.
        </div>
      )}
    </div>
  );
};

export default Comments;
