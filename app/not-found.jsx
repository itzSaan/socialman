import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist. Return to SocialMan homepage.",
};

export default function NotFound() {
  return (
    <div className="page-title position-relative" style={{ backgroundImage: `url(/assets/img/hero-bg.jpg)` }}>
      <div className="container position-relative text-center" style={{ padding: "100px 0" }}>
        <h1 style={{ fontSize: "120px", fontWeight: 900, color: "#fff" }}>404</h1>
        <h2 style={{ color: "#fff", marginBottom: "20px" }}>Page Not Found</h2>
        <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "30px" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="my-btn my-btn-lg" style={{ background: "var(--accent-color)", color: "#fff", border: "2px solid var(--accent-color)" }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}