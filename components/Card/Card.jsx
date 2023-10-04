import Image from 'next/image'
import Link from 'next/link'
export default function Card({key , item}) {
  return (
    <div className="mt-8 p-4 mb-8 max-w-sm w-full lg:max-w-full lg:flex" key={key}>
  <div className="lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
    {
      item?.img &&   <Image
      src={item.img}
      alt='Image not available'
      width={550}
      height={300}
      />
    }
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-blue rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm mb-6 text-white flex items-center">
        <b className='mx-2'>Category : </b>{item.catSlug}
      </p>
      <div className="text-white font-bold text-xl mb-2">{item.title.substring(0,50)}</div>
      <p className="text-white text-base w-[400px]">{item.sum.substring(0,140)}</p>
      <div className='mt-4 cursor-pointer text-blue-600  hover:underline font-medium'>
        <Link href={`/Posts/${item.slug}`}>
      <h2 className='text-blue-600 mb-4'>See more</h2>
        </Link>
    </div>
        <div className="flex items-center">
      <div className="text-sm">
        <p className="text-white"><b>Uploaded At : </b>{item.createdAt.substring(0,10)}</p>
      </div>
    </div>
    </div>

  </div>
</div>
  )
}


