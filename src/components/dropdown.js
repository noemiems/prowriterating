import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Textform from './textlevelform';
import ParagraphLevel from './paragraphlevelform';



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
      rater: ""
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
    console.log(this.state.selectOptions)

    if (this.state.id) 
     return (
      <div className="container">
        
                <div className="row">
            <div className="col">
            <div className="box" style={{backgroundColor:"white"}}>
    < Select placeholder="Please choose text" options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
      <h3 style={{marginTop:'5%'}}><strong>{this.state.title}</strong></h3>
     <p style={{marginTop:'5%', whiteSpace:"pre-line", fontSize:'80%'}}>{this.state.text}</p>
            </div>
            </div>
            <div className="col">
            <div className="box" style={{backgroundColor:"white"}}>
        <select name="category" onChange={this.handleCategoryChange.bind(this)}>
            <option id="0" >Paragraph level</option>
            <option id="1" >Text level</option>
        </select>
        
        <p>{this.state.category === "Paragraph level" && (
        <ParagraphLevel title={this.state.title} text={this.state.text} rater={this.state.rater} paragraphnum={this.state.paragraphnum} />)}</p>
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

