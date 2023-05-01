import { useState } from "react";
import { ProfileUpdate } from "./ProfileUpdate";

export const ProviderProfile = () => {
  const [selectedTab, setSelectedTab] = useState("profile");
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={
              "nav-link " + (selectedTab === "profile" ? "active" : "")
            }
            aria-current="page"
            href="#"
            onClick={() => {
              setSelectedTab("profile");
            }}
          >
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Request
          </a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">
            Calendar
          </a>
        </li>
      </ul>

      {selectedTab === "profile" && <div><ProfileUpdate /></div>}

      {selectedTab === "requests" && <div>Show Requests List</div>}

      {selectedTab === "calendar" && <div>Show Calendar</div>}
    </div>
  );
};
