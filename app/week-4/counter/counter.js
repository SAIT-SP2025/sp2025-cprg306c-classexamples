

export default function Counter({curCount, incFunc}){

    return(
        <div>
            <h2>Counter Component</h2>
            <p>Count: {curCount}</p>
            <button onClick={incFunc}>Increment</button>
        </div>
    );
}