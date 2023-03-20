// var usersAPI = "https://jsonplaceholder.typicode.com/users";
// var usersAPI = "http://training.mumesoft.com/api/users";
// function createUsers(data, callback) {
//     var options = {
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify(data),
//     };
//     fetch(usersAPI, options)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(callback);}
// createUsers();

// (async () => {
//     const rawResponse = await fetch("http://training.mumesoft.com/api/login", {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ a: 1, b: "Textual content" }),
//     });
//     const content = await rawResponse.json();

//     console.log(content);
// })();

fetch("http://training.mumesoft.com/api/login", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ a: 7, str: "Some string: &=&" }),
})
    .then((res) => res.json())
    .then((res) => console.log(res));
