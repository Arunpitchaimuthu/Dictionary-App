import React from "react";
import GoToPage from "../assets/Goto Page.png";
import { Link } from "react-router-dom";

function Source({ findedData }) {
  return (
    <div>
      {findedData.length ? (
        <div>
          <hr className="bottom" />
          <div className="source_and_url">
            <p id="source_title">Source</p>
            <div className="source_and_goto">
              <a
                id="source_url"
                href={findedData[0]?.sourceUrls[0]}
                target="_blank"
              >
                {findedData[0]?.sourceUrls[0]}
              </a>
              <a id="goto_url" href={findedData[0]?.sourceUrls[0]} target="_blank">
                <img
                  id="goto_page"
                  src={GoToPage}
                  alt="Goto Page /icon"
                  height="18px"
                  width="18px"
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Source;
