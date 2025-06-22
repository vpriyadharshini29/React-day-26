
import  { useEffect, useState } from 'react';

export default function UserSSR() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div className="box">
      <h2>👤 User Profile (Simulated SSR)</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}

