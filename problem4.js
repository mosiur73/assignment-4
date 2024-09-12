
function calculateFinalScore(obj) {

    if(typeof obj === 'object'){
    return 'Invalid Input'
}


if(obj.testScore <=50 && obj.schoolGrade <=30){
    return 'Idddnvalid Input'
}


let totalMark=obj.testScore + obj.schoolGrade;
 

if(obj.isFFamily){
    totalMark=totalMark + (totalMark * 0.2)
    
}


if(totalMark >= 80){
   return true
}
else{
    return false
}

}


const job={
    name:'rakib',
    testScore:45,
    schoolGrade:25,
    isFFamily:true
      }
   
      console.log(calculateFinalScore(job));
      
   
