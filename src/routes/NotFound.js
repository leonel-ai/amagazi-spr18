import React, {Component} from 'react';
import Footer from './Footer';
import '../styles/Main.scss';
import notFoundImg from '../assets/404.gif';


class NotFound extends Component {
    state = {expanded: false}

    componentWillMount() {
        this.props.history.push('*');
    }
    render(){
        return (
            <div className="nf-grid">
               
                <div className="nf-box1">
                    <h1 className="nf-title">404 NOT FOUND</h1>
                </div>

                <div className="nf-box2-desk">
                    <img src={notFoundImg} alt="notfound"/>
                    <h1 className="nf-msg">AH, AH, AH!<br/>YOU DIDN'T SAY THE MAGIC WORD.</h1>                    
                </div>

                <div className="nf-box2-mob">
                    <img className="nf-404-mob" src={notFoundImg} alt="notfound" />
                    <h1 className="nf-msg">AH, AH, AH!<br/>YOU DIDN'T SAY THE MAGIC WORD.</h1>                    
                </div>

                <div className="nf-footer pg-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default NotFound;