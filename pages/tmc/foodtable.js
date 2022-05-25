import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FoodTable } from '@/components';

const FoodtablePage = ({}) => {
    const [dummy, setDummy] = useState({yoill:'', achim:'', jumsym:'', joenyeok:''})
    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setDummy({
            ...dummy,
            [name]: value
        })
    }
    const upload = e => {
        e.preventDefault()
    }
    const addFavorite = e => {
        e.preventDefault()
    }
    const umakeDifferentDietpload = e => {
        e.preventDefault()
        window.location.href='/'
    }
    return (<FoodTable onChange={onChange} upload={upload} addFavorite={addFavorite} makeDifferentDiet={umakeDifferentDietpload}/>);
};
const mapStateToProps = state => ({})
const FoodtableActions = {}
export default connect(mapStateToProps, FoodtableActions)(FoodtablePage);