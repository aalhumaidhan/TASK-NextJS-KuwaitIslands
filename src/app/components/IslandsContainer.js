"use client";

import { useState } from "react";

import IslandForm from "./IslandForm";
import IslandList from "./IslandList";
import Search from "./Search";

function IslandsContainer({ islands }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const fitleredIslands = islands.filter((island) =>
    island.name.toLowerCase().includes(query.toLowerCase())
  );

  const [currentIsland, setCurrentIsland] = useState(islands[1]);

  function handleIsland(newIsland) {
    setCurrentIsland(newIsland);
  }

  return (
    <div className="islands-container">
      <div>
        <Search handleChange={handleChange} />
        <IslandList islands={fitleredIslands} handleIsland={handleIsland} />
      </div>
      <IslandForm island={currentIsland} />
    </div>
  );
}

export default IslandsContainer;
