const Task6_SSG = () => {
  const data = { title: "Static data fetched at build (simulated)" };

  return (
    <div>
      <h2>Task 6: Simulated SSG</h2>
      <p><strong>Next.js:</strong> Uses getStaticProps at build time.</p>
      <p>{data.title}</p>
    </div>
  );
};
export default Task6_SSG
