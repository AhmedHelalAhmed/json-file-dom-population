var MAINAPP = (function (app) {
    var loadJSON = function (path) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = async function () {
            if (xobj.readyState === 4) {
                populateDOM(JSON.parse(xobj.responseText));
            }
        };
        xobj.send(null);
    };

    var populateDOM = function (data) {
        document.getElementsByTagName('h2')[0].innerHTML = data.heading;
        data.bullets.forEach((bullet, index) => {
            document.getElementById('b' + (index + 1)).innerHTML = bullet;
        });
    };

    loadJSON('data.json');
    return app;
})(MAINAPP || {});