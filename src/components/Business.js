import React from 'react'
import './css/Business.css'
import hero from './Images/business/hero.jpg'
import i1 from './Images/business/i1.jpg'
import i2 from './Images/business/i2.jpg'
import i3 from './Images/business/i3.jpg'
import i4 from './Images/business/i4.jpg'
import i5 from './Images/business/i5.jpg'
import i6 from './Images/business/i6.jpg'
import i7 from './Images/business/i7.jpg'
import i8 from './Images/business/i8.svg'

function Business() {
    return (
        <>
            <div className="business">
                <h1>Business Consultancy</h1>
            </div>
            <div className="contents">
                <div className="hero">
                    <img src={hero} alt="hero banner" />
                </div>
                <div className="container-fluid">
                    <p>Our business experts can assist you in adapting to today's market realities and remaining competitive, regardless of the dangers you may face. Tools that enable efficient remote work might help you reduce or eliminate downtime in your operations.
                        <br/>
                    We can scale our services to support a wide range of change initiatives, from small-scale enhancements to large-scale transformations. Our business consultants are seasoned leaders and practitioners with a customer-centric mindset, a commitment to delivering quality, and the ability to negotiate and manage complicated projects while working effectively across a variety of business and technology companies.
                    </p>
                    <h3>Nirmitee’s power plan for every project</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>1.Attention to detail</h4>
                            <p>We feel that the best way to earn our client’s trust is to produce error-free deliverables that demonstrate our thoroughness and the validity of our recommendations. Our expert team gives detail to the smallest concern you may have.</p>
                        </div>
                        <div className="col-md-6">
                            <img className="card-banner" src={i1} alt="first banner" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="card-banner" src={i2} alt="second banner" />
                        </div>
                        <div className="col-md-6">
                            <h4>2. Market research</h4>
                            <p>With our expert teams doing extensive market research regularly, we make sure to keep ourselves updated with the current trends in the market. In simpler words, we do your work effectively, efficiently and within the time we promised.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>3.Feasibility and scalability check</h4>
                            <p>It is critical to consider scalability and ease of use of your product when determining how good your business can be. To do all this it should have the ability of a company to create greater revenue without incurring additional expenses. Do you know how scaleable your concept is? Can you genuinely provide the services once you've met your first goal? Will you be able to expand and improve your concept? Is your proposal practical and will it result in a beneficial outcome?</p>
                        </div>
                        <div className="col-md-6">
                            <img className="card-banner" src={i3} alt="Third banner" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="card-banner" src={i4} alt="fourth banner" />
                        </div>
                        <div className="col-md-6">
                            <h4>4. Onboarding of project</h4>
                            <p>We introduce you to our team, plan out a strategy and ensure a seamless process. We also discuss the estimated timelines and target date for release and make sure the deliverables are on time.</p>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>5. Monetizing the product</h4>
                            <p>We make sure you can derive revenue from the value you offer to your users via your website and that your product is worth using. We help you monetize your product and give you further advice on the same.</p>
                        </div>
                        <div className="col-md-6">
                            <img className="card-banner" src={i5} alt="fifth banner" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="card-banner" src={i6} alt="sixth banner" />
                        </div>
                        <div className="col-md-6">
                            <h4>6. Quality assured project</h4>
                            <p>We provide a written document defining the methods of a monitoring project that we will employ to guarantee the data it collects and analyses fits project requirements to make your job easier. In simpler terms, we make sure that your project completion happens step by step with no discrepancies.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>7. Technical guidance</h4>
                            <p>We provide you with extra sources of information like handbooks, checklists, surveillance protocols, etc and provide you with all the technical guidance you need. We are willing to connect with you regularly and work towards solving or answering every doubt you would have.</p>
                        </div>
                        <div className="col-md-6">
                            <img className="card-banner" src={i8} alt="seventh banner" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="card-banner" src={i7} alt="eigth banner" />
                        </div>
                        <div className="col-md-6">
                            <h4>8. Profitability</h4>
                            <p>We try to establish a link or relationship between profitability, customer loyalty and your brand/ product.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="exception">
                <h3>What Nirmitee does that others don't</h3>
                <p>Nirmitee helps build your brand and also recognises your brand’s USP. We also take an extra step and encourage startups and believe in every idea and the motto behind that idea. We help analyse the root, heart and brain behind your idea and also help you work upon the same and help you reach decisions. We put a lot of emphasis on allowing changes in our ways so we are ahead of the market trends, as well as creating platforms for continual development. To accomplish so, we use our business consulting, technology, and industry practices to assist businesses to succeed.</p>
            </div>
        </>
    )
}

export default Business
