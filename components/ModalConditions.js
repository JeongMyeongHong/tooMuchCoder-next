import SetConditionsPage from "@/pages/tmc/setConditions";

export function ModalConditions() {
    return (
        <div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#conditionsModal">
            조건설정
            </button>

            <div class="modal fade" id="conditionsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="conditionsModalLabel">조건 설정</h5>
                        </div>
                        <div class="modal-body">
                        <SetConditionsPage/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}