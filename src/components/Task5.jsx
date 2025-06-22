import { useEffect, useState } from 'react';

const Task5_SSR = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(setData);
  }, []);
  return (
    <div>
      <h2>Task 5: Simulated SSR</h2>
      <p><strong>Next.js:</strong> Uses getServerSideProps for runtime fetch.</p>
      {data ? <p>{data.title}</p> : <p>Loading...</p>}
    </div>
  );
};
export default Task5_SSR
