let usernameEl = document.getElementById("username-el")
let passwordEl = document.getElementById("password-el")
let submitBtn = document.getElementById("submit-btn")

let userValue = ""
let passValue = ""

submitBtn.addEventListener("click" , function() {
    userValue = usernameEl.value
    passValue = passwordEl.value
    if (userValue === "famannat@gmail.com" && passValue === "Zulkarnain@334456") {
        alert("Login succesful")
    }
    else{
        alert("Please try again😟")
    }
    
})
