//変数宣言
for (let i = 1; i<=8; i++){
    for(let j=1; j<=8; j++){
        let ij = String(i) + String(j)
        eval("var img_" + ij + "= document.getElementById('img" + ij + "');")
    }
}

let mode = 0;
let turn = 1;   //1が自分、-1が相手の手番
let turnsum = 0;
let old_P = 0; //駒を動かす前の位置
let flag1 = 0;  //kingと左の黒luke
let flag2 = 0;  //kingと右の黒luke
let flag3 = 0;  //kingと左の白luke
let flag4 = 0;  //kingと右の白luke

function changeImage(n){
    if(eval("img_" + n).alt == 1){
        eval("img_" + n).src = "../images/PLAY/chesspieces/bB.png"
    }
    else if(eval("img_" + n).alt == 2){
        eval("img_" + n).src = "../images/PLAY/chesspieces/bK.png"
    }
    else if(eval("img_" + n).alt == 3){
        eval("img_" + n).src = "../images/PLAY/chesspieces/bN.png"
    }
    else if(eval("img_" + n).alt == 4){
        eval("img_" + n).src = "../images/PLAY/chesspieces/bP.png"
    }
    else if(eval("img_" + n).alt == 5){
        eval("img_" + n).src= "../images/PLAY/chesspieces/bQ.png"
    }
    else if(eval("img_" + n).alt == 6){
        eval("img_" + n).src = "../images/PLAY/chesspieces/bR.png"
    }
    else if(eval("img_" + n).alt == -1){
        eval("img_" + n).src = "../images/PLAY/chesspieces/wB.png"
    }
    else if(eval("img_" + n).alt == -2){
        eval("img_" + n).src = "../images/PLAY/chesspieces/wK.png"
    }
    else if(eval("img_" + n).alt == -3){
        eval("img_" + n).src = "../images/PLAY/chesspieces/wN.png"
    }
    else if(eval("img_" + n).alt == -4){
        eval("img_" + n).src = "../images/PLAY/chesspieces/wP.png"
    }
    else if(eval("img_" + n).alt == -5){
        eval("img_" + n).src = "../images/PLAY/chesspieces/wQ.png"
    }
    else if(eval("img_" + n).alt == -6){
        eval("img_" + n).src = "../images/PLAY/chesspieces/wR.png"
    }
    else{
        eval("img_" + n).src = "../images/PLAY/chesspieces/empty.png" , eval("img_" + n).alt = "0";
    }
};

//渡した座標の背景を変える
function Color_change(n){
    eval("img_" + n).classList.add("komaMove")
};

//駒の大まかな動き
//斜め十字(角)
function Saltire_I(n){
        //左上
        for(let i = n + 11; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8) && ((eval("img_" + n).alt) * eval("img_" + i).alt) <= 0;){
            if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
                Color_change(i);
                i = i + 11;
            }
            else if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i);
                break;
            };
        };
        //右上
        for(let i = n - 11; ((1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8)) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
            if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
                Color_change(i);
                i = i - 11;
            }
            else if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i);
                break;
            };
        };
        //左下
        for(let i = n - 9; ((1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8)) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
            if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
                Color_change(i);
                i = i - 9;
            }
            else if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i);
                break;
            };
        };
        //右下
        for(let i = n + 9; ((1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8)) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
            if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
                Color_change(i);
                i = i + 9;
            }
            else if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i);
                break;
            };
        };
};

//十字(飛車)
function Cross_I(n){
    //上
    for(let i = n + 10; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i);
            i = i + 10;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
            Color_change(i);
            break;
        };
    };
    //右
    for(let i = n - 1; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i);
            i = i - 1;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
            Color_change(i);
            break;
        };
    };
    //下
    for(let i = n - 10; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i);
            i = i - 10;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
            Color_change(i);
            break;
        };
    };
    //左
    for(let i = n + 1; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i);
            i = i + 1;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
            Color_change(i);
            break;
        };
    };
};

