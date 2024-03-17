import React, { useState } from 'react'
import css from './Header.module.css'
import logo from '../../assests/logo2.jpg'
import { CgShoppingBag } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";
const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true)

  const toggleMenu =() =>{
    setShowMenu((ShowMenu)=>!ShowMenu)
  }
  return (
    <div className={css.container}>
      <div className={css.logo}>
      <img src={logo} alt='' />
      <span>Glamour +</span>
      </div>

      <div className={css.right}>

      <div className={css.bars}  onClick={toggleMenu}>
        <VscThreeBars/>
        </div>
       
        <ul className={css.menu} style={{display:ShowMenu? 'inherit':'none'}}>
            <li> Collections </li>
            <li>Brands </li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
        </ul>

       

       

        <input type='text' className={css.search} placeholder='search' />
        <CgShoppingBag className={css.cart} />
        
      </div>
    </div>
  )
}

export default Header
