import React, {Component} from 'react';
import Footer from './Footer';
import '../styles/Main.scss';

import aboutPageImg from '../assets/about.png';
import aboutMobile from '../assets/about_m.png';
import ryan from '../assets/team/ryan.png';
import chrisj from '../assets/team/chrisJ.png';
import miguel from '../assets/team/miguel.png';
import tiffany from '../assets/team/tiffany.png';
import shaina from '../assets/team/shaina.png';
import hillary from '../assets/team/hillary.png';
import chrisf from '../assets/team/chrisf.png';
import leonela from '../assets/team/leonela.png';
import forrest from '../assets/team/forrest.png';

class About extends Component {
state = {expanded: false}

render() {
	return (
			<div className="ab-grid">

					<div className="ab-box1-desk">
							<h1 className="ab-title">who we are</h1>
							<h2 className="subtitles">provocateurs with a purpose</h2>
							<p>We are brainy business experts, culture connoisseurs, and catalysts for getting what you want.
									We’re forwardthinkers and advocators of agitating the status quo. We solve business obstacles
									with strategies and creativity across platforms that make sense. Our expertise includes
									branding, business strategy, and crafting share-worthy consumer experiences.
									We’re not a fit for everyone. And we’re OK with that.
									<br/><br/>
									<a href="mailto:hello@amagazi.com?subject=Hello, amagazi!">Let’s talk.</a></p>
					</div>


					<div className="ab-box2-desk">
							<img className="ab-pg-img-desk" src={aboutPageImg} alt="about-desktop" />
					</div>


					<div className="ab-box1-mob">
							<h1 className="ab-title">who we are</h1>
							<div className="ab-box2-mob">
									<img className="ab-pg-img-mob" src={aboutMobile} alt="about-mobile"/>
									<div className="ab-text-mob">
											<h2 className="subtitles-mob">provocateurs with a purpose</h2>
											<p>We are brainy business experts, culture connoisseurs, and catalysts for getting what you want.
											We’re forwardthinkers and advocators of agitating the status quo. We solve business obstacles
											with strategies and creativity across platforms that make sense. Our expertise includes
											branding, business strategy, and crafting share-worthy consumer experiences.
											We’re not a fit for everyone. And we’re OK with that.
											<br/><br/>
											<a href="mailto:hello@amagazi.com?subject=Hello, amagazi!">Let’s talk.</a></p>
											</div>
							</div>
					</div>

				<div className="ab-std-lead">
					<div id="our-standards" className="ab-std-desk">
							<h1 className="ab-title">our standard</h1>
							<h2 className="subtitles">exclusive. transparent. responsive. efficient.</h2>
							<p>We are entrepreneurs who have blazed our own trails and have gained lots of business wisdom along the way.
							Simply put, we get it. We understand what is at stake and align our work ethic accordingly. We believe in mutual
							success, so we’re selective about whom we work with and whom we hire. We communicate with total transparency
							and respond with urgency. We don’t believe one size fits all. We curate our teams to custom-fit the needs of our
							clients. And we handle efficiency with precision, because we value time just as much as you do.</p>
					</div>

					<div className="ab-lead-desk">
							<h1 className="ab-title">leadership</h1>
							<p>We are entrepreneurs, idea-creators, and problem-solvers. We have a solid understanding of business longevity
							because we’ve been responsible for our own businesses. We are well-seasoned in our craft and each of us shares
							an entrepreneurial spirit. And in case you’re wondering,
							<a href="#"> we’ve picked up some awards along the way too.</a>
									<br/><br/>
							Meet the people holding our standards high.</p>
					</div>
				</div>


					<div className="ab-team">
							<h1 className="ab-title">the team</h1>
					</div>

					<div className="ab-grid-team">

							<div className="item">
									<div className="item-media">
											<img src={ryan} alt="ryan" className="teamBioImg" />
											<h2 className="subtitles">ryan petersen</h2><h4>ceo/founder</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={chrisj} alt="chrisj" className="teamBioImg" />
											<h2 className="subtitles">chris johnsen</h2><h4>coo/gc</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={miguel} alt="miguel" className="teamBioImg" />
											<h2 className="subtitles">miguel nogueras</h2><h4>executive creative director</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={tiffany} alt="tiffany" className="teamBioImg" />
											<h2 className="subtitles">tiffany hobson</h2><h4>executive vice president</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={shaina} alt="shaina" className="teamBioImg" />
											<h2 className="subtitles">shaina huntsberry</h2><h4>senior copywriter</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={hillary} alt="hillary" className="teamBioImg" />
											<h2 className="subtitles">hillary hallinan</h2><h4>project manager</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={chrisf} alt="chrisf" className="teamBioImg" />
											<h2 className="subtitles">chris firnkoess</h2><h4>art director</h4>
									</div>
							</div>


							<div className="item">
									<div className="item-media">
											<img src={leonela} alt="leonela" className="teamBioImg" />
											<h2 className="subtitles">leonela guzmán</h2><h4>full stack developer</h4>
									</div>
							</div>


							<div className="item">
									<div className="item-media">
											<img src={forrest} alt="forrest" className="teamBioImg" />
											<h2 className="subtitles">forrest mcbride</h2><h4>producer</h4>
									</div>
							</div>

					</div>

					<div className="ab-grid-bottom">
							<div className="ab-box3-desk">
									<h1 className="ab-title">culture</h1>
									<h2 className="subtitles">own it, and own it well</h2>
									<p>We are refined virtuosos. We know who we are. We are your James Bond, your superhero, and your unicorn. We
									prefer timeless style over temporary trends and believe in bold simplicity. Each member of the amagazi team
									brings his and her own cultural, professional, and intellectual insights which make representing many voices an
									intrinsic reflex for us. We welcome unconventional ideas to solve new challenges. And some of us prefer Miracle
									Whip over mayo.</p>
							</div>

							<div className="ab-box3-mob">
									<h1 className="ab-title">culture</h1>
									<h2 className="subtitles-mob">own it, and own it well</h2>
									<p>We are refined virtuosos. We know who we are. We are your James Bond, your superhero, and your unicorn. We
									prefer timeless style over temporary trends and believe in bold simplicity. Each member of the amagazi team
									brings his and her own cultural, professional, and intellectual insights which make representing many voices an
									intrinsic reflex for us. We welcome unconventional ideas to solve new challenges. And some of us prefer Miracle
									Whip over mayo.</p>
							</div>


							<div className="ab-box4-desk">
									<h1 className="ab-title">careers</h1>
									<p>Think you can match our hustle?<br/><br/>Connect with us at <a className="joblink" href="mailto:hello@amagazi.com?subject=Hello, amagazi careers!">hello@amagazi.com</a></p>
							</div>


							<div className="ab-box4-mob">
									<h1 className="ab-title">careers</h1>
									<p>Think you can match our hustle?<br/>Connect with us at <a className="joblink" href="mailto:hello@amagazi.com?subject=Hello, amagazi careers!">hello@amagazi.com</a></p>
							</div>
					</div>


					<div className="ab-footer pg-footer">
							<Footer />
					</div>
			</div>
	)
}
}

export default About;
