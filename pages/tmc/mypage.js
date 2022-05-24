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
    return (<Mypage onChange={onChange}/>);
};
const mapStateToProps = state => ({})
const MypageActions = {}
export default connect(mapStateToProps, MypageActions)(MypagePage);