

export default function StudentComponentNew( {studentObj} ){

    let {studentName:name, studentAge:age, address:{city}} = studentObj;

    return(
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    );
}