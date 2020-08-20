# react_portfolio

The goal of this project was to update our professional portfolio with our recently completed projects, using React.

### Prerequisites

* Visual Studio Code https://code.visualstudio.com/
* Bootstrap https://getbootstrap.com/
* React https://reactjs.org/


### Execution

* Created external links in About page
```
 <div>
                    <a href="https://www.linkedin.com/in/joe-davis-a8380232/" target="_blank" className="btn btn-info target=_blank fab fa-linkedin-in"><strong>LinkedIn</strong>
                    </a><br /><br />
                    <a href="https://github.com/jdavis3333" target="_blank" className="btn btn-info target=_blank"><strong>Github</strong>
                    </a><br /><br />
                    <a href={pdf} target="_blank" className="btn btn-info target=_blank"><strong>Resume</strong>
                    </a><br /><br />
                </div>  
```            
* Portfolio page created out of project cards
```
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
```


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React](https://reactjs.org/)
* [React Bootstrap](https://react-bootstrap.github.io/)

## Deployed Link

* https://jdavis3333.github.io/react_portfolio/


## Authors

* Joe Davis

- [Link to Github](https://github.com/jdavis3333)
- [Link to LinkedIn](https://www.linkedin.com/in/joe-davis-a8380232/)

## License

This project is licensed under the ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
