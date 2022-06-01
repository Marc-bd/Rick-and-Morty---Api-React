import "./App.css";
import { GlobalStyle } from "./style/global";
import { BASE_URL } from "./components/data/api";
import { useEffect, useState } from "react";
import axios from "axios";
import Character from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => setCharacterList(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(characterList);

  return (
    <>
      <GlobalStyle />
      <div className="App"></div>
      <Character characterList={characterList} />
    </>
  );
}

export default App;
