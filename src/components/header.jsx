import React from "react";

export default function Header() {
  return (
    <header className="py-3 shadow d-flex justify-content-between px-5 ">
      <a href="/">Where in the world</a>
      <button className="btn btn-success">Dark Mode</button>
    </header>
  );
}
