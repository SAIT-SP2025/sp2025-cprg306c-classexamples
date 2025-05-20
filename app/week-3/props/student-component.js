

export default function StudentComponent(props){

    return(
        <div className="bg-green-400 m-5 p-3 border-2 border-blue-500 w-40 rounded">
            <h3 className="text-2xl font-serif">{props.sName}</h3>
            <p>Age: {props.sAge}</p>
            <p>City: {props.sCity}</p>
        </div>
    )
}