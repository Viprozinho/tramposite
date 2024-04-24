function handleRegister(e) {
    e.preventDefault()
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    let user = {
        username : username,
        password : password
    }
    sessionStorage.setItem("user", JSON.stringify(user))
    console.log(sessionStorage.getItem("user"))
}

function handleLogin(e) {
    e.preventDefault()
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    if (sessionStorage.getItem("user").includes(username) &&
    sessionStorage.getItem("user").includes(password)) {
        alert("Authenticated as: " + username)
    }
    console.log(sessionStorage.getItem("user"))
}