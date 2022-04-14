import React from 'react'

export default function FoodPerClickUpgrade( {gameData, setGameData} ) {
        if (gameData.wood >= gameData.foodPerClickCost) {
         // gameData.wood -= gameData.foodPerClickCost;
         // gameData.foodPerClick += 1;
         // gameData.foodPerClickUpgradeNum += 1;
         // gameData.foodPerClickCost *= 2;
          setGameData(prevData => ({ ...prevData, wood: prevData.wood - 25}))
          setGameData(prevData => ({ ...prevData, foodPerClick: prevData.foodPerClick + 1}))
          setGameData(prevData => ({ ...prevData, foodPerClickUpgradeNum: prevData.foodPerClickUpgradeNum + 1}))
          setGameData(prevData => ({ ...prevData, foodPerClickCost: prevData.foodPerClickCost * 2}))
          //document.getElementById("foodPerClickUpgrade").innerHTML = "Upgrade Gathering (Currently Level " + gameData.foodPerClickUpgradeNum + ") Cost: " + gameData.foodPerClickCost + " wood";
        }


        
  return (
    <div>


    </div>
  )
}
