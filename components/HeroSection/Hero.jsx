import Image from "next/image";
import Test from "../../assets/pexels-pixabay-326055.jpg";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div>
        <h1 className="text-2xl lg:text-6xl font-bold cursor-default">
          You2make: Share your thoughts with the world and discover new ideas.
        </h1>
        <h2 className="lg:text-2xl font-medium mt-2 cursor-default">
        It is a place to connect with others who share your interests, and to learn new things from people all over the world. You can create posts, comment on other people's posts.
        </h2>
        <div className="mt-2 font-medium lg:text-xl cursor-default">
          <li>Add your own blog.</li>
          <li>visit others' blogs.</li>
          <li>contact me using the links below. </li>
          <li>Want the code? Check it out!</li>
        </div>
      </div>
      <div className="flex justify-center flex-col lg:flex-row">
        <div className="mt-6 opacity-50">
          <Image src={Test} alt="ImageNotFound" height={400} />
        </div>
        <div className="mt-6 lg:w-[500px] mx-4">
            <h1 className="font-medium lg:text-3xl cursor-default">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus.</h1>
            <p className="font-thin lg:text-xl mt-2 cursor-default">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non assumenda dicta nihil cum ipsum earum tempora sunt fuga illo. Quasi ipsum maxime vel nesciunt saepe, aliquid nam aperiam!.</p>
            <Link href={"/addBlog"}>
            <p className="text-blue-600 mt-3 underline">AddBlog</p>
            </Link>
        </div>
      </div>
    </div>
  );
}
