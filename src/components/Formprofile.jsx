import Link from "next/link";

export const FormProfile = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Specialty</th>
            <th scope="col">Insurance Carriers</th>
            <th scope="col">Virtual</th>
            <th scope="col">In person</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
