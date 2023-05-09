import React, { useRef } from "react";

export default function Form({ data, setData }) {
  const inputRef = useRef("");

  function formFunc(evt) {
    evt.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${inputRef.current.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (inputRef.current.value !== "") {
          setData(data);
        }
      });
  }

  function selectFunc(evt) {
    fetch(`https://restcountries.com/v3.1/region/${evt.target.value}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  return (
    <form onInput={formFunc} className="py-3 d-flex justify-content-between">
      <input
        ref={inputRef}
        className="form-control w-50"
        type="text"
        placeholder="enter the name of the country"
      />
      <select
        style={{
          padding: "5px 10px",
          borderRadius: "5px",
          border: "none",
          outline: "none",
          background: "#ccc",
        }}
        onChange={selectFunc}
      >
        <option>Asia</option>
        <option>Americas</option>
        <option>Africa</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </form>
  );
}
