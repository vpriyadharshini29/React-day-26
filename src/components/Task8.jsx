const Task8_CompareSSG = () => {
  const post = { title: "SSG Pre-rendered Title (Static content)" };

  return (
    <div>
      <h2>Task 8: SSG Version</h2>
      <p><strong>Next.js:</strong> Uses getStaticProps for build-time rendering.</p>
       <p>{post.title}</p>
    </div>
  );
};
export default Task8_CompareSSG
