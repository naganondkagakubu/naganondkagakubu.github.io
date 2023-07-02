let numin = document.getElementById("numin");
let set_buttun = document.getElementById("set");
let start_buttun = document.getElementById("start");
let numout = document.getElementById("numout");
let reset_buttun = document.getElementById("reset");
let back_buttun = document.getElementById("back");
let numback = document.getElementById("numback");

let n = 0;
let m = 0;
let yamafuda = [];

function Ramdom(M){
    if(yamafuda.length < M){
        while(true){
            n  = Math.floor(1 + Math.random() * M);
            if(!yamafuda.includes(n)){
                yamafuda.push(n);
                break;
            }
        }
        return n;
    }
    else{
        return "全部引きました";
    }
}

function Back(n){
    let idx = yamafuda.indexOf(n);
    if(idx >= 0){
        yamafuda.splice(idx, 1);
    }
}

set_buttun.onclick = function(){m = numin.value};
start_buttun.onclick = function(){numout.value = Ramdom(m)};
reset_buttun.onclick = function(){yamafuda.length = 0;};
back_buttun.onclick = function(){Back(parseInt(numback.value))};

