var MAINAPP = (function (app) {
    var jsonObj = {};

    var loadJSON = function (path) {
        return new Promise((resolve, reject) => {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType('application/json');
            xobj.open('GET', path);
            xobj.onreadystatechange = async function () {
                if (xobj.readyState === 4) {
                    app.jsonObj = JSON.parse(xobj.responseText);
                    resolve()
                }
            };
            xobj.send(null);
        })

    };

    app.jsonObj = jsonObj;
    app.loadJSON = loadJSON;
    return app;
})(MAINAPP || {});

MAINAPP.loadJSON('data.json').then(() => {
    document.getElementsByTagName('h2')[0].innerHTML = MAINAPP.jsonObj.heading;
    MAINAPP.jsonObj.bullets.forEach((bullet, index) => {
        document.getElementById('b' + (index + 1)).innerHTML = bullet;
    });
});
