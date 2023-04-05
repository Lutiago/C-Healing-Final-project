import Image from "next/image";

export const Insurance = () => {
  return (
    <div className="text-center">
      <h6 className="text-center mt-5">
        Our treatments and programs are covered by most insurance companies
        including:
      </h6>
      <p>
        <Image src="/images/Insurance.png" width={410} height={90} />
      </p>
      <h8 className="text-center mt-5">
      Interested in request a consultant? Fill out the form below and register to be part of our family.{" "}
      </h8>
      <h4 className="text-center mt-5">
        Experience a clinician first-approach to <br/>mental health care{" "}
      </h4>
    </div>
  );
};
