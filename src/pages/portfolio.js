import React from "react";
import projects from "../projects.json";
import Card from "../components/cards";

class Projects extends React.Component {
    state = {
        projects
    }
    render () {
        var projects = this.state.projects
        return (<div>
            {projects.map((hw, key) => (
                    <Card
                    name={hw.name}
                    working_app={hw.working_app}
                     />
                )
            )}
        </div>)
    }
    
}

export default Projects;