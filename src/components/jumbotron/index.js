import React from "react";
import Vegas from "../../images/lv.jpg"


function Jumbotron () {
    return (
        <div className="jumbotron">
            <img src={Vegas} id="jumbotron" class="img img-fluid" alt="Las Vegas"></img>
        </div>
    )
}

export default Jumbotron;

{/* function Jumbotron () {
    return (
        <div className="jumbotron">
             <img src={Vegas} id="jumbotron" class="img img-fluid" alt="Las Vegas">
        </div>
    )
} */}