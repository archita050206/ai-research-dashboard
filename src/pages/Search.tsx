import { useState,useEffect } from "react"
import { useDebounce } from "../hooks/useDebounce"
import type { Paper } from "../types/paper";
import { getPapers } from "../services/paperService";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const query=useDebounce(searchTerm,500);//--> final word to search
  const [page, setPage] = useState(1);
  //const {data,loading,errors}=useFetch<Paper[]>(getPapers(query));
    const [data, setData] = useState<Paper[]>([])
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState("")

  useEffect(() => {
    async function fetchPapers(){
      try{
          setLoading(true);
          setErrors("");
          const res=await getPapers(query,page);
          setData(res);

      }
      catch{
        
        setErrors("Data could not be fetched!")
      }
      finally{
        setLoading(false);
      }
    }
    fetchPapers();
    console.log(page)
  }, [query,page])
  

  if(errors)return <h2>{errors}</h2>
  
  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      {loading && <h2>Loading...</h2>}
      {(data.length<=0)&& <h2>No match found!</h2>}
      {data?.map((ele)=>(
        <div key={ele.id}>
        <p>{ele.display_name}</p>
        <p>{ele.publication_year}</p>
        <br />
        </div>
      ))}
      <button onClick={()=>setPage((prev)=>prev+1)}>Next</button>
      <button onClick={()=>setPage((prev)=>prev-1)}>Prev</button>
    </div>

  )
}

export default Search
