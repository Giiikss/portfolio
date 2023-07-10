import React from "react"
import './Footer.css'

function Footer(){
    return (
            <div className="footerDiv">
                <h5>Giorgi Karichashvili  -  2023</h5>
                <ul>
                    <li style={{color:'#AB35A7'}}>Instagram</li>
                    <li style={{color:'#EA4C89'}}>Dribbble</li>
                    <li style={{color:'#053EFF'}}>Behance</li>
                    <li style={{color:'#4467AD'}}>LinkedIn</li>
                </ul>
            </div>
    )
}

export default Footer