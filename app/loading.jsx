import Image from 'next/image'
import Loading from '../assets/Quarter Circle Loading Image Gif.gif'
export default function loading() {
  return (
    <div className='flex items-center justify-center'>
 <Image src={Loading} className='bg-transparent' alt='loading' width={500} height={500} />
    </div>  
  )
}
