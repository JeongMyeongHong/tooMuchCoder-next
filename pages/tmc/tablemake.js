import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { TableMake } from '@/components';

const TableMakePage = ({}) => {
    const [check, setCheck] = useState('0')
    const [table, setTable] = useState({blah:''})
    const addDiet = e => {
        e.preventDefault()
        check =='0'? setCheck('1'):setCheck('0')
    }
    const setConditions = e => {
        e.preventDefault()
        check =='0'? setCheck('2'):setCheck('0')
    }
    return (<TableMake check={check} addDiet={addDiet} setConditions={setConditions}/>);
};
const mapStateToProps = state => ({})
const TableMakeActions = {}
export default connect(mapStateToProps, TableMakeActions)(TableMakePage);