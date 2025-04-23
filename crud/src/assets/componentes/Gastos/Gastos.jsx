import { useState, useEffect } from "react"; 

const Gastos = () => {
    
    // Estados: 

    const [gastos, setGastos] = useState([]); 
    const [formulario, setFormulario] = useState({categoria: '', descripcion: '', monto: '', fecha: ''});
    const [editarIndice, setEditarIndice] = useState(null); 
/*     const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [monto, setMonto] = useState(''); */

    // Funciones auxiliares: 

    const actualizarFormulario = (e) => {
        setFormulario({...formulario, [e.target.name]: e.target.value});
    }

    const guardarGasto = () => {
        const {categoria, descripcion, monto, fecha} = formulario;
        if(!categoria || !descripcion || isNaN(monto) || !fecha) return;

        const nuevoGasto = { categoria, descripcion, monto: parseFloat(monto), fecha };

        if(editarIndice !== null) {
            const copia = [...gastos];
            copia[editarIndice] = nuevoGasto;
            setGastos(copia); 
            setEditarIndice(null);
        } else {
            setGastos([...gastos, nuevoGasto]); 
        }
        
        setFormulario({categoria: '', descripcion: '', monto: '', fecha: ''}); 
    }

    const editarGasto = (indice) => {
        setFormulario(gastos[indice]);
        setEditarIndice(indice); 
    }

    const eliminarGasto = (indice)  => {
        setGastos(gastos.filter((_, i) => i !== indice));
    }


/*     const realizarTransferencia = () => {
        const idxOrigen = cuentas.findIndex(c => c.dni === origen); 
        const idxDestino = cuentas.findIndex(c => c.dni === destino); 
        const cantidad = parseFloat(monto); 

        // Validamos: que existan los DNI y que el saldo sea suficiente.

        if(idxOrigen === -1 || idxDestino === -1 || isNaN(cantidad)) return; 
        if (cuentas[idxOrigen].saldo < cantidad) return alert('Saldo insuficiente'); 

        const copia = [...cuentas]; 
        copia[idxOrigen].saldo -= cantidad; 
        copia[idxDestino].saldo += cantidad; 
        setCuentas(copia); 

        setOrigen('');
        setDestino('');
        setMonto(''); 
    };  */



  return (
    <div className='contenedor-app'>
        <h1> Administrador de Gastos Personales </h1>

        <section className='formulario'>
            <h2> Registrar Gasto </h2>
            <select name='categoria' value={formulario.categoria} onChange = { actualizarFormulario }>
                <option value="">Seleccionar categoría</option>
                <option value="Alimentación">Alimentación</option>
                <option value="Transporte">Transporte</option>
                <option value="Entretenimiento">Entretenimiento</option>
                <option value="Salud">Salud</option>
                <option value="Otros">Otros</option>
            </select>
            <input type="text" name='descripcion' placeholder='Descripción' value={formulario.descripcion} onChange = { actualizarFormulario } />
            <input type="number" name='monto' placeholder='Monto' value={formulario.monto} onChange = { actualizarFormulario } />
            <input type="date" name='fecha' placeholder='Fecha' value={formulario.fecha} onChange = { actualizarFormulario } />
            <button onClick={ guardarGasto }>
                {editarIndice !== null ? 'Actualizar' : 'Agregar' }
            </button>
        </section>

{/*         <section className='transferencia'>
            <h2> Transferencia entre cuentas </h2>
            <input type="text" placeholder='DNI Origen' value={origen} onChange={(e) => setOrigen(e.target.value)} />
            <input type="text" placeholder='DNI Destino' value={destino} onChange={(e) => setDestino(e.target.value)} />
            <input type="text" placeholder='Monto a transferir' value={monto} onChange={(e) => setMonto(e.target.value)} />
            <button onClick={ realizarTransferencia }> Transferir </button>
        </section> */}

        <section>
            <h2> Listado de Gastos </h2>

            <table>
                <thead>
                    <tr>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th>Monto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gastos.map((gasto, i) => (
                            <tr key={i}>
                                <td> {gasto.categoria} </td>
                                <td> {gasto.descripcion} </td>
                                <td> ${gasto.monto.toFixed(2)} </td>
                                <td>{gasto.fecha}</td>
                                <td>
                                    <button onClick={() => editarGasto(i)}> Actualizar </button>
                                    <button onClick={() => eliminarGasto(i)}> Eliminar </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    </div>
  )
}

export default Gastos