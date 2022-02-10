export function aggregateFieldByDays(data, fieldToAggregate){
    let mapTimeToValue = {}

    data.map((element)=>{     
        const myTime = new Date(element.time);
        const myValue = element[fieldToAggregate]

        if (! ( myTime in mapTimeToValue ) ){
            mapTimeToValue[myTime] = myValue
          }
        else{
            mapTimeToValue[myTime] += myValue
        }
                    
    })
    return mapTimeToValue
}


