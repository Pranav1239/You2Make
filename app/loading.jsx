import Image from 'next/image';
import Loading from '../assets/loading.gif.gif';
export default function loading() {
  return (
    <div>
        <div className='flex justify-center items-center'>
            <Image
            src={Loading}
            alt='loading'
            width={280}
            height={280}
            />
        </div>
    </div>  
  )
}
