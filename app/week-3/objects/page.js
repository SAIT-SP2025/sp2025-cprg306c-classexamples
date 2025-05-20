


export default function ObjectsPage(){

    let studentOne = {
        studentName: "Joe",
        studentAge: 24,
        hasGraduated: false,
        schedule: ["CPGR123","CPRG456","CPRG789","CPRG306"],
        address: {
            street: "123 Main St.",
            city: "Calgary",
            province: "AB"
        }
    }

    let {
        studentName,
        studentAge:age,
        // schedule:[course1,course2,course3,course4]
        // schedule:[,,,webDev2]
        schedule:{3:webDev2},
        address:{city}

    } = studentOne;

    return(
        <main>
            <h1>Objects</h1>
            <h2>Dot Notation</h2>
            <p>Name: {studentOne.studentName}</p>
            <p>Age: {studentOne.studentAge}</p>
            <p>WebDev2: {studentOne.schedule[3]}</p>
            <p>City: {studentOne.address.city}</p>
            <h2>Destructuring</h2>
            <p>Name: {studentName}</p>
            <p>Age: {age}</p>
            <p>WebDev2: {webDev2}</p>
            <p>City: {city}</p>
        </main>
    );
}