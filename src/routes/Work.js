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


      <div className="work-candy-desk">
        <h1 className="work-title">eye candy</h1>
        {/* <h2 className="subtitles">innovation meets impact</h2>
          <p>
          This digital rebrand broke the mold within the construction category through
          non-traditional, bold, and contemporary web design. Our team also revamped Gutier’s
          brand messaging to emphasize notable projects, safety, and expertise establishing
          the company as a key player in their industry.
          </p> */}
      </div>

      <div className="work-candy-videos">
        <div className="work-vid1">
          <iframe src="https://www.youtube.com/embed/Kwk_OvBa2rA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen title="show-deck"></iframe>
				</div>
      	<div className="work-vid2">
          <iframe src="https://www.youtube.com/embed/tQqpr5q_BK4?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen title="show-deck"></iframe>
				</div>
        <div className="work-vid3">
          <iframe src="https://www.youtube.com/embed/zlTwDTgQuh0?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen title="show-deck"></iframe>
				</div>
      </div>

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
          <Collapsible trigger="cpg">
            <div className='details'>
            <div className="detail-sections">
                <p className="work-title">snacktime bonding</p>
                <p className="subtitles">opportunity</p>
                <p>Gain market share in the growing snack category and create an ownable
                  and entertaining solution to reposition snacktime as a fun, cross-generational family activity.
                </p>
              </div>
              <div className="detail-sections">
                <p className="subtitles">strategy</p>
                <ul>
                  <li>&#10003; Reworked the traditional product package graphics and typography to evolve
                    the brand’s personality, expand the audience, and help create a distinct snacktime experience.</li>
                </ul>
              </div>
              <div className="detail-sections">
                <p className="subtitles">success</p>
                <p>Positioned the brand’s core values of fun, taste, family, and excitement which rejuvenated shopper
                  perception of the brand’s rich and iconic heritage. Our team utilized this concept for the rebrand
                  of product line extensions in the same fashion.
                </p>

                <p className="work-title">staycation of smiles</p>
                <p className="subtitles">opportunity</p>
                <p>Create a family-friendly and memorable way to drive product sales within the Hispanic market.
                </p>
              </div>
              <div className="detail-sections">
                <p className="subtitles">strategy</p>
                <ul>
                  <li>&#10003; Partnered with Walmart to create an activity and product-pairing guide for family staycations.</li>
                  <li>&#10003; Beyond in-store sampling, shoppers received activity ideas and product suggestions (i.e. games, movies, etc.) for the family to enjoy together.</li>
                  <li>&#10003; Partnered with Walmart to create an activity and product-pairing guide for family staycations.</li>
                </ul>
              </div>
              <div className="detail-sections">
                <p className="subtitles">success</p>
                <p>The event resulted in a 471% sales lift the day of the in-store demo, which significantly impacted both brand
                  sales and retailer’s general sales. The brand effectively reached and connected with Hispanic moms for the first
                  time at a major retail level.
                </p>

                 <p className="work-title">craveable satisfaction</p>
                <p className="subtitles">opportunity</p>
                <p>Develop and grow brand awareness for a product line launch at a major retailer.
                </p>
              </div>
              <div className="detail-sections">
                <p className="subtitles">strategy</p>
                <ul>
                  <li>&#10003; Created a 360-degree digital engagement platform based on the overarching concept:
                    <i> As craveable and satisfying as a restaurant meal.</i></li>
                </ul>
              </div>
              <div className="detail-sections">
                <p className="subtitles">success</p>
                <p>Secured first-time competitive brand placement in robust soup, sauces, sides category
                  at major retail level, which increased shoppers’ selection for restaurant-quality dinnertime.
                </p>
              </div>
            </div>
          </Collapsible>
        </li>
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
              <p className="work-title">coming soon</p>
              </div>
            </div>
          </Collapsible>
        </li>
        <li className="case-button">
          <Collapsible trigger="healthcare">
            <div className='details'>
            <div className="detail-sections">
              <p className="work-title">coming soon</p>
              </div>
            </div>
          </Collapsible>
        </li>
        <li className="case-button">
          <Collapsible trigger="hospitality">
            <div className='details'>
            <div className="detail-sections">
              <p className="work-title">coming soon</p>
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
              <li>Fully Raw</li>
              <li>Louisiana Economic Development</li>
              <li>Green Seed Vegan</li>
            </ul>
          </div>
          <div className="brand">
            <ul className="work-list">
              <li>Kraft</li>
              <li>Maxwell House</li>
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
