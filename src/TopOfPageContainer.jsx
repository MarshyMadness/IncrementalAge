import React from "react";
import { useState, useRef } from "react";
import foxes from "./Graphics/foxes.png";
import cats from "./Graphics/cats.png";
import * as Buttons from "./Buttons.jsx";

export default function TopOfPageContainer({
  gameData,
  BuildingButtonState,
  setBuildingButtonState,
  BuildingData,
}) {
  return (
    <div id="TopOfPageContainer">
      <div id="header">
        <img src={cats} className="App-cats" alt={foxes} />
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
            onClick={Buttons.BuildingsButton({
              BuildingButtonState,
              setBuildingButtonState,
            })}
            id="BuildingsButton"
          >
            Buildings
          </button>
          {BuildingData.PeopleButton ? (
            <button className="tablinks" id="PeopleButton">
              People
            </button>
          ) : null}

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
  );
}
