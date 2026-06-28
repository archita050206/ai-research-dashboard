import { useFavourites } from '../contexts/FavouritesContext'

const Favourites = () => {
  const {favourites, removeFavourite}=useFavourites();

  return (
    <div>
      {favourites && favourites.length>0?(<>
      {favourites.map((ele)=>(
        <div key={ele.id}>
          <p>{ele.display_name}</p>
          <p>{ele.publication_year}</p>
          <button onClick={()=>removeFavourite(ele.id)}>💔</button>
          </div>
      ))
      }</>):(<><h1>No favourites found!</h1></>)}

      
    </div>
  )
}

export default Favourites
