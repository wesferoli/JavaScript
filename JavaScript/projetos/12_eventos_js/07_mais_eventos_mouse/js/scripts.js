let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function() {
    console.log("Apertou o botão");
});

btn1.addEventListener("mouseup", function() {
    console.log("Soltou o botão");
});

btn2.addEventListener("dblclick", function() {
    console.log("Clique duplo");
});

// Botão direito

btn2.addEventListener("contextmenu", function(e) {
    
    e.preventDefault(); // Remove o menu (contextMenu) que aparece com o clique direito
    console.log("Botão direito");

})