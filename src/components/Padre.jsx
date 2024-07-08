import React, { useState } from 'react'
import Hijo from './Hijo'

export const Padre = () => {
const [message, setMessage ] =useState("Hola desde el Componente Padre");
const [response, setResponse] =useState();


const handleChildResponse = (chilsMessage) => {
    setResponse(chilsMessage);

}
  return (

    <div className ='Padre'>
        <h2>Componente padre</h2>
        <Hijo message={message} onRespond={handleChildResponse}/>
        {response}

    </div>
  )
}
