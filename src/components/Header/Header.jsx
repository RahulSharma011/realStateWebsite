import React,{useState} from 'react'
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import {RxCross2} from 'react-icons/rx';
import OutsideClickHandler from 'react-outside-click-handler';


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter innerWidth paddings">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}></OutsideClickHandler>

        <div className={menuOpened?"flexCenter h-menu-mobile":"flexCenter h-menu"}>
          <a href="" onClick={() =>{setMenuOpened(false)}}>Residencies</a>
          <a href="" onClick={() =>{setMenuOpened(false)}}>Our Value</a>
          <a href="" onClick={() =>{setMenuOpened(false)}}>Contact Us</a>
          <a href="" onClick={() =>{setMenuOpened(false)}}>Get Started</a>
          <button className='button'>
          <a href="" onClick={() =>{setMenuOpened(false)}}>Contact</a>
          </button>
        </div>
        <div className="menu-icon" onClick={() => {setMenuOpened(!menuOpened)}}>{menuOpened ? <RxCross2 size={30} /> : <BiMenuAltRight size={30} />}</div>
      </div>
    
    </section>
  )
}

export default Header