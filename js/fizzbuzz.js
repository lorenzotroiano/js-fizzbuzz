// regole generali





// creare elenco di numeri da 1 a 100

// dare una "variabile" di nome contenitore e selezionarlo dal documento (prendere quindi classe contenitore all'interno del div)
const contenitore = document.querySelector("div.contenitore");




// creare un ciclo che fa da numero 1 a 100 compreso
for (let i = 1; i <= 100; i++) {


    // creare "variabile" di nome contenuto che stamperà successivamente il testo corrispettivo, inserendolo direttamente dentro il tag div (con uno span)
    const contenuto = `<span>${i}</span>`
    
    // inserire all'interno del contenitore il contenuto (+ e = per far entrare tutti i numeri)
    contenitore.innerHTML += contenuto;
    

    console.log(i);
}



// i multipli di 3 stampi “Fizz” al posto del numero

// i multipli di 5 stampi “Buzz”.

// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



