"use client"

import { useEffect, useState } from "react";
import Artwork from "./artwork";

export default function Gallery() {

    const [artworkIds, setArtworkIds] = useState([]);
    const [galleryDisplay, setGalleryDisplay] = useState([]);

    async function getListOfArtIds() {
        try {
            // The Art Institute of Chicago API doesn't have a 'random' function, so we can kind of create our own.
            // We will be retrieving a random 'page' of 10 artworks from the museum API.
            // The first 'fetch' is to determine how many pages of artwork there are, given a page size of 10.
            const plResponse = await fetch(`https://api.artic.edu/api/v1/artworks/search?size=10`);
            if (!plResponse.ok) console.log(`${plResponse.status}`);
            let plData = await plResponse.json();
            let pageLimit = plData.pagination.total_pages; // this gives us our maximum page number
            //once we have our page limit, we can select a random page. (see random sub-function below)
            let rand = getRandomInt(1, pageLimit);
            // then, we can fetch that random page and collect only the IDs
            // (we could simply fetch all the data here and save on some requests,
            // but this example is intended to show off the dependency array as well)
            const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${rand}&limit=10&fields=id`);
            if (!response.ok) console.log(`${response.status}`);
            const data = await response.json();
            // we then extract the IDs from the data, and place them into a simplified array
            let idArray = data.data.map((artObj) => (artObj.id));
            // then save that array to a state variable
            setArtworkIds(idArray);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
        // sub-function: get a random int between min & max value
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    useEffect(() => {
        // invoke the initial effect to get the list of IDs.
        getListOfArtIds();
        // IMPORTANT! We must include the dependency array, even if it is empty.
        // Otherwise the code will trigger upon every re-render, creating an infinite loop.
        // If an infinite loop with fetch() is created, this will result in an inadvertent DoS attack. Bad news!
    }, []);

    // Retrieve one artwork by it's ID
    async function getArtworkById(artId) {
        try {
            // fetch a single artwork from the museum by a given ID
            const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artId}`);
            if (!response.ok) console.log(response.status);
            const artData = await response.json();
            return artData.data;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }


    useEffect(() => {
        // the function given directly to useEffect cannot itself be asynchronous,
        // so we must create an async function inside the useEffect in order to call asynchronous code
        async function buildGallery() {
            if (artworkIds != null && artworkIds.length > 0) {
                // set up a gallery array
                let thisGallery = [];
                // loop through all of the saved IDs
                for (let i = 0; i < artworkIds.length; i++) {
                    // pull the artworks information from each ID
                    // the following function is fetching data, so we must 'await' it's completion
                    let thisArt = await getArtworkById(artworkIds[i]);
                    // push the artwork into the gallery array
                    await thisGallery.push(thisArt);
                }
                // set the new gallery array as a state variable
                setGalleryDisplay(thisGallery);
            }
        }
        // invoke the function that we just created
        buildGallery();
        // the dependency array must contain the 'artworkIds' state variable,
        // as this effect is dependant upon that state containing a list of IDs.
        // this will cause the effect to run again after the state has been populated
    }, [artworkIds]);


    return (
        <section>
            <header className="text-center">
                <h1 className="text-4xl">10 Random Art Pieces</h1>
                <p className="italic">courtesy of:</p>
                <h2 className="text-3xl">The Art Institute of Chicago</h2>
            </header>
            {
                galleryDisplay.length != 0 ? galleryDisplay.map(
                    (art) => ( <Artwork artworkObj={art} key={art.id} /> )
                ) : <p className="text-center mt-20">Loading...</p>
            }
        </section>
    );
}