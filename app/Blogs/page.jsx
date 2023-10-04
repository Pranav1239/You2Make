import Card from "@/components/Card/Card";
import CardList from "@/components/CardList/CardList";
import CategoriesList from "@/components/Categories/CategoriesList";
import {FaArrowDown} from "react-icons/fa"
import Link from "next/link";
export default function page({searchParams}) {
  const page =  parseInt(searchParams.page) || 1;
  const {cat} = searchParams;

  return (
    <div className="overflow-hidden">
        <div className="p-2">
          <h1 className="text-3xl lg:text-5xl font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, totam.</h1>
        </div>
        <div className="arrow flex justify-center items-center mt-4 mb-8 ArrowUpAndDown">
          <FaArrowDown size={25} />
        </div>
        <Link href={"/addBlog"} className="">
        <div className="mt-4 mb-4  bg-blue-600 py-2 w-full text-center">
            Add a Blog
        </div>
        </Link>
        <div>
            <CategoriesList />
        </div>
      <div>
        <CardList page={page} cat={cat} />
      </div>
    </div>
  );
}
