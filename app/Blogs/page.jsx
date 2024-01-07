import CardList from "@/components/CardList/CardList";
import CategoriesList from "@/components/Categories/CategoriesList";
import { FaArrowDown } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBlogBtn from "@/components/Common/AddBlogBtn";

export default function page({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className="overflow-hidden">
      <ToastContainer />
      <div className="p-2">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl xl:font-medium font-light">
        Welcome to You2Make, where you can effortlessly add your unique and captivating blog posts to our platform!
        </h1>
      </div>
      <div className="arrow flex justify-center items-center mt-4 mb-8 ArrowUpAndDown">
        <FaArrowDown size={25} />
      </div>
      <div>
        <AddBlogBtn />
      </div>
      <div>
        <CategoriesList />
      </div>
      <div>
        <CardList page={page} cat={cat} />
      </div>
    </div>
  );
}
