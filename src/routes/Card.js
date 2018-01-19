import React, {Component} from 'react';
import '../styles/Main.scss';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flipped: false,
      clicked: false
    }

    this.flip = this.flip.bind(this);
  }

  getInitialState() {
    return {
      flipped: false,
      clicked: false
    }
  }

  flip() {
    this.setState({
      flipped: !this.state.flipped,
      clicked: true
    });
  }

  render() {
    var flippedCSS = this.state.flipped ? " Card-Back-Flip" : " Card-Front-Flip";
    if (!this.state.clicked) flippedCSS =  "";
    return (
      <div className="Card" onClick={this.flip}>
        <div className={"Card-Front"+flippedCSS}>
          <h3>{this.props.title}</h3>
        </div>
        <div className={"Card-Back"+flippedCSS}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Card;
