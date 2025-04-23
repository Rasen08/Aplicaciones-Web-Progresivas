import { useState } from "react";

const Contactos = () => {
    const [contactos, setContactos] = useState([]);
    const [formulario, setFormulario] = useState({nombre: '', correo: '', telefono: ''}); 
    const [editarIndice, setEditarIndice] = useState(null);

    const cambiarValor = (e) => {
        setFormulario({...formulario, [e.target.name]: e.target.value});
    }

    const enviarFormulario = (e) => {
        e.preventDefault(); 
        if(!formulario.nombre || !formulario.correo || !formulario.telefono) return; 
        if(editarIndice !== null) {
            const copia = [...contactos]; 
            copia[editarIndice] = formulario; 
            setContactos(copia); 
            setEditarIndice(null);
        } else {
            setContactos([...contactos, formulario]); 
        }
        setFormulario({nombre: '', correo: '', telefono: ''}); 
    }

    //Función para editar: 
    const editarContacto = (indice) => {
        setFormulario(contactos[indice]); 
        setEditarIndice(indice); 
    }


    //Función para eliminar: 

    const eliminarContacto = (indice) => {
        setContactos( contactos.filter((_, i) => i !== indice)); 
    };


  return (
    <div className="contenedor-app">
        <h1> Gestión de Contactos </h1>
        <form className="formulario">
            <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={ cambiarValor } />
            <input type="email" name="correo" placeholder="Correo" value={formulario.correo} onChange={ cambiarValor }  />
            <input type="text" name="telefono" placeholder="Telefono" value={formulario.telefono} onChange={ cambiarValor }  />
            <button onClick={ enviarFormulario }> {editarIndice !== null ? 'Actualizar' : 'Agregar'} </button>
        </form>
        <ul>
            {
                contactos.map((contacto, indice) => (
                    <li key={indice}>
                        <strong> {contacto.nombre} </strong> ({contacto.correo} - {contacto.telefono})
                        <div>
                            <button onClick={() => editarContacto(indice)}> Editar </button>
                            <button onClick={() => eliminarContacto(indice)}> Eliminar </button>
                        </div>
                    </li>
                ))
            }
        </ul>


    </div>
  )
}

export default Contactos