document.addEventListener("DOMContentLoaded", () => {

//date now
let $orderDate = document.querySelector('#date');
let date = new Date();
let curentDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
$orderDate.innerHTML = curentDate;





});