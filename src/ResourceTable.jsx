import React from 'react'
//import { gameData } from './maindata'

export default function ResourceTable( {gameData} ) {
    
  return (
    <div>
    <table id="Resources">

  <tbody>
      <tr>
        <th>Resource</th>
        <th>Amount</th>
        <th> /S </th>
      </tr>
      <tr>
        <th id="food" className="Resource">Food</th>
        <th id="foodGathered" className="ResourceGathered">{gameData.foodAmount}</th>
        <th id="foodGatheredPerSecond" className="ResourcePerSecond"></th>

      </tr>
      <tr>
        <th id="wood" className="Resource">Wood</th>
        <th id="woodCut" className="ResourceGathered">{gameData.wood}</th>
        <th id="woodCutPerSecond" className="ResourcePerSecond">0</th>

      </tr>
      <tr>
        <th id="copper" className="Resource">Copper</th>
        <th id="copperMined" className="ResourceGathered">{gameData.copper}</th>
        <th id="copperMinedPerSecond" className="ResourcePerSecond">0</th>

      </tr>
      <tr>
        <th id="bronze" className="Resource Hidden">Bronze</th>
        <th id="bronzeMined Hidden" ></th>
        <th id="bronzeMinedPerSecond Hidden" className="PerSecond"></th>
      </tr>
  </tbody>
    </table>
</div>
  )
}
