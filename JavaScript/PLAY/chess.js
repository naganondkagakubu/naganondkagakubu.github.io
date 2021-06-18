//変数宣言
for (let i = 1; i<=8; i++){
    for(let j=1; j<=8; j++){
        let ij = String(i) + String(j)
        eval("var img_" + ij + "= document.getElementById('img" + ij + "');")
    }
}

const B_W = document.getElementById("B_W");
const W_W = document.getElementById("W_W");

let mode = 0;
let turn = -1;   //1が黒、-1が白の手番 (白が先手)
let turnsum = 0;
let old_P = 0; //駒を動かす前の位置
let flag_B = 0; //B_kingが動いたかどうか
let flag_W = 0; //W_kingが動いたかどうか
let flag1 = 0;  //kingと左の黒luke
let flag2 = 0;  //kingと右の黒luke
let flag3 = 0;  //kingと左の白luke
let flag4 = 0;  //kingと右の白luke
let Cas_F = 0; //Castlingしようとしているか
let B_check = 0; 
let W_check = 0;
let prom_F = 0;
let prom_P = 0;
let kifu = [[-1, 0, 0, 0, 0, 0, 0, 0, "-6", "-4", "0", "0", "0", "0", "4", "6", "-3", "-4", "0", "0", "0", "0", "4", "3", "-1", "-4", "0", "0", "0", "0", "4", "1", "-5", "-4", "0", "0", "0", "0", "4", "5", "-2", "-4", "0", "0", "0", "0", "4", "2", "-1", "-4", "0", "0", "0", "0", "4", "1", "-3", "-4", "0", "0", "0", "0", "4", "3", "-6", "-4", "0", "0", "0", "0", "4", "6"]]; //棋譜
let N_kifu = [-1, 0, 0, 0, 0, 0, 0, 0, "-6", "-4", "0", "0", "0", "0", "4", "6", "-3", "-4", "0", "0", "0", "0", "4", "3", "-1", "-4", "0", "0", "0", "0", "4", "1", "-5", "-4", "0", "0", "0", "0", "4", "5", "-2", "-4", "0", "0", "0", "0", "4", "2", "-1", "-4", "0", "0", "0", "0", "4", "1", "-3", "-4", "0", "0", "0", "0", "4", "3", "-6", "-4", "0", "0", "0", "0", "4", "6"]; //現在の盤面

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
    else if(eval("img_" + n).alt == 0){
        eval("img_" + n).src = "../images/PLAY/chesspieces/empty.png"
    }
    else{
        eval("img_" + n).src = "../images/PLAY/chesspieces/empty.png" , eval("img_" + n).alt = 0;
    }
};

//渡した座標の背景を変える
function Color_change(n,m){
    if(m == 0){
        eval("img_" + n).classList.add("komaMove")
    }
    else if(m == 1){
        eval("img_" + n).classList.add("Check_checkforB")
    }
    else if(m == 2){
        eval("img_" + n).classList.add("Check_checkforW")
    };
};

//駒の大まかな動き
//斜め十字(角)
function Saltire_I(n,m){
    //左上
    for(let i = n + 11; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8) && ((eval("img_" + n).alt) * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i,m);
            i = i + 11;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) != 0){
            if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i,m);
            }
            else if(m != 0 && (eval("img_" + n).alt * eval("img_" + i).alt) > 0){
                Color_change(i,m);
            }
            break;
        };
    };
    //右上
    for(let i = n - 11; ((1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8)) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i,m);
            i = i - 11;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) != 0){
            if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i,m);
            }
            else if(m != 0 && (eval("img_" + n).alt * eval("img_" + i).alt) > 0){
                Color_change(i,m);
            }
            break;
        };
    };
    //左下
    for(let i = n - 9; ((1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8)) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i,m);
            i = i - 9;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) != 0){
            if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i,m);
            }
            else if(m != 0 && (eval("img_" + n).alt * eval("img_" + i).alt) > 0){
                Color_change(i,m);
            }
            break;
        };
    };
    //右下
    for(let i = n + 9; ((1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8)) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i,m);
            i = i + 9;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) != 0){
            if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i,m);
            }
            else if(m != 0 && (eval("img_" + n).alt * eval("img_" + i).alt) > 0){
                Color_change(i,m);
            }
            break;
        };
    };
};

//十字(飛車)
function Cross_I(n,m){
    //上
    for(let i = n + 10; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i,m);
            i = i + 10;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) != 0){
            if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i,m);
            }
            else if(m != 0 && (eval("img_" + n).alt * eval("img_" + i).alt) > 0){
                Color_change(i,m);
            }
            break;
        };
    };
    //右
    for(let i = n - 1; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i,m);
            i = i - 1;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) != 0){
            if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i,m);
            }
            else if(m != 0 && (eval("img_" + n).alt * eval("img_" + i).alt) > 0){
                Color_change(i,m);
            }
            break;
        };
    };
    //下
    for(let i = n - 10; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i,m);
            i = i - 10;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) != 0){
            if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i,m);
            }
            else if(m != 0 && (eval("img_" + n).alt * eval("img_" + i).alt) > 0){
                Color_change(i,m);
            }
            break;
        };
    };
    //左
    for(let i = n + 1; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 8) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 8) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
        if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
            Color_change(i,m);
            i = i + 1;
        }
        else if((eval("img_" + n).alt * eval("img_" + i).alt) != 0){
            if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                Color_change(i,m);
            }
            else if(m != 0 && (eval("img_" + n).alt * eval("img_" + i).alt) > 0){
                Color_change(i,m);
            }
            break;
        };
    };
};

