import React from 'react'
import "./Productdes.css"
import { Link } from 'react-router-dom'
function Productdes() {
  return (
    <div className='des'>
      <img src="arc.png" alt='arc' className='productimg'></img>
      <div className='add'>
      <h1>Elegant Ring</h1>
      <p>SK11</p>
      <p>$ 11,000</p>
      <p>Weight: 100g</p>
      <div className='carat'>
      <button>14k</button>
      <button>18k</button>
      <button>20k</button>
      <button>22k</button>
      <button>23k</button>
      <button>24k</button>
      </div>
      <div className='w'>
      <button>To Cart</button>
      <button><Link to="/Buyp">Purchase</Link></button>
      </div>
      
      </div>
    </div>
  )
}

export default Productdes
