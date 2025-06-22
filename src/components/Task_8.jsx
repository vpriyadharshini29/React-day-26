import { useEffect, useState } from 'react';

const Task8_CompareSSR = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then(res => res.json())
      .then(setData);
  }, []);
  return (
    <div>
      <h2>Task 8: SSR Version</h2>
      <p><strong>Next.js:</strong> SSR with fresh fetch per request.</p>
      <p><strong>Vite:</strong> Simulated with useEffect fetch.</p>
      {data ? <p>{data.title}</p> : <p>Loading...</p>}
    </div>
  );
};
export default Task8_CompareSSR


































