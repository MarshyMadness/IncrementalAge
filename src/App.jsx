import { useState, useEffect, useRef } from "react";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Gather } from "./maindata.js";
import { Time, FixBorder } from "./maindata.js";
import * as Buttons from "./Buttons.jsx";
import useKeyPress from "./hooks/useKeyPress.jsx";
import ResourceTable from "./ResourceTable.jsx";
import MainInteract from "./MainInteract.jsx";
import { useSetState, Text, Paper, Button } from "@mantine/core";
import FoodPerClickUpgrade from "./buttons/foodPerClickUpgrade.jsx";
import { startingGameData } from "./maindata.js";
import ReactTooltip from "react-tooltip";
import StatsCard from "./Stats.jsx";
import TopOfPageContainer from "./TopOfPageContainer";
import backgroundimg from "./Graphics/background.jpg";

export const StartingGameDataArray = {
  GameVersion: "v0.0.6",
  foodAmount: 0,
  foodPerClick: 1,
  foodPerClickCost: 25,
  foodPerClickUpgradeNum: 0,
  FoodMultiplier: 0,
  FoodAutomateSpeed: 0,

  wood: 0,
  woodPerClick: 1,
  woodPerClickCost: 25,
  woodPerClickUpgradeNum: 0,
  woodMultiplier: 0,
  woodAutomateSpeed: 0,

  copper: 0,
  copperPerClick: 1,
  copperPerClickCost: 50,
  copperPerClickUpgradeNum: 0,
  copperMultiplier: 0,
  copperAutomateSpeed: 0,

  bronze: 0,
  bronzePerClick: 1,
  bronzePerClickCost: 50,
  bronzePerClickUpgradeNum: 0,
  bronzeMultiplier: 0,
  bronzeAutomateSpeed: 0,

  People: 0,
  TotalTime: 0,
  TotalTimeString: 0,
};

window.addEventListener("load", (event) => {
  FixBorder();
});

export const LOCAL_STORAGE_KEY = "IncrementalGame.game";
export const LOCAL_STORAGE_KEY2 = "IncrementalGame.buildings";

export default function App() {
  var [count, setCount] = useState(0);
  var [foodcount, setfoodCount] = useState(0);

  const [BuildingButtonState, setBuildingButtonState] = useState({
    Gather: false,
    Buildings: false,
  });

  var [gameData, setGameData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {
      StartingGameDataArray,
    }
  );

  var [BuildingData, setBuildingData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2)) || {
      PeopleButton: false,
      HutButton: true,
      FirstCard: true,
    }
  );

  //Code for Open and Active States
  var [isClosed, setIsClosed] = useState(false);
  const toggleClosed = () => setIsClosed((prev) => !prev);

  var [isClicked, setIsClicked] = useState(false);
  const toggleIsClicked = () => {
    setIsClickedGather(false);
    setIsClickedBuildings(false);
    setIsClickedPeople(false);
  };

  var [isClickedGather, setIsClickedGather] = useState(false);
  const toggleClickedGather = () => {
    setIsClickedGather((prev) => !prev);
    console.log(isClickedGather);
  };

  var [isClickedBuildings, setIsClickedBuildings] = useState(false);
  const toggleClickedBuildings = () => setIsClickedBuildings((prev) => !prev);

  var [isClickedPeople, setIsClickedPeople] = useState(false);
  const toggleClickedPeople = () => setIsClickedPeople((prev) => !prev);

  //Set Base Food Multiplier
  let BaseFoodMultiplier = 0;

  useEffect(() => {
    let interval = setInterval(() => {
      var prevfoodamount = gameData.foodAmount;
      var prevFoodMultiplier = gameData.FoodMultiplier;
      setGameData((prevData) => ({
        ...prevData,
        foodAmount: prevData.foodAmount + gameData.FoodMultiplier,
      }));

      if (gameData.foodPerClickUpgradeNum === 1) {
        setGameData((prevData) => ({ ...prevData, FoodMultiplier: 0 }));
      } else if (gameData.foodPerClickUpgradeNum === 2) {
        setGameData((prevData) => ({ ...prevData, FoodMultiplier: 0 }));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [gameData.foodAmount]);

  useKeyPress("Escape", () => {
    toggleIsClicked();
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameData));
  }, [gameData]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(BuildingData));
  }, [BuildingData]);

  /*
  const useMyFirstCustomHook = () => {
    const [foodCount, setfoodCount] = useState(0);
    // do some stuff
    //return { foodCount, setFoodCount };
    setFoodCount(prevFoodCount => prevFoodCount +1);
  };
*/

  return (
    <>
      <div className="App">
        <TopOfPageContainer
          gameData={gameData}
          BuildingButtonState={BuildingButtonState}
          setBuildingButtonState={setBuildingButtonState}
          BuildingData={BuildingData}
          isClicked={isClicked}
          toggleIsClicked={toggleIsClicked}
          toggleClickedGather={toggleClickedGather}
          isClickedGather={isClickedGather}
          toggleClickedBuildings={toggleClickedBuildings}
          isClickedBuildings={isClickedBuildings}
          toggleClickedPeople={toggleClickedPeople}
          isClickedPeople={isClickedPeople}
        />
        {BuildingData.FirstCard ? (
          <StatsCard
            gameData={gameData}
            setGameData={setGameData}
            setBuildingData={setBuildingData}
          />
        ) : null}

        <header
          className="App-header"
          style={{
            backgroundImage: `url(${backgroundimg})`,
            backgroundSize: "cover",
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome To My First Game</p>
        </header>

        <div id="footer">
          <div className="FooterContainer">
            <button
              id="Save"
              onClick={() =>
                Buttons.SaveGame({
                  gameData,
                  setGameData,
                  BuildingData,
                  setBuildingData,
                })
              }
            >
              Save
            </button>
            <button
              onClick={() =>
                Buttons.ClearSaveButton({
                  gameData,
                  setGameData,
                  BuildingData,
                  setBuildingData,
                })
              }
              id="ClearSaveButton"
              className="OptionsQuick"
            >
              Clear Save
            </button>
            <span className="GameStats" id="Time">
              Current Playtime: {gameData.TotalTimeString} seconds
            </span>{" "}
            <span className="GameStats" id="TimeElapsedTotal">
              {" "}
              Total Elapsed Time:{" "}
            </span>
            <div id="Development">
              <p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                {" | "}
                <a
                  className="App-link"
                  href="https://vitejs.dev/guide/features.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vite Docs
                </a>
              </p>
            </div>
          </div>
        </div>
        <ResourceTable gameData={gameData} />
        <MainInteract
          gameData={gameData}
          setGameData={setGameData}
          BuildingData={BuildingData}
          setBuildingData={setBuildingData}
          toggleClickedGather={toggleClickedGather}
          isClicked={isClicked}
          toggleIsClicked={toggleIsClicked}
          isClickedGather={isClickedGather}
          toggleClickedBuildings={toggleClickedBuildings}
          isClickedBuildings={isClickedBuildings}
          toggleClickedPeople={toggleClickedPeople}
          isClickedPeople={isClickedPeople}
          className={isClosed ? "hidden" : "active"}
        />
      </div>
    </>
  );
}
