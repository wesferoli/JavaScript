// window.addEventListener("load", function() {
//     alert("Aceite os termos de uso");
// });

window.addEventListener("beforeunload", function(e) {
    event.returnValue = null;
});