import { usePagination } from "../hooks/usePagination"
import useFetch from "../hooks/useFetch"
import { getUsers } from "../services/userService"
import type { User } from "../types/user"

const PaginationDemo = () => {
    
    // const [currentPg, setcurrentPg] = useState(1)
    // const itemsPerPg=10;

    // const startIndex=(currentPg-1)*itemsPerPg;
    // const endIndex=startIndex+itemsPerPg;
    // const currentItems=items.slice(startIndex,endIndex);

    // const totalPages= Math.ceil(items.length/itemsPerPg);

    const {data, loading, errors}= useFetch<User[]>(getUsers); //-->can be used aw
    //const data=useFetch<User[]>(getUsers);
    const {currentPg,
        currentItems,
        totalPages,
        nextPage,
        prevPage,
        goToPage}=usePagination(data??[],5);
    
    
    if(errors)return <h2>{errors}</h2>
    if(loading)return <h2>Loading...</h2>
    return (
        <>
        <h2>{totalPages}</h2>
        {currentItems.map((ele)=>(
            <p>{ele.name}</p>

        ))}

        <h2>All pages: {currentPg}</h2>
        {
            Array.from(
                {length: totalPages},
                (ele,index)=>(
                    <button key={index} onClick={()=>goToPage(index+1)}>{index+1}</button>
                )
            )
        }
        <button disabled={currentPg===1} onClick={prevPage}>Prev</button>
        <button disabled={currentPg===totalPages} onClick={nextPage}>Next</button>
        </>
    )
}

export default PaginationDemo