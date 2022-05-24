import React from "react";
import { Sidebar } from '@/components'

export function Nav(){
  return (
    <div>
    <Sidebar>
        <a href='/'>Home</a><br/><br/>
        <a href='/auth/register'>회원가입</a><br/><br/>
        <a href='/auth/login'>로그인</a><br/><br/>
        <a href='/tmc/mypage'>마이페이지</a><br/><br/>
        <a href='/tmc/foodtable'>나의 식단</a><br/><br/>
    </Sidebar>
    </div>
  );
}
