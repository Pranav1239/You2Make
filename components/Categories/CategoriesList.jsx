import Link from "next/link";
// import Image from "next/image";

const CategoriesList = async () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly">
      <Link className="button cursor-pointer button-gradient up" href={"/Blogs"}>
        <p className="button-text bg-transparent">All</p>
      </Link>
      <Link
       className="button cursor-pointer button-gradient up"
        href={"/Blogs?cat=coding"}
      >
        <p className="button-text bg-transparent">Coding</p>
      </Link>
      <Link
        className="button cursor-pointer button-gradient up"
        href={"/Blogs?cat=travel"}
      >
     <p className="button-text bg-transparent">Travel</p>
      </Link>
      <Link
        className="button cursor-pointer button-gradient up"
        href={"/Blogs?cat=food"}
      >
           <p className="button-text bg-transparent">Food</p>
      </Link>
      <Link
        className="button cursor-pointer button-gradient up"
        href={"/Blogs?cat=fashion"}
      >
     <p className="button-text bg-transparent">Fashion</p>
      </Link>
      <Link
        className="button cursor-pointer button-gradient up"
        href={"/Blogs?cat=health"}
      >
       <p className="button-text bg-transparent">Health</p>
      </Link>
      <Link
        className="button cursor-pointer button-gradient up"
        href={"/Blogs?cat=events"}
      >
        <p className="button-text bg-transparent">Events</p>
      </Link>
      <Link
        className="button cursor-pointer button-gradient up"
        href={"/Blogs?cat=others"}
      >
      <p className="button-text bg-transparent">Others</p>
      </Link>
    </div>
  );
};

export default CategoriesList;
