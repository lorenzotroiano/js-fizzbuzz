// regole generali
let i, f, b;




// creare elenco di numeri da 1 a 100

// dare una "variabile" di nome contenitore e selezionarlo dal documento (prendere quindi classe contenitore all'interno del div)
const contenitore = document.querySelector("div.contenitore");



f = "Fizz";
b = "Buzz";
c = "fizzbuzz"



// creare un ciclo che fa da numero 1 a 100 compreso
for   ( i = 1; i <= 100; i++) {
        
    
    


     if ( i % 3 === 0 && i % 5 === 0) {
        
        
        contenuto = `<span class="${i}">${c}</span>`
        // contenitore.innerHTML += contenuto;
      
    }

    else if ( i % 5 === 0) {
        contenuto = `<span class="${i}">${b}</span>`
        // contenitore.innerHTML += contenuto;
    }

     else if ( i % 3 === 0) {
        contenuto = `<span class="${i}">${f}</span>`
        // contenitore.innerHTML += contenuto;
    }


    else {
        contenuto = `<span class="${i}">${i}</span>`
        // contenitore.innerHTML += contenuto;
    }

    contenitore.innerHTML += contenuto;


    // creare "variabile" di nome contenuto che stamperà successivamente il testo corrispettivo, inserendolo direttamente dentro il tag div (con uno span)
    
    
    // inserire all'interno del contenitore il contenuto (+ e = per far entrare tutti i numeri)
   
    

    
     
    
}



// i multimi di 3 stampi Fizz



// i multipli di 5 stampi “Buzz”.

// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



