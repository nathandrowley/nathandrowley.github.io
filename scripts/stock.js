


function search() {
var stock = document.getElementById("userinput").value;


fetch("https://financialmodelingprep.com/api/v3/quote/" + stock)
.then(res => res.json())
.then(data => {generateHTML(data)})

};

const generateHTML = (data) => {
    console.log(data)
//     const myStock = data;
//     const displayStock = JSON.parse(myStock);
    
//     document.getElementById("symbol").innerHTML = displayStock;

// var symbol = data.Array.symbol;

// $('.symbol').append(symbol);
}

