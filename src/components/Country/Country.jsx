import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  console.log(country);

  const handleVisited = ()=>{
    console.log("btn clicked")
  }
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />

      <h3>Name: {country.name.common}</h3>
      <h5>Official name: {country.name.official}</h5>
      <h5>Area: {country.area.area} {country.area.area > 300000? "Biggest" : "Small"}</h5>

      <div className="flex">
        <div className="border">
          <p>Capital: {country.capital.capital}</p>
          <p>Population: {country.population.population}</p>
        </div>
        <div className="border">
          <p>Region: {country.region.region}</p>
          <p>Continents: {country.continents.continents}</p>
        </div>
      </div>

      <button className="btn" onClick={handleVisited}>NOt Visited</button>
    </div>
  );
};

export default Country;
