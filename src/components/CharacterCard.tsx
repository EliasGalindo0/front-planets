import Image from "next/image";
import React from "react";

const CharacterCard = ({ character, homeworld }: any) => {
  return (
    <div className="character-card">
      {/* <Image src={url} alt={character.name} width={200} height={200} /> */}
      <h3>{character.name}</h3>
      <p>Homeworld: {homeworld}</p>
    </div>
  );
};

export default CharacterCard;
