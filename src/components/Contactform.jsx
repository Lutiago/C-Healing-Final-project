import Link from "next/link";

export const Contactform = () => {
  return (
    
      <div className="container form"> <h1>Book a Consultation</h1>
        <div className="row g-3 justify-content-md-center mb-3">
          <div className="col-md-6">
           
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

          <div className="form check col">
            <input className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Monday
              </label>
            <input className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Tuesday
              </label>
            <input className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Wednesday
              </label>
            <input className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Thursday
              </label>
            <input className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Friday
              </label>
              
          <div className="container"> 
          <input className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Morning
              </label>
          <input className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Afternoon
              </label>
          <input className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Night
              </label>
              
              </div>

             
          <div className="row g-3 justify-content-md-center mb-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="What brings you here today?"
              aria-label=""
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Virtual / In person"
              aria-label=""
            />
          </div>
</div>

          </div>
          
          <p>
            Our provider will reach out to you to schedule the consultation
          </p>
          <div className="btn btn-outline-secondary"><Link href="/">Send</Link></div>
        </div>
</div>
  );
};
