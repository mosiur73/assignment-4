function calculateFinalScore(obj) {
    
    if(typeof obj === 'object' && obj.testScore <=50 && obj.schoolGrade <= 30 && obj.isFFamily === 'boolean'){

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
        name:'rakib',
        testScore:50,
        schoolGrade:30,
        isFFamily:true
          }
          console.log(calculateFinalScore(job));
       