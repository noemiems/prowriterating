import React, { Component } from 'react';
import Dropdown from './dropdown.js';


export default class Rater extends React.Component {
    constructor(props) {
      super(props);
      this.state = {rater: ''};
    }
  
    handleChange = event => {
      this.setState({rater: event.target.value})};
  
    
  
    render() {
      
      return (
        
        <div style={{marginTop:"1%"}} >
        <form onSubmit={this.handleSubmit}>
          <label style={{marginLeft:"1.3%"}}>
            <input 
            style={{backgroundColor:'white'}}
            type="text"
            name="rater"
            placeholder="rater name"
            value={this.state.rater}
            onChange={this.handleChange.bind(this)}
            value={this.state.value} />
          </label>
        </form>
       
        <Dropdown rater={this.state.rater} />
        </div>
      );
    }
  }
