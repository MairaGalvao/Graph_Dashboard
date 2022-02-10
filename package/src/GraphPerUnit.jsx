import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import  { useState, useEffect } from 'react';
import {aggregateFieldByDays} from './Utils'

// todo  4. add a second graph that show ppu value per service (one line for each service)

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}


function GraphPerUnit({data}){

  const [ppuData, setPpuData] = useState([]);
  
  useEffect(() => {
    if (data !== undefined) {
      let cloudServiceArray = data.map((element)=>{return(element['cloud_service'])})
      var uniqueCloudServiceArray = cloudServiceArray.filter(onlyUnique);

      // todo loop over the unique cloud services and split the data by service 
      // const result = data.filter(elem => elem.cloud_service === currCloud);


      const mapPpuToDate = aggregateFieldByDays(data, 'ppu_value')
      console.log(mapPpuToDate)
      setPpuData(mapPpuToDate)
  }
  },[data])


  return ( <>



<div>

  <HighchartsReact
    options={{
      title: {
        text: 'PPU Per Service'
      },
      // todo hard coded results. this is how to plot several lines:
      series: [{
        data: [1,2,3,4]
      },
      {
        data: [4,3,2,1]
      },
      {
        data: [2,2,2,2]
      },],
      xAxis: {
        categories: Object.keys(ppuData),
        title: {
          text: "Date"
        },
    }
  }} 
  />
</div>


</> ) }

export default GraphPerUnit;