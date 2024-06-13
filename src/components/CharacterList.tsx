import React from "react";
import CharacterCard from "./CharacterCard";
import Planets from "../Interfaces/Planets";
import Character from "../Interfaces/Character";

const CharacterList = ({ characters, planets }: any) => {
  const getHomeworld = (url: any) =>
    planets.find((planet: Planets) => planet.url === url);

  return (
    <div className="character-grid">
      {characters.map((character: Character) => (
        <CharacterCard
          key={character.url}
          character={character}
          homeworld={getHomeworld(character.homeworld)}
        />
      ))}
    </div>
  );
};

export default CharacterList;
