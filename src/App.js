import logo from './logo.svg';
import Header from "./components/header";
import Form from "./components/form";
import Details from "./components/description";
import Section from "./components/section"


import "./App.css";
//import {Fragment} from 'react'

function App() {
  return (
    <div className="App">
    <header className="App-header">
    
      <Section/>
    <Header/>
    <br/>
    <br/>
    <Form/>
    <br/>
    <br/>
    <Details/>
    </header>
    </div>
   );
}

export default App;
