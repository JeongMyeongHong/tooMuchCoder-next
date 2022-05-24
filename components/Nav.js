import React from "react";
import { Sidebar } from '@/components'

export function Nav(){
  return (
    <div>
    <Sidebar>
        <a href='/'>Home</a><br/><br/>
        <a href='/auth/register'>회원가입</a><br/><br/>
        <a href='/auth/login'>로그인</a><br/><br/>
        <a href='/'>해냈어요</a><br/><br/>
    </Sidebar>
    </div>
  );
}
