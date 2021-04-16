import React, {useState} from 'react';
import axios from "axios";

function UploadText() {
    
    const [input, setInput] = useState({
        title: '',
        text: '',
        speaker: '',
        paragraphnum: ''
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
            title: input.title,
            text: input.text,
            speaker: input.speaker,
            paragraphnum: input.paragraphnum
        }

        axios.post('https://textratingtool.herokuapp.com/create', newNote)

        setInput({
            title: '',
            text: '',
            speaker: '',
            paragraphnum: ''
          });
    }

    return ( 
        <div className='container' style={{marginTop:'5%', textAlign:'center'}}>
            <h1>
                Upload text
            </h1>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off" placeholder="Enter file title" className="form-control" style={{marginTop:'2%', width:'20%', marginLeft:'40%'}}></input>
            </div>

            <div className="form-group">
                <input onChange={handleChange} name="paragraphnum" value={input.paragraphnum} autoComplete="off" placeholder="Enter number of paragraphs" className="form-control" style={{marginTop:'2%', width:'20%', marginLeft:'40%'}}></input>
            </div>

            <div className="form-group">
                <input onChange={handleChange} name="speaker" value={input.speaker} autoComplete="off" placeholder="Enter speaker language" className="form-control" style={{marginTop:'2%', width:'20%', marginLeft:'40%'}}></input>
            </div>

            <div className="form-group">
            <textarea onChange={handleChange} placeholder="Enter text, please skip line between paragraphs" autoComplete="off" name="text" value={input.text} className="form-control" style={{marginTop:'2%', marginLeft:'25%', width:'50%', height:'500px', resize:'none'}}>

            </textarea>
            </div>

            <button onClick={handleClick} style={{backgroundColor:"#252d4a"}}className="btn btn-lg btn-info">UPLOAD</button>
        </form>
        </div>
    )};

export default UploadText;