//斜め十字(1マス)
function Saltire(n){
    //左上
    if((1 <= Math.floor((n + 11)/10) && Math.floor((n + 11)/10) <= 8) && (1 <= Math.floor((n + 11)%10) && Math.floor((n + 11)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 11)).alt) <= 0){
        Color_change(n + 11);
    };
    //右上
    if((1 <= Math.floor((n - 11)/10) && Math.floor((n - 11)/10) <= 8) && (1 <= Math.floor((n - 11)%10) && Math.floor((n - 11)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 11)).alt) <= 0){
        Color_change(n - 11);
    };
    //左下
    if((1 <= Math.floor((n + 9)/10) && Math.floor((n + 9)/10) <= 8) && (1 <= Math.floor((n + 9)%10) && Math.floor((n + 9)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 9)).alt) <= 0){
        Color_change(n + 9);
    };
    //右下
    if((1 <= Math.floor((n - 9)/10) && Math.floor((n - 9)/10) <= 8) && (1 <= Math.floor((n - 9)%10) && Math.floor((n - 9)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 9)).alt) <= 0){
        Color_change(n - 9);
    };
};
//十字(1マス)
function Cross(n){
    //上
    if((1 <= Math.floor((n + 10)/10) && Math.floor((n + 10)/10) <= 8) && (1 <= Math.floor((n + 10)%10) && Math.floor((n + 10)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 10)).alt) <= 0){
        Color_change(n + 10);
    };
    //右
    if((1 <= Math.floor((n - 1)/10) && Math.floor((n - 1)/10) <= 8) && (1 <= Math.floor((n - 1)%10) && Math.floor((n - 1)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 1)).alt) <= 0){
        Color_change(n - 1);
    };
    //下
    if((1 <= Math.floor((n - 10)/10) && Math.floor((n - 10)/10) <= 8) && (1 <= Math.floor((n - 10)%10) && Math.floor((n - 10)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 10)).alt) <= 0){
        Color_change(n - 10);
    };
    //左
    if((1 <= Math.floor((n + 1)/10) && Math.floor((n + 1)/10) <= 8) && (1 <= Math.floor((n + 1)%10) && Math.floor((n + 1)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 1)).alt) <= 0){
        Color_change(n + 1);
    };
};

//駒の細かな動き
function Move_V(m,n){
    //ビショップの動き
    if(Math.abs(m) == 1){
        Saltire_I(n);
        eval("img_" + n).classList.remove("komaMove");
    }
    //キングの動き
    else if(Math.abs(m) == 2){
        Saltire(n);
        Cross(n);
    }
    //ナイトの動き
    else if(Math.abs(m) == 3){
        //上開きY
        if((1 <= Math.floor((n - 8)/10) && Math.floor((n - 8)/10) <= 8) && (1 <= Math.floor((n - 8)%10) && Math.floor((n - 8)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 8)).alt) <= 0){
            Color_change(n - 8);
        };
        if((1 <= Math.floor((n + 12)/10) && Math.floor((n + 12)/10) <= 8) && (1 <= Math.floor((n + 12)%10) && Math.floor((n + 12)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 12)).alt) <= 0){
            Color_change(n + 12);
        };
        //右開きY
        if((1 <= Math.floor((n + 21)/10) && Math.floor((n + 21)/10) <= 8) && (1 <= Math.floor((n + 21)%10) && Math.floor((n + 21)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 21)).alt) <= 0){
            Color_change(n + 21);
        };
        if((1 <= Math.floor((n + 19)/10) && Math.floor((n + 19)/10) <= 8) && (1 <= Math.floor((n + 19)%10) && Math.floor((n + 19)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 19)).alt) <= 0){
            Color_change(n + 19);
        };
        //下開きY
        if((1 <= Math.floor((n + 8)/10) && Math.floor((n + 8)/10) <= 8) && (1 <= Math.floor((n + 8)%10) && Math.floor((n + 8)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 8)).alt) <= 0){
            Color_change(n + 8);
        };
        if((1 <= Math.floor((n - 12)/10) && Math.floor((n - 12)/10) <= 8) && (1 <= Math.floor((n - 12)%10) && Math.floor((n - 12)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 12)).alt) <= 0){
            Color_change(n - 12);
        };
        //左開きY
        if((1 <= Math.floor((n - 19)/10) && Math.floor((n - 19)/10) <= 8) && (1 <= Math.floor((n - 19)%10) && Math.floor((n - 19)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 19)).alt) <= 0){
            Color_change(n - 19);
        };
        if((1 <= Math.floor((n - 21)/10) && Math.floor((n - 21)/10) <= 8) && (1 <= Math.floor((n - 21)%10) && Math.floor((n - 21)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 21)).alt) <= 0){
            Color_change(n - 21);
        };
    }
    //黒ポーンの動き
    else if(m == 4){
        //最初の2マス
        if(n%10 == 7){
            if((1 <= Math.floor((n - 1)/10) && Math.floor((n - 1)/10) <= 8) && (1 <= Math.floor((n - 1)%10) && Math.floor((n - 1)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 1)).alt) == 0){
                Color_change(n - 1);
                if((1 <= Math.floor((n - 2)/10) && Math.floor((n - 2)/10) <= 8) && (1 <= Math.floor((n - 2)%10) && Math.floor((n - 2)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 2)).alt) == 0){
                    Color_change(n - 2);
                };
            };
        }
        //通常の1マス
        else{
            if((1 <= Math.floor((n - 1)/10) && Math.floor((n - 1)/10) <= 8) && (1 <= Math.floor((n - 1)%10) && Math.floor((n - 1)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 1)).alt) == 0){
            Color_change(n - 1);
            };
        };
        //右下に敵の駒
        if((1 <= Math.floor((n + 9)/10) && Math.floor((n + 9)/10) <= 8) && (1 <= Math.floor((n + 9)%10) && Math.floor((n + 9)%10) <= 8)){
            if(eval("img_" + (n + 9)).alt < 0){
                Color_change(n + 9);
            };
        };
        //左下に敵の駒
        if((1 <= Math.floor((n - 11)/10) && Math.floor((n - 11)/10) <= 8) && (1 <= Math.floor((n - 11)%10) && Math.floor((n - 11)%10) <= 8)){
            if(eval("img_" + (n - 11)).alt < 0){
                Color_change(n - 11);
            };
        };
    }
    //クイーンの動き
    else if(Math.abs(m) == 5){
        Saltire_I(n);
        Cross_I(n);
        eval("img_" + n).classList.remove("komaMove")
    }
    //ルークの動き
    else if(Math.abs(m) == 6){
        Cross_I(n);
        eval("img_" + n).classList.remove("komaMove")
    }
    //白ポーンの動き
    else if(m == -4){
        //最初の2マス
        if(n%10 == 7){
            if((1 <= Math.floor((n + 1)/10) && Math.floor((n + 1)/10) <= 8) && (1 <= Math.floor((n + 1)%10) && Math.floor((n + 1)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 1)).alt) == 0){
                Color_change(n + 1);
                if((1 <= Math.floor((n + 2)/10) && Math.floor((n + 2)/10) <= 8) && (1 <= Math.floor((n + 2)%10) && Math.floor((n + 2)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 2)).alt) == 0){
                    Color_change(n + 2);
                };
            };
        }
        //通常の1マス
        else{
            if((1 <= Math.floor((n + 1)/10) && Math.floor((n + 1)/10) <= 8) && (1 <= Math.floor((n + 1)%10) && Math.floor((n + 1)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 1)).alt) == 0){
            Color_change(n + 1);
            };
        };
        //右上に敵の駒
        if((1 <= Math.floor((n + 11)/10) && Math.floor((n + 11)/10) <= 8) && (1 <= Math.floor((n + 11)%10) && Math.floor((n + 11)%10) <= 8)){
            if(eval("img_" + (n + 11)).alt > 0){
                Color_change(n + 11);
            };
        };
        //左上に敵の駒
        if((1 <= Math.floor((n - 9)/10) && Math.floor((n - 9)/10) <= 8) && (1 <= Math.floor((n - 9)%10) && Math.floor((n - 9)%10) <= 8)){
            if(eval("img_" + (n - 9)).alt > 0){
                Color_change(n - 9);
            };
        };
    };
};

