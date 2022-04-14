import {Gather, Gathers, gameData, startingGameData, ClearSave} from "./maindata.js" 
import React from "react"
import Swal from 'sweetalert2'
import { LOCAL_STORAGE_KEY } from "./App.jsx";

export function ClearSaveButton(){
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
