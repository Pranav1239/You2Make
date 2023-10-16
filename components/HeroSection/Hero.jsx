import Image from "next/image";
import Test from "../../assets/pngegg.png";
export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="flex text-center flex-col justify-center">
        <div>
          <h1 className=" text-center text-2xl md:text-4xl lg:text-6xl  cursor-default">
            <span className="font-bold text-blue-700">You2make: </span>Share
            your thoughts with the world and discover new ideas
          </h1>
        </div>
        <div className="mt-10 items-center flex flex-col md:flex-row">
          <div className="mt-4 flex justify-center items-center">
            <Image src={Test} width={800} height={800} alt="MainImage" />
          </div>
          <div className="w-full lg:w-[44%] text-sm flex gap-4 flex-col text-left">
            <h1 className="mt-8 text-xl lg:text-3xl font-bold">Unleash your creativity and join the <span className="text-blue-700">conversation now!</span></h1>
            <p>Welcome to You2make, the digital haven for those who seek to share their insights, spark conversations, and uncover new perspectives. With a user-centric focus, this platform <span className="text-blue-700">lets you dive headfirst into the world of blogging and discussions, thanks to the vision of a single devoted developer.</span></p>
            <p>Our mission is to empower you to make your mark on the digital world. Whether you're a seasoned writer or a budding enthusiast, You2make is your stage to express your thoughts, discoveries, and ideas. It's a vibrant space where creators meet, connect, and collaborate, <span className="text-blue-700">all while appreciating the effort of a solo developer who crafted this unique platform.</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
