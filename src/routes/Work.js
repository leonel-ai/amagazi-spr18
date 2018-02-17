import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import GA from 'react-google-analytics-lite';
import Footer from './Footer';
import '../styles/Main.scss';
import Collapsible from 'react-collapsible';


import logo1 from '../assets/logos_01.gif';
import logo2 from '../assets/logos_02.gif';
import logo3 from '../assets/logos_03.gif';

import workImg from '../assets/gutier.gif';
import workImgMobile from '../assets/gutier-m.gif';



class Work extends Component {

	onGALoad() {
		window.ga('create', 'UA-113131904-1', 'auto');
		window.ga('send', 'pageview', '/work');
  }

	render() {
		return (
      <div className="work-grid">
        <Helmet>
          <meta charSet="utf-8"/>
          <meta name="description" content="tbd"/>
          <title>work | amagazi</title>
        </Helmet>
        <GA onload={ this.onGALoad } />

      <div className="work-recent-desk">
        <h1 className="work-title">latest project</h1>
        <h2 className="subtitles">innovation meets impact</h2>
          <p>
          Digital rebrand that breaks the mold within traditional construction industry
          marketing standards. Brand messaging emphasis on company values, safety, and expertise through bold,
          statement-making design elements.
          </p>
      </div>
      <div className="work-recentImg-desk work-recentImg-desk-16x9">
        <img className="work-img" src={workImg} alt="work"/>
      </div>

      <div className="work-recent-mob">
        <h1 className="work-title">latest project</h1>
        <div className="work-recentImg-mob">
          <div className="work-recentImg-mobImg">
            <img className="work-img-mob" src={workImgMobile} alt="work-mobile"/>
          </div>
          <div className="work-text-mob">
          <h2 className="subtitles-mob">innovation meets impact</h2>
            <p>
            Digital rebrand that breaks the mold within traditional construction industry
            marketing standards. Brand messaging emphasis on company values, safety, and expertise through bold,
            statement-making design elements.
            </p>
          </div>
        </div>
      </div>

    <div className="cases">
      <h1 className="work-title">case studies</h1>

      <ul>
        <li className="case-button">
          <Collapsible trigger="law">
            <div className='details'>
              <p><b>the ask</b><br/>Design a new logo and brand strategy to acquire and increase new-client traffic.
                <br/><br/>
              <b>strategy</b><br/>Insight-driven and entertaining brand messaging through print and OOH that elicit
              legal assurance and guidance for new clients.
                <br/><br/>
              <b>success</b><br/>Increase in brand awareness and create a unique tone in the law category that connects
              to clients on a 'human' level: <em>Behind every traffic ticket, there’s a story that matters.</em><br/><br/>A story worth
              telling the right way. A story with the power to successfully dispute what most people accept—a tainted
              driving record and an increased insurance rate.
              </p>
            </div>
          </Collapsible>
        </li>
        <li className="case-button">
          <Collapsible trigger="education">
            <div className='details'>
              <p><b>the ask</b><br/>Increase brand awareness, student enrollment, and donor contribution.
                <br/><br/>
              <b>strategy</b><br/>Digital campaign across social media platforms to maximize reach within
              target audience and promote the school as an exclusive and elite educational institution.
                <br/><br/>
              <b>success</b><br/>Increase in parent/student enrollment leads and heavy campaign engagement
              due to stats-based messaging: “100% of our graduates are accepted to the private high school of their choice.”
              </p>
            </div>
          </Collapsible>
        </li>
        <li className="case-button">
          <Collapsible trigger="financial">
            <div className='details'>
              <p><b>the ask</b><br/>Create consistent messaging centered around building brand trust and brand loyalty.
                <br/><br/>
              <b>strategy</b><br/>Develop integrated CRM program and targeted digital strategy outreach.
                <br/><br/>
              <b>success</b><br/>Increase account assets and account opens within the designated markets exceeding
              the goal within the financial plan.
              </p>
            </div>
          </Collapsible>
        </li>
        <li className="case-button">
          <Collapsible trigger="healthcare">
            <div className='details'>
              <p><b>the ask</b><br/>“Outsmart the competition—don’t outspend.”
                <br/><br/>
              <b>strategy</b><br/>B2B and B2C campaign that resonates with both targets and establish them as the
              most-qualified health provider in both categories.
                <br/><br/>
              <b>success</b><br/>Positive brand perception and awareness directly impacts campaign and over-indexes
              in all categories against competitors with a 3x budget disparity.
              </p>
            </div>
          </Collapsible>
        </li>
        <li className="case-button">
          <Collapsible trigger="hospitality">
            <div className='details'>
              <p><b>the ask</b><br/>Tell the story of the consumer experience through brand ambassadors/influencers.
                <br/><br/>
              <b>strategy</b><br/>Connect with guests before and during the hotel selection process.
                <br/><br/>
              <b>success</b><br/>With an integrated marketing campaign, the hotel increases guest reservations and
              sees an increase in room rates and F+B purchases.
              </p>
            </div>
          </Collapsible>
        </li>
      </ul>


      </div>

    <div className="work-grid-cases">
          <div className="brand">
            <img src={logo1} alt="logo1"/>
          </div>
          <div className="brand">
            <img src={logo2} alt="logo2" />
          </div>
          <div className="brand">
            <img src={logo3} alt="logo3"/>
          </div>
          <div className="brand">
            <ul className="work-list">
              <li>BMW</li>
              <li>Cadbury</li>
              <li>Direct Energy</li>
              <li>Exxon</li>
              <li>Campbell's</li>
              <li>Pepperidge Farm</li>
              <li>General Mills</li>
              <li>Houston Rising</li>
              <li>OppenheimerFunds</li>
              <li>Fully Raw</li>
              <li>Louisiana Economic Development</li>
              <li>Green Seed Vegan</li>
            </ul>
          </div>
          <div className="brand">
            <ul className="work-list">
              <li>Kraft</li>
              <li>Maxwell House</li>
              <li>Blue Cross Blue Shield</li>
              <li>Gutier Roofing</li>
              <li>Johnsen Law</li>
              <li>Markowitz Law</li>
              <li>Miller Lite</li>
              <li>Mission</li>
              <li>NRG</li>
              <li>Quilted Northern</li>
              <li>Monster Worldwide, Inc.</li>
              <li>SCFD</li>
            </ul>
          </div>
          <div className="brand">
            <ul className="work-list">
              <li>Hard Rock Casino + Resort</li>
              <li>Reliant Energy</li>
              <li>Rich's Foods</li>
              <li>Sonic</li>
              <li>Texaco</li>
              <li>Tyson</li>
              <li>VW</li>
              <li>Walmart</li>
              <li>Saint Theresa Catholic School</li>
              <li>Webb Gallery</li>
              <li>Krewe du Optic</li>
              <li>Old New Orleans Rum</li>
            </ul>
          </div>
        </div> {/* end xp */}

    <div className="work-footer pg-footer">
      <Footer />
    </div>
  </div>
    )
  }
}

export default Work;


 // var caseStudy = document.getElementsByClassName('case-button');

  // handleClick() {
  //   return (
  //     this.toggleClass('open');
  //     this.find('.details');
  //     this.slideToggle();
  //   )
  // }


  // <li className={this.state.condition ? 'case-button open': 'case-button'}
  // onClick={() => this.handleClick}>


  // <li className="case-button">
  // <span className="button1"
// >law</span>
  //   <div className={this.state.condition ? 'details1 open': 'details1'}>
