"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";
import { dbGetAllPosts } from "./_services/blog-service";

export default function SignInPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    // console.dir(user);

    const[blogPostList, setBlogPostList] = useState([]);
    useEffect( () => {
        if(user){
            dbGetAllPosts(user.uid, setBlogPostList);
        }
    }, [user] );

    console.log(blogPostList);

    return (
        <main>
            <header>
                <h1>Cloud Firestore</h1>
            </header>
            {user ? (
                <section>
                    <div>
                        <p>Welcome {user.displayName}!</p>
                        <p>{user.email}</p>
                        <img src={user.photoURL} className="w-10 h-10" />
                    </div>
                    <div>
                        <Link href="/week-10/add-blog-post/">Add a new Blog Post</Link>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </button>
                    </div>
                    <div>
                        <h2>List of {user.displayName} Blog Posts</h2>
                        <ul>
                            {
                                blogPostList.map( (post) => {
                                    let postUrl = `/week-10/${post.id}`;
                                    return(
                                        <li key={post.id}>
                                            <Link href={postUrl}>{post.title}</Link>
                                        </li>
                                    )
                                } )
                            }
                        </ul>
                    </div>
                </section>
            ) : (
                <section>
                    <button
                        onClick={handleSignIn}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                        type="button">Sign in with GitHub</button>
                </section >
            )
            }

        </main >
    );
}