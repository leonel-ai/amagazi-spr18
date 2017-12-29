import React, {Component} from 'react';
import Footer from './Footer';
import '../styles/Main.scss';

import servPageImg from '../assets/services.png';
import servMobile from '../assets/services_m.png';
import logo1 from '../assets/logos_01.gif';
import logo2 from '../assets/logos_02.gif';
import logo3 from '../assets/logos_03.gif';

class Services extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('/services');
    }

    render() {
        return (
            <div className="srv-grid">

                <div className="srv-box1-desk">
                    <h1 className="srv-title">what we do</h1>
                    <h2 className="subtitles">forecasters of the market</h2>
                    <p>Passion is our priority – to make your voice loudly heard 
                        in an overwhelming sea of other voices. 
                        <br/><br/>
                        We aim to unveil hidden 
                        insights within your market and tap you’re your potential 
                        anxiously awaiting to thrive.
                        <br/><br/>
                        We know people. We know business. 
                        We know your potential. And it is powerful. Let’s tap into it.
                        <br/><br/>
                        <br/><br/>
                        What we do best:<br/><br/>
                        <li><em>BRANDING</em> — brand messaging + campaign development<br/></li>
                        <li><em>STRATEGY</em>  — market research + business development<br/></li>
                        <li><em>CONSUMER EXPERIENCE</em>  — user design + communication<br/></li>
                    </p>
                </div>
                <div className="srv-box2-desk">
                    <img className="srv-pg-img-desk" src={servPageImg} alt="services-laptop" />
                </div>

            <div className="srv-laptop">
                <div className="srv-box1-lap">
                    <h1 className="srv-title">what we do</h1>
                    <h2 className="subtitles">forecasters of the market</h2>
                    <p>Passion is our priority – to make your voice loudly heard 
                        in an overwhelming sea of other voices. 
                        <br/><br/>
                        We aim to unveil hidden 
                        insights within your market and tap you’re your potential 
                        anxiously awaiting to thrive.
                        <br/><br/>
                        We know people. We know business. 
                        We know your potential. And it is powerful. Let’s tap into it.
                    </p>
                </div>
                <div className="srv-box2-lap">
                    <img className="srv-pg-img-desk" src={servPageImg} alt="services-laptop" />
                </div>
            </div>

                <div className="srv-box1-mob">
                    <h1 className="srv-title">what we do</h1>
                    <div className="srv-box2-mob">
                        <img className="srv-pg-img-mob" src={servMobile} alt="services-mobile" />
                        <div className="srv-text-mob">
                        <h2 className="subtitles-mob">forecasters of the market</h2>
                            <p>Passion is our priority – to make your voice loudly heard 
                            in an overwhelming sea of other voices. 
                            <br/><br/>
                            We aim to unveil hidden 
                            insights within your market and tap you’re your potential 
                            anxiously awaiting to thrive.
                            <br/><br/>
                            We know people. We know business. 
                            We know your potential. And it is powerful. Let’s tap into it.
                            <br/><br/>
                            What we do best:<br/><br/>
                            <li><em>BRANDING</em> — brand messaging + campaign development<br/></li>
                            <li><em>STRATEGY</em>  — market research + business development<br/></li>
                            <li><em>CONSUMER EXPERIENCE</em> — user design + communication<br/></li>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="srv-grid-mid">
                    <div className="srv-box3-desk">
                        <h1 className="srv-title">our approach</h1>
                        <h2 className="subtitles">key between mediocrity and excellence</h2>
                        <p>We approach creativity smarter.<br/>We discover deeply in order 
                            create profound connections and impact.<br/>We believe in constant 
                            movement.<br/>There’s always more to explore. More to reveal. More 
                            to achieve.<br/>We are enthusiasts of cultural influence and 
                            practitioners of business longevity, and we’re here to achieve 
                            something far beyond mediocrity.</p>
                    </div>

                    <div className="quote-div">
                        <h2 className="subtitles">— key ingredients that define the difference between mediocrity and excellence —</h2>
                    </div>

                    <div className="srv-brand-laptop">
                    <h1 className="srv-title">our best</h1>
                    <p><li><div className="subtitles">BRANDING</div><br/>brand messaging + campaign development<br/><br/></li>
                        <li><div className="subtitles">STRATEGY</div><br/>market research + business development<br/><br/></li>
                        <li><div className="subtitles">CONSUMER EXPERIENCE</div><br/>user design + communication<br/><br/></li></p>
                    </div>

                    <div className="srv-box3-laptop">
                        <h1 className="srv-title">our approach</h1>
                        <p>We approach creativity smarter.<br/>We discover deeply in order 
                            create profound connections and impact.<br/>We believe in constant 
                            movement.<br/>There’s always more to explore. More to reveal. More 
                            to achieve.<br/>We are enthusiasts of cultural influence and 
                            practitioners of business longevity, and we’re here to achieve 
                            something far beyond mediocrity.</p>
                    </div>

                    <div className="srv-box3-mob">
                        <h1 className="srv-title">our approach</h1>
                        <h2 className="subtitles-mob">key between mediocrity and excellence</h2>
                        <p>We approach creativity smarter.<br/>We discover deeply in order 
                            create profound connections and impact.<br/>We believe in constant 
                            movement.<br/>There’s always more to explore.<br/>More to reveal. More 
                            to achieve.<br/>We are enthusiasts of cultural influence and 
                            practitioners of business longevity, and we’re here to achieve 
                            something far beyond mediocrity.</p>
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
                            <li><a href="http://www.southerndesignweek.com/">Southern Coalition of Fashion + Design</a></li>
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