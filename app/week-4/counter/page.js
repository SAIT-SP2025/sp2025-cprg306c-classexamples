"use client"

import { useState } from "react";
import Counter from "./counter";
import CounterDisplay from "./counter-display";

export default function CounterPage(){

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        let currentCount = count.valueOf();
        if( currentCount <= 9){
            setCount(currentCount + 1);
        }
        // count = count + 1; // this will not work
    }
    const resetCounter = () => {
        setCount(0);
    }

    // setCount(count + 1); // don't do this - infinite loop

    let buttonStyles = "block bg-blue-500 hover:bg-blue-300 text-white rounded px-2 py-1 mb-1";
    if (count >= 10){
        buttonStyles = "bg-gray-500 text-white rounded px-2 py-1 mb-1";
    }

    return(
        <main>
            <h1>Simple Counter</h1>
            <p>Current Count: {count} </p>
            <button
                className={buttonStyles}
                onClick={incrementCounter}>Increment</button>
            <button
                className="block bg-blue-500 text-white rounded px-2 py-1"
                onClick={resetCounter}>Reset Counter</button>
            
            <Counter curCount={count} incFunc={incrementCounter} />
            <CounterDisplay thisCount={count} />
        </main>
    );
}