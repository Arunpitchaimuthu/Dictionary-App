import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Search from "./components/Search";
import Title from "./components/Title";
import axios from "axios";
import Noun from "./components/Noun";
import Verb from "./components/Verb";
import Source from "./components/Source";
import Loading from "./components/Loading";

function App() {
  const [datas, setDatas] = useState("");
  const [theme, setTheme] = useState(true);
  const [font, setFont] = useState("serif");
  const [findedData, setFindedData] = useState([]);
  const [loading, setLoading] = useState(false);

  function searchData(e) {
    e.preventDefault();
    setLoading(true);
    if (datas.trim() === "") {
      alert("Please Enter a Word to Search!!!");
    } else {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${datas}`)
        .then((res) => {
          setLoading(false);
          setFindedData(res.data);
        })
        .catch(() => {
          setLoading(false);
          alert("Entered Word is Not Found!!!");
        });
      setDatas("");
    }
  }

  const pickedFont = () => {
    if (font === "serif") {
      return "serif";
    } else if (font === "cursive") {
      return "cursive";
    } else if (font === "system") {
      return "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    }
  };

  return (
    <div
      className="body"
      style={
        theme
          ? {
              backgroundColor: "white",
              color: "black",
              fontFamily: pickedFont(),
            }
          : {
              backgroundColor: "black",
              color: "white",
              fontFamily: pickedFont(),
            }
      }
    >
      <div className="outline">
        <Heading theme={theme} setTheme={setTheme} setFont={setFont} />
        <Search datas={datas} setDatas={setDatas} searchData={searchData} />
        {!loading ? (
          <div>
            <Title findedData={findedData} loading={loading} />
            <Noun findedData={findedData} />
            <Verb findedData={findedData} />
            <Source findedData={findedData} />
          </div>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
