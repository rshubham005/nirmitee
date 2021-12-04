import React from 'react'
import './css/Web.css'
import hero from './Images/web/hero.jpg'
import node from './Images/web/node.svg'
import rc from './Images/web/rc.png'
import an from './Images/web/an.svg'
import py from './Images/web/py.png'
import ga from './Images/web/ga.jpg'
import pg from './Images/web/pg.svg'
import tp from './Images/web/tp.svg'
import logo from './Images/web/logo.jpg'

function Web() {
    return (
        <>
           <div className="webdev">
               <h1>Web Development</h1>
            </div>
            <div className="contents">
                <div className="hero">
                    <img src={hero} alt="Hero bannner" />
                </div>
                <div>
                    <p>All forms of web-based software are built, designed, supported, and evolved using our web development services. We seek to create user-friendly and quick websites, online portals, and other web solutions that promote digital transformation and improve company processes.A Web development process is a written explanation of the procedures required to accomplish a standard Web design project from beginning to end. It divides and categorises the job before breaking down these high-level divisions into activities and resources that may be utilised as a project road map.</p>
                    <h3>What we use and how it makes us unique </h3>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Javascript</h5>
                        </div>
                        <div className="col-md-3">
                            <h5>Node Js</h5>
                            <img src={node} alt="node js logo" />
                            <p>Node.js is a cross-platform, open-source back-end JavaScript runtime environment that uses the V8 engine to execute JavaScript code outside of any web browser. Node. js for us is ideal for encoding and broadcasting video and audio, uploading numerous files, and data streaming because of its non-blocking architecture. Our team attempts to make your experience with us as seamless as possible, given its expanding popularity.</p>
                        </div>
                        <div className="col-md-3">
                            <h4>ReactJs</h4>
                            <img src={rc} alt="react js" />
                            <p>React is one of the most popular front-end programming libraries. Because it allows developers to work with a virtual browser, React is our first option for the frontend. We think it's more user-friendly than the standard browser. It is an excellent and widely used programme for creating websites and apps. It creates a world where JavaScript and HTML coexist together in the same files, and it presents your constantly changing data to the browser efficiently.</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Angular</h5>
                            <img src={an} alt="angular Js" />
                            <p>Angular is an open-source JavaScript framework for developing web applications' front ends. It allows us to use HTML as our template language and allows you to modify HTML's syntax to represent the components of your application in a clear and concise manner.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Programming Language</h5>
                        </div>
                        <div className="col-md-9">
                             <h5>Python</h5>
                             <img src={py} alt="python" />
                             <p>Python is a powerful and advanced programming language for web design and development. Bottle.py, CherryPy, Pyramid, Flask, Django, and web2py are just a few of the frameworks available in Python. It's also strong enough to support some of the world's most well-known products and applications, including those from NASA, Google, IBM, and Cisco. We make sure that we make a control infrastructure for easily starting, stopping, querying and killing the background process from a foreground application.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Analytics and Integrations</h5>
                        </div>
                        <div className="col-md-3">
                            <h4>Google analytics</h4>
                            <img src={ga} alt="analytics" />
                            <p>We understand that customer feedback is important. We use google analytics so that you can track and understand your customer’s behaviour, user experience, online content, device functionality and more.</p>
                        </div>
                        <div className="col-md-3">
                            <h4>Payment integrations</h4>
                            <img src={pg} alt="payment gateway" />
                            <p>Integrated payments make it possible for the manual, time-consuming accounting and payment processes to work in tandem. We ensure that your businesses can accept credit card payments directly within their existing software by automating payment acceptance.</p>
                        </div>
                        <div className="col-md-3">
                            <h4>Third Party Integration</h4>
                            <img src={tp} alt="TPI" />
                            <p>Any integration that isn't implemented by Nirmitee is referred to as third-party integration. Through integrations, Nirmitee hopes to link to as many other applications as feasible. We encourage third parties to build integrations rather than building them ourselves.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>WHY NIRMITEE?</h5>
                        </div>
                        <div className="col-md-9">
                             <h3>Nirmitee makes work easier for you</h3>
                             <img src={logo} className="logo" alt="nirmitee logo" />
                             <p>By giving you timely updates and keeping your brand idea and motto in mind. We check-in with you before implementation of any new developments and make sure you and us are sailing on the same boat. We have an expert team to deliver all the services offered and make sure to finish what we started within the given time period.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Web
