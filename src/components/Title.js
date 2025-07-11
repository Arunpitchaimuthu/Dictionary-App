import React, { useState } from "react";
import Play from "../assets/Play.png";
import Pause from "../assets/Pause.png";

function Title({ findedData }) {
  const [count, setCount] = useState(0);
  
  let audio = findedData[0]?.phonetics
    .map((phonetic) => phonetic?.audio)
    .filter((audio) => audio);

  function handleAudio() {
    new Audio(audio[0]).play();
    setCount((prev) => (prev = 1));
    setTimeout(() => {
      setCount((prev) => (prev = 0));
    }, 1700);
  }

  return (
    <div>
      {findedData.length ? (
        <div className="title">
          <div className="dic_top">
            <h1 id="dic_title">{findedData[0]?.word}</h1>
            <p id="dic_title_phonetic">{findedData[0]?.phonetics[1]?.text}</p>
          </div>
          <button id="play" onClick={handleAudio}>
            {count === 0 ? (
              <img
                id="play_img"
                src={Play}
                alt="Play Icon"
                height="30px"
                width="30px"
              />
            ) : (
              <img
                id="play_img"
                src={Pause}
                alt="Pause Icon"
                height="30px"
                width="30px"
              />
            )}
          </button>
        </div>
      ) : (
        <p className="error_msg">No Data</p>
      )}
    </div>
  );
}

export default Title;
