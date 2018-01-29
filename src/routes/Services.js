import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import GA from 'react-google-analytics-lite';
import Footer from './Footer';
import '../styles/Main.scss';

import logo1 from '../assets/logos_01.gif';
import logo2 from '../assets/logos_02.gif';
import logo3 from '../assets/logos_03.gif';

class Services extends Component {
	constructor(props) {
		super(props);
	}

	onGALoad() {
		window.ga('create', 'UA-113131904-1', 'auto');//initialize
		window.ga('send', 'pageview', '/services');
	}

	render() {
		return (
			<div className="srv-grid">
				<Helmet>
					<meta charSet="utf-8"/>
					<meta name="description" content="how we think | branding + corporate identity + UX/UI + market research"/>
					<title>services | amagazi</title>
				</Helmet>
				<GA onload={ this.onGALoad } />
				<div className="srv-box1-desk">
					<h1 className="srv-title">how we think</h1>
					<h2 className="subtitles">our approach to success</h2>
					<p>We speak human in all we create and only produce work that invokes curiosity. We inspire the masses to take
					action, and we never underestimate the profound impact of sensory brand experiences. We create the right space
					around the fundamentals which drive human behavior — touch, taste, smell, sound, and sight. We also recognize
					staying ahead in the fast lane of growth and longevity is no easy feat for most businesses.
					<br/><br/>
					We meant what we said about not walking the line but creating it.
					<br/><br/>
					<a href="mailto:hello@amagazi.com?subject=Hello, amagazi!">Let’s connect.</a>
					</p>
				</div>
				<div className="srv-box2-desk srv-box2-desk-16x9">
						<iframe src="https://www.youtube.com/embed/zlTwDTgQuh0?rel=0&amp;showinfo=0" allowFullScreen title="show-deck"></iframe>
				</div>

					<div className="srv-box1-mob">
						<h1 className="srv-title">how we think</h1>
						<div className="srv-box2-mob">
							<div className="srv-box2-mobVid srv-box2-mobVid">
								<iframe src="https://www.youtube.com/embed/zlTwDTgQuh0?rel=0&amp;showinfo=0" allowFullScreen title="show-deck"></iframe>
							</div>
							<div className="srv-text-mob">
							<h2 className="subtitles-mob">our approach to success</h2>
							<p>We speak human in all we create and only produce work that invokes curiosity. We create the right space
							around the fundamentals which drive human behavior — touch, taste, smell, sound, and sight. We also recognize
							staying ahead in the fast lane of growth and longevity is no easy feat for most businesses — that's where our expertise comes in.
							<br/><br/>
							<a href="mailto:hello@amagazi.com?subject=Hello, amagazi!">Let’s connect.</a>
							</p>
							</div>
						</div>
					</div>


					<div className="srv-grid-mid">
						<div className="srv-areas-desk">
							<h1 className="srv-title">areas we ignite</h1>
							<p>
									<li>branding + corporate identity</li>
									<li>consumer experience + user journey</li>
									<li>market research + analysis</li>
									<li>business strategy</li>
								</p>
						</div>

						<div className="srv-box3-desk">
							<h1 className="srv-title">how we roll</h1>
							<p>We set the bar high for ourselves because our moms taught us never to settle. And neither should you.
								<br/><br/>
								Invite us to the conversation. We make change happen.
							</p>
						</div>

						<div className="srv-box3-mob">
							<h1 className="srv-title">how we roll</h1>
							<p>We set the bar high for ourselves because our moms taught us never to settle. And neither should you.
								<br/><br/>
								We make change happen.
							</p>
						</div>
					</div>


					<div className="srv-cases">
							<h1 className="srv-title">experience</h1>
					</div>

					<div className="srv-grid-cases">
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
								<ul className="srv-list">
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
								<ul className="srv-list">
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
								<ul className="srv-list">
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

					<div className="srv-footer pg-footer">
							<Footer />
					</div>

				</div>
		)
	}
}


export default Services;
