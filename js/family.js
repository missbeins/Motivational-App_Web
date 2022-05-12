
const btn = document.querySelector('#Next');
const btn2 = document.querySelector('#Back');

let counter = 1
const counters = document.getElementById("quote-number") 
//increment the value of targeted ID
function increment(){  
    // const element = document.getElementById("add");
   
        //fetches the json file to be use to the html
        fetch("../json/family.json")
        .then(response => response.json())
        .then(data => {
            // data.quotes.forEach((quotes) => console.log(quotes.text))         

            //generates a random number from 0 to max length of the quotes array
            var random = data.family[Math.floor(Math.random() * data.family.length)];
            // console.log(random.text, random.author)
            if (counter !== data.family.length) {
                counter++
                // counters.innerText = counter
            //add the quotes to the <q></q> and <p></p> tags
            document.querySelector("q").innerText = random.quotes
            document.querySelector("p").innerText = "- "+random.author
            }
        })
}


function decrement(){
    
    const element = document.getElementById("minus"); 
    if (counter !== 0) {
        counter--
        // counters.innerText = counter
        
        // element.style.visibility = 'hidden';
        //fetches the json file to be use to the html
        fetch("../json/family.json")
            .then(response => response.json())
            .then(data => {
                // data.quotes.forEach((quotes) => console.log(quotes.text))       
                
                //generates a random number from 0 to max length of the quotes array
    
                var random = data.family[Math.floor(Math.random() * data.family.length)];
                // console.log(random.quotes, random.author)
    
                //add the quotes to the <q></q> and <p></p> tags
                document.querySelector("q").innerText = random.quotes
                document.querySelector("p").innerText = "- "+random.author
            })
    }
   
}
btn.addEventListener('click', increment)
btn2.addEventListener('click', decrement)


