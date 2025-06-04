import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

// Registrar os componentes do Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function GraficoFaixaEtaria() {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/pessoas')
            .then(response => response.json())
            .then(data => setPessoas(data));
    }, []);

    // Filtrar por faixa etária
    const faixa_0_17 = pessoas.filter(p => p.idade <= 17).length;
    const faixa_18_59 = pessoas.filter(p => p.idade >= 18 && p.idade <= 59).length;
    const faixa_60_mais = pessoas.filter(p => p.idade >= 60).length;

    const labels = ['0-17 anos', '18-59 anos', '60+ anos'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Quantidade de Pessoas',
                data: [faixa_0_17, faixa_18_59, faixa_60_mais],
                backgroundColor: ['#2B6574', '#3D8E8D', '#87BDB5'],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribuição por Faixa Etária',
            },
        },
    };

    return (
        <div className="grafico">
            <Bar options={options} data={data} />
        </div>
    );
}
