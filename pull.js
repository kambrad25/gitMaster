const { log } = console;
let n = ["Kam", "Ney", "Nas"];

let key = "a";

let f = n.filter((u, idx) => idx > 0 && idx < n.length).sort((a, b) => a.localeCompare(b));


let num = [1,2,3];


num = num.splice((num.length * 0 + 1), ).reduce((p, n) => p += n,[0])

num = num.split("").join(" ").split(" ");


num[num.length] = 5;

let na = [];
num.map((u) => {
  na.push(parseInt(u));
})

let total = na.reduce((p, c) => p += c, 0);

total = total.toString().split("");

total = total.find((u, idx) => u == "1");


log (n[parseInt(total)])
