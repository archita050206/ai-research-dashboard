
import { getAllPapers } from "../services/allPaperService";
import type { Paper } from "../types/paper"
import { useState, useEffect, useRef } from "react"
import type{ YearStats } from "../types/yearStats";

const Papers = () => {
  const [data, setdata] = useState<Paper[]>([]);
  const [loading, setloading] = useState(false);
  const [errors, seterrors] = useState("");
  const workerRef = useRef<Worker | null>(null);
  const [stats, setstats] = useState<YearStats>({})

  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../workers/paperWorker', import.meta.url),
      {
        type: "module"
      }
    )
    workerRef.current.onmessage = (event) => {
      console.log(event.data);
      setstats(event.data);
    }
    return () => {
      workerRef.current?.terminate();
    }
  }, []);


  useEffect(() => {
    async function getPapers() {
      try {
        setloading(true);
        seterrors("");
        const res = await getAllPapers();
        setdata(res);
        workerRef.current?.postMessage(res);
      }
      catch {

        seterrors("Error in fetching data!");
      }
      finally {
        setloading(false);
      }
    }
    getPapers();

  }, []);

  

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <h2>Publication Statistics:</h2>
      {Object.entries(stats).map((ele)=>(
        <p key={ele[0]}>{ele[0]} -&gt; {ele[1]} papers</p>
      ))}
      {errors && <h2>{errors}</h2>}
      {data?.map((ele) => (
        <div key={ele.id}>
          <p>{ele.display_name}</p>
          <p>{ele.publication_year}</p>
          <br />
        </div>
      ))}
    </div>
  )
}

export default Papers
