import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found wrap">
      <h1>Page not found</h1>
      <p>This is a one-page site — head back to the letter.</p>
      <Link className="btn btn-crimson" href="/">
        Golden Years Express home
      </Link>
    </div>
  );
}
