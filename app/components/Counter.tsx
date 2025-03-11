"use client"
import React, { useState } from 'react'

const Counter = () => {
    console.log('counter component');
    const [count, setCount] = useState(0);
    return (
        <button type='button' onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    )
}

export default Counter
