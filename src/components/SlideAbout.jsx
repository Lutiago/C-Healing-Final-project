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
          src="/images/BlueRectangle.png"
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

      <div className="row p-2 justify-content-md-center ">
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">DEPRESSION</h5>
              <p className="card-text">
              Feelings of sadness, emptiness or hopelessness.
              Angry outbursts, irritability or frustration
              Loss of interest or pleasure in most or all normal activities
              Sleep disturbances, including insomnia or sleeping too much.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">PTSD / TRAUMA </h5>
              <p className="card-text">
              Vivid flashbacks
              Intrusive thoughts or images. 
              Intense distress at reminders of the trauma.
              Physical sensations such as pain, sweating, or nausea.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ANXIETY</h5>
              <p className="card-text">
              Feeling restless, wound-up, or on-edge.
              Being easily fatigued. 
              Having difficulty concentrating.
              Difficulty controlling feelings of worry.
              Difficulty falling or staying asleep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
