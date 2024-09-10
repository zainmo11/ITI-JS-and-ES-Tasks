function register() {
    var name = document.getElementById("name").value
    setCookie("name", name, 2)
    var age = document.getElementById("age").value
    setCookie("age", age, 2)
    var gender = document.querySelector("input[name='gender']:checked").value
    setCookie("gender", gender, 2)
    var color = document.getElementById("color").value
    setCookie("color", color, 2)
    window.location.href = "page23.html"
    setCookie("count", 0, 2)
}
