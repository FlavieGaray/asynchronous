function sleep(ms) {
    const startTime = new Date();
    while (new Date() - startTime < ms) ;
    console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    console.log('button clicked');
});

/*sleep関数が呼ばれるとブラウザのメインスレッﾄﾞが3秒間sleepよって占有されている
実行中は画面の更新・入力が待たされる
　sleep関数とそれに伴うレンダリングが終了した時点で、メインスレッドが空く状態になるのでクリックイベントを受け付けられる*/

// sleep(3000);


/*setTimeoutに渡したコールバック関数が非同期処理として、メインスレッドから切り離される。
　この非同期処理は2秒間たった後に実行されるので、この間はメインスレッドが空くので、画面の更新。入力などが可能
そのためボタンをクリックした場合にはコンソールに「button clicked」が表示される。
そして2秒たった後に、sleepの実行が始まるので、ここから3秒間の間またメインスレッドがsleep関数によって占有される*/

// 非同期処理は一時的にメインスレッドから処理が切り離される

setTimeout(function () {
    sleep(3000);
}, 2000);
