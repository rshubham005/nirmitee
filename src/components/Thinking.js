import React from 'react'
import homeimg from './Images/1.jpg'
import two from './Images/2.svg'
import three from './Images/3.svg'
import four from './Images/4.svg'
import five from './Images/5541.jpg'
import six from './Images/6.svg'
import seven from './Images/7.svg'
import eight from './Images/8.svg'
import './css/Thinking.css'
function Thinking() {
    return (
        <>
            <div className="head">
            <h1>Design Thinking</h1>
            </div>
            <div className="contents">
                <div className="hero">
                <img src={homeimg} alt="hero banner"/>
                </div>
                <h3>What is Design Thinking?</h3>
                <p>Design Thinking is a process in which we attempt to understand the user, challenge their assumptions, and reframe challenges in order to find new tactics and answers that aren't immediately obvious based on our current level of understanding. Simultaneously, Design Thinking offers a problem-solving strategy based on solutions. It is a combination of thinking and working and creating practical outcomes.</p>
                <h3>Why is Design Thinking so popular?</h3>
                <p>Designers are aiming to establish new ways of thinking that do not abide by the prevailing or more frequent problem-solving methods, which is why Design Thinking is sometimes referred to as "outside the box" thinking. The objective behind Design Thinking is to enhance products by researching and understanding how consumers engage with them, as well as investigating the conditions under which they work. The desire and skill to ask important questions and challenge assumptions are at the foundation of Design Thinking.</p>
                <img src={five} alt="team discussion" />
                <h3>How does Nirmitee enable Design thinking for the projects?</h3>
                <p>Our first step involves determining the type of the project and the time the completion may require. We make sure to highlight the uniqueness of the brand or company we are working for. Every element of the brand must represent what it stands for. Hence, the main focus of Nirmitee is to tell the story of your brand through our work. </p>
                <img src={three} alt="building block"/>
                <p>Nirmitee just acts like a bridge between you, your brand and your idea and tries to make your dreams come true to the best of their capacity. We remain in constant touch with our clients and maintain regular interaction to always make sure that we are on the same boat and there is no miscommunication or discrepancies of any sort. Along with this, we make sure that our designs at each new step are approved by our clients as we understand that our clients understand their brand better than us and we strive to respect their ideas and are always open to feedback and suggestions.</p>
                <h3>How is design thinking important for developing a product? </h3>
                <p>It is almost impossible to predict the success of a new product. Design thinking is a problem-solving method that entails using empathy to match what people need with technologically feasible and viable solutions that are now accessible. Empathy allows us to see ourselves in someone else's shoes, allowing us to design customer-centric goods and solutions that address specific customer demands. Design thinking is a human-centred, interactive learning method that focuses on customers as individuals with stated needs and works backwards to a technical solution as a framework for product creation. This helps to clarify corporate goals and gain a better knowledge of how a company's products are valued in the marketplace.</p>
                <img src={four} alt="importance of thinking" />
                <p>Through design thinking, Nirmitee helps facilitate the discovery of the ideal intersection of desirability, feasibility, and viability. We also enable you to ask the proper questions that will help you and us to be more creative.It allows for easier iteration and speedier user-testing processes, which helps to concrete the otherwise abstract concept. It is simple to consider expedient user experience factors when design thinking is used in product management.</p>
                <h3>How is Nirmitee as a platform helping in effortless design thinking? </h3>
                <p>We focus on a few basic steps to ensure you get a seamless and effortless design thinking experience with us.</p>
                <div className="list">
                    <img src={two} alt="How 1"/>
                    <p>We empathise with our users. This means that we put ourselves in their shoes and think of the USP’s of the company we are working for.</p>
                </div>
                <div className="list">
                    <img src={six} alt="How 2"/>
                    <p>We try to define our users' work and their problems through our work. We try to customise and implement what is in their minds and bring it to life.</p>
                </div>
                <div className="list">
                    <img src={seven} alt="How 3"/>
                    <p>We generate new ideas and look for innovative solutions. We also start actively working on putting these solutions to work.</p>
                </div>
                <div className="list">
                    <img src={eight} alt="How 4"/>
                    <p>Before implementing the final solution, we test and experiment with various solutions to provide our customers with the best experience.</p>
                </div>
            </div>
        </>
    )
}

export default Thinking

