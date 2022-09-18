import React from 'react';
import '../components/cards.css'

const Hello = (props) => {
    return (
        <div>
          <h1>{props.saludo}</h1>
          <hr></hr>  
        </div>
    );
};

export default Hello;