import { useState } from "react";
import { Button, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { MdChair } from "react-icons/md";
import { BsFillHouseHeartFill } from "react-icons/bs";
import {BsFillPersonLinesFill} from "react-icons/bs"
import {ImLocation} from "react-icons/im";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import {ImCheckmark} from "react-icons/im"
import Link from "next/link";

export const FindProvider = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedInsurance, setSelectedInsurance] = useState("");
  const [providers, setProviders] = useState([]);
  const supabase = useSupabaseClient();
  const getInsuranceCarriers = async () => {
    let { data: insuranceCarriers, error } = await supabase
      .from("InsuranceCarriers")
      .select("*");
    return insuranceCarriers;
  };
  const insuranceCarriers = useQuery({
    queryKey: ["insuranceCarriers"],
    queryFn: getInsuranceCarriers,
  });
  const handleExplore = async () => {
    let query = supabase.from("Providers").select("*,insurance_provider(*)");
    if (selectedState !== "") {
      query = query.eq("state", selectedState);
    }
    if (selectedService !== "") {
      query = query.eq("specialty", selectedService);
    }
    if (selectedPlace === "virtual") {
      query = query.eq("virtual", true);
    }
    if (selectedPlace === "in_person") {
      query = query.eq("in_person", true);
    }

    let { data, error } = await query;
    setProviders(data);

    // Filters
    //.eq("column", "Equal to")
  };
  return (
    <div className="">
      <h7>FIND A PROVIDER</h7>
      <div className="container bg-success-subtle">
        <h1>Find the provider who&lsquo;s right for you.</h1>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            <MdChair /> What type of service?
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            value={selectedService}
            onChange={(ev) => {
              setSelectedService(ev.target.value);
            }}
          >
            <option value="">Choose...</option>
            <option value="Individual therapy">Individual therapy</option>
            <option value="Couples therapy">Couples therapy</option>
            <option value="Family therapy">Family therapy</option>
            <option value="Child and adolescent therapy">
              Child and adolescent therapy
            </option>
            <option value="Medication therapy">Medication therapy</option>
          </select>
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            <BsFillHouseHeartFill /> Which Insurance?
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            value={selectedInsurance}
            onChange={(ev) => {
              setSelectedInsurance(ev.target.value);
            }}
          >
            <option value="">Choose...</option>
            {insuranceCarriers.data &&
              insuranceCarriers.data.map((carrier) => {
                return (
                  <option key={carrier.id} value={carrier.id}>
                    {carrier.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            <ImLocation /> Your state*
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            value={selectedState}
            onChange={(ev) => {
              setSelectedState(ev.target.value);
            }}
          >
            <option value="">Choose...</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkanzas">Arkanzas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Ohio">Ohio</option>
            <option value="Washington">Washington</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            <BsFillPersonLinesFill /> Virtual or in person?
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            value={selectedPlace}
            onChange={(ev) => {
              setSelectedPlace(ev.target.value);
            }}
          >
            <option value="">Choose...</option>
            <option value="virtual">Virtual</option>
            <option value="in_person">In person</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-outline-dark mt-3"
          onClick={handleExplore}
        >
          Explore Providers
        </button>
      </div>
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
          <tbody>
            {providers.map((p,index) => {
              return (
                <tr key={p.id}>
                  <th scope="row">
                    {index}
                  </th>
                  <td>{p.name}</td>
                  <td>{p.last_name}</td>
                  <td>{p.specialty}</td>
                  <td>{p.insurance_provider.map(insuranceProvider => {
                    return insuranceCarriers.data.find(x=>x.id===insuranceProvider.carrier_id).name 
                  }).join(", ")}</td>
                  <td>{p.virtual && <ImCheckmark/>}</td>
                  <td>{p.in_person && <ImCheckmark/>}</td>
                  <td><Link href={'/contact/'+p.id}>contact</Link></td>
                  
                </tr>
                //
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
