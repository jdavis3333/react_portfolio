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
                    <li>
                        <strong>Working App:</strong> {props.working_app}
                    </li>
                    <li>
                        <strong>Github:</strong> {props.github_repo}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;
