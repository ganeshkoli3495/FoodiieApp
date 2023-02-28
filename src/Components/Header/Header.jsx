import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../../../utils/store'
import foddie from '../../assets/Images/foddie.png'
import './Header.css'

const Title = () => {
    return (
        <>
        <a href="/" >
        <img src={foddie} 
        className="logo"
        alt='Foodie'
        width={100}
      
        />
    </a>
        </>
    )
}


const Header = () => {

  const cartItem = useSelector((store) => store.cart.items);

  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
    <div className='nav_menu '>
      <div className='nav_bar max-width'>
          <Title />
        <div className='menu'>
        <ul>
          
            <li><Link to="/" >Home</Link></li>
          
            <li><Link to="/About">About</Link></li>
          <li><Link to="/Cart">Cart - {cartItem.length} items</Link></li>
          </ul>
         { isLogin ? (
          <button 
          className='btn' onClick={() => setIsLogin(false)}
          >Logout</button>
         ): (
          <button
          className='btn' onClick={() => setIsLogin(true)}
          >Login</button>
         )}
        </div>
          
      </div>
    </div>
    
    </>
  )
}

export default Header