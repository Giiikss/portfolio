import React from "react"
import './MyProject.css'
import upArrow from '../../assets/upArrow.svg'

function MyProject(props){
    return (
        <>
            <div className="project">
                    <div className="leftBlock">
                        <h2><span>{props.num}</span>{props.heading}</h2>
                        <p>{props.paragraph}</p>
                        <a href={props.link} target="blank">{props.more}<img src={upArrow} alt="arrow" style={{marginLeft:'10px'}}/></a>
                    </div>
                    <div>
                        <img src={props.img} alt="project1"/>
                    </div>
                </div>
                <hr style={{color:'#EFEFEF',height:'2px',width:'100%',marginTop:100,marginBottom:100}}/>
        </>
            
    )
}

export default MyProject


