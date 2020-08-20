import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Project Name:</strong> {props.name}
                    </li>
                    <li href={props.working_app} className="btn btn-info target=_blank"><strong>Working App</strong>    
                    </li> 
                    <br/>
                    <li href={props.github_repo} className="btn btn-info target=_blank"><strong>Github</strong>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;
