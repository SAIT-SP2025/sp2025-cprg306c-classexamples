"use client"

import { useState } from "react";

export default function RegistrationForm(){

    // Form Control States
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [subscription, setSubscription] = useState("false");
    const [message, setMessage] = useState("");

    // Form Control Functions
    const handleFullnameChange = (event) => {
        // console.dir(event.target.value);
        setFullName(event.target.value);
    }
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleBirthDateChange = (event) => setBirthDate(event.target.value);
    const handleSubscriptionChange = (event) => setSubscription(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);

    // Form Submission Function
    const handleSubmit = (event) => {
        event.preventDefault();

        let registrationObject = {
            fName: fullName,
            mail: email,
            bDay: birthDate,
            plan: subscription,
            msg: message
        }

        alert(`
            Name: ${registrationObject.fName} | 
            Email: ${registrationObject.mail} | 
            Birthday: ${registrationObject.bDay} |
            Plan Type: ${registrationObject.plan} |
            Message: ${registrationObject.msg}
            `);

        setFullName("");
        setEmail("");
        setBirthDate("");
        setSubscription("false");
        setMessage("");

    }

    return(
        <form onSubmit={handleSubmit} className="p-4 bg-blue-100" >
            <div className="mb-3">
                <label className="inline-block w-40">Full Name: </label>
                <input
                    type="text"
                    className="px-2 py-1 rounded border border-blue-500 bg-white focus:bg-orange-100"
                    placeholder="John Smith"
                    onChange={handleFullnameChange}
                    value={fullName}
                    required={true}
                />
                {/* <p>{fullName}</p> */}
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Email: </label>
                <input type="email" className="px-2 py-1 rounded border border-blue-500 bg-white focus:bg-orange-100" placeholder="example@mail.ca" onChange={handleEmailChange} value={email} />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Birthdate: </label>
                <input type="date" className="px-2 py-1 rounded border border-blue-500 bg-white focus:bg-orange-100" onChange={handleBirthDateChange} value={birthDate} />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Subscription Type: </label>
                <select className="px-2 py-1 rounded border border-blue-500 bg-white focus:bg-orange-100" onChange={handleSubscriptionChange} value={subscription}>
                    <option disabled value="false">--- Please select a Plan ---</option>
                    <option value="free">Free Plan</option>
                    <option value="basic">Basic Plan</option>
                    <option value="premium">Premium Plan</option>
                </select>
                {/* <p>{subscription}</p> */}
            </div>
            <div className="mb-3">
                <label className="inline-block w-40 align-top">Message:</label>
                <textarea className="px-2 py-1 rounded border border-blue-500 bg-white focus:bg-orange-100" onChange={handleMessageChange} value={message}></textarea>
            </div>
            <div>
                <button
                    className="bg-blue-500 text-white rounded px-3 py-2 hover:bg-green-500 active:bg-amber-400"
                >Submit Registration</button>
            </div>
        </form>
    );
}