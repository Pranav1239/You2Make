"use client"
import { useRouter } from "next/navigation"

const Pagination = ({page , hasPrev , hasNext}) => {

    const router = useRouter();

    const ClickPrevious = ()=>{
        router.push(`?page=${page - 1}`)
    }

    const ClickNext = ()=>{
        router.push(`?page=${page + 1}`)
    }
  return (
    <div className="flex flex-row justify-between items-center">
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        disabled={!hasPrev}
        onClick={ClickPrevious}
        >Previous</button>

        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        disabled={!hasNext}
        onClick={ClickNext}
        >Next</button>
    </div>
  )
}

export default Pagination