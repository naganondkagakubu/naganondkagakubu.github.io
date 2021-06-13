let numin = document.getElementById("numin");
let set_buttun = document.getElementById("set");
let start_buttun = document.getElementById("start");
let numout = document.getElementById("numout");
let reset_buttun = document.getElementById("reset");
let back_buttun = document.getElementById("back");
let numback = document.getElementById("numback");

let n = 0;
let m = 0;
let ramdoms = [];

function Ramdom(M){
    if(ramdoms.length < M){
        while(true){
            n  = Math.floor(1 + Math.random() * M);
            if(!ramdoms.includes(n)){
                ramdoms.push(n);
                break;
            }
        }
        return n;
    }
    else{
        return "全部引きました";
    }
}

function Reset(n){
    let idx = ramdoms.indexOf(n);
    if(idx >= 0){
        ramdoms.splice(idx, 1);
    }
}

set_buttun.onclick = function(){m = numin.value};
start_buttun.onclick = function(){numout.value = Ramdom(m)};
reset_buttun.onclick = function(){ramdoms.length = 0;};
back_buttun.onclick = function(){Reset(parseInt(numback.value))};

