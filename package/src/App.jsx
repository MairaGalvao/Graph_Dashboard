
import React from 'react';
import { fetchData } from './fetchData';
import  { useState, useEffect } from 'react';
import GraphPerDay from './GraphPerDay';
import GraphPerUnit from './GraphPerUnit'
import Filter from './Components/Filters/Filter';
import DailyAvg from './Components/Costs/DailyAvg';


function App() { 
const [filteredData, setFilteredData] = useState() 
const [entireData, setEntireData] = useState() 



function onRegionFilter(e){
  const myRegionPicked = e.target.value
  console.log('region has been picked')
    fetchData({ regions: [ myRegionPicked]})
    .then((myRegionPicked) => {
      setFilteredData(myRegionPicked)

    }
    )

}
function onServiceFilter(e){
  const myServicePicked = e.target.value
  console.log('region has been picked')
    fetchData({ services: [ myServicePicked]})
    .then((myServicePicked) => {
      setFilteredData(myServicePicked)

    }
    )
}

 
  useEffect(()  => {
    fetchData().then(
      (res) => {
        setFilteredData(res)
        setEntireData(res)
    }) 
  },[]);

  return (
    <>
    <Filter data={entireData} onFilter={onRegionFilter}  fieldToFilterBy={'region'} />
    <Filter data={entireData} onFilter={onServiceFilter} fieldToFilterBy={'cloud_service'}/>

    <GraphPerDay data={filteredData}/>
    
    <DailyAvg data={filteredData} fieldToAggregate={'total_kpi'}/>
    <DailyAvg data={filteredData} fieldToAggregate={'total_cost'}/>
    <GraphPerUnit data={filteredData}/>

    </>
)
}


export default App;
