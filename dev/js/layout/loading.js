var $loading = $('.loadpage')
var $progress = $('#progress')
var prg = 0
var timer = 0
var now = new Date()
var timeout = 5000
var next = prg

add([30, 50], [1, 3], 100) //第一階段
window.setTimeout(() => { //模擬圖a載入
    add(20, [1, 3], 200);
    console.log('A');
}, 1000)
window.setTimeout(() => { //模擬圖b載入
    add(30, [1, 3], 200);
    console.log('B');
}, 2000)
window.setTimeout(() => { //模擬圖c載入
    add(25, [1, 3], 200);
    console.log('C');
}, 2500)
window.onload = () => {
    complete()
}
if (now - loadingStartTime > timeout) {
    complete()
} else {
    window.setTimeout(() => {
        complete()
    }, timeout - (now - loadingStartTime))
}
function complete () {
    add(100, [1, 5], 10, () => {
        window.setTimeout(() => {
            $loading.fadeOut(500)
        }, 1000)
    })
}
function add (dist, speed, delay, callback) {
    var _dist = random(dist);
    if (next + _dist > 100) { //對超出部分裁剪對齊
        next = 100;
    } else {
        next += _dist;
    }
    progress(next, speed, delay, callback);
};
function progress (dist, speed, delay, callback) {
    var _delay = random(delay)
    var _speed = random(speed)
    window.clearTimeout(timer)
    timer = window.setTimeout(() => {
        if (prg + _speed >= dist) {
            window.clearTimeout(timer)
            prg = dist
            callback && callback()
        } else {
            prg += _speed
            progress (dist, speed, delay, callback)
        }
            $progress.html(parseInt(prg) + '%')
            console.log(prg)
    }, _delay)
}
function random (n) {
    if (typeof n === 'object') {
        var times = n[1] - n[0]
        var offset = n[0]
        return Math.random() * times + offset
    } else {
        return n
    }
}