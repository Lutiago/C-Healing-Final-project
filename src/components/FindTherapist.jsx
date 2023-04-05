import { useState } from "react";
// import { Button, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
export const FindTherapist = () => {
    return (
        
        function FindTherapist() {
          const [selectedItem, setSelectedItem] = useState("Action");
        
          const handleItemClick = (item) => {
            setSelectedItem(item);
          };
        
          return (
            <>
              <InputGroup className="mb-3">
                <Button variant="outline-secondary">Action</Button>
                <DropdownButton
                  variant="outline-secondary"
                  title="Toggle Dropdown"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item onClick={() => handleItemClick("Action")}>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Another action")}>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Something else here")}>
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => handleItemClick("Separated link")}>
                    Separated link
                  </Dropdown.Item>
                </DropdownButton>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with segmented dropdown button"
                />
              </InputGroup>
        
              <InputGroup>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with segmented dropdown button"
                />
                <Button variant="outline-secondary">Action</Button>
                <DropdownButton
                  variant="outline-secondary"
                  title="Toggle Dropdown"
                  id="input-group-dropdown-2"
                  alignRight
                >
                  <Dropdown.Item onClick={() => handleItemClick("Action")}>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Another action")}>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleItemClick("Something else here")}>
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => handleItemClick("Separated link")}>
                    Separated link
                  </Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </>
          );
        }
        
    );
  };
  