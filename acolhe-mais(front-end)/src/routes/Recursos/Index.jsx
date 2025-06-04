import Botao from "./components/Botao"
import Modal from "./components/Modal"
import ListaRecursos from "../../services/ListarRecursos"

export default function Recursos() {
    return (
        <>
            <div className="main">
                <div className="cont3 d-flex justify-content-between align-items-center mb-3">
                    <h2>Recursos</h2>
                    <Botao />
                </div>
                <div className="cont4">
                    <table className="table mx-auto my-4" style={{ width: '99%' }}>
                        <ListaRecursos />
                    </table>
                </div>
                <Modal />
            </div>
        </>
    )
}