const parent = document.getElementById("parent");

parent.addEventListener("submit", (event)=> {
    event.preventDefault();
    const income = document.getElementById("income").value;
    const tax = calculateTax(income);
    document.getElementById("total-tax").textContent = `Total Tax:  Rs. ${tax.toFixed(2)}`;
});

function calculateTax(income) {
    let tax = 0;
    if (income <= 120000) {
        return  0;
    } else  if( income<=160000){
        return (income - 120000) * 0.15;
    }  else  if( income<=200000){
        return (income - 160000) * 0.20+60000;
    } else  if( income<=240000){
        return (income - 200000) * 0.25+60000+80000;
    }else{
        return (income - 240000) * 0.30+60000+80000+100000;
    }
}
