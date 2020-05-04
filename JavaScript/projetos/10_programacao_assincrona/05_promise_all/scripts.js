const p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(10);
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    resolve(12);
});

const p3 = Promise.resolve(17);

Promise.all([p1,p2,p3]).then((values) => console.log(values));