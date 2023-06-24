import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to="/" style={{marginLeft:"75px"}}><b><h3>myShoppingSpot</h3></b></Link>
      <nav>
      <Link to="/cart"><button className="btn btn-primary" style={{marginRight:"75px"}}>Cart</button></Link>
      </nav>
    </div>
  )
}

export default Header;