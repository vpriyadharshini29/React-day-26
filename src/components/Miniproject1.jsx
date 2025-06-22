
import  { useEffect, useState } from 'react';

export default function BlogSSR() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="box">
      <h2>📚 Blog Listing (Simulated SSR)</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
    </div>
  );
}

