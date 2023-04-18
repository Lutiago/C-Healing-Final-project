import Image from "next/image";

export default function SlideAbout() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/About.png"
          className="grid text-center absolute"
          alt="pictureguy"
          width={500}
          height={500}
        />
        <Image
          src="/images/Rectangle1.png"
          className="grid text-center relative"
          alt="green"
          width={820}
          height={500}
        />

        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="d-flex align-items-center justify-content-center text-white">
            <span className="fs-2">
              {" "}
              No Matter Your Situation
              <br /> We have the Solution
            </span>
          </div>
        </div>
      </div>

      <div className="row p-2 ">
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}