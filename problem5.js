function waitingTime(waitingTimes , serialNumber) {

    if(typeof waitingTimes !== 'object'  || typeof serialNumber !== 'number'){
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

    const numver=[ 3, 5, 7, 11, 6 ]
    const serial=6
    console.log(waitingTime(numver,serial));

    
    