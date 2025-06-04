import AdicionarPessoas from "../../../services/AdicionarPessoas";
export default function Modal() {
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id="exampleModalLabel">Adicionar Pessoa Assistida</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <AdicionarPessoas/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
