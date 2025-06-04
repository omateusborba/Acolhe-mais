import { useState, useEffect } from 'react';
import GraficoPessoas from '../../components/GraficoPessoas'
import GraficoRecursos from "../../components/GraficoRecursos";
import './styles.css'

export default function Home() {

    function TotalPessoas() {
        const [pessoas, setPessoas] = useState([]);
        
        useEffect(() => {
            fetch('http://localhost:8080/pessoas')
            .then(response => response.json())
            .then(data => setPessoas(data));
        }, []);
        const totalPessoas = pessoas.length
        return(
            totalPessoas
        )
    }

    function TotalRecursos() {
        const [recursos, setRecursos] = useState([]);

        useEffect(() => {
            fetch('http://localhost:8080/recursos')
            .then(response => response.json())
            .then(data => setRecursos(data));
        }, [])
        const totalRecursos = recursos.reduce((acc, recurso) => acc + recurso.quantidade, 0);
        return(
            totalRecursos
        )
    }

    return (
        <>
            <h1 className="title">Abrigo Digital</h1>
            <div className="container">
                <div className="cont1">
                    <h2>Pessoas assistidas</h2>
                    <h3 className="infos">{TotalPessoas()} Pessoas assistidas</h3>
                    <GraficoPessoas />
                </div>
                <div className="cont2">
                    <h2>Recursos</h2>
                    <h3 className="infos">{TotalRecursos()} Itens</h3>
                    <GraficoRecursos />
                </div>
            </div>
        </>
    )

}