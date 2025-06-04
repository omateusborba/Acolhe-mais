import axios from "axios";
import { useEffect, useState } from 'react';

function ExcluirPessoas(id) {
    axios.delete(`http://localhost:8080/pessoas/${id}`)
        .then(() => { alert('Pessoa deletada com sucesso!'); window.location.reload() })
        .catch(err => console.error('Erro ao deletar:', err));
}

function ListaPessoas() {
    const [pessoas, setPessoas] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/pessoas').then(response => {
            setPessoas(response.data)
        }).catch(error => {
            console.error('Erro ao buscar pessoas:', error)
        })

    }, [])

    if (pessoas.length == 0) {
        return (
            <>
                <h5 style={{textAlign:"center"}}>Ops... Ainda não temos pessoas assistidas por aqui. Clique em ‘Adicionar’ para começar!</h5>
            </>
        )
    } else {
        return (
            <>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                {pessoas.map(pessoa => (
                    <tbody>
                        <tr>
                            <th key={pessoa.id} scope="row">{pessoa.nome}</th>
                            <td>{pessoa.idade}</td>
                            <td>{pessoa.cpf}</td>
                            <td>
                                <button onClick={() => ExcluirPessoas(pessoa.id)} className="btn btn-danger">Deletar</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </>
        )
    }

}

export default ListaPessoas