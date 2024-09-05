import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';
function Card() {
  return (
      
      <div className="arc-grid">
        
        <div className="arc-item">
        <Link to="/product">
          <img src="images/silverring.jpg" alt="Silver Rouge Ring" className="inner-image"  />
          <p>Silver Rouge Ring</p>
          <p> $ 11,000 </p>
          </Link>
          <div className='button'>
          <img src="whislist.png" className='w'></img>
          
          
          </div>
          
          </div>
         
        
       </div>
      
       
  );
}
export default Card;

