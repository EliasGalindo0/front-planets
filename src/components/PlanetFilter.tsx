import React from "react";
import Planets from "../Interfaces/Planets";

const PlanetFilter = ({ planets, setFilteredPlanet }: any) => {
  return (
    <select onChange={(e) => setFilteredPlanet(e.target.value)}>
      <option value="">All Planets</option>
      {planets.map((planet: Planets) => (
        <option key={planet.url} value={planet.name}>
          {planet.name}
        </option>
      ))}
    </select>
  );
};

export default PlanetFilter;
