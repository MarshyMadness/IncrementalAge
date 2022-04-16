import { useState } from "react";
import React from "react";
import { Tooltip, Button } from "@mantine/core";

export var gameData = {
  GameVersion: "v0.0.6",
  foodAmount: 0,
  foodPerClick: 25,
  foodPerClickCost: 25,
  foodPerClickUpgradeNum: 0,
  wood: 0,
  woodPerClick: 25,
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
};

export var startingGameData = {
  GameVersion: "v0.0.6",
  foodAmount: 0,
  foodPerClick: 25,
  foodPerClickCost: 25,
  foodPerClickUpgradeNum: 0,
  wood: 0,
  woodPerClick: 25,
  woodPerClickCost: 25,
  copper: 0,
  copperPerClick: 1,
  copperPerClickCost: 25,
  copperPerClickUpgradeNum: 0,
  bronze: 0,
  bronzePerClick: 1,
  bronzePerClickUpgradeNum: 0,
  TotalTime: 0,
};

if (gameData == null) {
  gameData = startingGameData;
}

export var Time = gameData.TotalTime;

var SAVE_KEY = "save";

export function FixBorder() {
  //$("#Buildings").parent("div").show();
  //$('#Buildings').addClass('visibleblock');
  //$('#Buildingsbutton').addClass('active');
  //$('#Buildingsbutton').removeClass('Hidden');
  gameData = JSON.parse(localStorage.getItem(SAVE_KEY));
  if (gameData == null) {
    gameData = startingGameData;
  }

  loop.start();
}
/*


	$(document).ready(function() {


	

		$( function() {

			$( "#OptionsDialog" ).dialog({
				autoOpen: false,
				show: {
					effect: "blind",
					duration: 1000
				},
				hide: {
					effect: "blind",
					duration: 1000
				},
				width: 500,
				title: "Game Stats"
			});

		});

		$( "#MenuIcon" ).on( "click", function() {
		  $( "#OptionsDialog" ).dialog( "open" );
		});


	});


//Document Ready function for ALLBUTTONS
	$(document).ready(function() {
		$("#start").click(function(){
			if (loop.isPaused) {
				loop.resume();
			}

			if (loop.isStopped) {
				loop.start();
			}

		});

		$("#MenuIcon").click(function(){

		});

		$("#pause").click(function(){
			loop.pause();
		});


		$("#gatherFoodButton").click(function() {ProgressBarRunning.Food(); });

		$("#cutWoodButton").click(function(){ ProgressBarRunning.Wood(); });
		$("#mineCopperButton").click(function(){ ProgressBarRunning.Copper(); });


		$("#Peoplebutton").click(function(){

			var elems = document.querySelectorAll(".visibleblock");
			var tabcontent = document.querySelectorAll(".tabcontent");
			var tablinks = document.querySelectorAll(".tablinks");
				[].forEach.call(elems, function(el) {
				el.classList.remove("visibleblock");
				});
				[].forEach.call(tabcontent, function(el) {
				el.classList.add("Hidden");
				el.classList.remove("active");

			  });
				[].forEach.call(tablinks, function(el) {
				el.classList.remove("active");
				});



			$("#People").parent("div").show();
			$('#People').addClass('visibleblock');
			$('#Peoplebutton').addClass('active');
			$('#People').removeClass('Hidden');
		});

	});

*/
export class Gather {
  cutWood() {
    gameData.wood += gameData.woodPerClick;
    document.getElementById("woodCut").innerHTML = gameData.wood;
    document.getElementById("woodPerClickUpgrade").innerHTML =
      "Upgrade Hatchet (Currently Level " +
      gameData.copperPerClick +
      ") Cost: " +
      gameData.copperPerClickCost +
      " copper";
  }

  minecopper() {
    gameData.copper += gameData.copperPerClick;
    document.getElementById("copperMined").innerHTML = gameData.copper;
    document.getElementById("copperperClickUpgrade").innerHTML =
      "Upgrade Copper Pickaxe (Currently Level " +
      gameData.copperPerClick +
      ") Cost: " +
      gameData.copperPerClickCost +
      " copper";
  }

  minebronze() {
    gameData.bronze += gameData.bronzePerClick;
    document.getElementById("bronzeMined").innerHTML = gameData.bronze;
    document.getElementById("bronzeperClickUpgrade").innerHTML =
      "Upgrade Bronze Pickaxe (Currently Level " +
      gameData.copperPerClick +
      ") Cost: " +
      gameData.copperPerClickCost +
      " copper";
  }

