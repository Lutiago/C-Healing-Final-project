import Link from "next/link";
import { useForm } from "react-hook-form";

export const Contactform = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container form">
      {" "}
      <h1>Book a Consultation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-3 justify-content-md-center mb-3">
          <div className="col-md-6">
            <input
              {...register("full_name")}
              type="text"
              className="form-control"
              placeholder="Full Name"
              aria-label="Full name"
            />
          </div>
          <div className="col-md-4">
            <input
              {...register("email")}
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
              {...register("phone")}
              type="text"
              className="form-control"
              placeholder="Phone"
              aria-label="Phone"
            />
          </div>

          <div className="form check col ">
            <input
              {...register("day_monday")}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Monday
            </label>
            <input
              {...register("day_tuesday")}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Tuesday
            </label>
            <input
              {...register("day_wednesday")}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Wednesday
            </label>
            <input
              {...register("day_thursday")}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Thursday
            </label>
            <input
              {...register("day_friday")}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Friday
            </label>

            <div className="container">
              <input
                {...register("time_morning")}
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Morning
              </label>
              <input
                {...register("time_afternoon")}
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Afternoon
              </label>
              <input
                {...register("time_night")}
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Night
              </label>
            </div>

            <div className="row g-3 justify-content-md">
              <div className="col-md-4">
                <textarea
                  rows={7}
                  className="form-control"
                  placeholder="What brings you here today?"
                  aria-label=""
                />
              </div>

              <div className="container">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />{" "}
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  virtual
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  In Person
                </label>
              </div>
            </div>
          </div>

          <p>Our provider will reach out to you to schedule the consultation</p>
          <div className="btn btn-outline-secondary">
            <Link href="/">Send</Link>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
