import React from 'react'
import bcg_img from "../img/cheerful-attractive-young-woman-with-black-hair-walking.jpg";
import "./Home.css"
import "./Ticker.js"


const Home = () => {
  return (
      <div className='home'>
          <img className="home_img" src={bcg_img} alt="college-girl"/>
          <div className='btn-cont'>
            <div>
                <button>Apply</button>
            </div>
            <div>
                <button>Contact</button>
            </div>
      </div>
          
    </div>
  )
}

export default Home
