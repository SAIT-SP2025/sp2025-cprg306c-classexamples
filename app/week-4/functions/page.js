

export default function FunctionPage(){

    function helloWorld(username,dayOfWeek) {
        return "Hello World! Welcome Back " + username + ". Today is " + dayOfWeek + ".";
    }
    let helloWorld2 = function (username,dayOfWeek) {
        // return "Hello World! Welcome Back " + username + ". Today is " + dayOfWeek + ".";
        return `Hello World! Welcome Back ${username}. Today is ${dayOfWeek}.`;
    }
    const helloWorld3 = (username) => {
        return `Hello World! Welcome back ${username}.`;
    }
    const helloWorld4 = (username) => `Hello ${username}`;
    const helloMath = (a, b) => a + b;

    const louder = (textOutputFunc, uName) => {
        // check to make sure that textOutputFunc is actually a function
        // check to make sure that the function is
        // consistent with higher-order function logic
        let thisText = textOutputFunc(uName);
        return thisText.toUpperCase();
    }

    const multiplyBy = (num1) => {
        return (num2) => num1 * num2;
    }

    const multiplyByThree = multiplyBy(3);
    const multiplyByTen = multiplyBy(10);

    return(
        <main>
            <h1>Functions</h1>
            <p>{helloWorld("Alice", "Tuesday")}</p>
            <p>{helloWorld2("Bob", "Wednesday")}</p>
            <p>{helloWorld3("John")}</p>
            <p>{helloWorld4("Jen")}</p>
            <p>{helloMath(3,5)}</p>
            <p>{louder( helloWorld3, "robert" )}</p>
            <p>{multiplyByThree(10)}</p>
            <p>{multiplyByTen(7)}</p>
        </main>
    );
}