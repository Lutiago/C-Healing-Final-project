import { useState } from "react";
import { Button, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { MdChair } from "react-icons/md";
import { BsFillHouseHeartFill } from "react-icons/bs";

export const FindProvider = () => {
  const [selectedItem, setSelectedItem] = useState("Action");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="input-group mb-3">
        <label className="input-group-text" for="inputGroupSelect01">
          <MdChair /> What type of service?
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">Individual therapy</option>
          <option value="2">Couples therapy</option>
          <option value="3">Family therapy</option>
          <option value="4">Child and adolescent therapy</option>
          <option value="5">Medication therapy</option>
        </select>
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text" for="inputGroupSelect01">
          <BsFillHouseHeartFill /> What type of service?
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">Individual therapy</option>
          <option value="2">Couples therapy</option>
          <option value="3">Family therapy</option>
          <option value="4">Child and adolescent therapy</option>
          <option value="5">Medication therapy</option>
        </select>
      </div>
    </>
  );
};