  buycopperPerClick() {
    document.getElementById("copperMined").innerHTML = gameData.copper;
    document.getElementById("copperperClickUpgrade").innerHTML =
      "Upgrade Copper Pickaxe (Currently Level " +
      gameData.copperPerClick +
      ") Cost: " +
      gameData.copperPerClickCost +
      " copper";

    if (gameData.copper >= gameData.copperPerClickCost) {
      gameData.copper -= gameData.copperPerClickCost;
      gameData.copperPerClick += 1;
      gameData.copperPerClickUpgradeNum += 1;
      gameData.copperPerClickCost *= 2;
    }
  }
}

/*
class ProgressBar {
	Food() {
		ProgressBarRunning.Foodshow();
		document.getElementById("gatherFoodButton").disabled = true;

		  var progressBar = $('#FoodProgressBar'),
			width = 0;

		  progressBar.width(width);

		  var interval = setInterval(function() {

			width += 10;

			progressBar.css('width', width + '%');
		    document.getElementById("FoodProgressBar").innerHTML= width + "%";

			if (width >= 100) {
				clearInterval(interval);
				ProgressBarRunning.Foodhide();
				GatherRunning.gatherFood();
				document.getElementById("gatherFoodButton").disabled = false;
			}
		  }, 200);

		}

	Foodhide(){
		$("#FoodProgressBar").css("display","none")
		}
	Foodshow(){
		$("#FoodProgressBar").css("display","inline-block")
	}

	Wood() {
		document.getElementById("cutWoodButton").disabled = true;
		ProgressBarRunning.Woodshow();

		  var progressBar = $('#WoodProgressBar'),
			width = 0;

		  progressBar.width(width);

		  var interval = setInterval(function() {

			width += 10;

			progressBar.css('width', width + '%');
		    document.getElementById("WoodProgressBar").innerHTML= width + "%";

			if (width >= 100) {
			  clearInterval(interval);
			  ProgressBarRunning.Woodhide();
			  GatherRunning.cutWood();
			  document.getElementById("cutWoodButton").disabled = false;
			}
		  }, 200);

		}


	Woodhide(){
		$("#WoodProgressBar").css("display","none")
		}
	Woodshow(){
		$("#WoodProgressBar").css("display","inline-block")
	}

	Copper() {
		ProgressBarRunning.Coppershow();
	  document.getElementById("mineCopperButton").disabled = true;


		  var progressBar = $('#CopperProgressBar'),
			width = 0;

		  progressBar.width(width);

		  var interval = setInterval(function() {

			width += 10;

			progressBar.css('width', width + '%');
		    document.getElementById("CopperProgressBar").innerHTML= width + "%";

			if (width >= 100) {
			  clearInterval(interval);
			  ProgressBarRunning.Copperhide();
			  GatherRunning.minecopper();
			  document.getElementById("mineCopperButton").disabled = false;
			}
		  }, 200);

		}


	Copperhide(){
		$("#CopperProgressBar").css("display","none")
		}
	Coppershow(){
		$("#CopperProgressBar").css("display","inline-block")
	}


	Bronze() {
		ProgressBarRunning.Bronzeshow();
		document.getElementById("mineBronzeButton").disabled = true;


		  var progressBar = $('#BronzeProgressBar'),
			width = 0;

		  progressBar.width(width);

		  var interval = setInterval(function() {

			width += 10;

			progressBar.css('width', width + '%');
		    document.getElementById("BronzeProgressBar").innerHTML= width + "%";

			if (width >= 100) {
			  clearInterval(interval);
			  ProgressBarRunning.Bronzehide();
			GatherRunning.minebronze();
				 document.getElementById("mineBronzeButton").disabled = false;
			}
		  }, 200);

		}


	Bronzehide(){
		$("#BrozeprogressBar").css("display","none")
		}
	Bronzeshow(){
		$("#BronzeProgressBar").css("display","inline-block")
		}
}




	//var saveGameLoop = window.setInterval(function() {
	  //localStorage.setItem('copperMinerSave', JSON.stringify(gameData))
	//}, 15000)
*/
export function ClearSave() {
  localStorage.clear();
  window.location.reload();
  //localStorage.setItem("Factorygamesave", "0");
  //let str = localStorage.getItem("Factorygamesave");
  //if (str == undefined || str == "undefined" || str == null) return;
  //let sav = stringToDecimal(JSON.parse(str));
}

