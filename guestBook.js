//Step 1: The Rate Page
var checkIn = document.getElementsByClassName("search-bar-container_checkIn");
var checkIndate = checkIn[0].lastChild.innerText;
console.log({checkIn});
console.log({checkIndate});

var checkOut = document.getElementsByClassName("search-bar-container_checkOut");
var checkOutdate = checkOut[0].childNodes[1].innerText;

console.log({checkOut});
console.log({checkOutdate});

//Step 2: Guest Information Page
var guest = document.getElementsByClassName("reservation-cart-container_summary");
var numberOfAdults  = guest[0].lastChild.innerText;
console.log({guest});
console.log({numberOfAdults});

var total = document.getElementsByClassName("reservation-cart-container_price");
var subTotal = total[0].lastChild.innerText;
console.log({total});
console.log({subTotal});
var totalTax = document.getElementsByClassName("price-summary_price");
var totalWithTaxes = totalTax[0].lastChild.innerText;
console.log({totalTax});
console.log({totalWithTaxes});

var address = document.getElementsByClassName("guest-info_emailAddressFieldGroup");
var email = address[0].childNodes[0].inputMode
console.log({address});
console.log({email});

var fName = document.getElementsByClassName("guest-info_firstNameField");
var firstName = fName[0].childNodes[0].inputMode
console.log({fName});
console.log({firstName});

var lName = document.getElementsByClassName("guest-info_lastNameField");
var lastName = lName[0].childNodes[0].inputMode
console.log({lName});
console.log({lastName});




