import React from 'react'
import img from './image/nikhil.jpg';

const Home = () => {
    return (
        <div className="ui segment">
            <img className="ui medium circular centered large image" src={img} alt="my dp" />
            <br />
            <div className="ui container">
                <h3 className="ui top attached header">

                    <div className="ui ribbon red label"><i className="ui user very large icon" /> About me</div>
                    <h3 className="ui animated list">
                        <p className="item">Enthusiastic software engineer from Delhi with an eager to learn more and expand my skill sets to benefit the
                        organization. Detail oriented with an analytical bent of mind and possess positive attitude.
                    Proficiency at grasping new technical concepts quickly & utilizing it in a productive manner</p></h3>
                </h3>
                <h3 className="ui attached header">
                    <div className="ui teal ribbon label"><i className="building outline large icon" />Education</div>

                    <div className="ui divided animated list">
                        <div className="item">
                            <h3><i className="graduation cap icon" />Master's of computer application (MCA) From Vivekanada Institute of Professional Studies, IP University,Delhi (2017-2020)</h3>
                        </div>
                        <div className="item">
                            <h3><i className="graduation cap icon" />Bachelor of computer application (BCA) From Maharaja Surajmal Institute, IP University,Delhi (2014-2017)</h3>
                        </div>
                        <div className="item">
                            <h3><i className="graduation cap icon" />12th standard from B.S.M Public School,Delhi (CBSE Board) - 2014 </h3>
                        </div>
                        <div className="item">
                            <h3><i className="graduation cap icon" />10th standard from Happy Senior School,Delhi (CBSE Board) - 2012 </h3>
                        </div>
                    </div>


                </h3>
                <div className="ui attached segment">
                    <div className="ui black ribbon label"><i className="code large icon" />Technical Stack</div>

                    <div className="ui animated list">
                        <div className="item">
                            <h3 className="header">
                                Programming languages <i className="free code camp large icon" />
                                <hr />
                            </h3>

                            <p><i className="js large icon" />Javascript</p>
                            <p><i className="python large icon" />Python</p>
                            <p><i className="cuttlefish large icon" />C#</p>

                        </div>

                        <div className="item">
                            <h3 className="header">
                                Web Technologies <i className="free code camp large icon" />
                                <hr />
                            </h3>
                            <p><i className="html5 large icon" />HTML</p>
                            <p><i className="css3 alternate large icon" />CSS</p>
                            <p><i className="react large icon" />ReactJs</p>
                            <p><i className="node large icon" />NodeJs</p>
                            <p><i className="react large icon" />ReduxJs</p>

                        </div>

                        <div className="item">
                            <h3 className="header">
                                Database <i className="free code camp large icon" />
                                <hr />
                            </h3>
                            <p><i className="database large icon" />MySQL</p>
                            <p><i className="database large icon" />MongoDB</p>
                            <p><i className="database large icon" />PostgresSql</p>
                        </div>

                    </div>

                </div>

                <h3 className="ui bottom attached header">
                    <div className="ui red violet ribbon label"><i className="ui globe large icon" />Work Experience</div>
                    <h3 className="ui header">Full Stack Developer (Intern-Ship)</h3>
                    <hr />
                    <div className="ui animated list">
                        <p className="item">Started From 04-04–2020 To 04-06-2020
                        As Full Stack Developer my job was to build backend services followed by some frontend work.
                        I worked on technologies such as Python/Django for backend and Reactjs for
                frontend services and building Restfull APIs. </p>
                    </div>
                </h3>
            </div>
        </div>
    )
}

export default Home
