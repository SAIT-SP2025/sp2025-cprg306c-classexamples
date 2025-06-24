export default function Artwork({ artworkObj }) {

    const {
        title,
        artist_display,
        date_end,
        short_description,
        provenance_text,
        inscriptions,
        exhibition_history,
        image_id
    } = artworkObj;

    return (
        <div className="mx-20 my-10 p-5 bg-blue-400 rounded">
            <h3 className="text-2xl">{title}</h3>
            {
                // conditional rendering
                // if (denoted by '?') the image id exists, create the image. Else (denoted by ':'), display an error message.
                // 'image_id' sometimes creates a broken image link, due to the way this API works.
                // We could make a separate fetch() request to check if the image link is valid,
                // but that's a lot of work, and uses extra network resources, which would slow down page load times.
                image_id
                ?
                <img
                    className="max-h-60 border"
                    src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
                />
                :
                <div className="bg-red-300 w-32 text-center p-2">No image found</div>
            }
            <ul>
                <li><b>Artist / Origin:</b> {artist_display}</li>
                <li><b>Year:</b> {date_end}</li>
                <li>{short_description || provenance_text || inscriptions || exhibition_history}</li>
                {/* The above line will check the given properties in order to see if they are empty.
                If it is empty, it will move on to the next property. The first non-empty property will be displayed.
                If none are available, nothing will be shown. */}
            </ul>
        </div>
    );

}