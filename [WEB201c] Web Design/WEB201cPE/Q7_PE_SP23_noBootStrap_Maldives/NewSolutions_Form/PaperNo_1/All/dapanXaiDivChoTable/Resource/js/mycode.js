var option = document.getElementById("tour");

function tourChoose(){
    var price = option.options[option.selectedIndex].value;
    document.getElementById("price").innerHTML = price + "$/Person";
}

function CalTotal(){
    var price = option.options[option.selectedIndex].value;
    var number = document.getElementById("number").value;
    var total = price * number;
    document.getElementById("total").innerHTML = "Total amount: " + total + "$";
}