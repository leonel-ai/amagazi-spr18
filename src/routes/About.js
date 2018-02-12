import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import GA from 'react-google-analytics-lite';
import Card from './Card';
import Footer from './Footer';
import '../styles/Main.scss';

import aboutImg from '../assets/lobby.jpg';
import aboutImgMobile from '../assets/lobby-m.jpg';

class About extends Component {

	onGALoad() {
		window.ga('create', 'UA-113131904-1', 'auto');//initialize
		window.ga('send', 'pageview', '/about');
	}

render() {
	return (
	<div className="ab-grid">
		<Helmet>
			<meta charSet="utf-8"/>
			<meta name="description" content="who we are | provocateurs with purpose"/>
			<title>about | amagazi</title>
		</Helmet>
		<GA onload={ this.onGALoad } />

	<div className="ab-box1-desk">
		<h1 className="ab-title">who we are</h1>
		<h2 className="subtitles">provocateurs with purpose</h2>
		<p>We are brainy business experts, culture connoisseurs, and catalysts for getting what you want.
			We’re forward-thinkers and advocators of agitating the status quo. We solve business obstacles
			with strategies and creativity across platforms that make sense. Our expertise includes
			branding, business strategy, and crafting share-worthy consumer experiences.
			We’re not a fit for everyone. And we’re OK with that.
		<br/><br/>
		<a href="mailto:hello@amagazi.com?subject=Hello, amagazi!">Let’s talk.</a></p>
	</div>


	<div className="ab-box2-desk ab-box2-desk-16x9">
		<img className="ab-pg-img-desk" src={aboutImg} alt="about-desktop" />
	</div>


	<div className="ab-box1-mob">
		<h1 className="ab-title">who we are</h1>
		<div className="ab-box2-mob">
			<div className="ab-box2-mobImg ab-box2-mobImg">
				<img className="ab-pg-img-mob" src={aboutImgMobile} alt="about-mobile"/>
			</div>
				<div className="ab-text-mob">
					<h2 className="subtitles-mob">provocateurs with purpose</h2>
					<p>We are brainy business experts, culture connoisseurs, and catalysts for getting what you want.
					Our expertise includes branding, business strategy, and crafting share-worthy consumer experiences.
					<br/><br/>
					<a href="mailto:hello@amagazi.com?subject=Hello, amagazi!">Let’s talk.</a></p>
				</div>
		</div>
	</div>

	<div className="ab-std-lead">
		<div className="ab-std-desk">
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
			<p>We are idea-creators and problem-solvers. We have a solid understanding of business longevity because
				we’ve been responsible for our own businesses. We are well-seasoned in our craft, and in case you’re wondering,
				we’ve picked up some awards along the way too.
			</p>
		</div>
	</div>



	<div className="ab-std-lead-mob">
		<div id="our-standards" className="ab-std-mob">
			<h1 className="ab-title">our standard</h1>
			<h2 className="subtitles">exclusive. transparent. responsive. efficient.</h2>
			<p>We are entrepreneurs who have blazed our own trails and have gained lots of business wisdom along the way.
			Simply put, we get it. We don’t believe one size fits all. We curate our teams to custom-fit the needs of our clients.</p>
		</div>

		<div className="ab-lead-mob">
			<h1 className="ab-title">leadership</h1>
			<h2 className="subtitles">motivation through confidence and trust</h2>
			<p>We are idea-creators and problem-solvers. We are well-seasoned in our craft, and in case you’re wondering, we’ve picked up some awards along the way too.
			</p>
		</div>
	</div>


<div className="ab-team">
	<h1 className="ab-title">the team</h1>
	<h2 className="subtitles">meet the people holding our standards high</h2>
</div>


<div className="cards">
	<Card title="founder / ceo" className="job-title">
		<h4 className="bio"><span className="bio-name">Ryan Petersen</span><br/><br/>Ryan brings new ideas and ambitious thoughts to life. He is our never-ending source of inspiration
			and gets the job done. He understands how to run a successful business and brings a wide range of
			business acumen to the table. He has a true sense of the global market which allows him to skillfully
			connect the dots.</h4>
	</Card>

	<Card title="coo / gc">
		<h4 className="bio"><span className="bio-name">Chris Johnsen</span><br/><br/>Chris’s dual approach to solving the toughest business problems is unrivaled. You can count on
		him to challenge all angles of any obstacle he comes across. His bold approach to problem-solving is one that our
		clients appreciate. And his thought-driven leadership is one that our team aspires to model each day.</h4>
	</Card>

	<Card title="exec. creative director">
		<h4 className="bio"><span className="bio-name">Miguel Nogueras</span><br/><br/>Miguel has helped shape the ad industry for more than 25 years.
		He’s seen it all. He keeps our team strategic and forward-thinking and is steadfast
		in his pursuit of excellence and innovation through communication. Miguel never
		fails to capture the human connection with his unique storytelling approach.</h4>
	</Card>

	<Card title="exec. vice president">
		<h4 className="bio"><span className="bio-name">Tiffany Hobson</span><br/><br/>Tiffany is a seasoned international player in the business and advertising
		world. She knows how to simplify and take on complex business problems while turning them
		into pure gold. She has developed proven business performance strategies throughout her
		career and has an intrinsic flexibility with all things tech.</h4>
	</Card>

	<Card title="sr. copywriter">
		<h4 className="bio"><span className="bio-name">Sha&iacute;na Huntsberry</span><br/><br/>Sha&iacute;na writes stories you want to share and headlines you want to embody.
		She empowers brands with profound narratives that inspire the masses to action. She speaks every
		language of the brands we work with and uses that language to activate success.</h4>
	</Card>

	<Card title="project manager">
		<h4 className="bio"><span className="bio-name">Hillary Hallinan</span><br/><br/>Hillary brings to the team an impressive background in fashion and retail management.
		She’s a master at delivering big projects for big clients and has a meticulous eye for detail. Her innate
		ability to see the big picture is proven everyday through her multigenerational approach to marketing.</h4>
	</Card>

	<Card title="art director">
		<h4 className="bio"><span className="bio-name">Chris Firnkoess</span><br/><br/>Chris turns beautiful art into strategic design. His years in the marketing industry have groomed
		him to become one of the most talented creatives in advertising. His fresh perspective on design makes him an invaluable
		asset to our team, and to our clients.</h4>
	</Card>

	<Card title="full stack developer">
		<h4 className="bio"><span className="bio-name">Leonela Guzm&aacute;n</span><br/><br/>Leonela is a scientist and artist of the next-generation digital experience. She always stays
		ahead of the latest technology and knows how to create a truly captivating user journey. Her approach to digital
		communication always leads us toward the best path to innovation and creativity. </h4>
	</Card>

	<Card title="producer">
		<h4 className="bio"><span className="bio-name">Forrest McBride</span><br/><br/>Forrest is a video production genius. He has worked on major movies and television series
		and knows how to articulate narratives through stunning visuals. His work will transport you into an awe-inspiring
		visual experience.</h4>
	</Card>

	<Card title="jr. account executive">
		<h4 className="bio"><span className="bio-name">Kristian Valent&iacute;n</span><br/><br/>Krist&iacute;an is equal parts tenacious and resourceful. His expertise stems from his background
		in coordinating architecture and fashion showcase events in New York City. Since then, he’s mastered the art of building genuine relationships to foster new business.
		He knows potential when he sees it and has a knack for networking his way into valuable, strategic partnerships.</h4>
	</Card>
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
					<p>We are refined virtuosos. We are your James Bond, your superhero, and your unicorn. We
					prefer timeless style over temporary trends and believe in bold simplicity. We welcome unconventional ideas to solve new challenges.
					</p>
			</div>


			<div className="ab-box4-desk">
					<h1 className="ab-title">careers</h1>
					<h2 className="subtitles">where teamwork<br/>meets amazing</h2>
					<p>Connect with us at <a className="joblink" href="mailto:hello@amagazi.com?subject=Hello, amagazi careers!">hello@amagazi.com</a></p>
			</div>


			<div className="ab-box4-mob">
					<h1 className="ab-title">careers</h1>
					<h2 className="subtitles-mob">where teamwork meets amazing</h2>
					<p>Connect with us at <a className="joblink" href="mailto:hello@amagazi.com?subject=Hello, amagazi careers!">hello@amagazi.com</a></p>
			</div>
	</div>

	<div className="ab-footer pg-footer">
			<Footer />
	</div>

</div>
)}}

export default About;
