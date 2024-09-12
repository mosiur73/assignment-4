function calculateTax(income, expenses) {
    if (income >= expenses && income > 0 && expenses > 0) {
        return (income - expenses) * 0.2;
    } 
    else {
        return "Invalid input";
    }
}

console.log(calculateTax(5000, 1500));
