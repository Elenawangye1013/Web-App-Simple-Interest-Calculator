
      
 function actualizarValue(value) {
     valor = document.getElementById("range").value;
     val.innerHTML = valor;
 }     



function calculate()
{
    number = document.getElementById("number").value;
    range = document.getElementById("range").value;
    years = document.getElementById("years").value;
    years= parseInt(years);
   
 
    if(number>0){
        result.innerHTML = "If you deposit " + number + ", <br>"  +  " at an interest rate of " +range + "% . <br>" +
        " You will receive an amount of "+ (number*range*years/100) + ", <br>" + " in the year " + (years+2022) + ".";    
    }
    else{
        alert("Please enter a positive number.");
        location.reload();
    };

    

    
}
