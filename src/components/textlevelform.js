import React, { useState  } from 'react';
import axios from "axios";


const Textform = props => {

    const [input, setInput] = useState({
                title: '',
                rater: '',
                type: 'textlevel',
                text1: '',
                text2: '',
                text3: '',
                text4: '',
                text5: ''
            })
        
            function handleChange(event) {
                const {name, value} = event.target;
        
                setInput(prevInput => {
                    return {
                        ...prevInput,
                        [name]: value
                    }
                })
            };
        
            function handleClick(event) {
                event.preventDefault();
                const newNote = {
                    title: props.title,
                    rater: props.rater,
                    type: 'textlevel',
                    text1: input.text1,
                    text2: input.text2,
                    text3: input.text3,
                    text4: input.text,
                    text5: input.text5
                }
        
                axios.post('https://textratingtool.herokuapp.com/create', newNote)
        
                setInput({
                title: '',
                rater: props.rater,
                rater: '',
                text1: '',
                text2: '',
                text3: '',
                text4: '',
                text5: ''
                  });
            }


    return ( 
        <div className='container' style={{marginTop:'5%', fontSize:"80%"}}>
        
        <form style={{letterSpacing:'1px'}}>

        <p style={{marginTop:'3%', fontWeight:'bold'}}>How many main ideas does this text discuss?</p>
            <div className="form-group">
                <input onChange={handleChange} name="text1" value={input.text1} autoComplete="off" placeholder="Enter number" className="form-control" style={{marginTop:'2%', width:'20%'}}></input>
            </div>

        <p style={{fontWeight:'bold'}}>How many of the main ideas of the text are forecast in the introduction? (If there is no introduction, write N/A)</p>
            <div className="form-group">
                <input onChange={handleChange} name="text2" value={input.text2} autoComplete="off" placeholder="Enter number" className="form-control" style={{marginTop:'2%', width:'20%'}}></input>
            </div>

        <p style={{fontWeight:'bold'}}>How many of the main ideas of the text are summarized in the conclusion? (If there is no conclusion, write N/A.)</p>
            <div className="form-group">
                <input onChange={handleChange} name="text3" value={input.text3} autoComplete="off" placeholder="Enter number" className="form-control" style={{marginTop:'2%', width:'20%'}}></input>
            </div>

        <p style={{fontWeight:'bold'}}>On a scale of 1 to 4, how well does the essay address the topic of the prompt?</p>
            <div className="form-group">
                <input onChange={handleChange} name="text4" value={input.text4} autoComplete="off" placeholder="Enter number" className="form-control" style={{marginTop:'2%', width:'20%'}}></input>
            </div>

        <p style={{fontWeight:'bold'}}>On a scale of 1 to 4, rate the strength of the thesis statement. (Use N/A if there is no thesis statement.)</p>
            <div className="form-group">
                <input onChange={handleChange} name="text5" value={input.text5} autoComplete="off" placeholder="Enter number" className="form-control" style={{marginTop:'2%',width:'20%'}}></input>
            </div>

            <button style={{marginLeft:'45%'}} onClick={handleClick} className="btn btn-lg btn-info">DONE</button>
        </form>
        </div>
    )};

export default Textform;