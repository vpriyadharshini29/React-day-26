import { Link } from 'react-router-dom';

const Task12_Navigation = () => (
  <div>
    <h2>Task 12: Client-side Navigation</h2>
    <p><strong>Next.js:</strong> Uses <code>Link</code> from <code>next/link</code>.</p>
    <Link to="/task5">Go to SSR Example</Link><br />
    <Link to="/task6">Go to SSG Example</Link>
  </div>
);
export default Task12_Navigation
