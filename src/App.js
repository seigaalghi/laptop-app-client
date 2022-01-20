import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzZWlnYWFsZ2hpQGdtYWlsLmNvbSIsImlhdCI6MTY0MjY0NjYzOCwiZXhwIjoxNjQyNjg5ODM4fQ.Ts6XbQPQCODomHgyYt-GXr5VtuGULt7KGnfGKAah2e4";
    axios
      .get("https://laptop-appli.herokuapp.com/api/v1/laptop")
      .then((res) => {
        setLaptops(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <h1>Laptops</h1>
      {laptops.length > 0
        ? laptops.map((laptop) => (
            <div className="card" style={{width: "18rem"}} key={laptop.id}>
              <img className="card-img-top" src={laptop.image} alt={laptop.name}></img>
              <div className="card-body">
                <h5 className="card-title">{laptop.name}</h5>
                <div className="card-text">
                  <p>Price : {laptop.price}</p>
                  <p>Stock : {laptop.stock}</p>
                </div>
                <a href="/" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default App;
