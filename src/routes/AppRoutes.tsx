import React from 'react'
import { Routes,Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Favourites from '../pages/Favourites'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<MainLayout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/favourites' element={<Favourites/>}></Route>
            <Route path='/search' element={<Search/>}></Route>
          
        </Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>

    )
}

export default AppRoutes