//斜め十字(1マス)
function Saltire(n,m,k){
    //左上
    if((1 <= Math.floor((n + 11)/10) && Math.floor((n + 11)/10) <= 8) && (1 <= Math.floor((n + 11)%10) && Math.floor((n + 11)%10) <= 8)){
        Color_change(n + 11,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n + 11)).alt) > 0){
            eval("img_" + (n + 11)).classList.remove("komaMove")
        }
        if(eval("img_" + (n + 11)).classList.contains("Check_checkforB") && k == 2 && m == 0){
            eval("img_" + (n + 11)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n + 11)).classList.contains("Check_checkforW") && k == -2 && m == 0){
            eval("img_" + (n + 11)).classList.remove("komaMove")
        };
    };
    //右上
    if((1 <= Math.floor((n - 11)/10) && Math.floor((n - 11)/10) <= 8) && (1 <= Math.floor((n - 11)%10) && Math.floor((n - 11)%10) <= 8)){
        Color_change(n - 11,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n - 11)).alt) > 0){
            eval("img_" + (n - 11)).classList.remove("komaMove")
        }
        if(eval("img_" + (n - 11)).classList.contains("Check_checkforB") && k == 2 && m == 0){
            eval("img_" + (n - 11)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n - 11)).classList.contains("Check_checkforW") && k == -2 && m == 0){
            eval("img_" + (n - 11)).classList.remove("komaMove")
        };
    };
    //左下
    if((1 <= Math.floor((n + 9)/10) && Math.floor((n + 9)/10) <= 8) && (1 <= Math.floor((n + 9)%10) && Math.floor((n + 9)%10) <= 8)){
        Color_change(n + 9,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n + 9)).alt) > 0){
            eval("img_" + (n + 9)).classList.remove("komaMove")
        }
        if(eval("img_" + (n + 9)).classList.contains("Check_checkforB") && k == 2 && m == 0){
            eval("img_" + (n + 9)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n + 9)).classList.contains("Check_checkforW") && k == -2 && m == 0){
            eval("img_" + (n + 9)).classList.remove("komaMove")
        };
    };
    //右下
    if((1 <= Math.floor((n - 9)/10) && Math.floor((n - 9)/10) <= 8) && (1 <= Math.floor((n - 9)%10) && Math.floor((n - 9)%10) <= 8)){
        Color_change(n - 9,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n - 9)).alt) > 0){
            eval("img_" + (n - 9)).classList.remove("komaMove")
        }
        if(eval("img_" + (n - 9)).classList.contains("Check_checkforB") && k == 2 && m == 0){
            eval("img_" + (n - 9)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n - 9)).classList.contains("Check_checkforW") && k == -2 && m == 0){
            eval("img_" + (n - 9)).classList.remove("komaMove")
        };
    };
};
//十字(1マス)
function Cross(n,m,k){
    //上
    if((1 <= Math.floor((n + 10)/10) && Math.floor((n + 10)/10) <= 8) && (1 <= Math.floor((n + 10)%10) && Math.floor((n + 10)%10) <= 8)){
        Color_change(n + 10,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n + 10)).alt) > 0){
            eval("img_" + (n + 10)).classList.remove("komaMove")
        }
        if(eval("img_" + (n + 10)).classList.contains("Check_checkforB") && k == 2 && m == 0){
            eval("img_" + (n + 10)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n + 10)).classList.contains("Check_checkforW") && k == -2 && m == 0){
            eval("img_" + (n + 10)).classList.remove("komaMove")
        };
    };
    //右
    if((1 <= Math.floor((n - 1)/10) && Math.floor((n - 1)/10) <= 8) && (1 <= Math.floor((n - 1)%10) && Math.floor((n - 1)%10) <= 8)){
        Color_change(n - 1,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n - 1)).alt) > 0){
            eval("img_" + (n - 1)).classList.remove("komaMove")
        }
        if(eval("img_" + (n - 1)).classList.contains("Check_checkforB") && k == 2 && m == 0){
            eval("img_" + (n - 1)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n - 1)).classList.contains("Check_checkforW") && k == -2 && m == 0){
            eval("img_" + (n - 1)).classList.remove("komaMove")
        };
    };
    //下
    if((1 <= Math.floor((n - 10)/10) && Math.floor((n - 10)/10) <= 8) && (1 <= Math.floor((n - 10)%10) && Math.floor((n - 10)%10) <= 8)){
        Color_change(n - 10,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n - 10)).alt) > 0){
            eval("img_" + (n - 10)).classList.remove("komaMove")
        }
        if(eval("img_" + (n - 10)).classList.contains("Check_checkforB") && k == 2 && m == 0){
            eval("img_" + (n - 10)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n - 10)).classList.contains("Check_checkforW") && k == -2 && m == 0){
            eval("img_" + (n - 10)).classList.remove("komaMove")
        };
    };
    //左
    if((1 <= Math.floor((n + 1)/10) && Math.floor((n + 1)/10) <= 8) && (1 <= Math.floor((n + 1)%10) && Math.floor((n + 1)%10) <= 8)){
        Color_change(n + 1,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n + 1)).alt) > 0){
            eval("img_" + (n + 1)).classList.remove("komaMove")
        }
        if(eval("img_" + (n + 1)).classList.contains("Check_checkforB") && k == 2 && m == 0){
            eval("img_" + (n + 1)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n + 1)).classList.contains("Check_checkforW") && k == -2 && m == 0){
            eval("img_" + (n + 1)).classList.remove("komaMove")
        };
    };
};

