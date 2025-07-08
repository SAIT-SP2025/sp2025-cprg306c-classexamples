"use client"

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

export default function ProtectedPage(){

    const {user} = useUserAuth();

    return(
        <main>
            <header>
                <h1>Protected Page</h1>
            </header>
            {
                user ? (
                    <section>
                        <p>This is your protected page!</p>
                    </section>
                ) : (
                    <section>
                        <p>You must be logged in to view this page</p>
                        <Link href="/week-9/">Click here to return to the sign in page.</Link>
                    </section>
                )
            }
        </main>
    );
}