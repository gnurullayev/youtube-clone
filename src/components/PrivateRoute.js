import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Home from '../pages/Home'
import Subscription from '../pages/Subscription'
import SubscribeWatch from '../pages/SubscribeWatch'
import Watch from '../pages/Watch'
import SearchVideoPages from '../pages/SearchVideoPages'

const PrivetRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/watch/subscribtions' element = {<SubscribeWatch/>}/>
        <Route path='/chanel/:id' element = {<Subscription/>}/>
        <Route path='/watch-video/:id' element = {<Watch/>}/>
        <Route path='/search-video' element = {<SearchVideoPages/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>   
    </>
  )
}

export default PrivetRoute