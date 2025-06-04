//nome, quantidade e tipo
import axios from "axios";
import { useState } from "react";

function AdicionarRecursos() {
    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [tipo, setTipo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/recursos', {
            nome: nome,
            quantidade: quantidade,
            tipo: tipo
        }).then(() => { alert('Recurso adicionado com sucesso!'); window.location.reload() }).catch(err => console.error('Erro ao cadastrar recurso: ', err))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="cont7">

                    <label htmlFor="InputNome1" className="form-label">Nome:</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Nome do recurso"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        aria-label="default input example" required />

                    <label htmlFor="InputAge">Quantidade</label>
                    <input
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        className="form-control quantidade" id="InputQuantidade" required/>

                    <label htmlFor="InputAge">Tipo</label>
                    <select class="form-select" aria-label="Default select example" value={tipo} onChange={(e) => setTipo(e.target.value)} 
                    style={{marginBottom:15}}required>
                        <option selected>Selecione o tipo de recurso</option>
                        <option value="1">Itens de alojamento</option>
                        <option value="2">Vestuário</option>
                        <option value="3">Alimentos</option>
                        <option value="4">Produtos de higiene e limpeza</option>
                        <option value="5">Utensílios domésticos</option>
                        <option value="6">Equipamentos</option>
                    </select>
                </div>
                <button type="Submit" className="btn btn-success">
                    Adicionar
                </button>
            </form>
        </>
    )
}

export default AdicionarRecursos