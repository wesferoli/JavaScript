function contato(tel, email){
    if(tel === undefined){
        console.log(`Entraremos em contato por ${email}`);
    } else if(email === undefined){
        console.log(`Entraremos em contato por ${tel}`);
    } else{
        console.log("Entraremos em contato em breve.");
    }
}

contato("wesleyfer.oli97@gmail.com");
contato(11999857971, "wesleyfer.oli97@gmail.com");
contato(11999857971);