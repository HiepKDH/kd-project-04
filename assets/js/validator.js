const form = {
    username: document.querySelector("#signin-username"),
    password: document.querySelector("#password"),
    submit: document.querySelector("#signin-btn-submit"),
    // messages: document.getElementById("form-messages"),
};
let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const login = "http://training.mumesoft.com/api/login";

    fetch(login, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: form.username.value,
            password: form.password.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // code here //
            if (data.error) {
                alert("Error Password or Username");
            } else {
                window.open("index.html");
            }
        })
        .catch((err) => {
            console.log(err);
        });
});
