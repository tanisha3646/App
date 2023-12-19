import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleOnchng = (event)=>{
        setText(event.target.value);
    }
    const handleTogOnclk = ()=>{
        if(text.match(/[a-z]/)){
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert('Converted to UpperCase', 'success');
        }
        else{
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert('Converted to LowerCase', 'success');
        }
        
    }
    const handleLowOnclk = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase', 'success');
    }
    const handleUpOnclk = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success');
        
    }
    const handleClrOnclk = ()=>{
        setText("");
        props.showAlert('Text Cleared', 'success');
        
    }
    const handleCpyOnclk = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied', 'success');
    }
    const handleRemOnclk = ()=>{
        let newText = text.split(" ").filter((element) =>{return  element.length!==0}).join(" ");
        setText(newText);
        props.showAlert('Extra spaces removed', 'success');
    }
  return (
    <>
        <div className="mb-3" style = {{color: props.mode==='light'?'black':'white'}}>
            <h1 className = 'mb-4'>{props.heading}</h1>
            <textarea className="form-control" onChange={handleOnchng} style = {{backgroundColor: props.mode==='dark'?'#13466e':'white',
            color: props.mode==='light'?'black':'white'}} id="textArea" value={text}rows="8"></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpOnclk}>Convert to UpperCase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowOnclk}>Convert to LowerCase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClrOnclk}>Clear Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCpyOnclk}>Copy Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemOnclk}>Remove extra spaces</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTogOnclk}>Toggle Case</button>

        <div className="container my-3 my-1" style = {{color: props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").filter((element) =>{return  element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.08*text.split(" ").filter((element) =>{return  element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to Preview!!!'}</p>
        </div>
    </>
  )
}
