import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { TableMake } from '@/components';

const TableMakePage = ({}) => {
    const [check, setCheck] = useState(false)
    const [table, setTable] = useState({blah:''})
    const onClick = e => {
        e.preventDefault()
        check ? setCheck(false):setCheck(true)
    }
    return (<TableMake check={check} onClick={onClick}/>);
};
const mapStateToProps = state => ({})
const TableMakeActions = {}
export default connect(mapStateToProps, TableMakeActions)(TableMakePage);