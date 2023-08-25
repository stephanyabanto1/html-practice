const button = document.getElementById("fs-button")
button.addEventListener("click", function() {
var
      el = document.documentElement
    , rfs =
           el.requestFullScreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
;
rfs.call(el);
});