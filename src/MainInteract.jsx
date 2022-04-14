import React from "react";
import { useState } from "react"
import * as Buttons from "./Buttons.jsx";
import "./styles.css";
import FoodPerClickUpgrade from "./buttons/foodPerClickUpgrade.jsx";
import { Tooltip, Button } from "@mantine/core";
import ReactTooltip from "react-tooltip"

export default function MainInteract({ gameData, setGameData }) {
  return (
    <div id="MainInteract" className="MainInteract Hidden">
      <div
        id="BuildingsContainer"
        className="tabcontent MainInteractTitle Hidden"
      >
        <div id="BuildingsHeaderContainer">
          <h1 className="tabTitle">Buildings</h1>
          <span onClick={Buttons.CloseButton} className="tabTitle close">
            [x]
          </span>
        </div>
        <div id="BuildingsButtonsContainer">
        <Tooltip
          opened
          label="Tooltip"
        >
          <Button variant="outline" color="gray" size="xl">
            With tooltip
          </Button>
        </Tooltip>

          
          
        </div>
      </div>

      <div id="People" className="tabcontent MainInteractTitle Hidden">
        <span className="close" onClick={Buttons.CloseButton}>
          [x]
        </span>
        <h3>People</h3>
        <p>Placeholder for the people.</p>
      </div>

      <div id="Research" className="tabcontent MainInteractTitle Hidden">
        <span className="close" onClick={Buttons.CloseButton}>
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

      <div id="Gather" className="tabcontent Hidden">
        <div id="GatherHeaderContainer">
          <h3 className="tabTitle">Gather</h3>
          <span onClick={Buttons.CloseButton} className="tabTitle close">
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
              Upgrade Hatchet (Currently Level 1) Cost: 25 wood
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
            <button id="woodPerClickUpgrade Hidden">
              Upgrade Hatchet (Currently Level 1) Cost: 10 wood
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
            <button id="copperperClickUpgrade Hidden">
              Upgrade Copper Pickaxe (Currently Level 1) Cost: 10 copper
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
