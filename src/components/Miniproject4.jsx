
import  { useState, useEffect } from 'react';

const staticNews = [
  { id: 1, title: "AI Changing the World" },
  { id: 2, title: "React 19 Released" },
  { id: 3, title: "SpaceX Mars Update" },
];

export default function NewsSite() {
  const [article, setArticle] = useState(null);

  const handleClick = (id) => {
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setArticle(data));
  };

  return (
    <div className="box">
      <h2>📰 News Homepage (Simulated SSG)</h2>
      <ul>
        {staticNews.map(news => (
          <li key={news.id}>
            <button onClick={() => handleClick(news.id)}>{news.title}</button>
          </li>
        ))}
      </ul>

      {article && (
        <div className="mt-4">
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}

