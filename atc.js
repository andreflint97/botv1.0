var url = window.location.href;
var i;

var category = "accessories"
var item_name= "Libertad"



function pickCategory() {
    chrome.storage.sync.get("category",function(data){
        var redirect = "https://www.supremenewyork.com/shop/all/jackets"
        var replace = redirect.replace("jackets", category);
        chrome.runtime.sendMessage({redirect:replace}) ;
    })
}

function pickItem(){
    chrome.storage.sync.get("item_name", function(data){
        var items = document.getElementsByClassName("name-link");

        for (i = 0; i < items.length; i++) {
            if((items[i].innerHTML).includes(item_name)){
                chrome.runtime.sendMessage({redirect: items[i].href});
                break;
            }
        }
    });
}

if(url ==  "https://www.supremenewyork.com/shop/all") {
    pickCategory();
}
else if(url ==  "https://www.supremenewyork.com/shop/all/accesories") {
    pickItem();
}
else if(url == "https://www.supremenewyork.com/shop/all/accessories") { 
    document.getElementsByClassName("button checkout")[0].click() 
}

else if( url == "https://www.supremenewyork.com/shop/checkout") {
document.getElementById("order_billing_name").value="Andre Flint"
document.getElementById("order_email").value="andreflint97@yahoo.com"
document.getElementById("order_tel").value="440-752-6066"
document.getElementById("bo").value="5498 schueller blvd"
document.getElementById("order_billing_zip").value="44054"
document.getElementById("order_billing_city").value="sheffield village"
document.getElementById("order_billing_state").value="OH"
document.getElementById("nnaerb").value="44444444"
document.getElementsById("credit_card_month").value="7"
document.getElementById("credit_card_year").value="2021"
document.getElementById("orcer").value="666"

document.getElementsByClassName("iCheck-helper")[1].click();
document.getElementsByName("commit")[0].click();
}