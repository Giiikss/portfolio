import React, { useState } from "react"
import './NavbarStyles.css'
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from 'react-icons/fa'
import logo from '../../assets/Group 1.svg'

function Navbar(){
    const [color,setColor]=useState(false)
    const[click,setClick]=useState(false)

    const changeColor = ()=>{
        if(window.scrollY >= 830){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const handleClick = ()=>{
        setClick(!click)
    }


    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'>
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='Work'> Work </Link>
                </li>
                <li>
                    <Link to='/About'> About </Link>
                </li>
                <li>
                    <Link to='/Contact'> Contact </Link>
                </li>
            </ul>
            <div className="burger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:'white'}} />) 
                : (<FaBars size={20} style={{color:'white'}} />)}
                
                
            </div>
        </div>
    )
}

export default Navbar