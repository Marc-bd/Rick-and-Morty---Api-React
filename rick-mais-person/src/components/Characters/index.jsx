import { useState } from "react";
import { CharactCard } from "../ChardCard/style";
import "./style";
import { ListCharacter } from "./style";
function Character({ characterList }) {
  return (
    <>
      <ListCharacter>
        {characterList?.results?.map((character, index) => (
          <li key={index}>
            <CharactCard
              colorName={character.status === "Alive" ? "#5EA0A0" : "#7C4849"}
              backgroundColor={
                character.status === "Alive" ? "#F1F7FF" : "#F8CCCE"
              }
              borderCard={
                character.status === "Alive"
                  ? "1px solid #DDDDDD"
                  : "1px solid #A4595C"
              }
            >
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name + "Imagem"} />
            </CharactCard>
          </li>
        ))}
      </ListCharacter>
    </>
  );
}

export default Character;
/*
 width: ${(props) => props.withCard};
  color: ${(props) => props.colorName};
  background-color: ${(props) => props.backgroundColor}; 
*/
