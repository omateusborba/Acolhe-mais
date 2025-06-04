import axios from "axios";
import { useEffect, useState } from "react";

function ExcluirRecursos(id) {
    axios.delete(`http://localhost:8080/recursos/${id}`).then(() => { alert('Recurso deletado com sucesso!'); window.location.reload() }).catch(err => console.error('Erro ao deletar: ', err))
}

function ListaRecursos() {
    const tiposRecurso = {
    1: "Itens de alojamento",
    2: "Vestuário",
    3: "Alimentos",
    4: "Produtos de higiene e limpeza",
    5: "Utensílios domésticos",
    6: "Equipamentos"
};

    const [recursos, setRecursos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/recursos').then(response => {
            setRecursos(response.data)
        }).catch(error => {
            console.error('Erro ao buscar recursos: ', error)
        })
    }, [])

    if (recursos.length == 0) {
        return (
            <>
                <h5 style={{ textAlign: "center" }}>Ops... Ainda não temos recursos por aqui. Clique em ‘Adicionar’ para começar!</h5>
            </>
        )
    } else {
        return (
            <>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                {recursos.map(recurso => (
                    <tbody>
                        <tr>
                            <th key={recurso.id} scope="row">{recurso.nome}</th>
                            <td>{recurso.quantidade}</td>
                            <td>{tiposRecurso[recurso.tipo]}</td>
                            <td>
                                <button onClick={() => ExcluirRecursos(recurso.id)} className="btn btn-danger">Deletar</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </>
        )
    }
}

export default ListaRecursos