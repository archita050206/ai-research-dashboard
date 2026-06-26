import { useState, useEffect } from "react"
function useFetch<T>(
    fetchFunction: ()=>Promise<T>
){

    const [data, setData] = useState<T|null>(null)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState("")

    useEffect(() => {
      async function fetchdata(){
        try{
            setLoading(true)
            const res= await fetchFunction();
            setData(res)
            
        }
        catch{
            setErrors("Data could not be fetched")
            console.log(errors)
        }
        finally{
            setLoading(false)
        }
      }
      fetchdata();
    }, []);
    return{
        data,
        loading,
        errors
    }
    
}
export default useFetch; 