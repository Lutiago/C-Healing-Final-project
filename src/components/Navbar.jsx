import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid position-absolute top-100 start-50 translate-middle-x ">
        <Image src="/images/Logo.svg" width={130} height={110} />
        <Link href="/" className="navbar-brand">
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" href="/">
              About
            </Link>
            <Link className="nav-link" href="/login">
              Blog
            </Link>
            <button type="button" class="btn btn-secondary" disabled>Find Therapist</button>
            <button type="button" class="btn btn-outline-secondary">Provider Login</button>
            <Link className="nav-link" href="/">
              EN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
