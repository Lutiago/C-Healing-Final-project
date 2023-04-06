import Image from "next/image";
import Link from "next/link";

export default function MainSlide() {
  return (
    <div className="relative d-flex flex-row justify-content-center">
      {" "}
      <div className="relative">
        <Image
          src="/images/Rectangle 1.png"
          className=" grid text-center"
          width={800}
          height={500}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="d-flex align-items-center justify-content-center text-white">
            <span className="fs-2">
              {" "}
              Mental health care
              <br /> that make sense
            </span>
          </div>
          <Link className="btn btn-outline-dark mt-3" href="/FindTherapist">
            FIND THERAPIST
          </Link>
        </div>
      </div>
      <Image
        src="/images/homepage2.png"
        className=" grid text-center"
        width={500}
        height={500}
      />
    </div>
  );
}
