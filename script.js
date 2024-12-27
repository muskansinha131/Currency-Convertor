// const BASE_URL =
// "https://latest.currency-api.pages.dev/v1/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select") ;
// const btn = document.querySelector("form button");

// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");
// let background = document.querySelector(".background");

// function bc(selectedTheme) {
//     if (selectedTheme === "lite") {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//     } else if (selectedTheme === "dark") {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white"; 
//     }
// }

// async function theme() {
//     let selectedTheme = background.value; 
//     await bc(selectedTheme); 
// }

// // for (let code in countryList)
// // {
// //     console.log(code, countryList[code]);
// // }



// for(let select of dropdowns)
// {
//     for(let code in countryList)
//     {
//         let newOptions = document.createElement("option");
//         newOptions.innerText = code;
//         newOptions.value = code;
//         if(select.name === "from" && code === "USD")
//         {
//             newOptions.selected = "selected";
//         }
//         else if(select.name === "to" && code === "INR")
//         {
//                 newOptions.selected = "selected";
//         }
//         select.append(newOptions);

//         select.addEventListener("change", (evt) =>{
//             updateFlag(evt.target);
//         })
//     }
// }

// const updateFlag = (element) => {
//    let code = element.value;
//    let countryCode = countryList[code];
//    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//    let img = element.parentElement.querySelector("img");
//    img.src = newSrc ;
// };


// btn.addEventListener("click", async (evt)=> {
//     evt.preventDefault();
//     let amount = document.querySelector(".amount input");
//     let amtVal = amount.value;
//     if(amtVal === "" || amtVal < 1)
//     {
//         amtVal = 1;
//         amount.value = "1";
//     }
 
//     const URL1 = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
//     // const URL_T = ;
//     // console.log(URL1.value);
//     const URL2 = `${BASE_URL}/${toCurr.value.toLowerCase()}.json`;


// //     console.log(URL1,URL2);
//   let response1 = await fetch(URL1);
//   let response2 = await fetch(URL2);
//     console.log(response1,response2);
//   let data = await response1.json();
// // let v = `${fromCurr.value.toLowerCase()}`;
//   let data2 = await response2.json();
 
//   let rate = data2[toCurr.value.toLowerCase()];

//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

// });

// // btn.addEventListener("click", (evt) => {
// //     evt.preventDefault();
// //     updateExchangeRate();
// //   });
  
// //   window.addEventListener("load", () => {
// //     updateExchangeRate();
// //   });

