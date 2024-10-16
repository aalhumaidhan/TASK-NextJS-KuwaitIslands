"use client";

import Island from "./Island";

function IslandList({ islands, handleIsland }) {
  const islandCards = islands.map((island) => (
    <Island key={island.id} island={island} handleIsland={handleIsland} />
  ));

  return <div className="islandList">{islandCards}</div>;
}

export default IslandList;
