import Axios from 'axios';
import React , {Component} from 'react';

export default class App extends Component {
    state = {
        visits : ''
    }
    componentDidMount(){

        Axios.get("https://api.countapi.xyz/hit/anshvarun.tech/visits").then(res =>{
            this.setState({
                visits : res.data.value
            })
        })
    }

render() {
  return (
    <body id="page-top">
    {/* <!-- Navigation--> */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Ansh Varun</span>
            <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.png" alt="ansh" /></span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Project</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Contact</a></li>
            </ul>
        </div>
    </nav>
    {/* <!-- Page Content--> */}
    <div className="container-fluid p-0">
        {/* <!-- About--> */}
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Ansh
                    <span className="text-primary">Varun</span>
                </h1>
                <div className="subheading mb-5">
                    Lucknow · UP · INDIA· (+91)-8896447683 
                    <a href="mailto:anshcena.1996@gmail.com">anshcena.1996@gmail.com</a>
                </div>
                <p className="lead mb-5">I help ventures to transform their business to perform better, easy to operate, provide the security in business and automating their modules.</p>
                <p className="lead mb-5">I like to build things! I'm happiest when I'm creating, learning, exploring and thinking about how to make things better!</p>
                <div className="social-icons">
                    <a className="social-icon" href="https://github.com/anshcena"><i className="fab fa-github"></i></a>
                    <a className="social-icon" href="https://www.linkedin.com/in/ansh-varun-147125107/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://twitter.com/anshcasm"><i className="fab fa-twitter"></i></a>
                    {/* <a className="social-icon" href="mailto:anshcena.1996@gmail.com"><i className="fab fa-envelop"></i></a> */}
                    {/* <a className="social-icon" href="#"><i className="fab fa-codepen"></i></a> */}
                </div>
            </div>
        </section>
        <hr className="m-0" />
        {/* <!-- Education--> */}
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Kurukshetra University, Kurukshetra</h3>
                        <div className="subheading mb-3">Bachelor of Technology - Computer Science</div>
                        {/* <div>Computer Science - Web Development Track</div> */}
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary"> 2015 - 2019</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">L.P.S, Lucknow</h3>
                        <div className="subheading mb-3">SECONDARY SCHOOL</div>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2015</span></div>
                </div>
            </div>
        </section>
       
        <hr className="m-0" />
         {/* <!-- Experience--> */}
         <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Project</h2>
                <img src="assets/img/img4.svg" align="right" alt="ansh" height={200}/>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">MldDroid</h3>
                        <div className="subheading mb-3"><a href="https://play.google.com/store/apps/details?id=in.mltool.mldroid&hl=en_IN">Link</a></div>  
                        <p>Firebase powered Android app developed using ML Kit. This app demonstrates various Machine Learning models like face detection, text detection, barcode scanning, labelling images, and identifying text from images. All the features can be explored using camera in real time.</p>
                    </div>
                    {/* <div className="flex-shrink-0"><span className="text-primary">March 2013 - Present</span></div> */}
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Wall App</h3>
                        <div className="subheading mb-3"><a href="https://play.google.com/store/apps/details?id=com.preflet.ami&hl=en_IN">Link</a></div>                        <p>"WALL: Breaking Walls. Building Futures" is a project developed by AMI, which was selected to represent the "No More Bricks in the WALL" campaign in Portugal.
Answer the quiz and try to guess the nationality of each person portrayed. Use the app to check your knowledge. We believe you will have some surprises!</p>
                    </div>
                    {/* <div className="flex-shrink-0"><span className="text-primary">December 2011 - March 2013</span></div> */}
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">DCR APP</h3>
                        <div className="subheading mb-3"><a href="https://dcr.auroswift.com/">Link</a></div>
                        <p>Daily Call Report Web App | PWA build to file daily call report / work / performance which performs productivity checkup and monthly monitoring of tasks </p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">COVIA</h3>
                        <div className="subheading mb-3"><a href="https://covia.robomx.tech/">Link</a></div>
                        <p>Corona Virus Alert app containing informative real data of the outburst.</p>
                    </div>
                </div>
                <div className="subheading mb-3"><a href="https://github.com/anshcena">For More Work, Checkout my Github!</a></div>
            </div>
        </section>
        <hr className="m-0" />
        {/* <!-- Skills--> */}
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                    <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                    <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                    <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                    <li className="list-inline-item"><i className="fab fa-react"></i></li>
                    <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                    <li className="list-inline-item"><i className="fab fa-java"></i></li>
                    <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                    <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    <li className="list-inline-item"><i className="fab fa-github"></i></li>	
                </ul>
                <img src="assets/img/img1.svg" alt="ansh" height={350}/>
            </div>
        </section>
        <hr className="m-0" />
        {/* <!-- Interests--> */}
        <section className="resume-section" id="interests">
            <div className="resume-section-content">
                <h2 className="mb-5">Interests</h2>
                <p>Apart from being a Frontend developer, tech that interests me is AR, ML, Blockchain Of things and IoT!</p>
                <p className="mb-0">I love to travel frequently and explore the different regions. Living and understanding the different ascpects of life, culture and places.
                Things that fascinate and make me curious is the Human Brain and <strong>Space.</strong></p>
            </div>
            <img src="assets/img/img2.svg" alt="ansh" height={350}/>
        </section>
        <hr className="m-0" />
        {/* <!-- Awards--> */}
        <section className="resume-section" id="awards">
            <div className="resume-section-content">
                <h2 className="mb-5">Lets grab a coffee??<i className="fas fa-coffee text-danger"></i></h2>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"><i className="fas fa-envelope text-danger"></i></span>
                        Feel free to Mail : <a href="mailto:anshcena.1996@gmail.com">anshcena.1996@gmail.com</a>
                    </li>
                    <li>
                        <span className="fa-li"><i className="fas fa-code text-warning"></i></span>
                        Follow me on <a href="https://twitter.com/anshcasm">Twitter</a> and <a href="https://github.com/anshcena">Github</a> to follow my journey of <a href="https://www.100daysofcode.com/">#100daysOfCode Challenge</a>
                    </li>
                    <li>
                        <span className="fa-li"><i className="fab fa-twitter text-info"></i></span>
                        <a href="https://twitter.com/anshcasm">Twitter</a> 
                    </li>
                    <li>
                        <span className="fa-li"><i className="fab fa-github text-dark"></i></span>
                        <a href="https://github.com/anshcena">Github</a> 
                    </li>
                </ul>
            </div>
            <img src="assets/img/img3.svg" alt="ansh" height={350}/>
        </section>
    </div>
    <p style={{float : "right"}}>Views :  #{this.state.visits}</p>
</body>
  );
}

}

// export default App;
