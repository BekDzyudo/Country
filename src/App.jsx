import { useEffect, useState } from "react";
import Card from "./components/card";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Form from "./components/form";

function App() {
  const [data, setData] = useState([]);

  function Country() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    Country();
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Form data={data} setData={setData} />
          <ul className="list-unstyled d-flex gap-5 flex-wrap mt-4">
            {data.map((item) => {
              return (
                <Card
                  key={item.name.common}
                  flag={item.flags.svg}
                  name={item.name.common}
                  region={item.region}
                  population={item.population}
                  capital={item.capital}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
