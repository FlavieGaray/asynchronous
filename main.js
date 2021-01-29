new Promise(function (resolve, reject) {
    console.log('promise');
    // reject('bye');
    setTimeout(function() {
        resolve('Hello');
    }, 1000)
}).then(function (data) {
    console.log('then:' + data);
    // throw new Error();
    // 2つめのコールバックの引数にデータを渡す
    return data;
}).then(function (data) {
    console.log('then:' + data);
}).catch(function (data) {
    console.log('catch:' + data);
}).finally(function () {
    // finallyには引数を渡せない
    console.log('finally:');
});

console.log('global end');
