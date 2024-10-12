import { useState, useEffect } from 'react';

function Blog() {
    const [externalPosts, setExternalPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setExternalPost(json));
    }, []); // Fetch once when the component mounts

    return (
        <>
            <h1>External Post</h1>
            {externalPosts.map((item, index) => (
                <div key={index}>
                    - {item.title}
                </div>
            ))}
        </>
    );
}

export default Blog;