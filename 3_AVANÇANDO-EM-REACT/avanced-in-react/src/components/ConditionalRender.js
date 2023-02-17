import { useState } from "react"

const ConditionalRender = () => {
const [x] = useState(false)
const [name] = useState("Luiwz")

  return (
    <div>
      <h1>Conditional Render</h1>
      {x && <p>Se x for true, aparece</p>}
      {!x && <p>Se x for false, também aparece</p>}
      {name === "Luiz" ? (
        <div>
          <p>Meu nome é luiz</p>
        </div>
      ) : (
        <div>
          <p>Meu nome não é Luiz</p>
        </div>
      ) }
      
    </div>
  )
}

export default ConditionalRender