import React from 'react'

const Projects = () => {

    return (
        <div className="ui container">
            <div className="ui segment">
                <h3 className="ui header centered">Live Projects</h3>

                <div className="ui middle aligned divided list">
                    <div className="item">
                        <div className="right floated content">
                            <a href="https://damp-crag-68931.herokuapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ui button primary"
                            >Visit</a >
                        </div>
                        <div className="content">
                            <h3 className="ui header"> Emaily</h3>
                        </div>
                    </div>

                    <div className="item">
                        <div className="right floated content">
                            <a href="https://youtube-lite-nikhil.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ui button primary">
                                Visit
                        </a>
                        </div>
                        <div className="content">
                            <h3 className="ui header">Youtube Lite</h3>
                        </div>
                    </div>

                    <div className="item">
                        <div className="right floated content">
                            <a href="https://covid-19-tracker-by-nikhil.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ui button primary">
                                Visit
                        </a>
                        </div>
                        <div className="content">
                            <h3 className="ui header">Covid-19 India's Stats</h3>
                        </div>
                    </div>

                    <div className="item">
                        <div className="right floated content">
                            <a href="https://githubfinder-nikhil.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ui button primary">
                                Visit
                        </a>
                        </div>
                        <div className="content">
                            <h3 className="ui header">Github Finder</h3>
                        </div>
                    </div>

                    <div className="item">
                        <div className="right floated content">
                            <a href="https://widgets-nikhil.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ui button primary">
                                Visit
                        </a>
                        </div>
                        <div className="content">
                            <h3 className="ui header">Widgets</h3>
                        </div>
                    </div>

                    <div className="item">
                        <div className="right floated content">
                            <a href="season-identifier-nikhil.netlify.app"
                                className="ui button primary"
                                target="_blank"
                                rel="noopener noreference"
                            >
                                Visit</a>
                        </div>
                        <div className="content">
                            <h3 className="ui header">Season Identifier</h3>
                        </div>
                    </div>

                </div>
            </div>
            <p className="ui header centered">More Projects Available on my Github, Check it out!</p>
            <div className="ui segment">
                <a href="https://github.com/islaycode" target="_blank" rel="noopener noreferrer">
                    <i className="ui github alternative huge icon" />
                    <h3 className="ui header">Github</h3>
                </a>
            </div>
        </div>
    )
}

export default Projects
