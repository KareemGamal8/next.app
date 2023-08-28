import Link from "next/link";

export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.org/posts", {
    next: {
      revalidate: 60,
    },
  });

  const posts = await response.json();

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`posts/${post.id}`}
          style={{
            width: "70%",
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
            <p>{post.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
