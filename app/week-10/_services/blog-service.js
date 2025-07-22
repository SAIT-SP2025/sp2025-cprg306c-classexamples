import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase";


export async function dbAddBlogPost(userId, blogPostObj){
    try {
        const newBlogPostReference = collection(db, "users", userId, "blog-posts");
        const newBlogPostPromise = await addDoc(newBlogPostReference, blogPostObj);
        console.log(newBlogPostPromise.id);
    } catch (error) {
        console.log(error);
    }
}

export async function dbGetAllPosts(userId, blogPostListStateSetter){
    try {
        const allPostsReference = collection(db, "users", userId, "blog-posts");
        const allBlogPostsQuery = query(allPostsReference);
        const querySnapshot = await getDocs(allBlogPostsQuery);
        let blogPostList = [];
        querySnapshot.forEach( (doc) => {
            let thisPost = {
                id: doc.id,
                ...doc.data()
            }
            blogPostList.push(thisPost);
        });
        blogPostListStateSetter(blogPostList);
    } catch (error) {
        console.log(error);
    }
}

export async function dbGetBlogPost(userId, postId, blogPostStateSetter){
    try {
        const blogPostRef = doc(db, "users", userId, "blog-posts", postId);
        const documentSnapshot = await getDoc(blogPostRef);
        if( documentSnapshot.exists() ){
            blogPostStateSetter( documentSnapshot.data() )
        } else {
            console.log("This post does not exist in the database.");
        }
    } catch (error) {
        console.log(error);
    }
}