import { useContext, type ReactNode, useState, createContext } from "react";
import type { Paper } from "../types/paper";

interface FavouritesContextType{
    favourites: Paper[],
    addFavourite: (paper:Paper)=>void,
    removeFavourite: (id:string)=>void
}
const FavouritesContext=createContext<FavouritesContextType|null>(null);

interface Props{
    children: ReactNode;
}
export function FavouritesProvider({children}:Props){
    const [favourites, setfavourites] = useState<Paper[]>([]);
    const addFavourite=(paper:Paper)=>{
        const alreadyExist= favourites.some((ele)=>ele.id===paper.id)
        if(!alreadyExist){
            setfavourites(prev=>[...prev,paper]);
        }
    }
    const removeFavourite=(id:string)=>{
        const updated=favourites.filter((ele)=>ele.id!==id);
        setfavourites(updated);
    }
    return(
        <FavouritesContext.Provider value={{favourites,addFavourite,removeFavourite}}>
            {children}
            </FavouritesContext.Provider>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export function useFavourites(){
    const context=useContext(FavouritesContext);
    if(!context){
        throw new Error('useFavourites to be used inside FavouritesProvider');
    }
    return context;
}