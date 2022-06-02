import "./App.css";
import { ButtonPage, GlobalStyle, HeaderPage } from "./style/global";
import api, { BASE_URL, clearBaseUrl } from "./components/data/api";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState("/character");

  useEffect(() => {
    api
      .get(currentPage)
      .then((res) => setCharacterList(res.data)) //console.log(res))
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <>
      <GlobalStyle />
      <div className="App"></div>
      <HeaderPage>Meus Personagens</HeaderPage>
      <div className="MenuPage">
        <ButtonPage
          disabled={!characterList.info?.prev}
          onClick={() => setCurrentPage(clearBaseUrl(characterList.info.prev))}
        >
          Previous
        </ButtonPage>

        <ButtonPage
          onClick={() => setCurrentPage(clearBaseUrl(characterList.info.next))}
        >
          Next
        </ButtonPage>
      </div>

      <Character characterList={characterList} />
    </>
  );
}

export default App;
