let session = localStorage["session"];

session = session ? JSON.parse(session) : {};

localStorage["session"] = JSON.stringify(session);

if (!session.user) {
    location.href = "login.html";
}
