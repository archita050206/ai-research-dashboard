//import axios from "axios";
import api from "../api/axios";
//const API_KEY= import.meta.env.VITE_OPENALEX_API_KEY
export async function getPapers(query:string){
   // console.log(`getpapers is working ${query} with key ${API_KEY}`)
    //const res=await axios.get(`https://api.openalex.org/works?search=${encodeURIComponent(query)}&api_key=${API_KEY}`);
    const res=await api.get('/works',{
        params: {
            search: query
        }
    })
    return res.data.results;
}