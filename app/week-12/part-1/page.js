"use client"

import { useEffect, useState } from "react";

export default function BasicApiCallPage(){

    const [myText, setMyText] = useState();

    async function apiTest(){
        let data = "";
        try {
            const response = await fetch("http://localhost:3000/week-12/part-1/api");
            if (!response.ok) {
                data = "Data could not be retrieved.";
            } else {
                data = await response.text();
            }
            setMyText(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        apiTest();
    }, []);

    return(
        <main>
            <h1>API Route Test - Part 1</h1>
            <p>{myText}</p>
        </main>
    );
}