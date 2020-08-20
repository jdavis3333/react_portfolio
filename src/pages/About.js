import React from "react";

function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="./images/headshot.PNG" className="img-fluid" alt="headshot"></img>
                    </div>
                    <div className="col-md-8 text-wrap">
                        <p>After completing his military service in 2007, Joe began working in corporate customer serivce
                        and sales roles. It was there where he developed a love for helping clients. During the Covid-19
                        pandemic, Joe developed a new passion for coding. He attended the UC Berkeley Extension Bootcamp
                        and became a Full Stack Developer.</p>
                        <p>Joe lives in Las Vegas with his wife Erika and their two children. When he's not online, he's in
                        the kitchen trying new recipes or coaching Little League.</p>
                    </div>
                </div>
            </div>
            {/* <div className="button">
                
            </div> */}
        </section>
    )
}
export default About;