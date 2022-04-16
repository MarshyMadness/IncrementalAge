import React from "react";

export default function copperPerClickUpgrade({ gameData, setGameData }) {
  if (
    gameData.copper >= gameData.copperPerClickCost &&
    gameData.wood >= gameData.copperPerClick
  ) {
    // gameData.wood -= gameData.foodPerClickCost;
    // gameData.foodPerClick += 1;
    // gameData.foodPerClickUpgradeNum += 1;
    // gameData.foodPerClickCost *= 2;
    setGameData((prevData) => ({ ...prevData, copper: prevData.copper - 50 }));
    setGameData((prevData) => ({
      ...prevData,
      copperPerClick: prevData.copperPerClick + 1,
    }));
    setGameData((prevData) => ({
      ...prevData,
      copperPerClickUpgradeNum: prevData.copperPerClickUpgradeNum + 1,
    }));
    setGameData((prevData) => ({
      ...prevData,
      copperPerClickCost: prevData.copperPerClickCost * 2,
    }));
    //document.getElementById("foodPerClickUpgrade").innerHTML = "Upgrade Gathering (Currently Level " + gameData.foodPerClickUpgradeNum + ") Cost: " + gameData.foodPerClickCost + " wood";
  }

  return <div></div>;
}
