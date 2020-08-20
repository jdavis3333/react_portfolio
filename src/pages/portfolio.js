import React from "react";
import projects from "../projects.json";
import Card from "../components/cards";
import Wrapper from "../components/wrapper";

class Projects extends React.Component {
    state = {
        projects
    }
    render() {
        var projects = this.state.projects
        return (
            <div>
                <Wrapper>
                    {projects.map((hw, key) => (
                        <Card
                            name={hw.name}
                            working_app={hw.working_app}
                            github_repo={hw.github_repo}
                            image={hw.image}
                        />
                    )
                    )}
                </Wrapper>
            </div>)
    }

}

export default Projects;
