import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content text-center">
                <p>
                    <strong>Project Name:</strong> {props.name}
                </p>
                <a href={props.working_app} className="btn btn-info" target="_blank"><strong>Working App</strong>
                </a>
                <br/><br/>
                <a href={props.github_repo} className="btn btn-info" target="_blank"><strong>Github</strong>
                </a>
            </div>
        </div>
    )
}

export default Card;
