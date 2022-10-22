import React from 'react'
import "./home.css"

import img1 from "../assets/card-img1.png"
import img2 from "../assets/card-img2.png"
import img3 from "../assets/card-img3.png"
import img4 from "../assets/card-img4.png"

const Home = () => {
  return (
   <div className="home">
      <ul className= 'row'>
        <li className='col-md-3'>
          <div className="card">
            <img className="card-img"  src= {img1} alt=""/>
            <div className="card-body">
              <h3 className="card-title">A Brief History Of Creation</h3>
              <p>80k views  ·  3 days ago</p>
              <p>Dollie Blair</p>
            </div>
          </div>
        </li>

        <li className='col-md-3'>
          <div className="card">
            <img className="card-img"  src= {img1} alt=""/>
            <div className="card-body">
              <h3 className="card-title">A Brief History Of Creation</h3>
              <p>80k views  ·  3 days ago</p>
              <p>Dollie Blair</p>
            </div>
          </div>
        </li>

        <li className='col-md-3'>
          <div className="card">
            <img className="card-img"  src= {img1} alt=""/>
            <div className="card-body">
              <h3 className="card-title">A Brief History Of Creation</h3>
              <p>80k views  ·  3 days ago</p>
              <p>Dollie Blair</p>
            </div>
          </div>
        </li>

        <li className='col-md-3'>
          <div className="card">
            <img className="card-img"  src= {img1} alt=""/>
            <div className="card-body">
              <h3 className="card-title">A Brief History Of Creation</h3>
              <p>80k views  ·  3 days ago</p>
              <p>Dollie Blair</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Home