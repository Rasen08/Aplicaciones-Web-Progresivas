import { useState } from 'react';

const AdministradorGastos = () => {
    
    // Estados: 

    const [gastos, setAdministradorGastos] = useState([]); 
    const [formulario, setFormulario] = useState({descripcion: '', monto: '', fecha: '', categoria: ''});
    const [editarIndice, setEditarIndice] = useState(null);

    // Funciones auxiliares: 

    return (
        <div className="contenedor-app">
          <h1>Administrador de Gastos</h1>
          <section className="formulario">
                <input
                    type="text"
                    name="descripcion"
                    placeholder="Descripción"
                    value={formulario.descripcion}
                    onChange={(e) => setFormulario({...formulario, [e.target.name]: e.target.value})}
                />
                <input
                    type="number"
                    name="monto"
                    placeholder="Monto"
                    value={formulario.monto}
                    onChange={(e) => setFormulario({...formulario, [e.target.name]: e.target.value})}
                />
                <input
                    type="date"
                    name="fecha"
                    value={formulario.fecha}
                    onChange={(e) => setFormulario({...formulario, [e.target.name]: e.target.value})}
                />
                <select
                    name="categoria"
                    value={formulario.categoria}
                    onChange={(e) => setFormulario({...formulario, [e.target.name]: e.target.value})}
                >
                    <option value="">Seleccionar categoría</option>
                    <option value="Comida">Comida</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Entretenimiento">Entretenimiento</option>
                    <option value="Otros">Otros</option>
                </select>

                <button>Agregar gasto</button>
                </section>
          {/* acá irá la tabla de gastos */}
        </div>
      );
}

export default AdministradorGastos