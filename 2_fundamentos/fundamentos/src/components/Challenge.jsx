const Challenge = () => {
  const value1 = 23;
  const value2 = 3;

  const handleClick = () => {
    const sum = value1 + value2;
    console.log(`a soma de ${value1} + ${value2} é igual a ${sum}`);
  };

  return (
    <div>
      <p>valor 1: {value1}</p>
      <p>valor 2: {value2}</p>
      <button onClick={handleClick}>Somar valores</button>
    </div>
  );
};

export default Challenge;
