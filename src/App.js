import './App.css';
import Hello from './components/cards';
import Saludar from './components/Ejercicio3';

function App() {
  return (
    <div className="App">
      <Hello saludo="Hello  Wordl" />
     <Hello saludo="Hello My friends" />
     <Saludar 
     saludar="Hello wordl"
     />
    </div>
  );
}

export default App;

