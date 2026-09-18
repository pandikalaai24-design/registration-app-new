function register() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let workshop = document.getElementById("workshop").value;

    if (name === "" || phone === "" || email === "" || workshop === "") {
        document.getElementById("message").innerText = "Please fill all fields!";
        return;
    }

    document.getElementById("message").innerText =
        "Registration Successful! 🎉 Thank you " + name;
         alert("Registration Successful 🎉");
}
