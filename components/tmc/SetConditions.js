import React from "react";
import styles from '@/styles/Table.module.css'
import { FoodTable } from "./FoodTable";

export function SetConditions({check, onClick}){
    return (
        <div>
        <label><input type="checkbox" name="a" value="yyy"/>알레르기가 있어요</label><br/><br/>
        <label><input type="checkbox" name="b" value="yyy"/>오이가 싫어요</label><br/><br/>
        <label><input type="checkbox" name="c" value="yyy"/>질병이 있어요</label><br/><br/>
        <label><input type="checkbox" name="d" value="yyy"/>아침 안먹어요</label><br/><br/>
        <label><input type="checkbox" name="e" value="yyy"/>점심 안먹어요</label><br/><br/>
        <label><input type="checkbox" name="f" value="yyy"/>저녁 안먹어요</label><br/><br/>
        <label><input type="checkbox" name="f" value="yyy"/>할렘푸드 원해요</label><br/><br/>
        <label><input type="checkbox" name="f" value="yyy"/>비건푸드 원해요</label><br/><br/>
        <label><input type="checkbox" name="g" value="yyy"/>또 뭐가 있을까요?</label>
        </div>
    )
}