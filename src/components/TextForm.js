import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()  =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
      }  
      const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
      }
      const clearx = () => {
        setText("");
        props.showAlert("Textbox cleared","success")
      }
      const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard","success")
    }
    
    
    const handleOnChange = (event)  =>{
      setText(event.target.value);
    }   
    
    const[text,setText] = useState('');
    return (
      <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
     <div className="mb-3">
         <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
     </div>
     
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
     
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
     
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearx}>Clear Text</button>
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
     
    </div>
    
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>Your text contains {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}  characters.</p>
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here."}</p>
    </div>
    </>
  )
}


// text = "new text";   it is the wrong way to update in reactjs
// setText("New Text"); it is the right way to update in reactjs