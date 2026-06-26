import useFetch from "../hooks/useFetch";
import { getUsers } from "../services/userService";
import type { User } from "../types/user";


const Users = () => {
    // const [users, setUsers] = useState<User[]>([])
    // const [loading, setLoading] = useState(false)
    // const [errors, setErrors] = useState("")

    const {data,loading,errors}= useFetch<User[]>(getUsers);

    // useEffect(() => {
    //   async function fetchUsers(){
    //     try{
    //         setLoading(true);
    //         const allUsers=await getUsers();
    //         setUsers(allUsers);
    //     }
    //     catch{
    //         setErrors("Data could not be fetched");
    //     }
    //     finally{
    //         setLoading(false);
    //     }

    //   }
    //   fetchUsers();
    // }, [])
    
    if(errors){
        return <h2>Users could not be fetched!</h2>
    }
  return (
    <>
    {loading? (<><h1>Loading....</h1></>):(<>
        <h1>Users 9836159153</h1>
        {data?.map((ele)=>(
            <>
            <div key={ele.id}>
                <p>{ele.name}</p>
                <p>{ele.email}</p>
            </div>
            <br></br>
            </> 
        ))}
        </>)}
    </>
  )
}

export default Users
