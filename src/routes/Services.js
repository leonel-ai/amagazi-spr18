import React, {Component} from 'react';
import Footer from './Footer';
import { HashLink } from 'react-router-hash-link';
import '../styles/Main.scss';

import servPageImg from '../assets/services.png';
import servMobile from '../assets/services_m.png';
import logo1 from '../assets/logos_01.gif';
import logo2 from '../assets/logos_02.gif';
import logo3 from '../assets/logos_03.gif';

class Services extends Component {
	state = {expanded: false}

	render() {
		return (
			<div className="srv-grid">

				<div className="srv-box1-desk">
					<h1 className="srv-title">how we think</h1>
					<h2 className="subtitles">our approach to success</h2>
					<p>We speak human in all we create and only produce work that invokes curiosity. We inspire the masses to take
					action, and we never underestimate the profound impact of sensory brand experiences. We create the right space
					around the fundamentals which drive human behavior—touch, taste, smell, sound, and sight. We also recognize
					staying ahead in the fast lane of growth and longevity is no easy feat for most businesses.
					<br/><br/>
					We meant what we said about not walking the line but creating it.
					<br/><br/>
					<a href="mailto:hello@amagazi.com?subject=Hello, amagazi!">Let’s connect.</a>
					</p>
				</div>
				<div className="srv-box2-desk">
						<img className="srv-pg-img-desk" src={servPageImg} alt="services-laptop" />
				</div>

					<div className="srv-box1-mob">
						<h1 className="srv-title">how we think</h1>
						<div className="srv-box2-mob">
							<img className="srv-pg-img-mob" src={servMobile} alt="services-mobile" />
							<div className="srv-text-mob">
							<h2 className="subtitles-mob">our approach to success</h2>
							<p>We speak human in all we create and only produce work that invokes curiosity. We inspire the masses to take
							action, and we never underestimate the profound impact of sensory brand experiences. We create the right space
							around the fundamentals which drive human behavior—touch, taste, smell, sound, and sight. We also recognize
							staying ahead in the fast lane of growth and longevity is no easy feat for most businesses.
							<br/><br/>
							We meant what we said about not walking the line but creating it.
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
								<ul>
									<li>branding + corporate identity</li>
									<li>business strategy</li>
									<li>consumer experience + user journey</li>
									<li>market research + analysis</li>
								</ul>
								</p>
						</div>

						<div className="srv-box3-desk">
							<h1 className="srv-title">how we roll</h1>
							<p>We set the bar high for ourselves because our moms taught us never to settle. And neither should you.
								<br/><br/>
								Invite us to the conversation. <HashLink to="/about#our-standards">We make change happen.</HashLink>
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
								<ul className="srv-list">
									<li><a href="https://www.bmwusa.com/">BMW</a></li>
									<li><a href="https://www.cadbury.co.uk/">Cadbury</a></li>
									<li><a href="https://chibebe.com/">Chibebe</a></li>
									<li><a href="https://www.directenergy.com/">Direct Energy</a></li>
									<li><a href="http://corporate.exxonmobil.com/">Exxon</a></li>
									<li><a href="https://www.campbells.com/">Campbell's</a></li>
									<li><a href="https://www.pepperidgefarm.com/">Pepperidge Farm</a></li>
									<li><a href="https://www.generalmills.com/">General Mills</a></li>
									<li><a href="http://htxrising.org/">Houston Rising</a></li>
									<li><a href="https://www.oppenheimerfunds.com/">OppenheimerFunds</a></li>
									<li><a href="http://www.fullyraw.com/">Fully Raw</a></li>
									<li><a href="https://www.greenseedvegan.com/">Green Seed Vegan</a></li>
								</ul>
							</div>
							<div className="brand">
								<img src={logo2} alt="logo2" />
							</div>
							<div className="brand">
								<ul className="srv-list">
									<li><a href="http://www.kraftrecipes.com/">Kraft</a></li>
									<li><a href="http://www.kraftrecipes.com/maxwell-house.aspx">Maxwell House</a></li>
									<li><a href="https://www.bcbs.com/">Blue Cross Blue Shield</a></li>
									<li><a href="http://www.gutierroofing.com/">Gutier</a></li>
									<li><a href="https://www.johnsenlaw.net/">Johnsen Law</a></li>
									<li><a href="http://thetrafficticketman.com/">Markowitz Law</a></li>
									<li><a href="https://www.opportunitylouisiana.com/">Louisiana Economic Development</a></li>
									<li><a href="https://www.millerlite.com/">Miller Lite</a></li>
									<li><a href="http://www.missionmenus.com/">Mission</a></li>
									<li><a href="http://www.nrg.com/">NRG</a></li>
									<li><a href="https://www.quiltednorthern.com/">Quilted Northern</a></li>
									<li><a href="https://www.monster.com/">Monster Worldwide, Inc.</a></li>
									<li><a href="http://www.southerndesignweek.com/">SCFD</a></li>
								</ul>
							</div>
							<div className="brand">
								<img src={logo3} alt="logo3"/>
							</div>
							<div className="brand">
								<ul className="srv-list">
									<li><a href="https://hardrockhotel.com/">Hard Rock Casino + Resort</a></li>
									<li><a href="https://www.reliant.com/">Reliant Energy</a></li>
									<li><a href="https://www.richs.com/">Rich's Foods</a></li>
									<li><a href="https://www.sonicdrivein.com/">Sonic</a></li>
									<li><a href="http://www.texaco.com/">Texaco</a></li>
									<li><a href="http://www.tyson.com/">Tyson</a></li>
									<li><a href="http://www.vw.com/">VW</a></li>
									<li><a href="https://www.walmart.com/">Walmart</a></li>
									<li><a href="https://sttheresacatholicschool.org/">Saint Theresa Catholic School</a></li>
									<li><a href="http://www.webbartgallery.com/">Webb Gallery</a></li>
									<li><a href="https://www.krewe.com/">Krewe du Optic</a></li>
									<li><a href="http://oldneworleansrum.com/">Old New Orleans Rum</a></li>
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
