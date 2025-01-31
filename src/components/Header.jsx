import React from "react";

function Header() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[new Date().getDay()];

  return (
    <div className="mainHeading">
      <h1>ToDo List</h1>
      <div className="subHeading">
        <h2>Whoop, it's {currentDay} 🌝 ☕</h2>
      </div>
    </div>
  );
}

export default Header;
