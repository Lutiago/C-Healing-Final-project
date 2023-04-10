import { useState } from "react";
import { Button, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { MdChair } from "react-icons/md";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";

export const FindProvider = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedItem, setSelectedItem] = useState("Action");
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
    initialData: [],
  });
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <h7>FIND A PROVIDER</h7>
      <h1>Find the provider who's right for you.</h1>
      <div className="input-group mb-3">
        <label className="input-group-text" for="inputGroupSelect01">
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
          <option>Choose...</option>
          <option value="Individual therapy">Individual therapy</option>
          <option value="Couples therapy">Couples therapy</option>
          <option value="Family therapy">Family therapy</option>
          <option value="Child and adolescent therapy">Child and adolescent therapy</option>
          <option value="Medication therapy">Medication therapy</option>
        </select>
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text" for="inputGroupSelect01">
          <BsFillHouseHeartFill /> Which Insurance?
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          {insuranceCarriers.data.map((carrier) => {
            return (
              <option key={carrier.id} value={carrier.id}>
                {carrier.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" for="inputGroupSelect01">
          <BsFillHouseHeartFill /> Your state*
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">Alabama</option>
          <option value="2">Alaska</option>
          <option value="3">Arizona</option>
          <option value="4">Arkanzas</option>
          <option value="5">California</option>
          <option value="6">Colorado</option>
          <option value="7">Connecticut</option>
          <option value="8">Delaware</option>
          <option value="9">Florida</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" for="inputGroupSelect01">
          <BsFillHouseHeartFill /> Virtual or in person?
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">Virtual</option>
          <option value="2">In person</option>
        </select>
      </div>
      <button type="button" className="btn btn-outline-dark mt-3">
        Explore Providers
      </button>
    </>
  );
};
