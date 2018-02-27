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
        <h1 className="work-title">latest projects</h1>
        <h2 className="subtitles">innovation meets impact</h2>
          <p>
          This digital rebrand broke the mold within the construction category through
          non-traditional, bold, and contemporary web design. Our team also revamped Gutier’s
          brand messaging to emphasize notable projects, safety, and expertise establishing
          the company as a key player in their industry.
          </p>
      </div>
      <div className="work-recentImg-desk work-recentImg-desk-16x9">
        <img className="work-img" src={workImg} alt="work"/>
      </div>

      <div className="work-recent-mob">
        <h1 className="work-title">latest projects</h1>
        <div className="work-recentImg-mob">
          <div className="work-recentImg-mobImg">
            <img className="work-img-mob" src={workImgMobile} alt="work-mobile"/>
          </div>
          <div className="work-text-mob">
          <h2 className="subtitles-mob">innovation meets impact</h2>
            <p>
            This digital rebrand broke the mold within the construction category through
          non-traditional, bold, and contemporary web design. Our team also revamped Gutier’s
          brand messaging to emphasize notable projects, safety, and expertise establishing
          the company as a key player in their industry.
            </p>
          </div>
        </div>
      </div>

    <div className="cases">
      <h1 className="work-title">for the record</h1>
      <ul>
      <li className="case-button">
          <Collapsible trigger="construction">
            <div className='details'>
            <div className="detail-sections">
                <p className="work-title">building business</p>

                <p className="subtitles">opportunity</p>
                <p>Establish a high level of client trust and credibility
                  within the construction industry in order to attract more RFP opportunities.
                </p>
              </div>
              <div className="detail-sections">
                <p className="subtitles">strategy</p>
                <ul>
                  <li>&#10003; Designed a modern, informative, and user-friendly website to engage prospective clients through an interactive user-flow</li>
                  <li>&#10003; Created brand messaging that emphasized notable projects, safety, and expertise</li>
                  <li>&#10003; Incorporated bold and contemporary web design elements which translated beyond web</li>
                </ul>
              </div>
              <div className="detail-sections">
                <p className="subtitles">success</p>
                <p>This digital rebrand broke the mold within traditional category messaging and design. This new brand perception gained more consulting
                  contracts and RFP wins for the company.
                </p>
              </div>
            </div>
          </Collapsible>
        </li>
        <li className="case-button">
          <Collapsible trigger="law">
            <div className='details'>
            <div className="detail-sections">
              <p className="work-title">lucky ticket</p>

                <p className="subtitles">opportunity</p>
                <p>Design a new logo and create a brand strategy to acquire and increase new-client traffic.
                </p>
              </div>
              <div className="detail-sections">
                <p className="subtitles">strategy</p>
                <ul>
                  <li>&#10003; Created insight-driven, humorous brand messaging through print and OOH to elicit legal trust and guidance for new clients</li>
                </ul>
              </div>
              <div className="detail-sections">
                <p className="subtitles">success</p>
                <p>Increased brand awareness and created a unique messaging approach that engaged clients through relatable human insight:
                  <em> Behind every traffic ticket, there’s a story that matters. A story with the power to successfully dispute what most people
                    accept—a tainted driving record and an increased insurance rate.</em>
                </p>
              </div>
            </div>
          </Collapsible>
        </li>
        <li className="case-button">
          <Collapsible trigger="education">
            <div className='details'>
            <div className="detail-sections">
              <p className="work-title">class above the rest</p>

                <p className="subtitles">opportunity</p>
                <p>Increase brand awareness, student enrollment, and donor contribution.
                </p>
              </div>
              <div className="detail-sections">
                <p className="subtitles">strategy</p>
                <ul>
                  <li>&#10003; Implemented a digital campaign across social media platforms to maximize reach within target audience</li>
                  <li>&#10003; Positioned the school as an exclusive and elite educational institution to resonate with parents’ motivation for enrollment</li>
                </ul>
              </div>
              <div className="detail-sections">
                <p className="subtitles">success</p>
                <p>Increased parent/student enrollment leads and campaign engagement due to stats-based messaging: 100% of our graduates are accepted
                  to the private high school of their choice.
                </p>
              </div>
            </div>
          </Collapsible>
        </li>
        <li className="case-button">
          <Collapsible trigger="financial">
            <div className='details'>
            <div className="detail-sections">
              <p className="work-title">a future worth saving</p>

                <p className="subtitles">opportunity</p>
                <p>Develop a campaign to simplify the product and bring awareness to the 529 College Savings Plan in order to increase assets and enrollment.
                </p>
              </div>
              <div className="detail-sections">
                <p className="subtitles">strategy</p>
                <ul>
                  <li>&#10003; Activated a measurable CRM program to maximize return</li>
                  <li>&#10003; Observed common client behaviors that influence account opens and benefits</li>
                  <li>&#10003; Targeted digital outreach to benefit and grow interest in the program</li>
                  <li>&#10003; Actively engaged existing account owners to ensure an increase in account assets</li>
                </ul>
              </div>
              <div className="detail-sections">
                <p className="subtitles">success</p>
                <p>Consecutively increased account assets and account opens over every quarter within designated markets
                  (TX, NM, NV, IL). The campaign also exceeded the organization’s goals within the financial plan which
                  led to an extension of government contract renewal.
                </p>
              </div>
            </div>
          </Collapsible>
        </li>
        <li className="case-button">
          <Collapsible trigger="healthcare">
            <div className='details'>
            <div className="detail-sections">
              <p className="work-title">to health + success</p>

                <p className="subtitles">opportunity</p>
                <p>Outsmart the competition — don’t outspend them.
                </p>
              </div>
              <div className="detail-sections">
                <p className="subtitles">strategy</p>
                <ul>
                  <li>&#10003; Created B2B and B2C campaigns to influence insurance brokers and individual clients</li>
                  <li>&#10003; Established the client as the Health Provider of choice in both campaign categories </li>
                  <li>&#10003; Simplified brand messaging in a chaotic, competitive market enabling them to successfully stand alone in the healthcare landscape</li>
                </ul>
              </div>
              <div className="detail-sections">
                <p className="subtitles">success</p>
                <p>Increased membership and positive brand perception against their competitors’ robust marketing budgets.
                  The campaign over-indexed in all categories and became an industry leader.
                </p>
              </div>
            </div>
          </Collapsible>
        </li>
        <li className="case-button">
          <Collapsible trigger="hospitality">
            <div className='details'>
            <div className="detail-sections">
              <p className="work-title">the perfect stay</p>

                <p className="subtitles">opportunity</p>
                <p>Grow brand loyalty, increase repeat overnight stays, and first-time guest reservations throughout the year to promote the hotel guest experience.
                </p>
              </div>
              <div className="detail-sections">
                <p className="subtitles">strategy</p>
                <ul>
                  <li>&#10003; Implemented marketing campaign to engage existing guests and grow market</li>
                  <li>&#10003; Leveraged engagement before and during guest stay through brand ambassadors and influencers</li>
                  <li>&#10003; Online travel forums and guest reviews to promote guest experiences</li>
                  <li>&#10003; Targeted digital placement and rich media plan</li>
                  <li>&#10003; Customized hotel packages based on guest-behavior data</li>
                </ul>
              </div>
              <div className="detail-sections">
                <p className="subtitles">success</p>
                <p>The hotel increased overnight stays, new-guest reservations, F&amp;B, and “staycations” while enabling a peak in room rates.
                </p>
              </div>
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
              <li>Hard Rock Hotel + Casino</li>
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
