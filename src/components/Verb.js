import React from "react";

function Verb({ findedData }) {
  return (
    <div>
      {findedData[0]?.meanings[1] ? (
        <div>
          <div className="verb_and_hr">
            <p id="verb_title">{findedData[0]?.meanings[1]?.partOfSpeech}</p>
            <hr className="center_hr" />
          </div>
          <p id="verb_meaning">Meaning</p>
          <ul id="verb_ul">
            {findedData[0]?.meanings[1]?.definitions.map((item, index) => {
              return (
                <div key={index}>
                  <li className="verb_meaning_li">{item?.definition}</li>
                  {item?.example ? (
                    <p>
                      <q>{item?.example}</q>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Verb;
