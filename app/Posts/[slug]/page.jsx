import Image from "next/image";
import Comments from "@/components/Comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`https://you2-make-pranav1239s-projects.vercel.app/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export default async function page({ params }) {
  const { slug } = params;
  const data = await getData(slug);
  return (
    <div>
      <div className=" mt-8 flex flex-col justify-center lg:flex-row">
        <div className="mx-3 my-3">
          <h1 className="text-4xl font-bold mb-4">{data?.title}</h1>
          <div>
            <h1 className="text-4xl font-normal mt-3 mb-2">Summary</h1>
            <p className="text-sm lg:text-2xl p-3">{data?.sum}</p>
          </div>
        </div>
        {data?.img && (
          <Image src={data.img} alt="Image Not Found" width={600} height={400} />
        )}
      </div>
      <div>
        <h1 className="text-5xl  mt-4 font-bold mb-4">Description</h1>
        <p className="mt-4 text-sm lg:text-xl lg:mt-0 mb-4 lg:mb-4">{data?.desc}</p>
      </div>
      <div className="flex mt-11 mb-6 items-center">
        {
          data?.user?.image &&   
          <Image
          src={data.user.image}
          alt="Image not available"
          width={10}
          height={10}
          className="w-10 h-10 rounded-full mr-4"
        />
        }
        <div className="text-sm">
          <p className="text-white leading-none">{data?.user.name}</p>
          <p className="text-white">{data?.createdAt}</p>
        </div>
      </div>
      <hr />
      {/* <div className="mt-10">
        <h1 className="text-4xl font-extrabold">Comments</h1>
      </div>
      <Comments postSlug={slug} /> */}
    </div>
  );
}