//駒の細かな動き
function Move_V(m,n,l){
    //ビショップの動き
    if(Math.abs(m) == 1){
        Saltire_I(n,l);
    }
    //キングの動き
    else if(Math.abs(m) == 2){
        //メイン
        Saltire(n,l,m);
        Cross(n,l,m);
        //キャスリング
        //黒キング
        if(m == 2){
            //左側のルークと
            if(flag_B + flag1 + img_28.alt + img_38.alt + img_48.alt + B_check == 0){
                if((!img_38.classList.contains("Check_checkforB")) && (!img_48.classList.contains("Check_checkforB"))){
                    Color_change(38,0);
                    Cas_F = 1;
                };
            }
            //右側のルークと
            else if(flag_B + flag2 + img_68.alt + img_78.alt + B_check == 0){
                if((!img_68.classList.contains("Check_checkforB")) && (!img_78.classList.contains("Check_checkforB"))){
                    Color_change(78,0);
                    Cas_F = 1;
                };
            }
        }
        //白キング
        else if(m == -2){
            //左側のルークと
            if(flag_W + flag3 + img_21.alt + img_31.alt + img_41.alt + W_check == 0){
                if((!img_31.classList.contains("Check_checkforW")) && (!img_41.classList.contains("Check_checkforW"))){
                Color_change(31,0);
                Cas_F = 1;
                }
            }
            //右側のルークと
            else if(flag_W + flag4 + img_61.alt + img_71.alt + W_check == 0){
                if((!img_61.classList.contains("Check_checkforW")) && (!img_71.classList.contains("Check_checkforW"))){
                Color_change(71,0);
                Cas_F = 1;
                }
            };
        };
    }
    //ナイトの動き
    else if(Math.abs(m) == 3){
        //上開きY
        if((1 <= Math.floor((n - 8)/10) && Math.floor((n - 8)/10) <= 8) && (1 <= Math.floor((n - 8)%10) && Math.floor((n - 8)%10) <= 8)){
            Color_change(n - 8,l);
            if(l == 0 && (eval("img_" + n).alt * eval("img_" + (n - 8)).alt) > 0){
                eval("img_" + (n - 8)).classList.remove("komaMove")
            }
        };
        if((1 <= Math.floor((n + 12)/10) && Math.floor((n + 12)/10) <= 8) && (1 <= Math.floor((n + 12)%10) && Math.floor((n + 12)%10) <= 8)){
            Color_change(n + 12,l);
            if(l == 0 && (eval("img_" + n).alt * eval("img_" + (n + 12)).alt) > 0){
                eval("img_" + (n + 12)).classList.remove("komaMove")
            }
        };
        //右開きY
        if((1 <= Math.floor((n + 21)/10) && Math.floor((n + 21)/10) <= 8) && (1 <= Math.floor((n + 21)%10) && Math.floor((n + 21)%10) <= 8)){
            Color_change(n + 21,l);
            if(l == 0 && (eval("img_" + n).alt * eval("img_" + (n + 21)).alt) > 0){
                eval("img_" + (n + 21)).classList.remove("komaMove")
            }
        };
        if((1 <= Math.floor((n + 19)/10) && Math.floor((n + 19)/10) <= 8) && (1 <= Math.floor((n + 19)%10) && Math.floor((n + 19)%10) <= 8)){
            Color_change(n + 19,l);
            if(l == 0 && (eval("img_" + n).alt * eval("img_" + (n + 19)).alt) > 0){
                eval("img_" + (n + 19)).classList.remove("komaMove")
            }
        };
        //下開きY
        if((1 <= Math.floor((n + 8)/10) && Math.floor((n + 8)/10) <= 8) && (1 <= Math.floor((n + 8)%10) && Math.floor((n + 8)%10) <= 8)){
            Color_change(n + 8,l);
            if(l == 0 && (eval("img_" + n).alt * eval("img_" + (n + 8)).alt) > 0){
                eval("img_" + (n + 8)).classList.remove("komaMove")
            }
        };
        if((1 <= Math.floor((n - 12)/10) && Math.floor((n - 12)/10) <= 8) && (1 <= Math.floor((n - 12)%10) && Math.floor((n - 12)%10) <= 8)){
            Color_change(n - 12,l);
            if(l == 0 && (eval("img_" + n).alt * eval("img_" + (n - 12)).alt) > 0){
                eval("img_" + (n - 12)).classList.remove("komaMove")
            }
        };
        //左開きY
        if((1 <= Math.floor((n - 19)/10) && Math.floor((n - 19)/10) <= 8) && (1 <= Math.floor((n - 19)%10) && Math.floor((n - 19)%10) <= 8)){
            Color_change(n - 19,l);
            if(l == 0 && (eval("img_" + n).alt * eval("img_" + (n - 19)).alt) > 0){
                eval("img_" + (n - 19)).classList.remove("komaMove")
            }
        };
        if((1 <= Math.floor((n - 21)/10) && Math.floor((n - 21)/10) <= 8) && (1 <= Math.floor((n - 21)%10) && Math.floor((n - 21)%10) <= 8)){
            Color_change(n - 21,l);
            if(l == 0 && (eval("img_" + n).alt * eval("img_" + (n - 21)).alt) > 0){
                eval("img_" + (n - 21)).classList.remove("komaMove")
            }
        };
    }
    //黒ポーンの動き
    else if(m == 4){
        //最初の2マス
        if(n%10 == 7){
            if((1 <= Math.floor((n - 1)/10) && Math.floor((n - 1)/10) <= 8) && (1 <= Math.floor((n - 1)%10) && Math.floor((n - 1)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 1)).alt) == 0){
                Color_change(n - 1,0);
                if((1 <= Math.floor((n - 2)/10) && Math.floor((n - 2)/10) <= 8) && (1 <= Math.floor((n - 2)%10) && Math.floor((n - 2)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 2)).alt) == 0){
                    Color_change(n - 2,0);
                };
            };
        }
        //通常の1マス
        else{
            if((1 <= Math.floor((n - 1)/10) && Math.floor((n - 1)/10) <= 8) && (1 <= Math.floor((n - 1)%10) && Math.floor((n - 1)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n - 1)).alt) == 0){
            Color_change(n - 1,0);
            };
        };
        //右下に敵の駒
        if((1 <= Math.floor((n + 9)/10) && Math.floor((n + 9)/10) <= 8) && (1 <= Math.floor((n + 9)%10) && Math.floor((n + 9)%10) <= 8)){
            if(eval("img_" + (n + 9)).alt < 0){
                Color_change(n + 9,l);
            };
            if(l != 0){
                Color_change(n + 9,l);
            };
        };
        //左下に敵の駒
        if((1 <= Math.floor((n - 11)/10) && Math.floor((n - 11)/10) <= 8) && (1 <= Math.floor((n - 11)%10) && Math.floor((n - 11)%10) <= 8)){
            if(eval("img_" + (n - 11)).alt < 0){
                Color_change(n - 11,l);
            };
            if(l != 0){
                Color_change(n - 11,l);
            };
        };
    }
    //白ポーンの動き
    else if(m == -4){
        //最初の2マス
        if(n%10 == 2){
            if((1 <= Math.floor((n + 1)/10) && Math.floor((n + 1)/10) <= 8) && (1 <= Math.floor((n + 1)%10) && Math.floor((n + 1)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 1)).alt) == 0){
                Color_change(n + 1,0);
                if((1 <= Math.floor((n + 2)/10) && Math.floor((n + 2)/10) <= 8) && (1 <= Math.floor((n + 2)%10) && Math.floor((n + 2)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 2)).alt) == 0){
                    Color_change(n + 2,0);
                };
            };
        }
        //通常の1マス
        else{
            if((1 <= Math.floor((n + 1)/10) && Math.floor((n + 1)/10) <= 8) && (1 <= Math.floor((n + 1)%10) && Math.floor((n + 1)%10) <= 8) && (eval("img_" + n).alt * eval("img_" + (n + 1)).alt) == 0){
            Color_change(n + 1,0);
            };
        };
        //右上に敵の駒
        if((1 <= Math.floor((n + 11)/10) && Math.floor((n + 11)/10) <= 8) && (1 <= Math.floor((n + 11)%10) && Math.floor((n + 11)%10) <= 8)){
            if(eval("img_" + (n + 11)).alt > 0){
                Color_change(n + 11,l);
            };
            if(l != 0){
                Color_change(n + 11,l);
            };
        };
        //左上に敵の駒
        if((1 <= Math.floor((n - 9)/10) && Math.floor((n - 9)/10) <= 8) && (1 <= Math.floor((n - 9)%10) && Math.floor((n - 9)%10) <= 8)){
            if(eval("img_" + (n - 9)).alt > 0){
                Color_change(n - 9,l);
            };
            if(l != 0){
                Color_change(n - 9,l);
            };
        };
    }
    //クイーンの動き
    else if(Math.abs(m) == 5){
        Saltire_I(n,l);
        Cross_I(n,l);
        
    }
    //ルークの動き
    else if(Math.abs(m) == 6){
        Cross_I(n,l);
    };
};

