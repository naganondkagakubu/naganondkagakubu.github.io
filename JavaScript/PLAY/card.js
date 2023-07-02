//変数宣言
let numin = document.getElementById("numin");
let set_buttun = document.getElementById("set");
let draw_r_buttun = document.getElementById("draw_r");
let numout = document.getElementById("numout");
let reset_buttun = document.getElementById("reset");
let back_U_f = document.getElementById("back_U");
let back_R_f = document.getElementById("back_R");
let back_D_f = document.getElementById("back_D");
let back_buttun = document.getElementById("back");
let numback = document.getElementById("numback");
let numdraw = document.getElementById("numdraw");
let draw_a_buttun = document.getElementById("draw_a");

let n = 0;
let m = 0;
let flag = 0;
let yamafuda = [];

//関数の定義
//数字か判定する関数
function isNumber(numVal){
    let pattern = /^[-]?([1-9]\d*|0)(\.\d+)?$/;
    return pattern.test(numVal);
};

//山札のセットアップ
function Newshuffle(M){
    yamafuda = [];
    for(let i = 1;i <= M; i++){
        while(true){
            n  = Math.floor(1 + Math.random() * M);
            if(!yamafuda.includes(n)){
                yamafuda.push(n);
                break;
            };
        };
    };
    try{
        localStorage.setItem("yama_H", JSON.stringify(yamafuda));
    }
    catch(e){
        console.log(e);
    };
    console.log(yamafuda);
};

//ランダムにカードを引く関数
function Draw_r(){
    if(yamafuda.length > 0){
        let a = yamafuda[0];
        yamafuda.shift();
        if(localStorage.getItem("yama_H") !== null){
            localStorage.removeItem("yama_H");
            try{
                localStorage.setItem("yama_H", JSON.stringify(yamafuda));
            }
            catch(e){
                console.log(e);
            };
        }
        return a;
    }
    else{
        return "全部引きました";
    };
};

//指定してカードを引く関数
function Draw_a(n){
    let idx = yamafuda.indexOf(n);
    if(idx >= 0){
        yamafuda.splice(idx, 1);
        if(localStorage.getItem("yama_H") !== null){
            localStorage.removeItem("yama_H");
            try{
                localStorage.setItem("yama_H", JSON.stringify(yamafuda));
            }
            catch(e){
                console.log(e);
            };
        }
    }
};

//フラグの変更
function F_change(){
    if(back_U_f.checked == true){
        flag = 1;
    }else if(back_R_f.checked == true){
        flag = 0;
    }else if(back_D_f.checked == true){
        flag = -1;
    };
};


//山札をシャッフルする関数
function shuffle(){
    if(yamafuda.length > 1){
        let old_yama = yamafuda.slice(0, yamafuda.length);
        yamafuda = [];
        for(let j = 0; j < old_yama.length;){
            let idx = Math.floor(Math.random() * old_yama.length);
            yamafuda.unshift(old_yama.slice(idx,idx + 1));
            old_yama.splice(idx,1);
        };
    };
    console.log(yamafuda);
};

//山札にカードを戻す関数
function Back(n){
    if(isNumber(numback.value)){        //元々ない数字を戻される可能性あり
        if(flag == 1){
            if(!yamafuda.includes(n)){
                yamafuda.unshift(n)
            };
        }
        else if(flag == 0){
            if(!yamafuda.includes(n)){
                yamafuda.unshift(n)
                shuffle();
            };
        }
        else if(flag == -1){
            if(!yamafuda.includes(n)){
                yamafuda.push(n)
            };
        };
    };
};

//ウィンドウが読み込まれたとき
window.addEventListener("load", function(){
    if(localStorage.getItem("yama_H") !== null){
        yamafuda = JSON.parse(localStorage.getItem("yama_H"));
    };
});

//ボタンが押されたときの挙動
set_buttun.onclick = function(){Newshuffle(numin.value)};
draw_r_buttun.onclick = function(){numout.value = Draw_r()};
reset_buttun.onclick = function(){Newshuffle(numin.value)};
back_buttun.onclick = function(){Back(parseInt(numback.value))};
draw_a_buttun.onclick = function(){Draw_a(parseInt(numdraw.value))};

