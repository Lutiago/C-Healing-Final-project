import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex pb-5" >
      <div className="justify-content-center container-fluid position-relative top-100 start-50 translate-middle-x ">
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <Image src="/images/Logo.svg" width={130} height={110} />
        <Link href="/" className="navbar-brand"></Link>

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
            <Link className="nav-link active" aria-current="page" href="/">
              About
            </Link>
            <Link className="nav-link" href="/login">
              Blog
            </Link>
            <button type="button" class="btn btn-secondary">
              Find Therapist
            </button>
            <button type="button" class="btn btn-outline-secondary">
              Provider Login
            </button>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EN
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
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
