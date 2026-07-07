import axios from "axios";
import type { NewPost } from "../types/newpost";

export async function createPost(post: NewPost){
    const res= await axios.post("https://jsonplaceholder.typicode.com/posts",post);
    return res.data;
}