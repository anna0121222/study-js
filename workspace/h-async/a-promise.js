const promise = new Promise((resolve, reject) => {
    let check = true;

    if (check) {
        resolve(JSON.stringify({ name: "한동석", email: "test@gmail.com" }));
    } else {
        reject("실패!");
    }
});

promise
    .then((user) => {
        console.log(JSON.parse(user).name);
    })
    .catch((err) => {
        console.log(err);
    });
