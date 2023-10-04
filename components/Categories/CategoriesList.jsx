import { MdOutlineTravelExplore } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { FaSnowman } from "react-icons/fa";
import { FaCloudMeatball } from "react-icons/fa";
// import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoriesList = async () => {
  
  const data = await getData();

  return (
    <div className="flex  flex-col lg:flex-row justify-center items-center lg:justify-evenly">
      {/* {data?.map((item) => (
        <Link href={`/Blogs?cat=`} key={item._id}>
          <div className=" flex justify-center items-center">
            <FaSnowman/>
          <h1 className="mx-3 hover:underline">{item.title}</h1>
          </div>
        </Link>
      ))} */}
       <Link className="hover:underline mx-1 my-1 font-medium" href={"/Blogs"}>All</Link>
       <Link className="hover:underline mx-1 my-1 font-medium" href={"/Blogs?cat=coding"}>Coding</Link>
       <Link className="hover:underline mx-1 my-1 font-medium" href={"/Blogs?cat=travel"}>Travel</Link>
       <Link className="hover:underline mx-1 my-1 font-medium" href={"/Blogs?cat=food"}>Food</Link>
       <Link className="hover:underline mx-1 my-1 font-medium" href={"/Blogs?cat=fashion"}>Fashion</Link>
       <Link className="hover:underline mx-1 my-1 font-medium" href={"/Blogs?cat=health"}>Health</Link>
       <Link className="hover:underline mx-1 my-1 font-medium" href={"/Blogs?cat=events"}>Events</Link>
       <Link className="hover:underline mx-1 my-1 font-medium" href={"/Blogs?cat=others"}>Others</Link>
    </div>
  );
};

export default CategoriesList;