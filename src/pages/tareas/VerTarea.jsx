import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const VerTarea = () => {

    let { id } = useParams();
    
    const { nombre, descripcion, estaFinalizada } = useSelector(
        (state) => state.tarea.listaTareas.filter(t => t._id === id)[0]
    );

    return (
        <div>
            <h1>Ver Tarea</h1>

            Nombre:
            <p>{nombre}</p>

            Descripcion:
            <p>{descripcion}</p>

            Finalizada?
            <p>{estaFinalizada ? "si" : "no"}</p>

            <Link to="/tareas">Volver</Link>
        </div>
    )
}

export default VerTarea