//プロモーションの選択
function prom_W(n){
    turn = 0;
    if(n == 4){
        document.getElementById("B_prom_E").classList.remove("is-act");
    }
    else if(n == -4){
        document.getElementById("W_prom_E").classList.remove("is-act");
    }
    else{
        document.getElementById("B_prom_E").classList.remove("is-act");
        document.getElementById("W_prom_E").classList.remove("is-act");
    };
};

function prom_choice(n){
    prom_F = n;
    if(!document.getElementById("B_prom_E").classList.contains("is-act")){
        document.getElementById("B_prom_E").classList.add("is-act");
    };
    if(!document.getElementById("W_prom_E").classList.contains("is-act")){
        document.getElementById("W_prom_E").classList.add("is-act");
    };
    mode = 1;
    old_P.alt = 0;
    eval("img_" + prom_P).classList.add("komaMove")
    Chess(prom_P);
}

//チェックのチェック
function Check_check(){
    //クリーニング
    for(let i = 1; i <= 8; i++){
        for(let j = 1;j <= 8; j++){
            let ij = (10 * i) + j
            if(eval("img_" + ij).classList.contains("Check_checkforB")){
                eval("img_" + ij).classList.remove("Check_checkforB");
            };
            if(eval("img_" + ij).classList.contains("Check_checkforW")){
                eval("img_" + ij).classList.remove("Check_checkforW");
            };
        };
    };
    let B_king_P;
    let W_king_P
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 8; j++){
            let ij = (10 * i) + j;
            if(eval("img_" + ij).alt < 0){
                Move_V(eval("img_" + ij).alt,ij,1)
            };
            if(eval("img_" + ij).alt == 2){
                B_king_P = ij;
            };
        };
    };
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 8; j++){
            let ij = (10 * i) + j;
            if(eval("img_" + ij).alt > 0){
                Move_V(eval("img_" + ij).alt,ij,2)
            };
            if(eval("img_" + ij).alt == -2){
                W_king_P = ij;
            };
        };
    };
    //チェックの確認
    if(eval("img_" + B_king_P).classList.contains("Check_checkforB")){
        B_check = 1;
        document.getElementById("B_check_E").innerHTML = "チェックされています"
    }
    else{
        B_check = 0;
        document.getElementById("B_check_E").innerHTML = ""
    };
    if(eval("img_" + W_king_P).classList.contains("Check_checkforW")){
        W_check = 1;
        document.getElementById("W_check_E").innerHTML = "チェックされています"
    }
    else{
        W_check = 0;
        document.getElementById("W_check_E").innerHTML = ""
    };
    //諦め
    //チェックメイトの確認
    //行動範囲のクリーニング
    //for(let i = 1; i <= 8; i++){
    //    for(let j = 1;j <= 8; j++){
    //        let ij = (10 * i) + j
    //        if(eval("img_" + ij).classList.contains("komaMove")){
    //            eval("img_" + ij).classList.remove("komaMove");
    //        };
    //    };
    //};
    //let mate = 0;
    //if(B_check == 1 ){
    //    Move_V(2,B_king_P,0);
    //    for(let i = 1; i <= 8; i++){
    //        for(let j = 1;j <= 8; j++){
    //            let ij = (10 * i) + j
    //            if(eval("img_" + ij).classList.contains("komaMove")){
    //                mate = mate + 1
    //                eval("img_" + ij).classList.remove("komaMove");
    //            };
    //        };
    //    };
    //    if(mate == 0){
    //        document.getElementById("B_check_E").innerHTML = "チェックメイト! 黒の負け!"
    //        document.getElementById("W_check_E").innerHTML = "チェックメイト! 黒の負け!"
    //    };
    //}
    //if(W_check == 1 ){
    //    Move_V(-2,W_king_P,0);
    //    for(let i = 1; i <= 8; i++){
    //        for(let j = 1;j <= 8; j++){
    //            let ij = (10 * i) + j
    //            if(eval("img_" + ij).classList.contains("komaMove")){
    //                mate = mate + 1
    //                eval("img_" + ij).classList.remove("komaMove");
    //            };
    //        };
    //    };
    //    if(mate == 0){
    //        document.getElementById("B_check_E").innerHTML = "チェックメイト! 白の負け!"
    //        document.getElementById("W_check_E").innerHTML = "チェックメイト! 白の負け!"
    //    };
    //};
    ////ステイルメイトの確認
    //let S_mate = 0
    //if(turn == -1){
    //    for(let i = 1; i <= 8; i++){
    //        for(let j = 1;j <= 8; j++){
    //            let ij = (10 * i) + j
    //            if(eval("img_" + ij).alt * turn){
    //                if(eval("img_" + ij).classList.contains("Check_checkforB")){
    //                    S_mate = S_mate + 1;
    //                };
    //            };
    //        };
    //    };
    //}
    //else if(turn == 1){
    //    for(let i = 1; i <= 8; i++){
    //        for(let j = 1;j <= 8; j++){
    //            let ij = (10 * i) + j
    //            if(eval("img_" + ij).alt * turn){
    //                if(eval("img_" + ij).classList.contains("Check_checkforW")){
    //                    S_mate = S_mate + 1;
    //                };
    //            };
    //        };
    //    };
    //};
    //if(S_mate == 0){
    //    document.getElementById("B_check_E").innerHTML = "ステイルメイト! 引き分け!"
    //    document.getElementById("W_check_E").innerHTML = "ステイルメイト! 引き分け!"
    //};
};

