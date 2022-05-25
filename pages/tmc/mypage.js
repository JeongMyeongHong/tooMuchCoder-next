import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Mypage } from '@/components';

const MypagePage = ({}) => {
    const [table, setTable] = useState({blah:''})
    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setTable({
            ...table,
            [name]: value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setTable({
            ...table,
            [name]: value
        })
        alert(`정보 수정`)
    }
    const withdraw = e => {
        e.preventDefault()
        alert(`회원 탈퇴`)
    }
    return (<Mypage onChange={onChange} onSubmit={onSubmit} withdraw={withdraw}/>);
};
const mapStateToProps = state => ({})
const MypageActions = {}
export default connect(mapStateToProps, MypageActions)(MypagePage);