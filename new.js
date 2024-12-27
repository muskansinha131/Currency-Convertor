const BASE_URL =
"https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select") ;
const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
let background = document.querySelector(".background");

function bc(selectedTheme) {
    if (selectedTheme === "lite") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else if (selectedTheme === "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"; 
    }
}

async function theme() {
    let selectedTheme = background.value; 
    await bc(selectedTheme); 
}

// for (let code in countryList)
// {
//     console.log(code, countryList[code]);
// }



for(let select of dropdowns)
{
    for(let code in countryList)
    {
        let newOptions = document.createElement("option");
        newOptions.innerText = code;
        newOptions.value = code;
        if(select.name === "from" && code === "USD")
        {
            newOptions.selected = "selected";
        }
        else if(select.name === "to" && code === "INR")
        {
                newOptions.selected = "selected";
        }
        select.append(newOptions);

        select.addEventListener("change", (evt) =>{
            updateFlag(evt.target);
        })
    }
}

const updateFlag = (element) => {
   let code = element.value;
   let countryCode = countryList[code];
   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
   let img = element.parentElement.querySelector("img");
   img.src = newSrc ;
};


btn.addEventListener("click", async (evt)=> {
    evt.preventDefault();
    try {
        let amount = document.querySelector(".amount input");
        let amtVal = amount.value;
        if(amtVal === "" || amtVal < 1) {
            amtVal = 1;
            amount.value = "1";
        }
     
        // Only need to fetch one URL with the base currency
        const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
        
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }
        
        const data = await response.json();
        const rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
        
        if (!rate) {
            throw new Error('Invalid exchange rate');
        }

        const finalAmount = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = `Error: ${error.message}`;
        console.error('Currency conversion error:', error);
    }
});

// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     updateExchangeRate();
//   });
  
//   window.addEventListener("load", () => {
//     updateExchangeRate();
//   });