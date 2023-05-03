import Link from "next/link";

export const FormProfile = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Prefered days of the week?</th>
            <th scope="col">What time do you prefer?</th>
            <th scope="col">Virtual/In Person</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
