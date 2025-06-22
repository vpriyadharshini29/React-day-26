import { useEffect, useState } from 'react';

const Task11_Revalidate = () => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 10000); // simulate revalidation
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Task 11: Revalidation (Simulated)</h2>
      <p><strong>Next.js:</strong> ISR via <code>revalidate</code> in getStaticProps.</p>
      <p>Last Updated: {new Date(time).toLocaleTimeString()}</p>
    </div>
  );
};
export default Task11_Revalidate
