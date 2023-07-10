import React from "react"
import './HomeProjects.css'
import MyProject from "../MyProject/MyProject"
import project1 from '../../assets/project1.svg'
import project2 from '../../assets/project2.svg'
import project3 from '../../assets/project3.svg'
import Footer from "../Footer/Footer"

function HomeProjects(){
    return (
        <>
            <div className="homeProjects">
                {/* PROOJECT 1 */}
                <MyProject
                    num='01 / '
                    heading = 'The Georgian Marine Fishing Cluster'
                    paragraph='The Georgian Marine Fishing Cluster unites fishing and fish 
                    processing companies located in the city of Poti, Georgia.The 
                    purpose of creating a cluster is to promote, increase and develop 
                    the marine fishing sector of Georgia.'
                    more = 'More shots for this project'
                    img = {project1}
                    link = 'https://grateful-guardrails-225933.framer.app/Contact-Me'
                />
                {/* PROOJECT 2 */}
                <MyProject
                    num='02 / '
                    heading = 'HMG (HORECA MANAGEMENT GROUOP) at HMG'
                    paragraph='HMG (Horeca Management Group) HMG is a leading company in the field of hospitality since 2014.'
                    more = 'More shots for this project'
                    img = {project2}
                    link = 'https://grateful-guardrails-225933.framer.app/Contact-Me'
                />
                {/* PROOJECT 3 */}
                <MyProject
                    num='03 / '
                    heading = 'Earnote.  Streaming, audio recording and note-taking mobile app'
                    paragraph='HMG (Horeca Management Group) HMG is a leading company in the field of hospitality since 2014.'
                    more = 'More shots for this project'
                    img = {project3}
                    link = 'https://grateful-guardrails-225933.framer.app/Contact-Me'
                    />
                    <Footer/>
            </div>
        </>
    )
}

export default HomeProjects


