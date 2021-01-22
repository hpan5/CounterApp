import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';

const Body = () => {
    const items = useSelector(state => state.counter.items);
    const dispatch = useDispatch();
    console.log("items:  ", items);
    
    useEffect(() => {

    }, [items])
    return (
        <div id="Body">
            <ul>
                {items.map((value, i) => {
                    return (
                        <Item key={i} value={value} index={i}/>
                    )
                })}
            </ul>
            
        </div>
    );
}

export default Body;