import Image from "next/image";
import React from "react";

const CharacterCard = ({ character, homeworld }: any) => {
  return (
    <div className="character-card">
      <Image src={`https://picsum.photos/200/300`} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Homeworld: {homeworld.name}</p>
    </div>
  );
};

export default CharacterCard;
