import React from 'react';
import './Counter.component.css';

const Counter = props => {
    if (!props.count) return null;
    return <p><span id="counter">{props.count}</span> remaining</p>
    
};

export default Counter;