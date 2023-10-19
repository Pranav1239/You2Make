import Card from "../Card/Card"
import Pagination from "../Pagination/Pagination";

const getData = async (page , cat) => {
    const res = await fetch(`https://you2-make-pranav1239s-projects.vercel.app/api/posts?page=${page}&cat=${cat || ""}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };

const CardList = async ({page , cat}) => {

    const {posts , count} = await getData(page , cat);

    const POST_PER_PAGE = 3;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div>
        {
            posts?.map((item)=>(
                <Card item={item} key={item._id} />
            ))
        }
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList