
import './App.css';
import {useState} from 'react'
import CardContainer from './components/CardContainer';
import Form from './components/Form';
import Header from './components/Header'
import Nav from './components/Nav';
import places from "./data"


function App() {
  let [placesArray, sePlacesArray] = useState(places)

  function adPlaceToPlacesArray(){

  }

  return (
    <div className="App">
      <Header />
      <Nav /> 
      <Form adPlaceToPlacesArray={adPlaceToPlacesArray}/>
      <CardContainer places={placesArray}/> 
    </div>
  );
}

export default App;
