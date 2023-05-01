import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex pb-5">

cx
      <div className="justify-content-center container-fluid position-relative  top-100 start-50 translate-middle-x ">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <Link href="/" className="navbar-brand">
            {" "}
            <Image src="/images/Logo.svg" alt="logo" width={130} height={110} />
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
          <div className="navbar-nav  gap-4">
            <Link className="nav-link active" aria-current="page" href="/About">
              About
            </Link>
            <Link className="nav-link" href="/Blog">
              Blog
            </Link>
            <Link className="btn btn-secondary" href="/FindTherapist">
              Find Therapist
            </Link>
            <Link className="btn btn-outline-secondary" href="/dashboard">
              Provider Login
            </Link>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EN
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    ESP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
  );
}
