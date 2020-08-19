import React from "react";
import "./style.css";
import projects from "./projects.json";
import ProjectCard from "../cards";
import MyNavbar from "../Navbar";

class MyWrapper extends React.Component {
    state = {
      projects,
    };

render() {
    return ( 
      <div>
        <MyNavbar />
        <MyJumbotron />
        <div className="container">
            {this.state.projects.map(projects => (
              <ProjectCard
              image={projects.image}
              working_app={projects.working_app}
            github_repo={projects.github_repo}
              handleIncrement={this.handleIncrement}
            />
            ))}
        </div>
      </div>  
    )
  }
}

export default MyWrapper;
