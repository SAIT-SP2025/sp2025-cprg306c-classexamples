"use client"

import { useState } from "react";
import RegistrationForm from "./managed-form";

export default function RegistrationPage(){

    const [formOpen, setFormOpen] = useState(false);

    const toggleForm = () => {
        if( formOpen ) {
            setFormOpen(false);
        } else {
            setFormOpen(true);
        }
    }

    const toggleForm2 = () => setFormOpen(!formOpen);

    return(
        <main>
            <h1>Registration</h1>
            <div>
                <button onClick={toggleForm2}>Toggle Registration Form</button>
            </div>
            { formOpen && <RegistrationForm /> }
            {/* { formOpen ? <p>Hello</p> : <p>Something Else</p> } */}
            {/* <RegistrationForm /> */}
        </main>
    );
}