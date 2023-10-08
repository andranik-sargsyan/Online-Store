let session = localStorage["session"];

session = session ? JSON.parse(session) : {};

localStorage["session"] = JSON.stringify(session);

if (!session.user) {
    location.href = "login.html";
}

if (location.pathname.includes("admin.html") && session.user.role != "admin") {
    location.href = "login.html";
}