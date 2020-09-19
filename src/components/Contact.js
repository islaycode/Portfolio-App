import React from 'react'
import img from './image/nikhil.jpg';

const Contact = () => {
    return (
        <div>
            <img className="ui medium circular centered large image" src={img} alt="my dp" />
            <h2 className="ui center aligned icon header">
                <i className="circular users icon"></i>
            Wanna Hire me?
            </h2>

            <div className="ui container">
                <p className="ui header centered">Just drop a message on anyone of the below Handles!</p>
                <h3 className="ui header centered"><i className="ui google tiny icon"/>Email me at nikzdev@gmail.com</h3>
                <div className="ui horizontal segments">
                    <div className="ui segment">
                        <a href="https://www.facebook.com/KuttiKamaniCheez/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <i className="ui facebook huge icon"/>
                            <h3 className="ui header">Facebook</h3>
                            </a>
                    </div>
                    <div className="ui segment">
                        <a href="https://www.linkedin.com/in/nikhil-dev-0137a9188/" 
                        rel="noopener noreferrer"
                        target="_blank">
                            <i className="ui linkedin huge icon"/>
                            <h3 className="ui header">LinkedIn</h3>
                            </a>
                    </div>
                    <div className="ui segment">
                        <a href="https://github.com/islaycode" 
                        rel="noopener noreferrer"
                        target="_blank">
                            <i className="ui github alternative huge icon"/>
                            <h3 className="ui header">Github</h3>
                            </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
