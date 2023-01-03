import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    /*para chamadas async, final da aula 102
    async function obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)
    }    
    */
   
    function obterCliente() {
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setCliente(dados))
    }

    return (
        <Layout titulo="Integração com API">
            <div>
                <input
                    type="number"
                    value={codigo}
                    onChange={e => setCodigo(e.target.value)} />
                <button
                    onClick={obterCliente}>
                    Obter Cliente
                </button>
            </div>
            <ul>
                <li>Nome: {cliente.id}</li>
                <li>Código: {cliente.nome}</li>
                <li>E-mail: {cliente.email}</li>
            </ul>
        </Layout>
    )
}