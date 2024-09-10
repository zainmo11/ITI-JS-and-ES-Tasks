var counter = +(getCookie("count"))
setCookie("count", ++counter, 2)

if (getCookie("gender") == "male")
    document.getElementById("image").src = "img/1.jpg"
else document.getElementById("image").src = "img/2.jpg"

var color = getCookie("color").toLowerCase()
document.getElementById("h").innerHTML = "Welcome </h3><h3 style='color:" + color +
    ";'>" + getCookie("name") + "</h3><h3> you Have visited this site </h3><h3 style='color:" + color +
    ";'>"+ counter  +"</h3><h3> times :)"
