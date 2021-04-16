import React, { Component } from 'react';
import Rater from './Rater';
import './rating.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class RateText extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      text: '',
      paragraphnum: '',
      rater: ''
    };
  }


  render() {
    return (
      <div>
        <Rater />
      </div>
    );
  }
}

export default RateText;
