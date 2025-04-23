import { useState, useEffect } from "react"; 

const Banco = () => {
    
    // Estados: 

    const [cuentas, setCuentas] = useState([]); 
    const [formulario, setFormulario] = useState({nombre: '', dni: '', saldo: ''});
    const [editarIndice, setEditarIndice] = useState(null); 
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState(''); 
    const [monto, setMonto] = useState(''); 

    // Funciones auxiliares: 

    const actualizarFormulario = (e) => {
        setFormulario({...formulario, [e.target.name]: e.target.value});
    }

    const guardarCuenta = () => {
        const {nombre, dni, saldo} = formulario;
        if(!nombre || !dni || isNaN(saldo)) return; 

        if(editarIndice !== null) {
            const copia = [...cuentas];
            copia[editarIndice] = {...formulario, saldo: parseFloat(saldo)};
            setCuentas(copia); 
            setEditarIndice(null);
        } else {
            setCuentas([...cuentas, {...formulario, saldo: parseFloat(saldo)}]); 
        }
        
        setFormulario({nombre: '', dni: '', saldo: ''}); 
    }

    const editarCuenta = (indice) => {
        setFormulario(cuentas[indice]);
        setEditarIndice(indice); 
    }

    const eliminarCuenta = (indice)  => {
        setCuentas(cuentas.filter((_, i) => i !== indice));
    }


    const realizarTransferencia = () => {
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
    }; 



  return (
    <div className='contenedor-app'>
        <h1> Simulador de Banco </h1>

        <section className='formulario'>
            <h2> Agregar Cuenta </h2>
            <input type="text" name='nombre' placeholder='Nombre' value={formulario.nombre} onChange = { actualizarFormulario } />
            <input type="text" name='dni' placeholder='DNI' value={formulario.dni} onChange = { actualizarFormulario } />
            <input type="text" name='saldo' placeholder='Saldo' value={formulario.saldo} onChange = { actualizarFormulario } />
            <button onClick={ guardarCuenta }>
                {editarIndice !== null ? 'Actualizar' : 'Agregar' }
            </button>
        </section>

        <section className='transferencia'>
            <h2> Transferencia entre cuentas </h2>
            <input type="text" placeholder='DNI Origen' value={origen} onChange={(e) => setOrigen(e.target.value)} />
            <input type="text" placeholder='DNI Destino' value={destino} onChange={(e) => setDestino(e.target.value)} />
            <input type="text" placeholder='Monto a transferir' value={monto} onChange={(e) => setMonto(e.target.value)} />
            <button onClick={ realizarTransferencia }> Transferir </button>
        </section>

        <section>
            <h2> Listado de Cuentas </h2>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>DNI</th>
                        <th>Saldo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cuentas.map((cuenta, i) => (
                            <tr key={i}>
                                <td> {cuenta.nombre} </td>
                                <td> {cuenta.dni} </td>
                                <td> ${cuenta.saldo.toFixed(2)} </td>
                                <td>
                                    <button onClick={() => editarCuenta(i)}> Actualizar </button>
                                    <button onClick={() => eliminarCuenta(i)}> Eliminar </button>
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

export default Banco