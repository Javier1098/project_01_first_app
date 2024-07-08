import React from 'react'

const Hijo = ({ message, onRespond }) => {

  const handleClick = () => {
    onRespond ("Hola Respuesta del Hijo")
  }
  return (
    <div className='Hijo'>
        <h3>Componente Hijo</h3>
        <p>Hola Soy el Hijo!!!</p>
        <p>{message}</p>
        <button onClick={handleClick}>Enviar respuesta al Padre</button>
    </div>
  )
}

export default Hijo