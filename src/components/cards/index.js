import React from "react";

function Card (props) {
    return (<div>
        <p>
            {props.name}
        </p>
        <p>
            {props.working_app}
        </p>
    </div>)
}

export default Card;