//ターン表示
function turn_E(){
    if(turn == 1){
        document.getElementById("W_turn_E").innerHTML = "黒の手番です";
        document.getElementById("B_turn_E").innerHTML = "黒の手番です";
    }
    else if(turn == -1){
        document.getElementById("W_turn_E").innerHTML = "白の手番です";
        document.getElementById("B_turn_E").innerHTML = "白の手番です";
    };
};

//メインの関数
function Chess(n){
    //自分の駒を触ったとき
    if(turn * eval("img_" + n).alt > 0){
        //さっきと同じ駒なら
        if(n == old_P){
            mode = 0;
            old_P = 0;
            Cas_F = 0;
            //行動範囲のクリーニング
            for(let i = 1; i <= 8; i++){
                for(let j = 1;j <= 8; j++){
                    let ij = (10 * i) + j
                    if(eval("img_" + ij).classList.contains("komaMove")){
                        eval("img_" + ij).classList.remove("komaMove");
                    };
                };
            };
        }
        //さっきと別の自分の駒
        else if(n != old_P){
            Cas_F = 0;
            //行動範囲のクリーニング
            for(let i = 1; i <= 8; i++){
                for(let j = 1;j <= 8; j++){
                    let ij = (10 * i) + j
                    if(eval("img_" + ij).classList.contains("komaMove")){
                        eval("img_" + ij).classList.remove("komaMove");
                    };
                };
            };

            Move_V(eval("img_" + n).alt,n,0);
            old_P = n;
            mode = 1;
        };
        }
    //自分の駒以外に触ったとき
    else if(turn * eval("img_" + n).alt <= 0){
        //駒を動かせるとき
        if(mode == 1){
            //駒を動す
            if(eval("img_" + n).classList.contains("komaMove")){
                if(turn != 0){
                    turnsum = turnsum + 1;
                    //棋譜の記録
                    let Ki = [];
                    //各種数値
                    Ki.push(turn);
                    Ki.push(turnsum);
                    Ki.push(flag_B);
                    Ki.push(flag_W);
                    Ki.push(flag1);
                    Ki.push(flag2);
                    Ki.push(flag3);
                    Ki.push(flag4);
                    //駒の位置
                    for(let i = 1; i <= 8; i++){
                        for (let j = 1; j <= 8; j++){
                            let ij = (10 * i) + j;
                            Ki.push(eval("img_" + ij).alt);
                        };
                    };
                
                    kifu.push(Ki);
                    //キングとルークが動いたかどうか
                    if(old_P == 18){flag1 = 1;};
                    if(old_P == 88){flag2 = 1;};
                    if(old_P == 11){flag3 = 1;};
                    if(old_P == 81){flag4 = 1;};
                    if(old_P == 58){flag_B = 1;};
                    if(old_P == 51){flag_W = 1;};

                    turn = turn * (-1);
                };
                
        //駒の移動
            //プロモーション
                if(prom_F == 0 && eval("img_" + old_P).alt == -4 && 7 < n%10 && n%10 <= 8){
                    prom_W(eval("img_" + old_P).alt);
                    prom_P = n;
                }
                else if(prom_F == 0 && eval("img_" + old_P).alt == 4 && 1 <= n%10 && n%10 < 2){
                    prom_W(eval("img_" + old_P).alt);
                    prom_P = n;
                }
            //キャスリング
                //黒キング
                if(old_P == 58 && n== 38){
                    img_18.alt = 0;
                    img_38.alt = 2;
                    img_48.alt = 6;
                    img_58.alt = 0;
                    changeImage(18);
                    changeImage(38);
                    changeImage(48);
                    changeImage(58);
                }
                else if(old_P == 58 && n == 78){
                    img_58.alt = 0;
                    img_68.alt = 6;
                    img_78.alt = 2;
                    img_88.alt = 0;
                    changeImage(58);
                    changeImage(68);
                    changeImage(78);
                    changeImage(88);
                }
                //白キング
                else if(old_P == 51 && n == 31){
                    img_11.alt = 0;
                    img_31.alt = -2;
                    img_41.alt = -6;
                    img_51.alt = 0;
                    changeImage(11);
                    changeImage(31);
                    changeImage(41);
                    changeImage(51);
                }
                else if(old_P == 51 && n == 71){
                    img_51.alt = 0;
                    img_61.alt = -6;
                    img_71.alt = -2;
                    img_81.alt = 0;
                    changeImage(51);
                    changeImage(61);
                    changeImage(71);
                    changeImage(81);
                }
                //黒ポーンのプロモーション
                else if(prom_F > 0){
                    console.log("a")
                    eval("img_" + n).alt = prom_F;
                    eval("img_" + old_P).alt = 0;
                    changeImage(n);
                    changeImage(old_P);
                    turn = -1;
                    prom_F = 0;
                    if(!document.getElementById("B_prom_E").classList.contains("is-act")){
                        document.getElementById("B_prom_E").classList.add("is-act");
                    };
                    if(!document.getElementById("W_prom_E").classList.contains("is-act")){
                        document.getElementById("W_prom_E").classList.add("is-act");
                    };
                }
                //白ポーンのプロモーション
                else if(prom_F < 0){
                    eval("img_" + n).alt = prom_F;
                    eval("img_" + old_P).alt = 0;
                    changeImage(n);
                    changeImage(old_P);
                    turn = 1;
                    prom_F = 0;
                    if(!document.getElementById("B_prom_E").classList.contains("is-act")){
                        document.getElementById("B_prom_E").classList.add("is-act");
                    };
                    if(!document.getElementById("W_prom_E").classList.contains("is-act")){
                        document.getElementById("W_prom_E").classList.add("is-act");
                    };
                }
            //その他
                else{
                    //駒の画像の入れ替え
                    eval("img_" + n).alt = eval("img_" + old_P).alt;
                    eval("img_" + old_P).alt = 0;
                    changeImage(n);
                    changeImage(old_P);
                };

                //チェックチェック
                Check_check();

                mode = 0;
                Cas_F = 0;

                //ターン表示
                turn_E();

                //行動範囲のクリーニング
                for(let i = 1; i <= 8; i++){
                    for(let j = 1;j <= 8; j++){
                        let ij = (10 * i) + j
                        if(eval("img_" + ij).classList.contains("komaMove")){
                            eval("img_" + ij).classList.remove("komaMove");
                        };
                    };
                };

                //N_kifuの更新
                S_kifu_N();

                if(localStorage.getItem("kifu_H") !== null){
                    localStorage.removeItem("kifu_H");
                    try{
                        let kifu_H = kifu.concat();
                        kifu_H.push(N_kifu);
                        localStorage.setItem("kifu_H", JSON.stringify(kifu_H));
                    }
                    catch(e){
                        console.log(e);
                    };
                }
            }
            //モードを戻す
            else{
                mode = 0;
                old_P =0;
                Cas_F = 0;
                //行動範囲のクリーニング
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

//待った
function Matta(){
    if(turnsum >= 1){
        let Ki = [].concat(kifu[turnsum]);
        turn = parseInt(Ki.slice(0,1));
        Ki.splice(0,1);
        turnsum = parseInt(Ki.slice(0,1));
        Ki.splice(0,1);
        flag_B = parseInt(Ki.slice(0,1));
        Ki.splice(0,1);
        flag_W = parseInt(Ki.slice(0,1));
        Ki.splice(0,1);
        flag1 = parseInt(Ki.slice(0,1));
        Ki.splice(0,1);
        flag2 = parseInt(Ki.slice(0,1));
        Ki.splice(0,1);
        flag3 = parseInt(Ki.slice(0,1));
        Ki.splice(0,1);
        flag4 = parseInt(Ki.slice(0,1));
        Ki.splice(0,1);
    for(let i = 0; i <= 7; i++){
        Ki.splice((10 * i),0,0);
        Ki.splice(((10 * i) + 9),0,0);
    };
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 8; j++){
            let ij = (10 * i) + j;
            eval("img_" + ij).alt = parseInt(Ki.slice(ij - 10,ij - 9));
        };
    };
    for(let i = 1; i <= 8; i++){
        for(let j = 1; j <= 8; j++){
            let ij = (10 * i) + j;
            changeImage(ij);
        };
    };
    turnsum = turnsum - 1;
    kifu.pop();
    //行動範囲のクリーニング
    for(let i = 1; i <= 8; i++){
        for(let j = 1;j <= 8; j++){
            let ij = (10 * i) + j
            if(eval("img_" + ij).classList.contains("komaMove")){
                eval("img_" + ij).classList.remove("komaMove");
            };
        };
    };

    //ターン表示
    turn_E();

    //N_kifuの更新
    S_kifu_N();

    if(localStorage.getItem("kifu_H") !== null){
        localStorage.removeItem("kifu_H");
        try{
            let kifu_H = kifu.concat();
            kifu_H.push(N_kifu);
            localStorage.setItem("kifu_H", JSON.stringify(kifu_H));
        }
        catch(e){
            console.log(e);
        };
    };
    };
    
};

//現在の盤面を保存
function S_kifu_N(){
    N_kifu = [];
    //各種数値
    N_kifu.push(turn);
    N_kifu.push(turnsum);
    N_kifu.push(flag_B);
    N_kifu.push(flag_W);
    N_kifu.push(flag1);
    N_kifu.push(flag2);
    N_kifu.push(flag3);
    N_kifu.push(flag4);
    //駒の位置
    for(let i = 1; i <= 8; i++){
        for (let j = 1; j <= 8; j++){
            let ij = (10 * i) + j;
            N_kifu.push(eval("img_" + ij).alt);
        };
    };
};

//リセット
function Reset(){
    //各種数値
    mode = 0;
    turn = -1;
    turnsum = 0;
    old_P = 0;
    flag_B = 0;
    flag_W = 0;
    flag1 = 0;
    flag2 = 0;
    flag3 = 0;
    flag4 = 0;
    Cas_F = 0;
    prom_F = 0;
    prom_P = 0;
    kifu = [[-1, 0, 0, 0, 0, 0, 0, 0, "-6", "-4", "0", "0", "0", "0", "4", "6", "-3", "-4", "0", "0", "0", "0", "4", "3", "-1", "-4", "0", "0", "0", "0", "4", "1", "-5", "-4", "0", "0", "0", "0", "4", "5", "-2", "-4", "0", "0", "0", "0", "4", "2", "-1", "-4", "0", "0", "0", "0", "4", "1", "-3", "-4", "0", "0", "0", "0", "4", "3", "-6", "-4", "0", "0", "0", "0", "4", "6"]];
    N_kifu = [-1, 0, 0, 0, 0, 0, 0, 0, "-6", "-4", "0", "0", "0", "0", "4", "6", "-3", "-4", "0", "0", "0", "0", "4", "3", "-1", "-4", "0", "0", "0", "0", "4", "1", "-5", "-4", "0", "0", "0", "0", "4", "5", "-2", "-4", "0", "0", "0", "0", "4", "2", "-1", "-4", "0", "0", "0", "0", "4", "1", "-3", "-4", "0", "0", "0", "0", "4", "3", "-6", "-4", "0", "0", "0", "0", "4", "6"];

    //黒1段目
    img_18.src = "../images/PLAY/chesspieces/bR.png";
    img_18.alt = 6;
    img_28.src = "../images/PLAY/chesspieces/bN.png";
    img_28.alt = 3;
    img_38.src = "../images/PLAY/chesspieces/bB.png";
    img_38.alt = 1;
    img_48.src = "../images/PLAY/chesspieces/bQ.png";
    img_48.alt = 5;
    img_58.src = "../images/PLAY/chesspieces/bK.png";
    img_58.alt = 2;
    img_68.src = "../images/PLAY/chesspieces/bB.png";
    img_68.alt = 1;
    img_78.src = "../images/PLAY/chesspieces/bN.png";
    img_78.alt = 3;
    img_88.src = "../images/PLAY/chesspieces/bR.png";
    img_88.alt = 6;

    //黒2段目
    img_17.src = "../images/PLAY/chesspieces/bP.png";
    img_17.alt = 4;
    img_27.src = "../images/PLAY/chesspieces/bP.png";
    img_27.alt = 4;
    img_37.src = "../images/PLAY/chesspieces/bP.png";
    img_37.alt = 4;
    img_47.src = "../images/PLAY/chesspieces/bP.png";
    img_47.alt = 4;
    img_57.src = "../images/PLAY/chesspieces/bP.png";
    img_57.alt = 4;
    img_67.src = "../images/PLAY/chesspieces/bP.png";
    img_67.alt = 4;
    img_77.src = "../images/PLAY/chesspieces/bP.png";
    img_77.alt = 4;
    img_87.src = "../images/PLAY/chesspieces/bP.png";
    img_87.alt = 4;

    //白2段目
    img_12.src = "../images/PLAY/chesspieces/wP.png";
    img_12.alt = -4;
    img_22.src = "../images/PLAY/chesspieces/wP.png";
    img_22.alt = -4;
    img_32.src = "../images/PLAY/chesspieces/wP.png";
    img_32.alt = -4;
    img_42.src = "../images/PLAY/chesspieces/wP.png";
    img_42.alt = -4;
    img_52.src = "../images/PLAY/chesspieces/wP.png";
    img_52.alt = -4;
    img_62.src = "../images/PLAY/chesspieces/wP.png";
    img_62.alt = -4;
    img_72.src = "../images/PLAY/chesspieces/wP.png";
    img_72.alt = -4;
    img_82.src = "../images/PLAY/chesspieces/wP.png";
    img_82.alt = -4;

    //白1段目
    img_11.src = "../images/PLAY/chesspieces/wR.png";
    img_11.alt = -6;
    img_21.src = "../images/PLAY/chesspieces/wN.png";
    img_21.alt = -3;
    img_31.src = "../images/PLAY/chesspieces/wB.png";
    img_31.alt = -1;
    img_41.src = "../images/PLAY/chesspieces/wQ.png";
    img_41.alt = -5;
    img_51.src = "../images/PLAY/chesspieces/wK.png";
    img_51.alt = -2;
    img_61.src = "../images/PLAY/chesspieces/wB.png";
    img_61.alt = -1;
    img_71.src = "../images/PLAY/chesspieces/wN.png";
    img_71.alt = -3;
    img_81.src = "../images/PLAY/chesspieces/wR.png";
    img_81.alt = -6;

    //残りのマス
    for(let i = 1; i <= 8; i++){
        for(let j = 3; j <= 6; j++){
            let ij = (10 * i) + j
            eval("img_" + ij).src = "../images/PLAY/chesspieces/empty.png";
            eval("img_" + ij).alt = 0;
        };
    };
    //行動範囲のクリーニング
    for(let i = 1; i <= 8; i++){
        for(let j = 1;j <= 8; j++){
            let ij = (10 * i) + j
            if(eval("img_" + ij).classList.contains("komaMove")){
                eval("img_" + ij).classList.remove("komaMove");
            };
        };
    };

    //ターン表示
    turn_E();
    
    //N_kifuの更新
    S_kifu_N();

    if(localStorage.getItem("kifu_H") !== null){
        localStorage.removeItem("kifu_H");
        try{
            let kifu_H = kifu.concat();
            kifu_H.push(N_kifu);
            localStorage.setItem("kifu_H", JSON.stringify(kifu_H));
        }
        catch(e){
            console.log(e);
        };
    };
};

//ウィンドウが読み込まれたとき
    window.addEventListener("load", function(){
        if(localStorage.getItem("kifu_H") !== null){
            let KiFu = JSON.parse(localStorage.getItem("kifu_H"));
            N_kifu = KiFu[KiFu.length - 1];
            KiFu.pop();
            kifu = [].concat(KiFu);
            //棋譜から盤面を再現
            turn = parseInt(N_kifu.slice(0,1));
            N_kifu.splice(0,1);
            turnsum = parseInt(N_kifu.slice(0,1));
            N_kifu.splice(0,1);
            flag_B = parseInt(N_kifu.slice(0,1));
            N_kifu.splice(0,1);
            flag_W = parseInt(N_kifu.slice(0,1));
            N_kifu.splice(0,1);
            flag1 = parseInt(N_kifu.slice(0,1));
            N_kifu.splice(0,1);
            flag2 = parseInt(N_kifu.slice(0,1));
            N_kifu.splice(0,1);
            flag3 = parseInt(N_kifu.slice(0,1));
            N_kifu.splice(0,1);
            flag4 = parseInt(N_kifu.slice(0,1));
            N_kifu.splice(0,1);
            for(let i = 0; i <= 7; i++){
                N_kifu.splice((10 * i),0,0);
                N_kifu.splice(((10 * i) + 9),0,0);
            };
            for(let i = 1; i <= 8; i++){
                for(let j = 1; j <= 8; j++){
                    let ij = (10 * i) + j;
                    eval("img_" + ij).alt = parseInt(N_kifu.slice(ij - 10,ij - 9));
                    changeImage(ij);
                };
            };
            
            if(turn == 0){
                prom_W(0);
            };
            Check_check();
            //行動範囲のクリーニング
            for(let i = 1; i <= 8; i++){
                for(let j = 1;j <= 8; j++){
                    let ij = (10 * i) + j
                    if(eval("img_" + ij).classList.contains("komaMove")){
                        eval("img_" + ij).classList.remove("komaMove");
                    };
                };
            };
        };
    });

