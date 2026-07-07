import { useMutation } from '@tanstack/react-query'

import { createPost } from '../services/postMutationService'
import { useState } from 'react'



const CreatePost = () => {
    const {mutate, isPending}= useMutation({
        mutationFn: createPost,
        onSuccess: (data)=>{
            console.log(data);
        },
        onError: (err)=>{
            console.log(err);
        }
    })
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleCreate=()=>{
        mutate({
            title,
            body,
            userId:1
        })
        
    }

  return (
    <>
    <div>CreatePost</div>
    <form action="">
        Title: <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        Body: <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}/>
        <button onClick={handleCreate} disabled={isPending}>
        {isPending?<h2>Creating...</h2>:<h2>Create Post</h2>}
        </button>
    </form>
    </>
  )
}

export default CreatePost