const STOPPED = Symbol.for("@@gameloop/stopped");
const PAUSED = Symbol.for("@@gameloop/paused");
const RUNNING = Symbol.for("@@gameloop/running");

export class GameLoop {
  constructor(options = {}) {
    this.state = STOPPED;
    this.options = {
      step: 1000 / 60,
      maxUpdates: 300,
      ...options,
    };

    this.tick = this.tick.bind(this);
  }
  get isStopped() {
    return this.state === STOPPED;
  }
  get isPaused() {
    return this.state === PAUSED;
  }
  get isRunning() {
    return this.state === RUNNING;
  }
  start() {
    if (this.isStopped) {
      this.state = RUNNING;

      const lag = 0;
      const delta = 0;
      const total = 0;
      const last = null;

      this.timing = { last, total, delta, lag };
      this.frame = requestAnimationFrame(this.tick);
      Time = gameData.TotalTime;
    }
  }
  stop() {
    if (this.isRunning || this.isPaused) {
      this.state = STOPPED;
      cancelAnimationFrame(this.frame);
    }
  }
  pause() {
    if (this.isRunning) {
      this.state = PAUSED;
      cancelAnimationFrame(this.frame);
    }
  }
  resume() {
    if (this.isPaused) {
      this.state = RUNNING;
      this.frame = requestAnimationFrame(this.tick);
    }
  }
  tick(time) {
    if (this.timing.last === null) this.timing.last = time;
    this.timing.delta = time - this.timing.last;
    this.timing.total += this.timing.delta;
    this.timing.lag += this.timing.delta;
    this.timing.last = time;

    let numberOfUpdates = 0;

    while (this.timing.lag >= this.options.step) {
      this.timing.lag -= this.options.step;
      this.onUpdate(this.options.step, this.timing.total);
      this.numberOfUpdates++;
      if (this.numberOfUpdates >= this.options.maxUpdates) {
        this.onPanic();
        break;
      }
    }

    this.onRender(this.timing.lag / this.options.step);

    this.frame = requestAnimationFrame(this.tick);
  }
}

const loop = new GameLoop();
export const Gathers = new Gather();

//let currency = 0;
//let currency_per_millisecond = 0.003;

loop.onUpdate = function (dt, t) {
  //currency += currency_per_millisecond * dt;

  //document.getElementById("Time").innerHTML = "Current Playtime: " + "<span class=\"TimeColor\">" + Math.round(t/1000)+" seconds</span>";
  gameData.TotalTime += dt / 1000;
  let a = gameData.TotalTime;
  gameData.TotalTimeString = a.toFixed(0);

  //document.getElementById("TimeElapsedTotal").innerHTML = "Total Time Played: " + "<span class=\"TimeColor\">" + (Math.round(gameData.TotalTime/60000) + " minutes</span/>");
};

var UpdateGameLoop = window.setInterval(function () {
  //document.getElementById("foodGathered").innerHTML = gameData.foodAmount
  //document.getElementById("woodCut").innerHTML = gameData.wood
  //document.getElementById("copperMined").innerHTML = gameData.copper
  //document.getElementById("bronzeMined").innerHTML = gameData.bronze

  //	document.getElementById("gameVersion").innerHTML = "Version " + gameData.GameVersion
  //document.getElementById("copperMinedPerSecond").innerHTML = gameData.copperPerClick

  if (gameData.wood >= 25) {
    document.getElementById("foodPerClickUpgrade").style.display =
      "inline-block";
  }
  if (gameData.copper >= 50) {
    document.getElementById("woodPerClickUpgrade").style.display =
      "inline-block";
  }

  if (gameData.bronze >= 50) {
    document.getElementById("copperperClickUpgrade").style.display =
      "inline-block";
  }

  if (gameData.copperPerClickUpgradeNum >= 2) {
    //minebronze();
    document.getElementById("bronze").style.display = "table-row";
    document.getElementById("bronzeMined").style.display = "table-cell";
    document.getElementById("bronzeMinedPerSecond").style.display =
      "table-cell";
    document.getElementById("bronzeMinedPerSecond").innerHTML =
      gameData.bronzePerClick;
    document.getElementById("minebronzebutton").style.display = "flex inline";
  }

  if (gameData.bronze >= 50) {
    document.getElementById("bronzeperClickUpgrade").style.display =
      "flex inline";
  }
}, 1000);

loop.onRender = function (i) {
  //currencyEl.textContent = currency.toFixed(2);
};

loop.onPanic = function () {
  // discard any accumulated lag time and hope for the best
  this.timing.lag = 0;
};

loop.start();
