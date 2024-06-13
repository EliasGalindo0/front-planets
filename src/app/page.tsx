"use client";

import React, { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import Character from "@/Interfaces/Character";
import FilterNav from "@/components/FIlterNav";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  console.log("🚀 ~ Home ~ characters:", characters);
  const [planets, setPlanets] = useState([]);
  console.log("🚀 ~ Home ~ planets:", planets);
  const [filteredPlanet, setFilteredPlanet] = useState("");
  console.log("🚀 ~ Home ~ filteredPlanet:", filteredPlanet);

  useEffect(() => {
    const fetchData = async () => {
      const resCharacters = await fetch("/api/people");
      const dataCharacters = await resCharacters.json();
      setCharacters(dataCharacters.results);

      const resPlanets = await fetch("/api/planets");
      const dataPlanets = await resPlanets.json();
      setPlanets(dataPlanets.results);
    };

    fetchData();
  }, []);

  const filteredCharacters = filteredPlanet
    ? characters.filter((character: Character) =>
        character.homeworld.includes(filteredPlanet)
      )
    : characters;

  return (
    <div className="container">
      <FilterNav planets={planets} setFilteredPlanet={setFilteredPlanet} />
      <CharacterList characters={filteredCharacters} planets={planets} />
    </div>
  );
};

export default Home;
