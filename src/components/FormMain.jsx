export const FormMain = () => {
  return (
    <div className="container form">

    <div className="row g-3">
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          aria-label="First name"
        />
      </div>
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          aria-label="Last name"
        />
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Email Address"
          aria-label="First name"
        />
      </div>
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          aria-label="Last name"
        />
      </div>
    </div>
    </div>
  );
};
