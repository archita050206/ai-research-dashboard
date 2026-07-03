import { useState,useEffect,useRef } from "react"
import { useDebounce } from "../hooks/useDebounce"
import type { Paper } from "../types/paper";
import { getPapers } from "../services/paperService";
import { useFavourites } from "../contexts/FavouritesContext";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const query=useDebounce(searchTerm,500);//--> final word to search
  //const [page, setPage] = useState(1);
  //const {data,loading,errors}=useFetch<Paper[]>(getPapers(query));
    const [data, setData] = useState<Paper[]>([])
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState("")
  const {addFavourite}=useFavourites();
  const workerRef=useRef<Worker|null>(null);

  useEffect(() => {
     if(!query){
    //  setData([]);

      return;
    }
    async function fetchPapers(){
      console.log("Fetching papers")
      try{
          setLoading(true);
          setErrors("");
          const res=await getPapers(query);
          setData(res);
         workerRef.current?.postMessage(res); 


      }
      catch{
        
        setErrors("Data could not be fetched!")
      }
      finally{
        setLoading(false);
      }
    }
    fetchPapers();
    
  }, [query]);

  useEffect(() => {
    workerRef.current=new Worker(
      new URL("../workers/paperWorker.ts", import.meta.url),
      {
        type:"module"
      }

    );
    workerRef.current.onmessage=(event)=>{
      console.log(event.data)
    }
    return()=>{
      workerRef.current?.terminate();
    }
  }, [])
  

  
  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      {loading && <h2>Loading...</h2>}
      {/* {(data.length<=0)&& <h2>No match found!</h2>} */}
      {data?.map((ele)=>(
        <div key={ele.id}>
        <p>{ele.display_name}</p>
        <p>{ele.publication_year}</p>
        <button onClick={()=>addFavourite(ele)}>❤️</button>
        <br />
        </div>  
      ))}
      {errors && <h2>{errors}</h2>}
      {/* <button onClick={()=>setPage((prev)=>prev+1)}>Next</button>
      <button onClick={()=>setPage((prev)=>prev-1)}>Prev</button> */}
    </div>

  )
}

export default Search
