// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

//styles / css
import './App.css';

function App() {
  const nome = "luiz";
  return (
    <div className="App">
     <h1>Fundamentos React</h1>
     <FirstComponent/>
     <TemplateExpressions/>
     <h1>Aqui abaixo é outra coisa</h1>
     <MyComponent/>
     <Events/>
     <h1 className='meuNome'>Meu nome é {nome}</h1>
     <Challenge/>
    </div>
  );
}

export default App;
