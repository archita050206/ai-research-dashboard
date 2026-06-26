
import type {Post} from '../types/post'
import useFetch from '../hooks/useFetch';
import { getPosts } from '../services/postService';

const Posts = () => {
    const {data,loading, errors}= useFetch<Post[]>(getPosts);

   
   
     if(errors){
      return <h1>Error in loading posts!</h1>
    }
  return (
    <>
    {loading?(<h1>Loading...</h1>):(
      <>
      {data?.map((ele)=>(
        <div>
          <p>Title: {ele.title}</p>
          <p>Body: {ele.body}</p>
          <br />
        </div>
      ))}
      </>
    )}
    </>
  )
}

export default Posts
