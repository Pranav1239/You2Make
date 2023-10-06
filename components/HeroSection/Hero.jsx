import Image from "next/image";
import Test from "../../assets/pngegg.png";
export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="flex text-center justify-center">
        <h1 className="w-[80%] absolute text-center text-2xl lg:text-6xl font-bold cursor-default">
          You2make: Share your thoughts with the world and discover new ideas
        </h1>
        <div>
        <Image src={Test} alt="MainImage" />
      </div>
      </div>
    </div>
  );
}
