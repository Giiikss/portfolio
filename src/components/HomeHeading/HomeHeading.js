import React from "react"
import './HomeHeading.css'
import arrowIcon from '../../assets/↓.svg'
// import HeroImg from "../Components/HeroImg/HeroImg"
// import Footer from "../Components/Footer/Footer"


function HomeHeading(){
    return (
        <>
            <div className="homeHeading">
            <   h1>Hi ✌🏻</h1>
                <h3>I am a product focused designer who makes complex tasks <span>simple & obvious</span> </h3>
                <img src={arrowIcon} alt="arrow"/>
                <p>23 Years old experienced UI/UX Designer based in Tbilisi,Georgia. 2.5 Year working experience 
                as a UI/UX Designer. below 👇🏻 attached a small list of my real projects, which are successfully implemented.</p>
            </div>
        </>
    )
}

export default HomeHeading


