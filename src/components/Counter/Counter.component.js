import React from 'react';
import './Counter.component.css';

const Counter = props => <p><span id="counter">{props.count}</span> remaining</p>

export default Counter;