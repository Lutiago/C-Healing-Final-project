import { useState } from "react";
import { ProfileUpdate } from "./ProfileUpdate";
import { BsCalendar } from "react-icons/bs";

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
          <a
            className={
              "nav-link " + (selectedTab === "request" ? "active" : "")
            }
            aria-current="page"
            href="#"
            onClick={() => {
              setSelectedTab("request");
            }}
          >
            Request
          </a>
        </li>
        <li className="nav-item">
          <a
            class={"nav-link " + (selectedTab === "calendar" ? "active" : "")}
            aria-current="page"
            href="#"
            onClick={() => {
              setSelectedTab("calendar");
            }}
          >
            Calendar
          </a>
        </li>
      </ul>

      {selectedTab === "profile" && (
        <div>
          <ProfileUpdate />
        </div>
      )}

      {selectedTab === "requests" && <div>Show Requests List</div>}

      {selectedTab === "calendar" && (
        <div> calendar
  
        </div>
      )}
    </div>
  );
};
