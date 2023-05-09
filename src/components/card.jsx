import React from "react";

export default function Card({ flag, name, region, population, capital }) {
  return (
    <li
      className="p-3 "
      style={{
        boxShadow: "10px 10px 10px #ccc",
        width: "285px",
        borderLeft: "1px solid #ccc",
        borderTop: "1px solid #ccc",
      }}
    >
      <img style={{ width: "100%" }} src={flag} alt="bayroq" />
      <h4 className="mt-3">{name}</h4>
      <p>
        <b>region: </b> {region}
      </p>
      <p>
        <b>capital: </b> {capital}
      </p>
      <p>
        <b>population: </b>
        {population}
      </p>
    </li>
  );
}
