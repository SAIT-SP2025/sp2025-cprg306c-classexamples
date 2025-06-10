

export default function ArrayManipulationPage(){

    let array1 = [1,2,3,4,5];
    array1.push(6);
    let lastNum = array1.pop();
    array1.splice(2,2);

    let numbers = [5,3,9,1,4];
    let doubled = numbers.map( (number) => number * 2 );
    let lessThanFive = numbers.filter( (number) => number < 5 );
    let concatNumbers = numbers.concat(doubled);
    let allNumbers = [...numbers,12,16,...doubled];
    // allNumbers.push(20);
    let sum = allNumbers.reduce( 
        (accumulator, currentValue) => accumulator + currentValue ,
        6 // initial value for the accumulator
    );

    const sortingLogic = (a,b) => {
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    }
    // let sortedNumbers = allNumbers.sort( sortingLogic );

    let sortedNumbers = [...allNumbers];
    sortedNumbers.sort( sortingLogic );

    return(
        <main>
            <h1>Array Manipulation</h1>
            <p>{array1.join(" | ")}</p>
            <p>{lastNum}</p>
            <p>{numbers.join()}</p>
            <p>{doubled.join()}</p>
            <p>{lessThanFive.join()}</p>
            <p>{concatNumbers.join()}</p>
            <p>{allNumbers.join()}</p>
            <p>{sum}</p>
            <p>{sortedNumbers.join()}</p>
        </main>
    );
}