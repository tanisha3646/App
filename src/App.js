
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (msg, type)=>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
      if(mode ==='light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert('Dark mode has been enabled', 'success');
        // document.title = 'Text Utility - Dark';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode has been enabled', 'success')
        // document.title = 'Text Utility - Dark';
      }
  }
  return (
    <>
    <Router>
      {/* <Navbar title = 'TextUtils' about = 'About TextUtils'/> */}
      <Navbar title = 'TextUtils' mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
        <Route exact path="/" element={ 
        <TextForm heading = 'Try Text Utility - Word Counter, Character Counter, Remove Extra Spaces, Change to Lowercase, Change to upperCase' mode = {mode} showAlert = {showAlert}/>
         } /> 
        <Route exact path="/about" element={<About  mode = {mode}/>} /> 
      </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
