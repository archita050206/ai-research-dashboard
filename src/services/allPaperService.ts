import api from "../api/axios";

export async function getAllPapers(){
    const res=await api.get('/works');
    return res.data.results;

}