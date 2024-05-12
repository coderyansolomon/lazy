'use client'
import React, { useState, useEffect } from 'react';

const computeHeavyTask = (iterations) => {
    let result = 0;
    for (let i = 0; i < iterations; i++) {
        result += Math.sqrt(i) * Math.sin(i);
    }
    return result;
};

const SlowComponent = () => {
    const [result, setResult] = useState(0);

    useEffect(() => {
        const heavyComputationResult = computeHeavyTask(50000000);
        setResult(heavyComputationResult);
    }, []);

    if (!result) return null

    return (
        <div>
            <h1>Heavy Computation Result: {result.toFixed(2)}</h1>
        </div>
    );
};

export default SlowComponent;
