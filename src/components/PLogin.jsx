import Link from "next/link";


export const PLogin = () => {
  return (
    
    <div className="container form ">
    <div className="row g-3 justify-content-md-center mb-3">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          aria-label="First name"
        />
      </div>
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          aria-label="Last name"
        />
      </div>
      </div>
      <div className="row justify-content-md-center mb-3">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Email Address"
          aria-label="First name"
        />
      </div>
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          aria-label="Last name"
        />
      </div>

      </div>
      <p>
        By submitting this form, you agreeing with C Healing &lsquo;s privacy
        policy
      </p>
      <div className="btn btn-outline-secondary"><Link href="/login">Login</Link></div>
    </div>

  );
};
