import axios from "axios";

export async function getPapers(query:string,page:number){
    const res=await axios.get(`https://api.openalex.org/works?search=${query}&page=${page}`);
    
    return res.data.results;
}