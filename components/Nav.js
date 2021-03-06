import React from "react";
import { Sidebar } from '@/components'
import { Modal } from "./Modal";

export function Nav(){
  return (
    <div>
    <Sidebar>
        <a href='/'>Home</a><br/><br/>
        <a href='/auth/register'>회원가입</a><br/><br/>
        <a href='/tmc/mypage'>마이페이지</a><br/><br/>
        <a href='/tmc/tablemake'>식단관리</a><br/><br/>
    </Sidebar>
    <Modal/>
    </div>
  );
}
