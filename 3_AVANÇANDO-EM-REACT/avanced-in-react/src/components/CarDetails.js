const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
      <h1>Car Details</h1>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Esse carro é novo!</p>}
    </div>
  )
}

export default CarDetails