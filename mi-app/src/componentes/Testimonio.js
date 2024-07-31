import React from 'react'
import "../css/Testimonios.css"


function Testimonio(props){
return(
    <><div className='contenedor-testimonio'>
        <img className='imagen-testimonio'
            src={require(`../imagenes/testimonio-${props.imagen}.png`)}></img>
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>{props.nombre}</p>
            <p className='cargo-testimonio'>{props.profesion}</p>
            <p className='texto-testimonio'>{props.comentario}
            </p>
        </div>
        </div>
        </>

)   
}
export default Testimonio;