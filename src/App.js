import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";




function App() {
  const [mode,setMode] =useState("light");
  const [alert, setalert] = useState(null);
  const showAlert =(message,type)=>{
    setalert({
      msg: message, 
      type: type,
    })
    setTimeout(()=>{
      setalert(null)

    },1500)
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = '#0d3268';
      showAlert("Dark mode is enabled" , "success");
      document.title="Dark mode";
    
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled" , "success");
      document.title="light mode";

      }
  }
  
  return (  
  <>
<Router>
<Navbar title="TextUtils2" aboutText = "About TextUtils" mode={mode} toggleMode = {toggleMode} />
<Alert alert={alert} />
<div className="container my-3"> 
<Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <TextForm  heading ="Enter the text to annalyse below" mode={mode} showAlert={showAlert} />

            </Route>
        </Switch>



 
</div>
</Router>


    </>

  );
}

export default App;
