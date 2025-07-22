"use client"

import { use, useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { dbGetBlogPost } from "../_services/blog-service";

export default function BlogPostPage({params}){

    const pageParams = use(params);
    const {user} = useUserAuth();
    const [blogPost, setBlogPost] = useState({});

    useEffect( () => {
        if (user) {
            dbGetBlogPost(user.uid, pageParams.postid, setBlogPost);
        }
    }, [user] )

    return(
        <main>
            <header>
                <h1>{blogPost.title}</h1>
            </header>
            <article>
                {blogPost.contents}
            </article>
        </main>
    );

}