function calculateFinalScore(obj) {
    
    if(typeof obj === 'object' || obj.testScore <=50 || typeof obj.schoolGrade <= 30 || obj.isFFamily === 'boolean'){

        let=totalMark=obj.testScore + obj.schoolGrade;
       
    }else{
        return 'Invalid Input'
    }
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
        name:"Rajib",
        testScore:45,
        schoolGrade:25,
        isFFamily:'er'
          }
          const mmm='erer'
          console.log(calculateFinalScore(job));
       

          