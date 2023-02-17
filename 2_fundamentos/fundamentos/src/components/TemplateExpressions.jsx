import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
  const name = "Paulo";
  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <MyComponent />
    </div>
  );
};

export default TemplateExpressions;
