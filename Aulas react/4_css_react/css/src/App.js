import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react'
import Title from './components/Title';

function App() {
  const number = 15;
  const [name] = useState("Luiz");
  const redTitle = true;

  return (
    <div className="App">
      <h1>React com css</h1>
      <MyComponent />
      <p>Parágrafo do app js</p>
      <p style={{color: "blue", padding: "25px", borderTop: "20px solid blue"}}>Servindo</p>
      <p style={ number < 10 ?
        {color: 'black'} : {color: 'blue'}
      }>
        other css
      </p>
      <p style={
        name === "tiago"
        ? { color: "black", backgroundColor: "pink"} : { color: "green", backgroundColor: "blue" }
      }
      >
        css dinamico
      </p>
      <h2 className={
        redTitle ? "red-title" : "title"
      }>Este título vai ter classe dinamica</h2>

      <p>css Modules</p>

      <Title />
    </div>
  );
}

export default App;
