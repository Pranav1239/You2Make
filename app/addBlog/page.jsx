"use client";
import { app } from "@/utils/firebase";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function page() {
  const { status } = useSession();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [media, setMedia] = useState("");
  const [sum, setSum] = useState("");
  const [desc, setDes] = useState("");
  const [catSlug, setCatSlug] = useState("");

  // console.log(title , sum , des);

  const router = useRouter();

  

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const SubmitPost = async (event) => {
    event.preventDefault()
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        sum,
        desc,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "others", //If not selected, choose the general category
      }),
    });
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/Posts/${data.slug}`);
    }

  };

  return (
    <div className="overflow-hidden">
      {status === "authenticated" ? (
        <form action="" onSubmit={SubmitPost}>
        <div className="flex w-full flex-col gap-6">
          <div>
            <input
              className=" p-2 focus:outline-0 px-4 text-sm font-bold"
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button
              type="submit"
              className="bg-green-700 p-2 mx-4 px-4 text-sm font-bold"
            >
              Add Blog
            </button>
          </div>
          <div className="">
            <br />
            <input
              type="text"
              placeholder="Title"
              className="p-4  focus:outline-0 w-full focus:border-none"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <select
            className="bg-transparent block w-full p-3 border-none text-white text-sm rounded-lg"
            onChange={(e) => setCatSlug(e.target.value)}
          >
            <option value="other">others</option>
            <option value="coding">coding</option>
            <option value="food">food</option>
            <option value="travel">travel</option>
            <option value="fashion">fashion</option>
            <option value="health">health</option>
            <option value="events">events</option>
          </select>
          <div>
            <br />
            <textarea
              placeholder="Summary"
              className="p-2 focus:outline-0 w-full"
              cols="30"
              rows="2"
              onChange={(e) => setSum(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <textarea
              placeholder="Description"
              className="p-2 focus:outline-0 w-full"
              cols="30"
              rows="10"
              onChange={(e) => setDes(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        </form>
      ) : (
        <div className="text-center text-xl font-extrabold text-red-600">
          Please Login or Sign in in your account
        </div>
      )}
    </div>
  );
}
