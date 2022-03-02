history.replaceState(null, null, ' ');
function delhash(){
    timehash = setInterval(remhash, 1);
}
function remhash(){
    history.replaceState(null, null, ' ');
    clearInterval(timehash);
}

const myTimeout = setTimeout(
    function(){
        history.replaceState && history.replaceState(
        null, '', location.pathname + location.search.replace(/[\?&]?[^&]+/, '').replace(/^&/, '?')
    )}, 1000);



$(document).ready(function() {
    $("a").click(function() {
        delhash()
    });
});