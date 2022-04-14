import { useState, useEffect ,useRef} from 'react'
import React from 'react'
import logo from './logo.svg'
import foxes from "./Graphics/foxes.png"
import './App.css'
import {Gather} from "./maindata.js"
import {Time, FixBorder} from "./maindata.js"
import * as Buttons from "./Buttons.jsx"
import useKeyPress from './hooks/useKeyPress.jsx'
import ResourceTable from "./ResourceTable.jsx"
import MainInteract from './MainInteract.jsx'
import { useSetState } from '@mantine/hooks'
import FoodPerClickUpgrade from "./buttons/foodPerClickUpgrade.jsx"
import ReactTooltip from "react-tooltip"

window.addEventListener('load', (event) => {
  FixBorder();

});

export const LOCAL_STORAGE_KEY="IncrementalGame.game"

export default function App() {
 var [count, setCount] = useState(0);
 var [foodcount, setfoodCount] = useState(0);



 var [gameData, setGameData] = useState( 
	 
	JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || 
	{
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
    TotalTimeString: 0
});


 const food = localStorage.getItem(gameData["foodAmount"]);
 const prevCountRef = useRef();

 useEffect(() => {
	
}, [])

let BaseFoodMultiplier = 0;



	useEffect(() => {   
		
		let interval= setInterval(() => {

			var prevfoodamount = gameData.foodAmount;
			var prevFoodMultiplier = gameData.FoodMultiplier;
			setGameData(prevData => ({ ...prevData, foodAmount: prevData.foodAmount + gameData.FoodMultiplier}))

			if (gameData.foodPerClickUpgradeNum === 0){
				setGameData(prevData => ({ ...prevData, FoodMultiplier: 0}))

			}
			else if(gameData.foodPerClickUpgradeNum === 1){
				setGameData(prevData => ({ ...prevData, FoodMultiplier: 0}))
			}
	}, 1000)
   return () => { clearInterval(interval); };
	}, [gameData.foodAmount])


    


    useKeyPress('Escape', () => {
    	Buttons.CloseButton();
    });

	
	
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameData))
	}, [gameData])


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
    		<p className="Version"> </p>
    		<p id="gameVersion"> Game Version: {gameData.GameVersion} </p>

    		<div id="TimeStateButtonContainer">

    		<button className="TimeStateButton" id="start"> Play </button>
    		<button className="TimeStateButton" id="pause"> Pause </button>
    		<button id="MenuIcon" className="fa-solid fa-bars"></button>
    		</div>
    	</div>

    	<div className="tabHolder">
    		<div className="tab">
    			<button className="tablinks" onClick={Buttons.GatherButton} id="GatherButton">Gather</button>
    			<button className="tablinks" onClick={Buttons.BuildingsButton} id="BuildingsButton">Buildings</button>
    			<button className="tablinks Hidden" id="PeopleButton" >People</button>
    			<button className="tablinks Hidden" id="ResearchButton">Research</button>
    			<button className="tablinks Hidden" id="ReligionButton">Religion</button>
    			<div id="TestButtonContainer"></div>
    		</div>
    	</div>

    </div>

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome To My First Game</p>

          <button id="Button" type="button" onClick={() => setCount((count) => count + 1)}>
            Forced Resource Refresh: {count}
          </button>




      </header>

	  

      <div id="footer">

      <div className="FooterContainer">
          <div className="QuickOptionButtons">
            <button onClick={() => setGameData(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))} id ="ClearSaveButton" className="OptionsQuick">Clear Save</button>
            <span className="GameStats" id="Time">Current Playtime: {gameData.TotalTimeString} seconds</span> <br></br>
    				<span className="GameStats" id="TimeElapsedTotal"> Total Elapsed Time: </span>
          </div>

		  <img src={foxes} className="App-foxes" alt="logo" />
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
            {' | '}
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
      </div>


	<ResourceTable gameData={gameData}/>
	<MainInteract gameData={gameData} setGameData={setGameData}/>
</>
  )

}
