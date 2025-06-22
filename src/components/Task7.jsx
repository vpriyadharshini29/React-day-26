import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Task7_DynamicSSG = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()).then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dynamic Page {id}</h2>
      <p>{post.title}</p>
    </div>
  );
};

export default Task7_DynamicSSG
