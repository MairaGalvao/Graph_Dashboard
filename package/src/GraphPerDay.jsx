import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import  { useState, useEffect } from 'react';
import {aggregateFieldByDays} from './Utils'

function GraphPerDay({data}){
  const [ppuData, setPpuData] = useState([]);
  
  useEffect(() => {
    if (data !== undefined) {
      const mapPpuToDate = aggregateFieldByDays(data, 'ppu_value')
      console.log(mapPpuToDate)
      setPpuData(mapPpuToDate)
  }
  },[data])


  return ( <>



<div>

  <HighchartsReact
    highcharts={Highcharts}
    options={{
      title: {
        text: 'PPU Per Day'
      },
      series: [{
        data: Object.values(ppuData),
      }],
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

export default GraphPerDay;