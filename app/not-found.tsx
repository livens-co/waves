import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notFoundPage">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Home Page</Link>
    </div>
  );
}