
import './App.css';
import CardContainer from './components/CardContainer';
import Form from './components/Form';
import Header from './components/Header'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav /> 
      <Form />
      <CardContainer /> 
    </div>
  );
}

export default App;
