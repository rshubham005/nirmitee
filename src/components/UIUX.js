import React from 'react'
import './css/UIUX.css'
import uiux from './Images/uiux/uiux.jpg'
import team from './Images/uiux/Team-pana.svg'
import target from './Images/uiux/20943892.jpg'
import graph from './Images/uiux/5024152.jpg'
import idea from './Images/uiux/OMUNMO0.jpg'
import desktop from './Images/uiux/desktop.png'
import resp from './Images/uiux/Responsive-pana.svg'
import mobile from './Images/uiux/12608.jpg'
import think from './Images/uiux/20943650.jpg'
import c1 from './Images/uiux/c1.jpg'
import c2 from './Images/uiux/c2.jpg'
import c3 from './Images/uiux/c3.svg'
import c4 from './Images/uiux/c4.jpg'
import c5 from './Images/uiux/c5.jpg'
import c6 from './Images/uiux/c6.svg'


function UIUX() {
    return (
        <>
            <div className="uiux">
                <h1>UI/UX Design</h1>
            </div>
            <div className="contents">
                <div className="hero">
                <img src={uiux} alt="hero banner" />
                </div>
                <div className="content">
                    <h1>UI/UX DESIGNED BY US ARE A TRADEMARK TO YOUR BRAND</h1>
                    <h3>What is UI/UX design? </h3>
                    <p>User Experience Design is referred to as UX Design, whereas User Interface Design is referred to as UI Design. Both parts are critical to the product's success and work in tandem. Despite their professional closeness, the jobs are relatively distinct, referring to very different aspects of the design process and discipline. Any interaction a user has with a product or service is referred to as user experience (UX). Every factor that defines this experience, how it makes the user feel, and how easy it is for the user to perform their desired activities are all taken into account by UX design. The appearance and feel, presentation, and interactivity of a product are all aspects of UI design. </p>
                    <h3>How will it help your business? </h3>
                    <p>An eye-catching UI may do more than just catch the user's attention; it can also improve the user experience and help to establish the company's brand. As a result, every company should concentrate on developing immersive UI designs that increase user experience. At Nirmitee, we recognise the importance of user-centred design and the impact it has on the user experience. We make sure that users' viewpoints are at the centre of our development process so that each of the products we build is more usable.</p>
                    <img src={team} alt="Team discussion" />
                    <p>We have a team of skilled UI/UX designers who will focus on user expectations and apply UX design principles to each level of the app development cycle. We specialise in designing aesthetically pleasing, easy-to-navigate, and user-friendly interfaces. Our user interface design services allow our clients to benefit from a scalable and robust user experience that meets business needs and promotes their branding strategy.</p>
                    <h3>NIRMITEE’s services</h3>
                    <div className="service">
                        <img src={desktop} alt="desktop icon"/>
                        <p><b>WEBSITE DESIGNING</b> <br/>
                        We design with our customers in our mind. We focus on and consider SEO, ease of use and make sure we design something that can perform in the competitive markets today.</p>
                    </div>
                    <div className="service">
                        <img src={resp} alt="reaponsive website" />
                        <p><b>Responsive Design</b><br/>
                        We use the GUI design approach to create content that fits into every screen size.</p>
                    </div>
                    <div className="service">
                        <img src={mobile} alt="Mobile apps" />
                        <p><b>Mobile App designing</b><br/>
                        Our expert team continuously towards delivering sleek, responsive and user-friendly designs that ensure high and easy adoption.</p>
                    </div>
                    <div className="service">
                        <img src={think} alt="Analytical Thinking" />
                        <p><b>Corporate Identity Solutions</b><br/>
                        We concentrate on developing simple, memorable, and long-lasting brand visuals that highlight our companies' most important assets. We assist you in establishing and strengthening your brand image while promoting your product or service in this way.</p>
                    </div>
                    <div className="service">
                        <img src={mobile} alt="Branding" />
                        <p><b>Online Branding</b><br/>
                        We understand the need for the internet in these trying times. Hence, we work on enhancing your brand’s presence online.</p>
                    </div>
                    <h3>NIRMITEE’s strategies </h3>
                    <div className="stategy">
                    <img src={target} alt="Target" />
                    <img src={graph} alt="Charts and stats" />
                    <img src={idea} alt="Idea" />
                    </div>
                    <p><b>Research</b> <br />
                    We carefully study our customer’s requirements and study their target users.
                    </p>
                    <br/>
                    <p><b>Story Lining</b><br />
                    We use narrative to get insight into users, establish empathy, and emotionally connect with them. Personas are created to represent target users, and conflict is added to tales that reflect their user journeys and concerns. Designers can better grasp what users desire from a solution by crafting tales.</p>
                    <br />
                    <p><b>Sketching</b> <br />
                    Sketching is a particularly effective means of communicating design since it allows our designers to try out a variety of concepts and iterate on them before settling on one.
                    </p>
                    <br />
                    <p><b>Wireframes</b><br />
                    Visualizing the skeleton of digital applications is one of the most important aspects of the process. A wireframe is a representation of a product's layout that shows which interface elements will appear on important pages.</p>
                    <br />
                    <p><b>Visual design</b><br />
                    Visual design tries to increase the aesthetic appeal and usefulness of a design/product by using appropriate imagery, typography, space, layout, and colour.
                    </p>
                    <br/>
                    <h3>Why NIRMITEE?</h3>
                    <div className="cards">
                        <div>
                            <img src={c1} alt="card 1" />
                            <p>We produce designs that are both aesthetically pleasing and extremely useful, based on significant user research.</p>
                        </div>
                        <div>
                            <img src={c2} alt="card 2"/>
                            <p>Our team consists of skilled UX/UI designers with extensive experience in creating great solutions for a variety of needs.</p>
                        </div>
                        <div>
                            <img src={c3} alt="card 3" />
                            <p>Our design solutions are versatile, ranging from amazing web designs to mobile app designs, branding solutions, and more.</p>
                        </div>
                        <div>
                            <img src={c4} alt="card 4" />
                            <p>We envisage designing, testing, and then releasing applications as we strive for excellence in every design we make.</p>
                        </div>
                        <div>
                            <img src={c5} alt="card 5"/>
                            <p>Our goal is to develop the most spectacular designs in the shortest amount of time and at the lowest possible cost.</p>
                        </div>
                        <div>
                            <img src={c6} alt="card 6" />
                            <p>For us, designing is about delivering unmatched user experiences that propel your branding strategies.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default UIUX
