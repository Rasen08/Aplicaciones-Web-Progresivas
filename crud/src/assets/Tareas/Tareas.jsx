import { useState } from "react";
//Importamos el Hook useState para crear un estado local.

// Mi función es crear un listado actualizable de tareas a realizar (To Do List)


const Tareas = () => {
    const [tarea, setTarea] = useState(''); 
    const [tareas, setTareas] = useState([]); 
    
    //Función auxiliar: 

    const agregarTarea = (e) => {
        e.preventDefault(); 
        //Tengo que agregar cada "tarea" en las "tareas"
        if(tarea.trim() === '') return; 
        setTareas([...tareas, tarea]);
        setTarea(""); 
    }


    const eliminarTarea = (indice) => {
        setTareas( tareas.filter((_, i) => i !== indice)) 
    }

  return (
    <main className="contenedor-app">
        <h1> Listado de Tareas </h1>
        <form className="formulario">
            <input 
                type="text" 
                placeholder="Escribe una tarea..." 
                value={ tarea }
                onChange={ (e) => setTarea(e.target.value)}
            />
            <button onClick={ agregarTarea }> Agregar </button>
        </form>
        <ul>
            {
                tareas.map((t, index) => (
                    <li key={ index }>
                        {t}
                        <button className="btn-eliminar" onClick={() => eliminarTarea(index)}> Eliminar Tarea </button>
                    </li>
                ))
            }
        </ul>
    </main>
  )
}

export default Tareas