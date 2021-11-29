import React , {useState} from 'react'



export default function TextForm(props) {
    const [text,setText] = useState(" ");
    const handleUpClick = ()=>{
        //console.log("You have alreday clicked");
        let newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert("Converted to upperCase","success");

    }
    const handleLowClick = ()=>{
        //console.log("You have alreday clicked");
        let newText = text.toLowerCase(text);
        setText(newText);
        props.showAlert("Converted to lowerCase","success");
    }
    const handleClear = ()=>{
        //console.log("You have alreday clicked");
        let newText = '';
        setText(newText);
        props.showAlert("text is cleared","success");
    }
    
    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value);
    }
    const handleSpaces = () =>{
        //console.log("On change");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space is removed","success");
    }
    
    const handleCopy = () =>{
        //console.log("On change");
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copy to clipboard","success");
    } 
    

    


    return (
        <>
        <div style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading} </h1>
<div className=" container mb-3" >
  
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light'?'white':'grey' , color : props.mode==='light'?'black':'white'}}></textarea>
</div>
<button className="btn btn-primary m-3" onClick={handleUpClick}>Click to uppercase</button>
<button className="btn btn-primary m-3" onClick={handleLowClick}>Click to Lowercase</button>
<button className="btn btn-primary m-3" onClick={handleClear}>Clear</button>
<button className="btn btn-primary m-3" onClick={handleSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary m-3" onClick={handleCopy}>Copy</button>





 </div>
 <div className = "container my-3 bg-success">
     <h1>Your Text Summary</h1>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008*text.split(" ").length}</p>
     <h1>Preview</h1>
     <p>{text}</p>
     
 </div>
 
 </>
    )
}
