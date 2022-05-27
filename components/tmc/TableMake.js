import React from "react";
import styles from '@/styles/Table.module.css'
import Foodtable from "@/pages/tmc/foodtable";
import SetConditionsPage from "@/pages/tmc/setConditions";
import { ModalConditions } from "@/components";

export function TableMake({check, addDiet, setConditions}){
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                    <td><button onClick={() => window.location.href='/'}>홈 화면으로</button></td>
                    <td><button>공유하기</button></td>
                    { check =='0' ? 
                        <td><ModalConditions/></td>
                        : check =='1' ? <td><button onClick={addDiet}>다른 식단 짜기</button></td>
                        :<td><button onClick={setConditions}>조건설정확인</button></td>}
                    </tr>
                </thead>
                <tbody style={{height:400+"px", textAlign:"center"}}>
                    { check =='0' ? 
                        <td colSpan={3}><button onClick={addDiet}>식단이 비어있어요 나만의 식단 추가하기</button></td>
                        : check =='1' ? <td colSpan={3}><Foodtable/></td>
                        : <td colSpan={3}><SetConditionsPage/></td>}
                    
                </tbody>
            </table>
        </div>
    )
}