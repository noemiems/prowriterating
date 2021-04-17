import React, { Component, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textform from './textlevelform';
import ParagraphLevel from './paragraphlevelform';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';



class Dropdown extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      title: '',
      text: '',
      paragraphnum: '',
      category: '',
      rater: "",
      count:1
    };

  }

  componentWillReceiveProps(nextProps) {
    this.setState({ rater: nextProps.rater });  
  }

 async getOptions(){
    const res = await axios.get('https://textratingtool.herokuapp.com/rating')
    const data = res.data

    const options = data.map(d => ({
      "value" : d._id,
      "label" : d.title,
      "content": d.text,
      "paragraphnum": d.paragraphnum,
    }))

    this.setState({selectOptions: options})
  }

  onClickPrevious(){
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      });
    }
}

  onClickNext(){
    if (this.state.count < this.state.paragraphnum) {
      this.setState({
        count: this.state.count + 1
      });
    }
}

  handleChange(e){
   this.setState({id:e.value, title:e.label, text:e.content, paragraphnum:e.paragraphnum, rater:e.rater})
   }

  handleCategoryChange = (e) => {
    this.setState({category:e.target.value})
}

  componentDidMount(){
      this.getOptions()
    }


  render() {
    let entiretext = this.state.text;
    let splittedtext = entiretext.split(/\r?\n/);
    let filteredtext = splittedtext.filter(item => item);
    let currentparagraph = filteredtext[this.state.count-1];

    console.log(this.state.selectOptions)
  
    if (this.state.id) 
     return (
      <div className="container" >
  
                <div className="row">
            <div className="col">
            <div className="box" style={{backgroundColor:"white"}}>
              
    < Select placeholder="Please choose text" options={this.state.selectOptions} onChange={this.handleChange.bind(this)} style={{backgroundColor:'white'}} />
     <h3 style={{marginTop:'5%', backgroundColor:'white'}}><strong>{this.state.title}</strong></h3>
     <p>{this.state.category === "Text level" && (
        <p style={{marginTop:'5%', whiteSpace:"pre-line", backgroundColor:'white', fontSize:'80%'}}>{this.state.text}</p>)}</p>
        <p>{this.state.category === "Paragraph level" && (
        <p style={{marginTop:'5%', backgroundColor:'white', fontSize:'80%'}}>{currentparagraph}</p>)}</p>
            </div>
            </div>
            <div className="col">
            <div className="box" style={{backgroundColor:"white"}}>
        <select  style={{backgroundColor:'white'}} name="category" onChange={this.handleCategoryChange.bind(this)}>
            <option style={{backgroundColor:'white'}} id="0" >Paragraph level</option>
            <option style={{backgroundColor:'white'}} id="1" >Text level</option>
        </select>
        
        <p>{this.state.category === "Paragraph level" && ( 
        <ParagraphLevel onClickPrevious={this.onClickPrevious.bind(this)} onClickNext={this.onClickNext.bind(this)} count={this.state.count} title={this.state.title} text={this.state.text} rater={this.state.rater} paragraphnum={this.state.paragraphnum} />)} </p>
        <p>{this.state.category === "Text level" && (
        <Textform 
        title={this.state.title} 
        rater={this.state.rater} 
        paragraphnum={this.state.paragraphnum} 
        />)}</p>
    </div>
    </div>
     </div>
     </div>)
    else {
    return (
      <div style={{width:'20%', marginLeft:'40%', marginTop:'5%'}}>
      < Select placeholder="Please choose text" options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
      </div>
    )}  
}
};

export default Dropdown;

