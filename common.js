let linkUser = document.getElementById("link-user");
let linkLogout = document.getElementById("link-logout");

linkLogout.addEventListener("click", () => {
    delete localStorage["session"];

    location.href = "login.html";
});

linkUser.innerText = session.user.name;
