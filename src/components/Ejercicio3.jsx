import React from 'react';
import { useState } from 'react';

const Saludar = (props) => {


   let [msj , mostrarSaludo] = useState(" ");


     const  saludar = () =>{
        mostrarSaludo(msj = " (from changed state)")
        console.log("desde la funsion saludar")
     }

  

    return (
        <div>
        <div>
          <h1>{props.saludar}{msj}</h1>
          <button onClick={saludar}>saludar</button>
          <hr></hr>  
        </div>
        </div>
    );
};

export default Saludar;