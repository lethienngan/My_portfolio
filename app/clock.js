
function showTime() {
    var dataObject = new Date();

    var h = dataObject.getHours();
    var min = dataObject.getMinutes();
    var sec = dataObject.getSeconds();

    h = h.toString();
    min = min.toString();
    sec = sec.toString();
 
    h = h.padStart(2,'0');
    min = min.padStart(2,'0');
    sec = sec.padStart(2,'0');

    console.log(h);
    console.log(min);
    console.log(sec);

    var x = document.getElementById('show-time');
    x.innerHTML = h + ':' + min + ':' + sec;
}
showTime();
setInterval(showTime, 1000);

