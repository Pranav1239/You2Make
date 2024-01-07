import React from 'react'
import Image from 'next/image'
import { truncateText } from '@/utils/truncateText';
// import { useEffect, useState } from "react";

const getData = async (slug) => {
    const res = await fetch(`https://you2-make-pranav1239s-projects.vercel.app/api/comments?postSlug=${slug}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };
const CommentsGet = async ({postSlugAll}) => {

    const postSlug = postSlugAll
    const data = await getData(postSlug);
  return (
    <div className="">
      {data &&
        data.map((item) => (
          <div className="mt-10 mb-6 flex flex-col" key={item._id}>
            <div className="flex flex-row">
                <div>
              {item?.user?.image && (
                <Image
                  src={item.user.image}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
                </div>
                <div>
              <p className="mx-4">{item.user.name}</p>
              <p className='mx-4'>{truncateText(item.createdAt)}</p>
                </div>
            </div>
            <div className="mt-3">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
  </div>
  )
}

export default CommentsGet