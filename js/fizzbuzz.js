// regole generali
let i, f, b;




// creare elenco di numeri da 1 a 100

// dare una "variabile" di nome contenitore e selezionarlo dal documento (prendere quindi classe contenitore all'interno del div)
const contenitore = document.getElementById("contenitore");



f = "Fizz";
b = "Buzz";
c = "fizzbuzz"



// creare un ciclo che fa da numero 1 a 100 compreso
for   ( i = 1; i <= 100; i++) {
        
    
    const contenuto = document.createElement('span');

    // contenuto.classList.add('green');
    contenuto.append(i);
    contenitore.append(contenuto);


  
    if ( i % 3 === 0 && i % 5 === 0) {
        
        output = c;
        // contenuto = `<span class="${i}">${c}</span>`;
        contenuto.style.backgroundColor = "#f0466f";
     
      
    }

    else if ( i % 5 === 0) {

        output = b;
        contenuto.style.backgroundColor = "#ffd166";
        // contenuto = `<span class="${i}">${b}</span>`;
        
        
    }

     else if ( i % 3 === 0) {

        output = f;

        contenuto.style.backgroundColor = "#0cd6a1";
        // contenuto = `<span class="${i}">${f}</span>`;
       
    }


    else {

        output = i;
        // contenuto = `<span class="${i}">${i}</span>`;
       
    }

    contenuto.innerHTML = output;


    // creare "variabile" di nome contenuto che stamperà successivamente il testo corrispettivo, inserendolo direttamente dentro il tag div (con uno span)
    
    
    // inserire all'interno del contenitore il contenuto (+ e = per far entrare tutti i numeri)
   
    

    
     
    
}



// i multimi di 3 stampi Fizz



// i multipli di 5 stampi “Buzz”.

// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



