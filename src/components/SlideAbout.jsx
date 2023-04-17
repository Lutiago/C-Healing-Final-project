import Image from "next/image";

export default function SlideAbout() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/Rectangle1.png"
          className="grid text-center"
          alt="green"
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
          <button type="button" className="btn btn-outline-dark mt-3">
            FIND THERAPIST
          </button>
        </div>
      </div>
      <Image
        src="/images/About.png"
        className="grid text-center"
        alt="pictureguy"
        width={500}
        height={500}
      />
    </div>
  );
}
