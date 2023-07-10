import React from "react"
import Navbar from "../components/Navbar/Navbar"
import HomeHeading from "../components/HomeHeading/HomeHeading"
import HomeProjects from "../components/HomeProjects/HomeProjects"
// import HeroImg from "../Components/HeroImg/HeroImg"
// import Footer from "../Components/Footer/Footer"


function HomePage(){
    return (
        <>
            < Navbar />
            < HomeHeading />
            <HomeProjects/>
        </>
    )
}

export default HomePage