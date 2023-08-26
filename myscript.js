
let counts1 = setInterval(updated1);
let upto1 = 0;
function updated1() {
    let count1 = document.getElementById("counter1");
    upto1=upto1+1
    count1.innerHTML = upto1;
    if (upto1 === 100) {
        clearInterval(counts1);
    }
}

let counts = setInterval(updated);
let upto = 0;
function updated() {
    let count = document.getElementById("counter");
    upto=upto+100
    count.innerHTML = upto;
    if (upto === 15000) {
        clearInterval(counts);
    }
}

