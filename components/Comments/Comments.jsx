"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import useSWR from "swr";
const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const { status } = useSession();

  const [desc, setDesc] = useState("");
  console.log(desc);
  const SubmitComment = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  // const DeleteComment = async () => {
  //   await fetch("/api/comments", {
  //     method: "DELETE",
  //     body: JSON.stringify({ desc, postSlug }),
  //   });
  //   mutate();
  // };

  return (
    <div>
      {status === "authenticated" ? (
        <div className="mt-8 mb-12 lg:mt-14">
          <textarea
            placeholder="Add your comment..."
            onChange={(e) => setDesc(e.target.value)}
            className="p-2 focus:outline-1 focus:outline-blue-500 font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-[60vw]"
          ></textarea>
          <div className="">
            <button
              onClick={SubmitComment}
              className="text-sm font-semibold absolute bg-[#4F46E5] w-fit text-white py-2 rounded px-3"
            >
              Post
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-6 font-bold text-3xl">Sign in to leave a comment.</div>
      )}

      <div className="">
        <br />
        <div className="">
          {isLoading
            ? "loading"
            : data.map((item) => (
                <div className="mt-10 mb-6 flex flex-col" key={item._id}>
                  <div className="flex flex-row">
                    {item?.user?.image && (
                      <Image
                        src={item.user.image}
                        alt=""
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    <p className="mx-4">{item.user.name}</p>
                    {/* <button onClick={DeleteComment}>
                      <RiDeleteBin6Line />
                    </button> */}
                  </div>
                  <div className="p-4">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
