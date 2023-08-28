import Link from "next/link";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#017476",
        padding: "1rem 0",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </div>
  );
}
