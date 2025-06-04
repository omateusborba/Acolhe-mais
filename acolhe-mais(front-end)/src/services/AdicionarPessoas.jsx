import axios from "axios";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

function AdicionarPessoas() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [cpf, setCpf] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/pessoas', {
            nome: nome,
            idade: idade,
            cpf: cpf
        }).then(() => { alert('Pessoa cadastrada com sucesso!'); window.location.reload() }).catch(err => console.error('Erro ao cadastrar', err))

    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nome:</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Nome Completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Idade:</label>
                    <input
                        type="number"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>CPF:</label>
                    <input
                        type="text"
                        placeholder="000.000.000-00"
                        maxLength="14"
                        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        title="Formato: 000.000.000-00"
                        className="form-control"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success">
                    Adicionar
                </button>
            </form>

        </>
    )
}

export default AdicionarPessoas