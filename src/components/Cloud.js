import React from 'react'
import './css/Cloud.css'
import hero from './Images/cloud/hero.jpg'
import cloud from './Images/cloud/cloud.svg'
import web from './Images/cloud/web.svg'
import stocks from './Images/cloud/stocks.jpg'
import aws from './Images/cloud/aws.png'
import azure from './Images/cloud/azure.svg'
import gc from './Images/cloud/gc.svg'

function Cloud() {
    return (
        <>
            <div className="cloud">
                <h1>Cloud Services</h1>
            </div>
            <div className="contents">
                <div className="hero">
                <img src={hero} alt="Hero banner" />
                </div>
                <div className="content">
                    <h3>What is Cloud Services? </h3>
                    <p>Today we commonly hear "Cloud Computing", "Cloud storage" and many other things related to the cloud, but what actually is the cloud? One of the most appealing aspects of cloud computing is its pay-as-you-go model, which means there is no upfront fee and you only pay for the services you use. To meet your needs, you'll need a server that's easily scalable, deployable, safe, and secure. Although there are many cloud providers nowadays, the primary competitors are Azure (by Microsoft), Google Cloud Platform, and Amazon Web Services. AWS, as the oldest of the three, has been the most popular, followed by GCP and Azure. Cloud computing is extremely adaptable, making it one of the most widely utilised technologies today. The purpose of this article is to provide a glimpse into the cloud world.</p>
                    <h3>Is Cloud the future? </h3>
                    <p>What will the criteria be if you have a start-up (tech-based, such as a mobile application)? Most likely, a server to deploy (bring the app to life), a database to store your app's data, and some storage? Do you know if your startup will have ten users, ten thousand users, or ten million users? Isn't it true that you didn't know at the start? So, if you build data centres for your startup only to discover later that your idea isn't functioning, your money will be wasted. To deal with such issues, the concept of cloud computing was born. Tech companies that have been around for a long time have the resources and money to set up data centres and rent out computer power over the Internet. Cloud computing is based on this concept. Have you gotten the gist of it? Great!</p>
                    <img src={cloud} alt="cloud server" />
                    <p>Each cloud provider has its own set of benefits. So it's up to us to pick one that meets our needs. Another benefit of using the cloud is that we can migrate to any cloud provider we desire at any moment.</p>
                    <h3>How is Nirmitee working with Cloud Services? </h3>
                    <p>One or more FaaS services are available from the major public cloud providers. Amazon Web Services (AWS Lambda), Microsoft Azure (Azure Functions), and Google Cloud (various offers) are all examples of this. We employ all three types of cloud services at Nirmitee.
                    <br/>
                    The majority of the work is completed in AWS. We use AWS for all deployment and storage. AWS is frequently utilised for a variety of purposes, including storage, the construction of a static website, and even the deployment of servers. Nirmitee is a proponent of serverless computing. We use AWS Lambda for deployments, which reduces costs and eliminates the need for autoscaling.</p>
                    <img src={web} alt="website design" />
                    <h3>How Nirmitee helped its customers to reduce costs with the help of the cloud? </h3>
                    <p>For firms with established IT departments and plenty of in-house technology, cloud computing has become a popular option. Switching to a cloud-based system, on the other hand, may appear to be a waste of time. Cloud computing's cost savings, on the other hand, can assist our clients to balance their budgets while also increasing office productivity without sacrificing efficiency.
                    <br/>We were able to reduce installation timeframes from weeks or months to just a few hours by using cloud applications. Our employees spent less time waiting for software to be installed and more time focusing on new projects.</p>
                    <img src={stocks} alt="stock graph" />
                    <h3>How does Nirmitee deliver Cloud Services?</h3>
                    <p>Since we employ serverless programming, we've used AWS in practically every project.</p>
                    <div className="cards">
                    <div className="card">
                    <img src={aws} alt="amazon web service" />
                    <p>AWS is meant to let application providers, ISVs, and vendors host their applications fast and securely, whether they're existing or new SaaS-based apps. To access AWS's application hosting platform, you can utilise the AWS Management Console or well-documented web services APIs.</p>
                    </div>
                    <div className="card">
                        <img src={azure} alt="microsoft azure"/>
                        <p>If AWS isn't used, Azure (a Microsoft cloud computing service for developing, testing, deploying, and managing applications and services through Microsoft-managed data centres) is used.</p>
                    </div>
                    <div className="card">
                        <img src={gc} alt="google cloud service" />
                        <p>GCP can also used instead ( a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, Google Drive, and YouTube)</p>
                    </div>
                    </div>
                    <h3>Nirmitee’s future with Cloud Services</h3>
                    <p>By the end of 2021, an estimated 83% of firm workload will be kept in the cloud, as an increasing number of businesses migrate from private to the public cloud. Nirmitee has already taken all steps to go 100% serverless. The evidence points to the cloud's inexhaustible future benefits.
                    <br/><br/>
                    <b>Nirmitee's team works hard everyday to stay on top of the current trends and to meet all of its clients' needs in a timely and cost-effective manner.</b>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cloud
