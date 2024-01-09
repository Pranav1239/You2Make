import Image from "next/image";
import Test from "../../assets/pngegg.png";
import Link from "next/link"
export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="flex text-center flex-col justify-center">
        <div>
          <h1 className="text-center text-2xl md:text-4xl lg:text-7xl cursor-default">
            <span className="font-bold text-blue-700">You2make: </span>Share
            your thoughts with the world and discover new ideas
          </h1>
        </div>
        <div className="mt-10 items-center flex flex-col xl:flex-row">
          <div className="mt-4 hidden xl:flex justify-center items-center">
            <Image src={Test} width={1000} height={800} alt="MainImage" />
          </div>
          <div className="mt-4 xl:hidden flex justify-center items-center">
            <Image src={Test} width={400} height={800} alt="MainImage" />
          </div>
          <div className="w-full text-left  lg:w-[500px] text-xl flex gap-4 flex-col ">
            <h1 className="mt-8 text-xl text-center lg:text-4xl font-bold">Unleash your creativity and join the <span className="text-blue-700">conversation now!</span></h1>
            <p>Welcome to You2make, the digital haven for those who seek to share their insights, spark conversations, and uncover new perspectives. With a user-centric focus, this platform <span className="text-blue-700">lets you dive headfirst into the world of blogging and discussions, thanks to the vision of a single devoted developer.</span></p>
            <div className="flex flex-row justify-evenly mt-5">
              <Link href={"/Blogs"} className="button cursor-pointer button-gradient up">
                <p className="button-text bg-transparent">Visit blogs</p>
                </Link>
              <Link href={"https://pranav7.vercel.app/"} target="_blank" className="button cursor-pointer button-gradient up">
              <p className="button-text bg-transparent">Visit Portfolio</p>
              </Link>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}
