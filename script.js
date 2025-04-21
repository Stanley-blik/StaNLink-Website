document.getElementById("foot01").innerHTML =
"<img src='images/stanlink.jpg' style='width:50px; height:50px; margin-top:20px; border-radius:25px;'><p>&copy;  " + new Date().getFullYear() + " StaNLink Dev Team. All rights reserved.</p>";

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='techhub.html'>Tech Hub</a></li>" +
"<li><a href='academy.html'>Academy</a></li>" +
"<li><a href='shop.html'>Mega Shop</a></li>" +
"<li><a href='contact.html'>Contact</a><li>" +
"<li><a href='services.html'>Services</a></li>" +
"<li><a href='tools.html'>Tools</a></li>" +
"<li><a href='about.html'>About</a></li>" +
"</ul>"; 

function success() {
    var x = window.alert("Successfully Purchased!");
    return x;
}
