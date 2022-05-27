import styles from "@/styles/Modal.module.css"
import Loginpage from "@/pages/auth/login";
import SetConditionsPage from "@/pages/tmc/setConditions";


export function Modal() {
    return (
        <div>
            <button type="button" className={styles.profileButton} data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzRcWGKwrdBj7PCmGJgejRq35QVcHrfCCQw&usqp=CAU" style={{height:'90px', width:'80px'}}/>
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">로그인</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <Loginpage/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}


export function ModalConditions() {
    return (
        <div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#conditionsModal">
            조건설정
            </button>

            <div class="modal fade" id="conditionsModal" tabindex="0" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
