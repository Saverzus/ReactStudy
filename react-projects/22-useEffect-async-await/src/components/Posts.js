import { useState, useEffect } from 'react'
import Post from './Post.js'

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     fetch(API_URL)
    //         .then((res) => res.json())
    //         .then((posts) => setPosts(posts))
    //         .catch((error) => setError(error.message))
    //         .finally(() => setIsLoading(false))
    // }, [])

    // useEffect(() => {
    //     ; (async function () {
    //         try {
    //             const res = await fetch(API_URL);
    //             const posts = await res.json();
    //             setPosts(posts);
    //         } catch (error) {
    //             setError(error.message);
    //         }
    //         setIsLoading(false);
    //     })();
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(API_URL);
                const posts = await res.json();
                setPosts(posts);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        }
        fetchData()
    }, [])


    if (error) {
        return (
            <h1>Error: {error}</h1>
        )
    }

    return (
        <div>
            <h1>Posts</h1>
            <hr />
            {
                isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    posts.map((post) => <Post {...post} key={post.id} />)
                )
            }

        </div>

    )
}

export default Posts;