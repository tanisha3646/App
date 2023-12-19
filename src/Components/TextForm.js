import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpOnchng = (event)=>{
        setText(event.target.value);
    }
    const handleUpOnclk = ()=>{
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
  return (
    <>
        <div className="mb-3" style = {{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" onChange={handleUpOnchng} style = {{backgroundColor: props.mode==='dark'?'grey':'white',
            color: props.mode==='light'?'black':'white'}} id="textArea" value={text}rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpOnclk}>Toggle Case</button>

        <div className="container my-3" style = {{color: props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter text in the textBox to preview here'}</p>
        </div>
    </>
  )
}
