function writeCookie (name, val, expires) {
    var date = new Date;
    date.setDate(date.getDate() + expires);
    document.cookie = name + "=" + val + "; path=/; expires=" + date.toUTCString();
}

function readCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function foo() {
    if (mintnumber < 532) {
        var rnd = Math.floor(Math.random() * (3)) + 1;
        mintnumber = mintnumber + rnd;
        writeCookie('minted', mintnumber, 40);
        document.getElementById("mintnumber").innerHTML = mintnumber;
    }
    if (mintnumber >= 532) clearInterval(interval);
}

var mintnumber = +(readCookie('minted'));
if (mintnumber > 0) {
    writeCookie('status', 'yes', 40);
    var mintnumber = +(readCookie('minted'));
    document.getElementById("mintnumber").innerHTML = mintnumber;
} else {
    var mintnumber = 231;
    writeCookie('minted', 231, 40);
};
var interval = setInterval(foo, 900)
