import React, {Component} from 'react';
import '../styles/Main.scss';
import logo from '../assets/logo.png';


class Footer extends Component {
    state = {expanded: false}

    render(){
        return (
            <div className="main-footer-grid">
                <div className="ft-logo">
                    <a href="http://www.amagazi.com">
                        <img className="ft-logo-img" src={logo} alt="footer-logo"/>
                    </a>
                </div>

                <div className="ft-contact">
                    <h3>contact us</h3>
                    <p>7155 old katy road, s255<br/>
                       houston, tx 77024<br/>
                       832.304.5500<br/>
                       <a href="mailto:hello@amagazi.com?subject=Hello, amagazi!">hello@amagazi.com</a>
                    </p>
                </div>

                <div className="ft-social">
                    <h3>follow us</h3>
                    <p>
                        <a href="https://www.linkedin.com/company/amagazi/" rel="noopener noreferrer" target="_blank">linkedin</a><br/>
                        <a href="https://www.facebook.com/amagazi" rel="noopener noreferrer" target="_blank">facebook</a><br/>
                        <a href="https://www.instagram.com/amagazi/" rel="noopener noreferrer" target="_blank">instagram</a><br/>
                        <a href="https://www.medium.com/@amagazi" rel="noopener noreferrer" target="_blank">blog</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;
