function waitingTime(waitingTimes , serialNumber) {

    if( !Array.isArray(waitingTimes)  || typeof serialNumber !== 'number'){
        return 'Invalid Input'
    }
    else if(serialNumber <= waitingTimes.length){
      return 'Invalid Input'
    }

     let sum=0;
    for(let i=0; i<waitingTimes.length; i++){
        sum=sum + waitingTimes[i]
          const avarage=sum / waitingTimes.length;
         const serial=serialNumber-1;
         const remainSerial=serial - waitingTimes.length;
          result=Math.round(avarage) *remainSerial
   
    }
    return result;

    }

    const number="[4,6]"
    const serial=10
    console.log(waitingTime(number,serial));

    
    