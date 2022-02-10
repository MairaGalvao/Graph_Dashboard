import React from 'react';
import  { useState, useEffect } from 'react';

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export default function Filter({data, onFilter, fieldToFilterBy}) {

    const [regionData, setRegionData] = useState([]); // options from json


    useEffect(() => {
        if (data !== undefined) {
          let myRegion = data.map((element)=>{return(element[fieldToFilterBy])})
          var unique = myRegion.filter(onlyUnique);

          setRegionData(unique)
   
   
   
   
   
        }
      },     [data])





      return(
          <>

<div> 
    <h5>{fieldToFilterBy}</h5>

   <select onChange ={ onFilter} >
    {Object.keys(regionData).map(index => <option key={index} value={regionData[index]}   >{regionData[index]} </option>)}
</select> 


</div> 



   </>

      )


}

// export default SmartFilter;