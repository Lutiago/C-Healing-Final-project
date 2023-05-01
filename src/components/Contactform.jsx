import Link from "next/link";
import { useForm } from "react-hook-form";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export const Contactform = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const supabase = useSupabaseClient();

  const onSubmit = async (data) => {
    const { error } = await supabase
      .from("Clients")
      .insert([{ ...data, provider_id: router.query.id }]);
    console.log(error);
    router.push("/confirmation");
  };

  return (
    <div className="container form">
      {" "}
      <h1>Book a Consultation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-3 justify-content-md-center mb-3 p-2">
          <div className="col-md-3">
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
          </div>{" "}
          <div className="col-md-3">
            <input
              {...register("phone")}
              type="text"
              className="form-control"
              placeholder="Phone"
              aria-label="Phone"
            />
          </div>
        </div>
        <h5>Prefered days of the week?</h5>
        <div className="container">
          <div className="row justify-content-md-left">
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
            </div>
            <h5> What time do you prefer? </h5>
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
              <label className="form-check-label " htmlFor="flexCheckDefault">
                Night
              </label>
            </div>

            <div className="row g-3 d-flex justify-content-center align-items-center ">
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <textarea
                  rows={7}
                  className="form-control "
                  placeholder="What brings you here today?"
                  aria-label=""
                />
              </div>

              <div className="container p-2">
                <input
                  {...register("virtual")}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />{" "}
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  virtual
                </label>
                <input
                  {...register("in_person")}
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
        </div>
        <input {...register("submit")} type="submit" />
      </form>
    </div>
  );
};
