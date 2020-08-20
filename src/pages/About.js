import React from "react";
import Headshot from "../images/headshot.PNG"
import pdf from "../images/Joe_Davis_resume_2020.c.pdf"

function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Headshot} className="img-fluid" alt="headshot"></img>
                    </div>
                    <div className="col-md-8 text-wrap">
                        <p>After completing his military service in 2007, Joe began working in corporate customer serivce
                        and sales roles. It was there where he developed a love for helping clients. During the Covid-19
                        pandemic, Joe developed a new passion for coding. He attended the UC Berkeley Extension Bootcamp
                        and became a Full Stack Developer.</p>
                        <p>Joe lives in Las Vegas with his wife Erika and their two children. When he's not online, he's in
                        the kitchen trying new recipes or coaching Little League.</p>
                    </div>
                </div><br />
                <div>
                    <a href="https://www.linkedin.com/in/joe-davis-a8380232/" target="_blank" className="btn btn-info target=_blank fab fa-linkedin-in"><strong>LinkedIn</strong>
                    </a><br /><br />
                    <a href="https://github.com/jdavis3333" target="_blank" className="btn btn-info target=_blank"><strong>Github</strong>
                    </a><br /><br />
                    <a href={pdf} target="_blank" className="btn btn-info target=_blank"><strong>Resume</strong>
                    </a><br /><br />
                    {/* <li href={props.github_repo} className="btn btn-info target=_blank"><strong>Resume</strong>
                </li>
                <li href={props.github_repo} className="btn btn-info target=_blank"><strong>Email</strong>
                </li>
                <li href={props.github_repo} className="btn btn-info target=_blank"><strong>Phone Number</strong>
                </li> */}
                </div>
            </div>
        </section>
    )
}
export default About;