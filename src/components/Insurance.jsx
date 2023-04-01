import Image from "next/image";

export const Welcome = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Our treatments and programs are covered by most insurance companies including:</h1>
      <p>
        <Image
          src="/images/insurance.png"
          width={1204}
          height={119}
        />
      </p>
      <a href="#" className="btn btn-success">
      Experience a clinician-first approach to mental health care.
      </a>
    </div>
  );
};
