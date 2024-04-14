let billamount = document.getElementById("billamount");
let tippercentage = document.getElementById("tippercentage");
let tipamount = document.getElementById("tipamount");
let total = document.getElementById("total");
let alertp = document.getElementById("alertp");
let cal = document.getElementById("calculate");
console.log(billamount.value);
console.log(tippercentage.value);

function calculate(){
    if((billamount.value && tippercentage.value) === ""){
        alertp.textContent = "Please Enter a valid Input.";
        alertp.style.color = "red";
    } else {
        let billa = parseFloat(billamount.value);
        let tipp = parseFloat(tippercentage.value);
        let tipa = (tipp*billa)/100;
        tipamount.textContent = tipa;
        let totalbill = billa + tipa;
        total.textContent = totalbill;
        cal.style.background = "#118f92";
    }

}

function change(){
    cal.style.background = "#264999";
    alertp.textContent = "";
}