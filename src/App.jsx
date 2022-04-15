import { useState, useEffect, useRef } from "react";
import React from "react";
import logo from "./logo.svg";
import foxes from "./Graphics/foxes.png";
import cats from "./Graphics/cats.png"
import "./App.css";
import { Gather } from "./maindata.js";
import { Time, FixBorder } from "./maindata.js";
import * as Buttons from "./Buttons.jsx";
import useKeyPress from "./hooks/useKeyPress.jsx";
import ResourceTable from "./ResourceTable.jsx";
import MainInteract from "./MainInteract.jsx";
import { useSetState } from "@mantine/hooks";
import FoodPerClickUpgrade from "./buttons/foodPerClickUpgrade.jsx";
import { startingGameData } from "./maindata.js";
import ReactTooltip from "react-tooltip";

window.addEventListener("load", (event) => {
  FixBorder();
});

export const LOCAL_STORAGE_KEY = "IncrementalGame.game";
export const LOCAL_STORAGE_KEY2 = "IncrementalGame.buildings";

export default function App() {
  var [count, setCount] = useState(0);
  var [foodcount, setfoodCount] = useState(0);

  var [gameData, setGameData] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {
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
      copper: 0,
      copperPerClick: 1,
      copperPerClickCost: 25,
      copperPerClickUpgradeNum: 0,
      bronze: 0,
      bronzePerClick: 1,
      bronzePerClickUpgradeNum: 0,
      TotalTime: 0,
      TotalTimeString: 0,
    }
  );

  var [BuildingData, setBuildingData] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2)) || { 
       PeopleButton: false,
       HutButton: true
  }  
  );

  const food = localStorage.getItem(gameData["foodAmount"]);
  const prevCountRef = useRef();

  useEffect(() => {}, []);

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
    Buttons.CloseButton();
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
        <div id="TopOfPageContainer">
          <div id="header">
          <img src={cats} className="App-cats" alt="logo" />
            <p id="gameVersion"> Game Version: {gameData.GameVersion} </p>
            <img src={foxes} className="App-foxes" alt="logo" />
          </div>

          <div className="tabHolder">
            <div className="tab">
              <button
                className="tablinks"
                onClick={Buttons.GatherButton}
                id="GatherButton"
              >
                Gather
              </button>
              <button
                className="tablinks"
                onClick={Buttons.BuildingsButton}
                id="BuildingsButton"
              >
                Buildings
              </button>
              { BuildingData.PeopleButton ? <button className="tablinks" id="PeopleButton">
                People
              </button> : null }
              
              <button className="tablinks Hidden" id="ResearchButton">
                Research
              </button>
              <button className="tablinks Hidden" id="ReligionButton">
                Religion
              </button>
              <div id="TestButtonContainer"></div>
            </div>
          </div>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome To My First Game</p>

          <button
            id="Button"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            Forced Resource Refresh: {count}
          </button>
        </header>

        <div id="footer">
          <div className="FooterContainer">
              <button id="Save" onClick={() => Buttons.SaveGame({ gameData, setGameData, BuildingData, setBuildingData })}>Save</button>
              <button
                onClick={() => Buttons.ClearSaveButton({ gameData, setGameData, BuildingData, setBuildingData })}
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
        <MainInteract gameData={gameData} setGameData={setGameData} BuildingData={BuildingData} setBuildingData={setBuildingData}/>
      </div>
    </>
  );
}
