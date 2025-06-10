

export default function ContactCard( {contactObj} ){

    let {id, fname, lname, email, phone, type} = contactObj;

    return(
        <div className="bg-blue-300 p-5 rounded">
            <h3 className="text-xl">{fname} {lname}</h3>
            <p><b>ID:</b> {id}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
            <p><b>Contact Type:</b> {type}</p>
        </div>
    );
}