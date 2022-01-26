import React, { useEffect } from 'react';

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const r = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                const blogs = await r.json();
                console.log(blogs);

            } catch (e) {
                console.error(e);
            }

        })();
    }, []);
    return (
        <>
            {blogs.map(blog => (
                <BlogInfo key={blog.id}>{blog.name}</div>
            ))}
        </>
    );
}
