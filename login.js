let btnLogin = document.getElementById("btn-login");

let users = [
    {
        id: 1,
        name: "Admin Adminyan",
        email: "admin@test.com",
        password: "admin123!",
        role: "admin"
    },
    {
        id: 2,
        name: "User Useryan",
        email: "user@test.com",
        password: "user123!",
        role: "user"
    }
];

btnLogin.addEventListener("click", () => {
    let txtEmail = document.getElementById("txt-email");
    let txtPassword = document.getElementById("txt-password");

    let user = users.find(u => u.email == txtEmail.value && u.password == txtPassword.value);

    if (user) {
        localStorage["session"] = JSON.stringify({ user: user });

        redirectUser(user);
    }
    else {
        alert("Invalid user.");
    }
});

function redirectUser(user) {
    if (user.role == "admin") {
        location.href = "admin.html";
    }
    else if (user.role == "user") {
        location.href = "user.html";
    }
    else {
        alert("Invalid role.");
    }
}

let session = localStorage["session"];

session = session ? JSON.parse(session) : {};

if (session.user) {
    redirectUser(session.user);
}
