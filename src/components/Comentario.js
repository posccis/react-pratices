import React from "react";
import './Comentario.css'

const Comentario = props => (
    <>
        <div className='comentario'>
        <p>{props.nome}</p>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.data.toString()}</p>
        </div>
    </>
);

export default Comentario;