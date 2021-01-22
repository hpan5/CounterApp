import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice'

const Item = ({index, value}) => {
    const dispatch = useDispatch();
    //console.log("index: " + index + ", value: " + value); 
    return (
        <div>
            <span>{value}</span>
            <button onClick={() => dispatch(increment(index))}>
                +
            </button>
            <button onClick={() => dispatch(decrement(index))}>
                -
            </button>
            <button>
                delete
            </button>
        </div>
    )
}

export default Item;