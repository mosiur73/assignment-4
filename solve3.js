function checkDigitsInName(name) {

    if(typeof name !== 'string'){
        return 'Invalid Input'
    }

    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) ) {
          return true;
        }
      }
      return false;
   
    
    }
    const name=["Raj"] 
    console.log(checkDigitsInName(name));
    
