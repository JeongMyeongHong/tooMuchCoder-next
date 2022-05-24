import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FoodTable } from '@/tmc/FoodTable';

const FoodTablePage = ({}) => {
    const [table, setTable] = useState({blah:''})
    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setTable({
            ...table,
            [name]: value
        })
    }
    return (<FoodTable onChange={onChange}/>);
};
const mapStateToProps = state => ({})
const FoodTableActions = {}
export default connect(mapStateToProps, FoodTableActions)(FoodTablePage);