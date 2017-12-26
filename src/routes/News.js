import React, { Component } from 'react';
import Footer from './Footer';
import '../styles/Main.scss';
import AnimatedWrapper from "./AnimatedWrapper";


class NewsComponent extends Component {
    state = { expanded: false }

    componentWillMount() {
        this.props.history.push('/news');
    }

    render() {
        return (
            <div className="news-grid">
                
                <div className="news-box1-desk">
                    <h1 className="news-title">news</h1>
                </div>

                <div className="news-box2-desk">
                    INSERT MEDIUM API HERE
                </div>

                <div className="news-box1-mob">
                    <h1 className="news-title">news</h1>
                    <div className="news-box2-mob">
                    INSERT MEDIUM API HERE
                    </div>
                </div>

                <div className="news-footer pg-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

const News = AnimatedWrapper(NewsComponent);

export default News;