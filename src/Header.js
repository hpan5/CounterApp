import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from './features/counter/counterSlice'

const Header = () => {
    const dispatch = useDispatch();
    let totalItemNumber_InTheCart = useSelector(state => state.counter.totalItemNumber_InTheCart);
    return (
        <div id="header">
            <p>total Items in the cart: {totalItemNumber_InTheCart}</p>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Header;