import React, {useState} from 'react';
import axios from "axios";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function ParagraphLevel(props) {
    const [input, setInput] = useState({
        selectOptions : [],
        title: '',
        type: 'paragraphlevel',
        rater: '',
        paragraph: props.count,
        currentparagraph: '',
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
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

    // function onClickPrevious(){
    //     if (count > 1) {
            //setCount(prevCount => prevCount - 1)
    //     }
    // }

   
    // function onClickNext(){
    //     if (count < props.paragraphnum) {
    //         setCount(prevCount => prevCount + 1)
    //     }
    // }

    function onClickNext(){
        props.onClickNext()
        }

    function onClickPrevious(){
        props.onClickPrevious()
            }
    

    function handleClick(event) {
        event.preventDefault();
            const newNote= {
                title: props.title,
                type: 'paragraphlevel',
                paragraph: props.count,
                rater: props.rater,
                text1: input.text1,
                text2: input.text2,
                text3: input.text3,
                text4: input.text4,
                text5: input.text5
            }
            
            axios.post('https://textratingtool.herokuapp.com/create', newNote)

    
            setInput({
            title: '',
            paragraph: '',
            rater: props.rater,
            text1: '',
            text2: '',
            text3: '',
            text4: '',
            text5: '',
              })
    };

    return ( 
        <div className='container' style={{marginTop:'5%', fontSize:"80%", backgroundColor:'white'}}>
        
        <form style={{letterSpacing:'1px', backgroundColor:'white'}}>
        <h3 style={{backgroundColor:'white'}}><NavigateBeforeIcon onClick={onClickPrevious} style={{fontSize:'200%', cursor:'pointer', backgroundColor:'white'}}/> 
        paragraph {props.count}/{props.paragraphnum} 
        <NavigateNextIcon onClick={onClickNext} style={{fontSize:'200%', cursor:'pointer', backgroundColor:'white'}}/></h3>

        <p style={{marginTop:'3%', fontWeight:'bold', backgroundColor:'white'}}>How many main ideas are discussed in this paragraph? See definition of a "main idea" above. To distinguish between "main ideas" and simply supporting ideas, consider how
main ideas are broad; supporting ideas can be subsumed under a broader main idea category. Paragraphs may provide clues such as transitions to indicate separate ideas.</p>
            <div className="form-group" style={{backgroundColor:'white'}}>
                <input onChange={handleChange} name="text1" value={input.text1} autoComplete="off" placeholder="Enter number" className="form-control" style={{marginTop:'2%', width:'20%', backgroundColor:'white'}}></input>
            </div>

        <p style={{fontWeight:'bold', backgroundColor:'white'}}>How well does this paragraph develop from / fit with the thesis statement (if applicable) and prompt? (Scale of 1 to 4)</p>
            <div className="form-group" style={{backgroundColor:'white'}}>
                <input onChange={handleChange} name="text2" value={input.text2} autoComplete="off" placeholder="Enter number" className="form-control" style={{marginTop:'2%', width:'20%', backgroundColor:'white'}}></input>
            </div>

        <p style={{fontWeight:'bold', backgroundColor:'white'}}>How well does this paragraph connect to/transition from/follow the previous paragraph? (Scale of 1 to 4) Write "N/A" if there is only one paragraph in the whole text.</p>
            <div className="form-group" style={{backgroundColor:'white'}}>
                <input onChange={handleChange} name="text3" value={input.text3} autoComplete="off" placeholder="Enter number" className="form-control" style={{marginTop:'2%', width:'20%', backgroundColor:'white'}}></input>
            </div>

        <p style={{fontWeight:'bold', backgroundColor:'white'}}>On a scale of 1 to 4, how well does this paragraph evidence the claim made in the topic sentence? Write N/A if there is no topic sentence.</p>
            <div className="form-group" style={{backgroundColor:'white'}}>
                <input onChange={handleChange} name="text4" value={input.text4} autoComplete="off" placeholder="Enter number" className="form-control" style={{marginTop:'2%', width:'20%', backgroundColor:'white'}}></input>
            </div>

        <p style={{fontWeight:'bold', backgroundColor:'white'}}>On a scale of 1 to 4, how strong is this paragraph's topic sentence? Write N/A if there is no topic sentence.</p>
            <div className="form-group" style={{backgroundColor:'white'}}>
                <input onChange={handleChange} name="text5" value={input.text5} autoComplete="off" placeholder="Enter number" className="form-control" style={{marginTop:'2%',width:'20%', backgroundColor:'white'}}></input>
            </div>

            <button style={{marginLeft:'45%'}} onClick={handleClick} className="btn btn-lg btn-info">DONE</button>
        </form>
        </div>
    )};

export default ParagraphLevel;