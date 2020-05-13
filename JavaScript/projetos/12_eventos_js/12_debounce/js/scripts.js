let timeout;

window.addEventListener("mousemove", function(e) {
    
    clearTimeout(timeout);

    timeout = setTimeout(function() {
        console.log(e.x);
    }, 500);

});

// Utilizado para eventos que atualizam muitas vezes
// Diminui a quantidade de atualizaçoes, preservando memória