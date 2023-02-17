import './App.css';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName  from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunctions from './components/ExecuteFunctions';

function App() {

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Corvette", color: "Azul", newCar: false, km: 230},
    {id: 3, brand: "BMW", color: "Preto", newCar: false, km: 410},
  ];

  return (
    <>
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Pedro" />
      <CarDetails brand="VW" km="29km" color="Verde" newCar={false}/>
      <CarDetails brand="FIAT" km="0km" color="Vermelha" newCar={true}/>
      <CarDetails brand="HONDA" km="20km" color="Rosa" newCar={false}/>
      {cars.map((car, i) => (
        <CarDetails key={i} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
      <Fragments propFragments = "teste"/>
      <Container>
        <p>E este o conteudo</p>
        <h1>MUITO PICA</h1>
      </Container>
      <ExecuteFunctions myFunction={showMessage} />
    </>
  );
}

export default App;
