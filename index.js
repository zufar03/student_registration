function kiritish() {
    let ism = document.getElementById("firstname")
    if (ism.value == "") {
        ism.style.borderColor = "red"
    }else{
        ism.style.borderColor = "green"
    }
    let familya = document.getElementById("listname")
    if (familya.value == "") {
        familya.style.borderColor = "red"
    }else{
        familya.style.borderColor = "green"
    }
    let email = document.getElementById("email")
    if (email.value == "") {
        email.style.borderColor = "red"
    }else{
        email.style.borderColor = "green"
    }

    let city = document.getElementById("city")
    if (city.value == "Toshkent" || city.value == "Samarqand" || city.value == "Navoiy") {
        city.style.borderColor = "green"
    }else{
        city.style.borderColor = "red"
    }
    
}