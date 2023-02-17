import React from 'react'

const Fragments = ({propFragments}) => {
  return (
    <div>
      <h2>Primeiro título</h2>
      <h3>Segundo título</h3>
      <h4>{propFragments}</h4>
    </div>
  )
}

export default Fragments