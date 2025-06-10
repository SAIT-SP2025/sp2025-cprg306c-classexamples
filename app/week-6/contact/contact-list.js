"use client"

import { useState } from "react";
import ContactCard from "./contact-card";
import contactData from "./contacts-info.json";
import { setRequestMeta } from "next/dist/server/request-meta";

export default function ContactList() {

    let contactArray = contactData.map((contact) => ({ ...contact }));

    let [filter, setFilter] = useState("all");
    let [sortBy, setSortBy] = useState("none");

    const handleFilterChange = (event) => setFilter(event.target.value);
    const handleSortByChange = (event) => setSortBy(event.target.value);

    if (filter != "all") {
        contactArray = contactArray.filter(
            (contact) => contact.type == filter
        );
    }

    if (sortBy != "none") {
        contactArray.sort((a, b) => {
            if (isNaN(parseInt(a[sortBy]))) {
                let nameA = a[sortBy].toUpperCase();
                let nameB = b[sortBy].toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            } else {
                return a.id - b.id;
            }
        });
    }

    return (
        <section>
            <div className="flex mb-5 px-10 py-5 bg-blue-300 rounded">
                <div className="flex-1">
                    <label className="mr-2">Filter By:</label>
                    <select onChange={handleFilterChange} className="bg-white rounded px-2 py-1">
                        <option value="all">All Contacts</option>
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="mr-2">Sort By:</label>
                    <select onChange={handleSortByChange} className="bg-white rounded px-2 py-1">
                        <option value="none">None</option>
                        <option value="id">ID</option>
                        <option value="fname">First Name</option>
                        <option value="lname">Last Name</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {contactArray.map((contact) => (
                    <ContactCard key={contact.id} contactObj={contact} />
                ))}
            </div>
        </section>
    );
}