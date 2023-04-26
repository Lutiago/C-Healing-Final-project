import Link from "next/link";

export const Contactform = () => {
  return (
    
      <div className="container form"> <h1>Book a Consultation</h1>
        <div className="row g-3 justify-content-md-center mb-3">
          <div className="col-md-4">
           
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              aria-label="Full name"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          </div>
          <div className="row justify-content-md-center mb-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              aria-label="Phone"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Availability Day"
              aria-label="Last name"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Availability Time"
              aria-label="Last name"
            />
          </div>
          <div className="col-md-0.25rem">
            <input
              type="text"
              className="form-control"
              placeholder="What brings you here today?"
              aria-label=""
            />
          </div>

          </div>
          <p>
            By submitting this form, you agreeing with C Healing &lsquo;s privacy
            policy
          </p>
          <div className="btn btn-outline-secondary"><Link href="/">Send</Link></div>
        </div>

  );
};
