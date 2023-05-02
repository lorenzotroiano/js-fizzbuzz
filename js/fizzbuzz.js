// regole generali
const contenitore = document.querySelector("div.contenitore");




// creare elenco di numeri da 1 a 100



for (let i = 1; i <= 100; i++) {


    const contenuto = `<span>${i}</span>`
    contenitore.innerHTML += contenuto;
    

    console.log(i);
}



// i multipli di 3 stampi “Fizz” al posto del numero

// i multipli di 5 stampi “Buzz”.

// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



