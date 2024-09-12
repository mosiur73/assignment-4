
function calculateTax(income, expenses) {
   

    if(0>=income ||  0>=expenses){
        return "Invalid Input"
    }
    
    if(income < expenses){
        return "Invalid Input"
    }
    const difference=income - expenses;
    const tax=difference * .20;
    return tax
   

    }
    console.log(calculateTax(10000, 3000 ));
    