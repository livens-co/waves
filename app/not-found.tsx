import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notFoundPage">
     <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className="buttonInvert">
        Home page
      </Link>
    </div>
  );
} 