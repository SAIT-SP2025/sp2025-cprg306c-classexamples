

export default function DogCard( {dogObj,removeDogFunc} ){

const {id, name, breed, photoUrl} = dogObj;

    return(
        <div className="rounded-lg bg-blue-300 p-2 max-w-96">
            <div className="inline-block align-middle">
                { photoUrl && (<img className="max-h-28 rounded" src={photoUrl} />) }
            </div>
            <div className="inline-block ml-3 align-middle">
                <h3 className="text-xl">{name}</h3>
                <p>ID: {id}</p>
                <p>Breed: {breed}</p>
                <button type="button" id={id} onClick={removeDogFunc}>Remove Dog</button>
            </div>
        </div>
    );
}