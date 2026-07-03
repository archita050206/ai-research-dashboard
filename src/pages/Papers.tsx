
import { getAllPapers } from "../services/allPaperService";
import type { Paper } from "../types/paper"
import { useState,useEffect } from "react"

const Papers = () => {
  const [data, setdata] = useState<Paper[]>([]);
  const [loading, setloading] = useState(false);
  const [errors, seterrors] = useState("");

  useEffect(() => {
    async function getPapers(){

    
    try {
      
        setloading(true);
        seterrors("");
        const res = await getAllPapers();
        setdata(res);
      
    }
    catch{
        
        seterrors("Error in fetching data!");
      }
      finally{
        setloading(false);
      }
    }
      getPapers();

    }, [])
    if(loading){
      return <h2>Loading...</h2>
    }
  return (
    <div>
      {errors&& <h2>{errors}</h2>}
      {data?.map((ele)=>(
        <div id={ele.id}>
        <p>{ele.display_name}</p>
        <p>{ele.publication_year}</p>
        </div>
      ))}
    </div>
  )
}

export default Papers
