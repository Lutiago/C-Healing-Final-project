import Image from "next/image";

export const Insurance = () => {
  return (
    <div className="text-center">
      <h6 className="text-center mt-5">
        Our treatments and programs are covered by most insurance companies
        including:
      </h6>
      <p>
        <Image src="/images/Insurance.png" width={550} height={130} />
      </p>
      <h4 className="text-center mt-5">
        Experience a clinician first-approach to mental health care{" "}
      </h4>
    </div>
  );
};
