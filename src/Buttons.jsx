import {
  Gather,
  Gathers,
  gameData,
  startingGameData,
  ClearSave,
} from "./maindata.js";
import React from "react";
import Swal from "sweetalert2";
import { LOCAL_STORAGE_KEY, LOCAL_STORAGE_KEY2 } from "./App.jsx";
import { StartingGameDataArray } from "./App.jsx";

export function SaveGame({
  gameData,
  setGameData,
  BuildingData,
  setBuildingData,
}) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameData));
  localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(BuildingData));
  console.log("Saved");
}

export function ClearSaveButton({
  gameData,
  setGameData,
  BuildingData,
  setBuildingData,
}) {
  Swal.fire({
    title: "Are you sure you want to delete your save?",
    showCancelButton: true,
    icon: "warning",
    confirmButtonText: "Yes",
    customClass: {
      actions: "my-actions",
      cancelButton: "order-1 right-gap",
      confirmButton: "order-2",
      denyButton: "order-3",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("File Deleted!", "", "success");
      ClearSave(gameData);
      window.location.reload();
      console.log(gameData);
      setGameData(StartingGameDataArray);

      setBuildingData({
        PeopleButton: false,
        HutButton: true,
        FirstCard: true,
      });
    }
  });
}

/*
export function GatherFood({ gameData }) {
	var prevfoodamount = gameData.foodAmount;
    setGameData({ ...gameData, foodAmount:  prevfoodamount + 1 });
    return(
        <div> Hello </div>
    )
}
*/

export function foodPerClickUpgrade() {
  Gathers.gatherFoodPerClick();
}

export function HutButton({
  gameData,
  setGameData,
  BuildingData,
  setBuildingData,
}) {
  if (
    gameData.foodAmount >= 120 &&
    gameData.wood >= 80 &&
    gameData.copper >= 40
  ) {
    setGameData((prevData) => ({
      ...prevData,
      foodAmount: prevData.foodAmount - 120,
    }));
    setGameData((prevData) => ({
      ...prevData,
      foodAmount: prevData.wood - 80,
    }));
    setGameData((prevData) => ({
      ...prevData,
      foodAmount: prevData.copper - 40,
    }));

    setBuildingData((prevData) => ({ ...prevData, HutButton: false }));
  }
}
