// regole generali
let i, f, b;




// dare una "variabile" di nome contenitore e selezionarlo dal documento (che ha id contenitore)
const contenitore = document.getElementById("contenitore");



f = "Fizz";
b = "Buzz";
c = "fizzbuzz"



// creare un ciclo che fa da numero 1 a 100 compreso
for   ( i = 1; i <= 100; i++) {
        
    // crea un nuovo elemento (span)
    const contenuto = document.createElement('span');


    // serve x creare una nuova classe e aggiungerla
    // contenuto.classList.add('green');


    //aggiunge classe i (di for) dentro al contenuto che sarebbe lo span
    contenuto.append(i);

    // aggiunge il contenuto (ovvero span) dentro il contenitore (div)
    contenitore.append(contenuto);


  
    // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
    if ( i % 3 === 0 && i % 5 === 0) {
        
        output = c;
    
        // serve x cambiare colore
        contenuto.style.backgroundColor = "#f0466f";
     
      
    }

    // i multipli di 5 stampi “Buzz”.
    else if ( i % 5 === 0) {

        output = b;
        contenuto.style.backgroundColor = "#ffd166";
        
        
        
    }

    // i multimi di 3 stampi Fizz
     else if ( i % 3 === 0) {

        output = f;

        contenuto.style.backgroundColor = "#0cd6a1";
      
       
    }


    else {

        output = i;
      
       
    }

    contenuto.innerHTML = output;  
    
}












