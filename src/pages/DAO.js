import React from 'react';
import './DAO.css';
import JoinButton from '../components/JoinButton.js';
import GetHsTKKYButton from '../components/GetHsTKKYButton.js';

const AboutPage = () => {
    return (
        <div className="about-page-container">
            <div className="about-page-text-wrap">
                <div className="dao-page-title-container">
                    <h1>About</h1>
                    <GetHsTKKYButton />
                </div>
                <p>
The HAWKCHILD DAO is a new kind of social network. Home to many subcultures, the DAO exists as an ecosystem of symbiotic relationships, a decentralized creative studio, and a never-ending group chat. Most of all, it’s an evolving experiment.

At our core, we are a growing social DAO with more than 20 members—including artists, builders, and thinkers from across the crypto and cultural sectors. Collectively, we aim to catalyze the power of web3 as a tool for creating and making things happen.

Since our inception in 2022, The HAWKCHILD DAO has become a model for how a DAO can produce a diverse array of events, collaborations, and products that serve our community's needs while pushing culture forward.
                </p>
                <h2>$hsTKKYTKKY</h2>
                <p>
<i>$hsTKKYTKKY</i> is a cryptocurrency that's tied to the HAWKCHILD DAO. Having our own token enables us to incentivize community participation and generate value collectively. All members hold <i>$hsTKKYTKKY</i>, ensuring a mutual commitment to our projects and to each other. When we all contribute to the success of the group’s initiatives, we all benefit.
                </p>
                <h2>Our Vision</h2>
                <p>
We believe in the promise of a better internet—one where communities and authentic connections thrive, where creativity is valued, and where the future can be collaboratively built.
<br/>
<br/>
Our aim is to be the social convening point for the individuals, squads, and institutions using decentralized technology to build what comes next. As a community, we aim to push culture forward while elevating and amplifying each other in the process.
<br/>
<br/>
We readily welcome new members. If you share our vision, we invite you to join us.
                </p>
            </div>
            <br/>
        <JoinButton />
        </div>
    );
};

export default AboutPage;

