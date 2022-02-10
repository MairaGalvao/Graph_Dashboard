import React from "react";
import  { useState, useEffect } from 'react';
import {aggregateFieldByDays} from '../../Utils'

function DailyAvg({data, fieldToAggregate}) {
 
    const [dailyAvg, setDailyAvg] = useState([]);


    useEffect(() => {

        if (data !== undefined) {
            const mapTimeToValue = aggregateFieldByDays(data, fieldToAggregate)
             let sumOfAllDays = 0
            Object.keys(mapTimeToValue).map((elemObj) => {
                 sumOfAllDays += mapTimeToValue[elemObj]

            } )
            const numberOfUniqueDays = Object.keys(mapTimeToValue).length
    
            setDailyAvg(sumOfAllDays / numberOfUniqueDays)
        }
    },     [data])



  return (<>

  <h3>{fieldToAggregate} daily average</h3>
  <div>{dailyAvg}</div>


  </>
  )
  
  }
  export default DailyAvg;