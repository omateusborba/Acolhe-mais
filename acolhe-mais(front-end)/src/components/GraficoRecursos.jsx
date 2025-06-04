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
import { useEffect, useState } from 'react';

// Registrar os componentes do ChartJS
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function GraficoRecursos() {
    const [recursos, setRecursos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/recursos')
            .then(response => response.json())
            .then(data => {setRecursos(data)})
            .catch(error => console.error('Erro ao buscar recursos:', error));
    }, []);

    const getTotalPorTipo = (tipo) => {
        return recursos
            .filter(recurso => recurso.tipo === tipo)
            .reduce((acc, recurso) => acc + recurso.quantidade, 0);
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Total de Recursos no abrigo' },
        },
    };

    const labels = [
        'Alojamento',
        'Vestuário',
        'Alimentos',
        'Limpeza',
        'Utensílios',
        'Equipamentos',
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Total',
                data: [
                    getTotalPorTipo("1"),
                    getTotalPorTipo("2"),
                    getTotalPorTipo("3"),
                    getTotalPorTipo("4"),
                    getTotalPorTipo("5"),
                    getTotalPorTipo("6"),
                ],
                backgroundColor: '#2B6574',
            },
        ],
    };

    return (
        <div className='grafico'>
            <Bar options={options} data={data} />
        </div>
    );
}
