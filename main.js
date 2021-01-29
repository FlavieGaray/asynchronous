function sleep(val) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(val++);
            resolve(val);
        }, 1000);
    });
}

/* 無名関数で記述
sleep(0).then(function(val) {
    return sleep(val);
}).then(function(val) {
    return sleep(val);
}).then(function(val) {
    return sleep(val);
*/


// アロー関数で記述
sleep(0)
    .then(val => sleep(val))
    .then(val => sleep(val))
    .then(val => sleep(val))
    .then(val => sleep(val))
    .then(val => sleep(val));
