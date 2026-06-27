import { useState } from "react";

export function usePagination<T>(
    data:T[],
    itemsPerPage: number
){
    const [currentPg, setcurrentPg] = useState(1)
    const startIndex= (currentPg-1)*itemsPerPage;
    const endIndex= itemsPerPage+startIndex;
    const totalPages= Math.ceil(data.length/itemsPerPage);
    const currentItems= data.slice(startIndex, endIndex);
    
    const nextPage=()=>{
        if(currentPg<totalPages)setcurrentPg(prev=>prev+1);

    }
    const prevPage=()=>{
        if(currentPg>1)setcurrentPg(prev=>prev-1);
    }
    const goToPage=(val:number)=>{
        setcurrentPg(val)
    }

    return {
        currentPg,
        currentItems,
        totalPages,
        nextPage,
        prevPage,
        goToPage
    }
}