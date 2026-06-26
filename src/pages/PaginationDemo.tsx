import { useState} from "react"

const PaginationDemo = () => {
    const items = Array.from({ length: 100 }, (e, index) => ({
        id: index + 1,
        name: `Item ${index + 1}`
    }))
    const [currentPg, setcurrentPg] = useState(1)
    const itemsPerPg=10;

    const startIndex=(currentPg-1)*itemsPerPg;
    const endIndex=startIndex+itemsPerPg;
    const currentItems=items.slice(startIndex,endIndex);

    const totalPages= Math.ceil(items.length/itemsPerPg);

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
                    <button key={index} onClick={()=>setcurrentPg(index+1)}>{index+1}</button>
                )
            )
        }
        <button disabled={currentPg===1} onClick={()=>setcurrentPg(currentPg-1)}>Prev</button>
        <button disabled={currentPg===totalPages} onClick={()=>setcurrentPg(currentPg+1)}>Next</button>
        </>
    )
}

export default PaginationDemo