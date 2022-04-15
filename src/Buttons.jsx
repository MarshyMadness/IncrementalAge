import {Gather, Gathers, gameData, startingGameData, ClearSave} from "./maindata.js" 
import React from "react"
import Swal from 'sweetalert2'
import { LOCAL_STORAGE_KEY , LOCAL_STORAGE_KEY2} from "./App.jsx";

export function SaveGame({ gameData, setGameData, BuildingData, setBuildingData }){
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameData))
  localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(BuildingData))
  console.log("Saved");
}

export function ClearSaveButton({ gameData, setGameData, BuildingData, setBuildingData }){
	Swal.fire({
		title: 'Are you sure you want to delete your save?',
		showCancelButton: true,
		icon: 'warning',
		confirmButtonText: 'Yes',
		customClass: {
			actions: 'my-actions',
			cancelButton: 'order-1 right-gap',
			confirmButton: 'order-2',
			denyButton: 'order-3',
		}
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire('File Deleted!', '', 'success')
					ClearSave(gameData);
					window.location.reload();
          console.log(gameData);
          setGameData(
            {
              GameVersion: "v0.0.6",
              foodAmount: 0,
              foodPerClick: 1,
              foodPerClickCost: 25,
              foodPerClickUpgradeNum: 1,
              FoodMultiplier: 0,
              FoodAutomateSpeed: 0,
              wood: 0,
              woodPerClick: 1,
              woodPerClickCost: 25,
              woodPerClickUpgradeNum: 1,
              copper: 0,
              copperPerClick: 1,
              copperPerClickCost: 25,
              copperPerClickUpgradeNum: 1,
              bronze: 0,
              bronzePerClick: 1,
              bronzePerClickUpgradeNum: 1,
              TotalTime: 0,
              TotalTimeString: 0,
            })
        
            setBuildingData(
              {
                PeopleButton: false,
                HutButton: true
              })
          
		}
	})
}


export function BuildingsButton(){
    var elems = document.querySelectorAll(".visibleblock");
    var tabcontent = document.querySelectorAll(".tabcontent");
    var tablinks = document.querySelectorAll(".tablinks");
      [].forEach.call(elems, function(el) {
      el.classList.add("Hidden");
      el.classList.remove("active");
      });
      [].forEach.call(tabcontent, function(el) {
      el.classList.remove("visibleblock");
      el.classList.remove("active");
      el.classList.add("Hidden");
      });
      [].forEach.call(tablinks, function(el) {
      el.classList.remove("active");
      el.classList.remove("visibleblock");
      });
  document.getElementById('MainInteract').classList.remove("Hidden");
  document.getElementById('BuildingsButton').classList.add("active");
  document.getElementById('BuildingsContainer').classList.remove("Hidden");
  document.getElementById('PeopleButton').classList.remove("active");
}
export function GatherButton() {
  var elems = document.querySelectorAll(".visibleblock");
  var tabcontent = document.querySelectorAll(".tabcontent");
    var tablinks = document.querySelectorAll(".tablinks");
    [].forEach.call(elems, function(el) {
    el.classList.add("Hidden");
    el.classList.remove("active");
    });
    [].forEach.call(tabcontent, function(el) {
    el.classList.remove("visibleblock");
    el.classList.remove("active");
    el.classList.add("Hidden");
    });
    [].forEach.call(tablinks, function(el) {
    el.classList.remove("active");
    });
 document.getElementById('MainInteract').classList.remove("Hidden");
 document.getElementById('Gather').classList.remove("Hidden");
 document.getElementById('GatherButton').classList.add("active");
}

export function CloseButton(){
  document.getElementById('MainInteract').classList.add("Hidden");
  document.getElementById('GatherButton').classList.remove("active");
  document.getElementById('BuildingsButton').classList.remove("active");
  document.getElementById('PeopleButton').classList.remove("active");
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


export function foodPerClickUpgrade(){
	Gathers.gatherFoodPerClick();

}

export function HutButton({gameData, setGameData, BuildingData, setBuildingData}){
  if(gameData.foodAmount >= 120 && gameData.wood >= 80 && gameData.copper >= 40){
    setGameData((prevData) => ({...prevData, foodAmount: prevData.foodAmount - 120}));
    setGameData((prevData) => ({...prevData, foodAmount: prevData.wood - 80}));
    setGameData((prevData) => ({...prevData, foodAmount: prevData.copper - 40}));


    setBuildingData((prevData) => ({ ...prevData, PeopleButton: true }));
    setBuildingData((prevData) => ({...prevData, HutButton: false}));
  }


}