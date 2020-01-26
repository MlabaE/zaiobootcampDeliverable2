//agree button


var button1id = document.getElementById("Btn1");
var cartbuttonid = document.getElementById("cartBtn");
var checkoutbuttonid = document.getElementById("checkoutBtn");
var price = document.getElementById("total").value;
var sumTotal=0;


function functionAgree(){
    button1id.value=parseInt(document.getElementById("num").value); //custom fit number to correspond to number in modal
    cartbuttonid.style.display = "none"; //hide add to cart buttton
    checkoutbuttonid.style.display = "block"; //display checkout button


     var color = document.getElementById("clr").innerHTML;
     var qty = button1id.value;
     var subTotal = button1id.value * price;
     sumTotal+=subTotal;

    document.querySelector("#cartSummary").innerHTML += "<tr><td>"+ color + "</td><td>" + price + "</td><td>" + qty + "</td><td>$" + subTotal + "<td><a href='#' class='btn btn-danger btn-sm'><i class='fa fa-times'></i></a></td></tr>";

    document.getElementById("cartTotal").value = sumTotal;

    document.getElementById("total").value = sumTotal;



    for( x=1 ; x<=qty ; x++) 
    {
        document.querySelector("#details").innerHTML += "<span class='dot' id='" + color + "' style='background-color:"+ color+"';></span>";
    }

}
