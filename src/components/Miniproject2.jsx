
const staticProducts = [
  { id: 1, title: 'Laptop', description: 'High-performance laptop' },
  { id: 2, title: 'Phone', description: 'Smartphone with amazing camera' },
  { id: 3, title: 'Headphones', description: 'Noise-cancelling headphones' },
];

export default function ProductSSG() {

  return (
    <div className="box">
      <h2>🛒 Product Catalog (Simulated SSG)</h2>
      <ul>
        {staticProducts.map(p => (
          <li key={p.id}>
            <strong>{p.title}:</strong> {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

