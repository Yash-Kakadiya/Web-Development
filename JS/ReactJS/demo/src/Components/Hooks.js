import React from 'react';
import { useEffect, useState } from 'react'

export default function Hooks() {
    const [count, setCount] = useState(0);

    // setInterval(() => {
    //     console.log(count);
    // }, 1000);
    useEffect(() => {
        setInterval(() => {
            console.log(count);
        }, 1000);
    }, []);

    return (
        <>
            {/* <button type="button" className="btn btn-outline-info m-2" onClick={() => }>back</button> */}
            <button type="button" className="btn btn-outline-primary m-2" onClick={() => setCount(count + 1)}>Increment</button>
            <button type="button" className="btn btn-outline-danger m-2" onClick={() => setCount(count - 1)}>Decrement</button>
            <div className='fs-1'>{count}</div>
        </>
    )
}
