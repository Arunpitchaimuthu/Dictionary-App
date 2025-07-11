import React from "react";
import Book from "../assets/Book.png";
import Moon from "../assets/Moon.png";

function Heading({ theme, setTheme, setFont }) {
  return (
    <div className="heading">
      <div className="top">
        <img
          className="book"
          src={Book}
          alt="Book Icon"
          height="35px"
          width="37px"
        />
      </div>
      <div className="right">
        <select
          id="lang"
          style={
            theme
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "black", color: "white" }
          }
          onChange={(e) => setFont(e.target.value)}
        >
          <option value="serif">Serif</option>
          <option value="cursive">Cursive</option>
          <option value="system">System</option>
        </select>
        <div className="btn_and_moon">
          <div className="btn-group">
            <button
              id="on"
              style={{ backgroundColor: theme ? "white" : "#757575" }}
              onClick={() => setTheme((prev) => (prev = !theme))}
            ></button>
            <button
              id="off"
              style={{ backgroundColor: !theme ? "white" : "#757575" }}
              onClick={() => setTheme((prev) => (prev = !theme))}
            ></button>
          </div>
          <img
            className="moon"
            src={Moon}
            alt="Moon Icon"
            height="25px"
            width="25px"
          />
        </div>
      </div>
    </div>
  );
}

export default Heading;
