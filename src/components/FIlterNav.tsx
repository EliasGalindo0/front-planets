import React, { useState, useEffect } from "react";
import PlanetFilter from "./PlanetFilter";

const FilterNav = ({ planets, setFilteredPlanet }: any) => {
  return (
    <nav>
      <PlanetFilter planets={planets} setFilteredPlanet={setFilteredPlanet} />
    </nav>
  );
};

export default FilterNav;
