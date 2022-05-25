import React from "react";
import styles from '@/styles/Table.module.css'
import { FoodTable } from "./FoodTable";

export function TableMake({check, onClick}){
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                    <td><button>홈 화면으로</button></td>
                    <td><button>공유하기</button></td>
                    { check ? 
                        <td><button onClick={onClick}>다른 식단 짜기</button></td>
                        : <td><button>조건 설정</button></td>}
                    
                    </tr>
                </thead>
                <tbody style={{height:400+"px", textAlign:"center"}}>
                    { check ? 
                        <td colSpan={3}><FoodTable/></td>
                        : <td colSpan={3}><button onClick={onClick}>식단이 비어있어요 나만의 식단 추가하기</button></td>}
                    
                </tbody>
            </table>
        </div>
    )
}