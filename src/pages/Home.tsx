import { useAuth } from '../contexts/AuthContext'
const Home = () => {
  const {user,login,logout}=useAuth();

  return (
    <>
    {user?(
      <>
      <h1>Welcome {user.name}</h1>
      <h1>Your email: {user.email}</h1>
      <button onClick={logout}>Logout</button>
      </>
    ):(
      <>
      <button onClick={()=>login({
        id:1,name:"Archita",email: "archita123@gmail.com"
      })}>Login</button>
      </>
    )}
    </>
  )
}

export default Home