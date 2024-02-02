import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const btt = {
    paddingBottom: '6.5px',
    paddingTop: '0px',
    marginTop: '7px',
    color: 'white',
    backgroundColor: '#4fab5c',
    fontSize: '30px',
    borderRadius: '50%',
    border: 'none',
    height: '23.333px',
    width: '23.333px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}

const bttr = {
    paddingBottom: '11px',
    paddingTop: '0px',
    marginTop: '7px',
    color: 'white',
    backgroundColor: '#af251b',
    fontSize: '43px',
    borderRadius: '50%',
    border: 'none',
    height: '23.333px',
    width: '23.333px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const reducing = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: reducing
        });

    }
    
    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button style={btt} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={bttr} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete style={{cursor: 'pointer'}} size='35px' color='red' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
