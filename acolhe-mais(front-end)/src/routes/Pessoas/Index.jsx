import './styles.css'
import Botao from './components/Botao'
import Modal from './components/Modal'
import ListaPessoas from '../../services/ListarPessoas'

export default function Pessoas() {
    return (
        <>
            <div className="main">
                <div className="cont3 d-flex justify-content-between align-items-center mb-3">
                    <h2>Pessoas Assistidas</h2>
                    <Botao />
                </div>
                <div className="cont4">
                    <table className="table mx-auto my-4" style={{ width: '99%' }}>
                        <ListaPessoas />
                    </table>
                </div>
            </div>
            <Modal />
        </>
    )
}