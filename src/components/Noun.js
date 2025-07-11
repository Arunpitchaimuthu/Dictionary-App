import React from "react";

function Noun({ findedData }) {
  return (
    <div>
      {findedData[0]?.meanings[0] ? (
        <div>
          <p id="noun_title">{findedData[0]?.meanings[0]?.partOfSpeech}</p>
          <hr />
          <p id="meaning">Meaning</p>
          <ul id="meaning_ul">
            {findedData[0]?.meanings[0]?.definitions.map((item, index) => {
              return <li key={index}>{item?.definition}</li>;
            })}
          </ul>
          {findedData[0]?.meanings[0]?.synonyms[0] ? (
            <div className="synonyms_and_value">
              <p id="synonyms">Synonyms</p>
              <p id="synonyms_value">
                {findedData[0]?.meanings[0]?.synonyms.map((item,index) => {
                  return <span key={index}>{item}</span>;
                })}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Noun;
