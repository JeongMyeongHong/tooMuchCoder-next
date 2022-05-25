import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { SetConditions } from '@/components';

const SetConditionsPage = ({}) => {
    const [check, setCheck] = useState(false)
    const [table, setTable] = useState({blah:''})
    const onClick = e => {
        e.preventDefault()
        check ? setCheck(false):setCheck(true)
    }
    return (<SetConditions check={check} onClick={onClick}/>);
};
const mapStateToProps = state => ({})
const SetConditionsActions = {}
export default connect(mapStateToProps, SetConditionsActions)(SetConditionsPage);