function Chess(n){
    //自分の駒を触ったとき
    if(turn * eval("img_" + n).alt > 0){
        //さっきと同じ駒なら
        if(n == old_P){
            mode = 0;
            old_P = 0;
            for(let i = 1; i <= 8; i++){
                for(let j = 1;j <= 8; j++){
                    let ij = (10 * i) + j
                    if(eval("img_" + ij).classList.contains("komaMove")){
                        eval("img_" + ij).classList.remove("komaMove");
                    };
                };
            };
        }
        //別の自分の駒
        else if(n != old_P){
            for(let i = 1; i <= 8; i++){
                for(let j = 1;j <= 8; j++){
                    let ij = (10 * i) + j
                    if(eval("img_" + ij).classList.contains("komaMove")){
                        eval("img_" + ij).classList.remove("komaMove");
                    };
                };
            };
            Move_V(eval("img_" + n).alt,n);
            old_P = n;
            mode = 1;
        };
        }
    //自分の駒以外に触ったとき
    else if(turn * eval("img_" + n).alt <= 0){
        //駒をうごかす
        if(mode == 1){
            if(eval("img_" + n).classList.contains("komaMove")){
                eval("img_" + n).alt = eval("img_" + old_P).alt;
                eval("img_" + old_P).alt = 0;
                changeImage(n);
                changeImage(old_P);
                mode = 0;
                for(let i = 1; i <= 8; i++){
                    for(let j = 1;j <= 8; j++){
                        let ij = (10 * i) + j
                        if(eval("img_" + ij).classList.contains("komaMove")){
                            eval("img_" + ij).classList.remove("komaMove");
                        };
                    };
                };
            }
            //モードを戻す
            else{
                mode = 0;
                for(let i = 1; i <= 8; i++){
                    for(let j = 1;j <= 8; j++){
                        let ij = (10 * i) + j
                        if(eval("img_" + ij).classList.contains("komaMove")){
                            eval("img_" + ij).classList.remove("komaMove");
                        };
                    };
                };
            };
        };
    };
};

function Reset(){
    let mode = 0;
    let turn = 0;
    let turnsum = 0;
    let flag1 = 0;
};

function check(){
    Move_V(1,55);
};