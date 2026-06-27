import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import type { User } from '../types/user'
import { getUsers } from '../services/userService'
import { useDebounce } from '../hooks/useDebounce'


const SearchDemo = () => {

  const { data, loading, errors } = useFetch<User[]>(getUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedTerm = useDebounce(searchTerm, 500);
  const searchT =
    (data || []).filter((ele) => (
      ele.name.toLowerCase().includes(debouncedTerm.toLowerCase())
    ))
  if (errors) return <h2>Error in loading data</h2>
  if (loading) return <h2>Loading</h2>
  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {debouncedTerm.length>0 ?
        (
          searchT.map((ele) => (
            <p key={ele.id}>{ele.name}</p>
          ))
        ) : (<h2>No users found!</h2>)
      }
    </div>
  )
}

export default SearchDemo
