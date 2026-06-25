
import { Link,Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const MainLayout = () => {
    const {user}=useAuth();
  return (
    <>
    <nav>
        <Link to='/'>Home</Link> | 
        <Link to='/search'>Search</Link> |
        <Link to='/favourites'>Favourites</Link> |
        {user?(<>{user.name}</>):(<></>)}
    </nav>
    <main>
      <Outlet></Outlet>
    </main>
    </>
  )
}

export default MainLayout
