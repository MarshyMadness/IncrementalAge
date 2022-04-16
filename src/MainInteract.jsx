import React from "react";
import { useState, useRef } from "react";
import * as Buttons from "./Buttons.jsx";
import "./styles.css";
import FoodPerClickUpgrade from "./buttons/foodPerClickUpgrade.jsx";
import woodPerClickUpgrade from "./buttons/woodPerClickUpgrade.jsx";
import copperPerClickUpgrade from "./buttons/copperPerClickUpgrade.jsx";
import { Tooltip, Button } from "@mantine/core";

export default function MainInteract({
  gameData,
  setGameData,
  BuildingData,
  setBuildingData,
  toggleClosed,
  isClosed,
  toggleClick,
  isClicked,
  toggleClickedGather,
  isClickedGather,
  toggleClickedBuildings,
  isClickedBuildings,
  toggleClickedPeople,
  isClickedPeople,
}) {
  const [show, setShow] = useState(true);
  const BuildingsButtonRef = useRef(null);

  return (
    <div
      id="MainInteract"
      className={`MainInteract ${
        isClickedGather == false && isClickedBuildings == false ? "Hidden" : ""
      }`}
    >
      <div
        id="BuildingsContainer"
        className={`tabcontent MainInteractTitle ${
          !isClickedBuildings ? "Hidden" : ""
        }`}
      >
        <div id="BuildingsHeaderContainer">
          <h1 className="tabTitle">Buildings</h1>
          <span onClick={toggleClickedBuildings} className="tabTitle close">
            [x]
          </span>
        </div>

        <div id="BuildingsButtonsContainer">
          {BuildingData.HutButton ? (
            <Tooltip
              label="120 Food, 80 Wood, 40 Copper"
              position="bottom"
              withArrow
              zIndex={5000}
            >
              <Button
                variant="solid"
                color="red"
                size="x2"
                className="BuildingsButtons"
                onClick={() =>
                  Buttons.HutButton({
                    gameData,
                    setGameData,
                    BuildingData,
                    setBuildingData,
                  })
                }
              >
                Hut
              </Button>
            </Tooltip>
          ) : null}
        </div>
      </div>

      <div>
        <div
          id="People"
          className={`tabcontent MainInteractTitle ${
            !isClickedPeople ? "Hidden" : ""
          }`}
        >
          <span className="close" onClick={toggleClosed}>
            [x]
          </span>
          <h3>People</h3>
          <p>Placeholder for the people.</p>
        </div>
      </div>
      <div id="Research" className="tabcontent MainInteractTitle Hidden">
        <span className="close" onClick={toggleClosed}>
          [x]
        </span>
        <h3>Research</h3>
        <p>Placeholder for Research.</p>
      </div>

      <div id="Religion" className="tabcontent MainInteractTitle Hidden">
        <span className="close">[x]</span>
        <h3>Religion</h3>
        <p>Placeholder for Religion.</p>
      </div>
      <div
        id="Gather"
        className={`tabcontent MainInteractTitle ${
          !isClickedGather ? "Hidden" : ""
        }`}
      >
        <div id="GatherHeaderContainer">
          <h3 className="tabTitle">Gather</h3>
          <span onClick={toggleClickedGather} className="tabTitle close">
            [x]
          </span>
        </div>
        <div className="GatherResource-container">
          <div className="resource-container">
            <button
              className="ResourceButtons flex-parent"
              id="gatherFoodButton"
              onClick={() =>
                setGameData((prevData) => ({
                  ...prevData,
                  foodAmount: prevData.foodAmount + gameData.foodPerClick,
                }))
              }
            >
              Gather Food
            </button>
            <button
              id="foodPerClickUpgrade Hidden"
              onClick={() => FoodPerClickUpgrade({ gameData, setGameData })}
            >
              Upgrade Bow (Currently Level {gameData.foodPerClickUpgradeNum})
              Cost: {gameData.foodPerClickCost} wood
            </button>
          </div>

          <div className="resource-container">
            <button
              className="ResourceButtons"
              id="cutWoodButton"
              onClick={() =>
                setGameData((prevData) => ({
                  ...prevData,
                  wood: prevData.wood + gameData.woodPerClick,
                }))
              }
            >
              Cut Wood
            </button>
            <button
              id="woodPerClickUpgrade Hidden"
              onClick={() => woodPerClickUpgrade({ gameData, setGameData })}
            >
              Upgrade Hatchet (Currently Level {gameData.woodPerClickUpgradeNum}
              ) Cost: {gameData.woodPerClickCost} Copper
            </button>
          </div>

          <div
            className="resource-container"
            onClick={() =>
              setGameData((prevData) => ({
                ...prevData,
                copper: prevData.copper + 1,
              }))
            }
          >
            <button id="mineCopperButton">Mine Copper</button>
            <button
              id="copperperClickUpgrade Hidden"
              onClick={() => copperPerClickUpgrade({ gameData, setGameData })}
            >
              Upgrade Pickaxe (Currently Level{" "}
              {gameData.copperPerClickUpgradeNum}) Cost:{" "}
              {gameData.copperPerClickCost} Copper and{" "}
              {gameData.copperPerClickCost} Wood
            </button>
          </div>

          <div className="resource-container Hidden">
            <button className="Hidden" id="minebronzebutton Hidden">
              Mine Bronze
            </button>
            <button className="Hidden" id="bronzeperClickUpgrade Hidden">
              Upgrade Bronze Pickaxe (Currently Level 1) Cost: 10 Bronze
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
