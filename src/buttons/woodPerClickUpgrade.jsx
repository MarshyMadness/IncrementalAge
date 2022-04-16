import React from "react";

export default function woodPerClickUpgrade({ gameData, setGameData }) {
  if (gameData.copper >= gameData.woodPerClickCost) {
    // gameData.wood -= gameData.foodPerClickCost;
    // gameData.foodPerClick += 1;
    // gameData.foodPerClickUpgradeNum += 1;
    // gameData.foodPerClickCost *= 2;
    setGameData((prevData) => ({ ...prevData, wood: prevData.copper - 25 }));
    setGameData((prevData) => ({
      ...prevData,
      woodPerClick: prevData.woodPerClick + 1,
    }));
    setGameData((prevData) => ({
      ...prevData,
      woodPerClickUpgradeNum: prevData.woodPerClickUpgradeNum + 1,
    }));
    setGameData((prevData) => ({
      ...prevData,
      woodPerClickCost: prevData.woodPerClickCost * 2,
    }));
    //document.getElementById("foodPerClickUpgrade").innerHTML = "Upgrade Gathering (Currently Level " + gameData.foodPerClickUpgradeNum + ") Cost: " + gameData.foodPerClickCost + " wood";
  }

  return <div></div>;
}
