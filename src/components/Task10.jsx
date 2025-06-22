import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Task10_Fallback = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(setPost);
  }, [id]);

  return (
    <div>
      <h2>Task 10: Fallback Page</h2>
      <p><strong>Next.js:</strong> Supports fallback rendering with <code>fallback: true</code>.</p>
      {post ? <p>{post.title}</p> : <p>Loading fallback content...</p>}
    </div>
  );
};
export default Task10_Fallback
