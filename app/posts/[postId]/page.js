export default async function PostDetailsPage({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.org/posts/${params.postId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const post = await response.json();
  console.log(post);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          background: "white",
          padding: "0.5rem",
          color: "black",
          margin: "1rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
