import React, { useState } from "react";
import styles from '@/styles/Table.module.css'

export function FoodTable({onChange, upload, addFavorite}){
    const dummy = {yoill:["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
     achim: ["시리얼, 고구마, 푸른사과", "시리얼, 고구마, 푸른사과", "시리얼, 고구마, 푸른사과", "시리얼, 고구마, 푸른사과", "시리얼, 고구마, 푸른사과", "시리얼, 고구마, 푸른사과", "시리얼, 고구마, 푸른사과"], 
     jumsym: ["현미밥, 진미채볶음, 구운소세지, 계란찜", "현미밥, 진미채볶음, 구운소세지, 계란찜", "현미밥, 진미채볶음, 구운소세지, 계란찜", "현미밥, 진미채볶음, 구운소세지, 계란찜", "현미밥, 진미채볶음, 구운소세지, 계란찜", "현미밥, 진미채볶음, 구운소세지, 계란찜", "현미밥, 진미채볶음, 구운소세지, 계란찜"], 
     joenyeok: ["매콤제육볶음, 콩나물 뭇국, 계란말이", "매콤제육볶음, 콩나물 뭇국, 계란말이", "매콤제육볶음, 콩나물 뭇국, 계란말이", "매콤제육볶음, 콩나물 뭇국, 계란말이", "매콤제육볶음, 콩나물 뭇국, 계란말이", "매콤제육볶음, 콩나물 뭇국, 계란말이", "매콤제육볶음, 콩나물 뭇국, 계란말이"],
     bosang: ["상추", "오이", "양배추", "배추", "피망", "깻잎", "브로콜리"]}
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {dummy.yoill.map((data) => (<td key={data}>{data}</td>))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="7">아침</td>
                    </tr>
                    <tr>
                        {dummy.achim.map((data) => (<td key={data}>{data}<button>이미지 업로드</button></td>))}                 
                    </tr>
                    <tr>
                        <td colSpan="7">점심</td>
                    </tr>
                    <tr>
                        {dummy.jumsym.map((data) => (<td key={data}>{data}<button>이미지 업로드</button></td>))}
                    </tr>
                    <tr>
                        <td colSpan="7">저녁</td>
                    </tr>
                    <tr>
                        {dummy.joenyeok.map((data) => (<td key={data}>{data}<button>이미지 업로드</button></td>))}
                    </tr>
                    <tr>
                        <td colSpan="7">오늘의 보상</td>
                    </tr>
                    <tr>
                        {dummy.bosang.map((data) => (<td key={data}>{data}</td>))}
                    </tr>
                </tbody>
            </table>
            <button>즐겨찾기에 추가</button>
        </div>
    )
}