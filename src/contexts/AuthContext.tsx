import { createContext, type ReactNode, useState, useContext } from "react"
import type { User } from "../types/auth"

interface AuthContextType {
    user: User|null,
    login: (user:User)=>void,
    logout: ()=>void
}

const AuthContext=createContext<AuthContextType|null>(null)

interface Props{
    children: ReactNode
}


export function AuthProvider ({children}:Props)  {
    const [user, setUser] = useState<User|null>(null);
    const login=(user:User)=>{
        setUser(user)
    }
    const logout=()=>{
        setUser(null)
    }
  return (
    <AuthContext.Provider value={{user,login,logout}}>
    {children}
    </AuthContext.Provider>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(){
    const context=useContext(AuthContext);
    if(!context){
        throw new Error('useAuth to be used inside AuthProvider')
    }
    return context;
}
export default AuthContext
