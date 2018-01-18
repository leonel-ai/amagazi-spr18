import React, {Component} from 'react';
import Footer from './Footer';
import '../styles/Main.scss';

import aboutPageImg from '../assets/about.png';
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


					<div className="ab-box2-desk ab-box2-desk-16x9">
							<img className="ab-pg-img-desk" src={aboutPageImg} alt="about-desktop" />
					</div>


					<div className="ab-box1-mob">
							<h1 className="ab-title">who we are</h1>
							<div className="ab-box2-mob">
								<div className="ab-box2-mobImg ab-box2-mobImg">
									<img className="ab-pg-img-mob" src={aboutPageImg} alt="about-mobile"/>
								</div>
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
							<h2 className="subtitles">motivation through confidence and trust</h2>
							<p>We are idea-creators, entrepreneurs, and problem-solvers. We have a solid understanding of business longevity
							because we’ve been responsible for our own businesses. We are well-seasoned in our craft and each of us shares
							an entrepreneurial spirit. And in case you’re wondering,
							we’ve picked up some awards along the way too.
						</p>
					</div>
				</div>


					<div className="ab-team">
							<h1 className="ab-title">the team</h1>
							<h2 className="subtitles">meet the people holding our standards high</h2>
					</div>

					<div className="ab-grid-team">

							<div className="item">
									<div className="item-media">
											<img src={ryan} alt="ryan" className="teamBioImg" />
											<h4 className="bio">Ryan brings new ideas and ambitious thoughts to life. He is our never-ending source of inspiration
												and gets the job done. He understands how to run a successful business and brings a wide range of
												business acumen to the table. He has a true sense of the global market which allows him to skillfully
												connect the dots.</h4>

											<h2 className="subtitles">ryan petersen</h2><h4 className="jobTitle">ceo / founder</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={chrisj} alt="chrisj" className="teamBioImg" />
											<h4 className="bio">Chris’s dual approach to solving the toughest business problems is unrivaled. You can count on
											him to challenge all angles of any obstacle he comes across. His bold approach to problem-solving is one that our
											clients appreciate. And his thought-driven leadership is one that our team aspires to model each day.</h4>

											<h2 className="subtitles">chris johnsen</h2><h4 className="jobTitle">coo / gc</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={miguel} alt="miguel" className="teamBioImg" />
											<h4 className="bio">Miguel has helped shape the ad industry for more than 25 years.
											He’s seen it all. He keeps our team strategic and forward-thinking and is steadfast
											in his pursuit of excellence and innovation through communication. Miguel never
											fails to capture the human connection with his unique storytelling approach.</h4>

											<h2 className="subtitles">miguel nogueras</h2><h4 className="jobTitle">executive creative director</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={tiffany} alt="tiffany" className="teamBioImg" />
											<h4 className="bio">Tiffany is a seasoned international player in the business and advertising
											world. She knows how to simplify and take on complex business problems while turning them
											into pure gold. She has developed proven business performance strategies throughout her
											career and has an intrinsic flexibility with all things tech.
											</h4>

											<h2 className="subtitles">tiffany hobson</h2><h4 className="jobTitle">executive vice president</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={shaina} alt="shaina" className="teamBioImg" />
											<h4 className="bio">Shaina writes stories you want to share and headlines you want to embody.
											She empowers brands with profound narratives that inspire the masses to action. She speaks every
											language of the brands we work with and uses that language to activate success.
											</h4>

											<h2 className="subtitles">shaina huntsberry</h2><h4 className="jobTitle">senior copywriter</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={hillary} alt="hillary" className="teamBioImg" />
											<h4 className="bio">Hillary brings to the team an impressive background in fashion and retail management.
											She’s a master at delivering big projects for big clients and has a meticulous eye for detail. Her innate
											ability to see the big picture is proven everyday through her multigenerational approach to marketing.
											</h4>

											<h2 className="subtitles">hillary hallinan</h2><h4 className="jobTitle">project manager</h4>
									</div>
							</div>

							<div className="item">
									<div className="item-media">
											<img src={chrisf} alt="chrisf" className="teamBioImg" />
											<h4 className="bio">Chris turns beautiful art into strategic design. His years in the marketing industry have groomed
											him into one of the most talented creatives in advertising. His fresh perspective on design makes him an invaluable
											asset to our team, and to our clients.</h4>

											<h2 className="subtitles">chris firnkoess</h2><h4 className="jobTitle">art director</h4>
									</div>
							</div>


							<div className="item">
									<div className="item-media">
											<img src={leonela} alt="leonela" className="teamBioImg" />
											<h4 className="bio">Leonela is a scientist and artist of the next-generation digital experience. She always stays
											ahead of the latest technology and knows how to create a truly captivating user journey. Her approach to digital
											communication always leads us toward the best path to innovation and creativity. </h4>

											<h2 className="subtitles">leonela guzmán</h2><h4 className="jobTitle">full stack developer</h4>
									</div>
							</div>


							<div className="item">
									<div className="item-media">
											<img src={forrest} alt="forrest" className="teamBioImg" />
											<h4 className="bio">Forrest is a video production genius. He has worked on major movies and television series
											and knows how to articulate narratives through stunning visuals. His work will transport you into an awe-inspiring
											visual experience</h4>

											<h2 className="subtitles">forrest mcbride</h2><h4 className="jobTitle">producer</h4>
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
									<h2 className="subtitles">where teamwork<br/>meets amazing</h2>
									<p>Connect with us at <a className="joblink" href="mailto:hello@amagazi.com?subject=Hello, amagazi careers!">hello@amagazi.com</a></p>
							</div>


							<div className="ab-box4-mob">
									<h1 className="ab-title">careers</h1>
									<h2 className="subtitles">where teamwork meets amazing</h2>
									<p>Connect with us at <a className="joblink" href="mailto:hello@amagazi.com?subject=Hello, amagazi careers!">hello@amagazi.com</a></p>
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
