import { useEffect, useState } from 'react';

const Task13_Error = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/999999')
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  return (
    <div>
      <h2>Task 13: Custom Error Page</h2>
      <p><strong>Next.js:</strong> Uses a custom <code>_error.js</code> page.</p>
    {error ? <p>Error loading data</p> : <p>{data?.title || "Loading..."}</p>}
    </div>
  );
};
export default Task13_Error
