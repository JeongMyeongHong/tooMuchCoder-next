import React from "react";

export function Mypage({onChange, onSubmit, withdraw}){
    return (
        <div>
        <h1>개인정보관리</h1>
        아이디: <input value='아이디'/><br/><br/>
        이름: <input name="userid" required={true} onChange={onChange}/><br/><br/>
        비밀번호: <input name="userid" required={true} onChange={onChange}/><br/><br/>
        비밀번호 확인: <input name="userid" required={true} onChange={onChange}/><br/><br/>
        이메일: <input value='a@b.com'/><br/><br/>
        폰번호: <input name="userid" required={true} onChange={onChange}/><br/><br/>
        주소: <input name="userid" required={true} onChange={onChange}/><br/><br/>
        <button onClick={onSubmit}>정보 수정</button>
        <button onClick={withdraw}>회원 탈퇴</button>
        </div>
    )
}