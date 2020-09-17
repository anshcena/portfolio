import React from 'react';

function App() {
  return (
    <body id="page-top">
    {/* <!-- Navigation--> */}
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <span class="d-block d-lg-none">Ansh Varun</span>
            <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.png" alt="" /></span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Project</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Contact</a></li>
            </ul>
        </div>
    </nav>
    {/* <!-- Page Content--> */}
    <div class="container-fluid p-0">
        {/* <!-- About--> */}
        <section class="resume-section" id="about">
            <div class="resume-section-content">
                <h1 class="mb-0">
                    Ansh
                    <span class="text-primary">Varun</span>
                </h1>
                <div class="subheading mb-5">
                    Lucknow · UP · INDIA· (+91)-8896447683 
                    <a href="mailto:anshcena.1996@gmail.com">anshcena.1996@gmail.com</a>
                </div>
                <p class="lead mb-5">I help ventures to transform their business to perform better, easy to operate, provide the security in business and automating their modules.</p>
                <p class="lead mb-5">I like to build things! I'm happiest when I'm creating, learning, exploring and thinking about how to make things better!</p>
                <div class="social-icons">
                    <a class="social-icon" href="https://github.com/anshcena"><i class="fab fa-github"></i></a>
                    <a class="social-icon" href="https://www.linkedin.com/in/ansh-varun-147125107/"><i class="fab fa-linkedin-in"></i></a>
                    <a class="social-icon" href="https://twitter.com/anshcasm"><i class="fab fa-twitter"></i></a>
                    {/* <a class="social-icon" href="mailto:anshcena.1996@gmail.com"><i class="fab fa-envelop"></i></a> */}
                    {/* <a class="social-icon" href="#"><i class="fab fa-codepen"></i></a> */}
                </div>
            </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Education--> */}
        <section class="resume-section" id="education">
            <div class="resume-section-content">
                <h2 class="mb-5">Education</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Kurukshetra University, Kurukshetra</h3>
                        <div class="subheading mb-3">Bachelor of Technology - Computer Science</div>
                        {/* <div>Computer Science - Web Development Track</div> */}
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary"> 2015 - 2090</span></div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">L.P.S, Lucknow</h3>
                        <div class="subheading mb-3">SECONDARY SCHOOL</div>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">2015</span></div>
                </div>
            </div>
        </section>
       
        <hr class="m-0" />
         {/* <!-- Experience--> */}
         <section class="resume-section" id="experience">
            <div class="resume-section-content">
                <h2 class="mb-5">Project</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">MldDroid</h3>
                        <div class="subheading mb-3"><a href="https://play.google.com/store/apps/details?id=in.mltool.mldroid&hl=en_IN">Link</a></div>  
                        <p>Firebase powered Android app developed using ML Kit. This app demonstrates various Machine Learning models like face detection, text detection, barcode scanning, labelling images, and identifying text from images. All the features can be explored using camera in real time.</p>
                    </div>
                    {/* <div class="flex-shrink-0"><span class="text-primary">March 2013 - Present</span></div> */}
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Wall App</h3>
                        <div class="subheading mb-3"><a href="https://play.google.com/store/apps/details?id=com.preflet.ami&hl=en_IN">Link</a></div>                        <p>"WALL: Breaking Walls. Building Futures" is a project developed by AMI, which was selected to represent the "No More Bricks in the WALL" campaign in Portugal.
Answer the quiz and try to guess the nationality of each person portrayed. Use the app to check your knowledge. We believe you will have some surprises!</p>
                    </div>
                    {/* <div class="flex-shrink-0"><span class="text-primary">December 2011 - March 2013</span></div> */}
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">DCR APP</h3>
                        <div class="subheading mb-3"><a href="https://dcr.auroswift.com/">Link</a></div>
                        <p>Daily Call Report Web App | PWA build to file daily call report / work / performance which performs productivity checkup and monthly monitoring of tasks </p>
                    </div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">COVIA</h3>
                        <div class="subheading mb-3"><a href="https://covia.robomx.tech/">Link</a></div>
                        <p>Corona Virus Alert app containing informative real data of the outburst.</p>
                    </div>
                </div>
                <div class="subheading mb-3"><a href="https://github.com/anshcena">For More Work, Checkout my Github!</a></div>
            </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Skills--> */}
        <section class="resume-section" id="skills">
            <div class="resume-section-content">
                <h2 class="mb-5">Skills</h2>
                <div class="subheading mb-3">Programming Languages & Tools</div>
                <ul class="list-inline dev-icons">
                    <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                    <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                    <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                    <li class="list-inline-item"><i class="fab fa-angular"></i></li>
                    <li class="list-inline-item"><i class="fab fa-react"></i></li>
                    <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                    <li class="list-inline-item"><i class="fab fa-java"></i></li>
                    <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                    <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                    <li class="list-inline-item"><i class="fab fa-github"></i></li>	
                </ul>
                {/* <div class="subheading mb-3">Workflow</div>
                <ul class="fa-ul mb-0">
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Mobile-First, Responsive Design
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Cross Browser Testing & Debugging
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Cross Functional Teams
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Agile Development & Scrum
                    </li>
                </ul> */}
            </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Interests--> */}
        <section class="resume-section" id="interests">
            <div class="resume-section-content">
                <h2 class="mb-5">Interests</h2>
                <p>Apart from being a Frontend developer, tech that interests me is AR, ML, Blockchain Of things and IoT!</p>
                <p class="mb-0">I love to travel frequently and explore the different regions. Living and understanding the different ascpects of life, culture and places.
                Things that fascinate and make me curious is the Human Brain and <strong>Space.</strong></p>
            </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Awards--> */}
        <section class="resume-section" id="awards">
            <div class="resume-section-content">
                <h2 class="mb-5">Lets grab a coffee??<i class="fas fa-coffee text-danger"></i></h2>
                <ul class="fa-ul mb-0">
                    <li>
                        <span class="fa-li"><i class="fas fa-envelope text-danger"></i></span>
                        Feel free to Mail : <a href="mailto:anshcena.1996@gmail.com">anshcena.1996@gmail.com</a>
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-code text-warning"></i></span>
                        Follow me on <a href="https://twitter.com/anshcasm">Twitter</a> and <a href="https://github.com/anshcena">Github</a> to follow my journey of <a href="https://www.100daysofcode.com/">#100daysOfCode Challenge</a>
                    </li>
                    <li>
                        <span class="fa-li"><i class="fab fa-twitter text-info"></i></span>
                        <a href="https://twitter.com/anshcasm">Twitter</a> 
                    </li>
                    <li>
                        <span class="fa-li"><i class="fab fa-github text-dark"></i></span>
                        <a href="https://github.com/anshcena">Github</a> 
                    </li>
                </ul>
            </div>
        </section>
    </div>
</body>
  );
}

export default App;
