import React from "react";

function Search({ datas, setDatas, searchData }) {
  return (
    <div>
      <form id="form">
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Search for any word..."
          value={datas}
          onChange={(e) => setDatas(e.target.value)}
        />
        <button type="submit" id="search_btn" onClick={searchData}>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Search;
