import Link from "next/link";
// import Image from "next/image";

const CategoriesList = async () => {
  return (
    <div className="flex  flex-col lg:flex-row justify-center items-center lg:justify-evenly">
      <Link className="hover:underline mx-1 my-1 font-medium" href={"/Blogs"}>
        All
      </Link>
      <Link
        className="hover:underline mx-1 my-1 font-medium"
        href={"/Blogs?cat=coding"}
      >
        Coding
      </Link>
      <Link
        className="hover:underline mx-1 my-1 font-medium"
        href={"/Blogs?cat=travel"}
      >
        Travel
      </Link>
      <Link
        className="hover:underline mx-1 my-1 font-medium"
        href={"/Blogs?cat=food"}
      >
        Food
      </Link>
      <Link
        className="hover:underline mx-1 my-1 font-medium"
        href={"/Blogs?cat=fashion"}
      >
        Fashion
      </Link>
      <Link
        className="hover:underline mx-1 my-1 font-medium"
        href={"/Blogs?cat=health"}
      >
        Health
      </Link>
      <Link
        className="hover:underline mx-1 my-1 font-medium"
        href={"/Blogs?cat=events"}
      >
        Events
      </Link>
      <Link
        className="hover:underline mx-1 my-1 font-medium"
        href={"/Blogs?cat=others"}
      >
        Others
      </Link>
    </div>
  );
};

export default CategoriesList;
