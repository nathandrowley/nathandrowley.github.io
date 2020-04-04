
function search() {
var stock = document.getElementById("userinput").value;

fetch("https://financialmodelingprep.com/api/v3/quote/" + stock)
.then(res => res.json())
.then(data => {generateHTML(data)}

)}

// const newLocal = JSON.stringify(data);

const generateHTML = (data) => {
    console.log(data)
    const html = 
   `${data}`
  
    // <div class="name">${data.name}</div>
    // <div class="currency">${data.currency}</div>
    // <div class="stockExchange">${data.stockExchange}</div>
    // <div class="exchangeShortName">${data.exchangeShortName}</div>
    
   
const stockCon = document.querySelector('.stockContainer')
stockCon.innerHTML = html
console.log(html)
}

var obj = {prop1: 'prop1Value', prop2: 'prop2Value', child: {childProp1: 'childProp1Value'}}
    console.log(obj)

