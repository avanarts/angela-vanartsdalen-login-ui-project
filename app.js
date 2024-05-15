function validatePassword() {
    let passwordInput = document.getElementById("password").value
    let passwordRepeat = document.getElementById("reenter-password").value
    
    if (passwordInput === passwordRepeat) {
        document.getElementById("register-btn").disabled = false
        document.getElementById("validate-password").innerHTML = ""
    } else {
    document.getElementById("register-btn").disabled = true
    document.getElementById("validate-password").innerHTML = "Passwords must match"
    }
}