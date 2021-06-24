//+-で味方と敵、10or00(10の位)で表裏 (8は味方香、-8は敵香、18は味方成香)

//変数宣言
for (let i = 1; i<=9; i++){
    for(let j=1; j<=9; j++){
        let ij = (10 * i) + j;
        eval("var img_" + ij + "= document.getElementById('img_" + ij + "');")
    }
}

const G_W = document.getElementById("G_W");
const S_W = document.getElementById("S_W");

let mode = 0;
let turn = 1;   //1が先手、-1が後手の手番
let turnsum = 0;
let old_P = 0; //駒を動かす前の位置
let prom_F = 0;
let prom_P = 0;
let S_get = []; //先手が取った駒
let G_get = []; //後手が取った駒
let kifu = [[1,0,[],[],-8,-6,-2,-7,-3,-7,-2,-6,-8,-5,0,0,0,0,0,-4,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,4,0,0,0,0,0,5,0,8,6,2,7,9,7,2,6,8]]; //棋譜
let N_kifu = [1,0,[],[],-8,-6,-2,-7,-3,-7,-2,-6,-8,-5,0,0,0,0,0,-4,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,4,0,0,0,0,0,5,0,8,6,2,7,9,7,2,6,8]; //現在の盤面

function changeImage(n){
    if(Math.abs(eval("img_" + n).alt) == 1){
        eval("img_" + n).src = "../images/PLAY/syougi koma/fu.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 2){
        eval("img_" + n).src = "../images/PLAY/syougi koma/ginn.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 3){
        eval("img_" + n).src = "../images/PLAY/syougi koma/gyoku.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 4){
        eval("img_" + n).src = "../images/PLAY/syougi koma/hi.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 5){
        eval("img_" + n).src= "../images/PLAY/syougi koma/kaku.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 6){
        eval("img_" + n).src = "../images/PLAY/syougi koma/kei.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 7){
        eval("img_" + n).src = "../images/PLAY/syougi koma/kinn.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 8){
        eval("img_" + n).src = "../images/PLAY/syougi koma/kyou.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 9){
        eval("img_" + n).src = "../images/PLAY/syougi koma/ou.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 11){
        eval("img_" + n).src = "../images/PLAY/syougi koma/to.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 12){
        eval("img_" + n).src = "../images/PLAY/syougi koma/nariginn.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 14){
        eval("img_" + n).src = "../images/PLAY/syougi koma/ryu.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 15){
        eval("img_" + n).src = "../images/PLAY/syougi koma/uma.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 16){
        eval("img_" + n).src = "../images/PLAY/syougi koma/narikei.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 18){
        eval("img_" + n).src = "../images/PLAY/syougi koma/narikyou.png"
        if(eval("img_" + n).alt > 0){
            if(eval("img_" + n).classList.contains("enemy")){
            eval("img_" + n).classList.remove("enemy")
            };
        }
        else if(eval("img_" + n).alt < 0){
            eval("img_" + n).classList.add("enemy")
        };
    }
    else if(Math.abs(eval("img_" + n).alt) == 0){
        eval("img_" + n).src = "../images/PLAY/syougi koma//empty.png"
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
        eval("img_" + n).classList.add("Oute_checkforG")
    }
    else if(m == 2){
        eval("img_" + n).classList.add("Oute_checkforS")
    };
};

//駒の大まかな動き
//斜め十字(角)
function Saltire_I(n,m){
    //左下
    for(let i = n + 11; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 9) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 9) && ((eval("img_" + n).alt) * eval("img_" + i).alt) <= 0;){
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
    for(let i = n - 11; ((1 <= Math.floor(i/10) && Math.floor(i/10) <= 9) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 9)) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
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
    //左上
    for(let i = n - 9; ((1 <= Math.floor(i/10) && Math.floor(i/10) <= 9) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 9)) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
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
    for(let i = n + 9; ((1 <= Math.floor(i/10) && Math.floor(i/10) <= 9) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 9)) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
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
    //下
    for(let i = n + 10; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 9) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 9) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
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
    for(let i = n - 1; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 9) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 9) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
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
    for(let i = n - 10; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 9) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 9) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
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
    //上
    for(let i = n + 1; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 9) && (1 <= Math.floor(i%10) && Math.floor(i%10) <=9) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
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
    //左下
    if((1 <= Math.floor((n + 11)/10) && Math.floor((n + 11)/10) <= 9) && (1 <= Math.floor((n + 11)%10) && Math.floor((n + 11)%10) <= 9)){
        Color_change(n + 11,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n + 11)).alt) > 0){
            eval("img_" + (n + 11)).classList.remove("komaMove")
        }
        if(eval("img_" + (n + 11)).classList.contains("Oute_checkforS") && (Math.abs(k) == 3 ||Math.abs(k) == 9) && m == 0){
            eval("img_" + (n + 11)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n + 11)).classList.contains("Oute_checkforG") && (Math.abs(k) == -3 ||Math.abs(k) == -9) && m == 0){
            eval("img_" + (n + 11)).classList.remove("komaMove")
        };
    };
    //右上
    if((1 <= Math.floor((n - 11)/10) && Math.floor((n - 11)/10) <= 9) && (1 <= Math.floor((n - 11)%10) && Math.floor((n - 11)%10) <= 9)){
        Color_change(n - 11,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n - 11)).alt) > 0){
            eval("img_" + (n - 11)).classList.remove("komaMove")
        }
        if(eval("img_" + (n - 11)).classList.contains("Oute_checkforS") && (Math.abs(k) == 3 ||Math.abs(k) == 9) && m == 0){
            eval("img_" + (n - 11)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n - 11)).classList.contains("Oute_checkforG") && (Math.abs(k) == -3 ||Math.abs(k) == -9) && m == 0){
            eval("img_" + (n - 11)).classList.remove("komaMove")
        };
    };
    //左上
    if((1 <= Math.floor((n + 9)/10) && Math.floor((n + 9)/10) <= 9) && (1 <= Math.floor((n + 9)%10) && Math.floor((n + 9)%10) <= 9)){
        Color_change(n + 9,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n + 9)).alt) > 0){
            eval("img_" + (n + 9)).classList.remove("komaMove")
        }
        if(eval("img_" + (n + 9)).classList.contains("Oute_checkforS") && (Math.abs(k) == 3 ||Math.abs(k) == 9) && m == 0){
            eval("img_" + (n + 9)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n + 9)).classList.contains("Oute_checkforG") && (Math.abs(k) == -3 ||Math.abs(k) == -9) && m == 0){
            eval("img_" + (n + 9)).classList.remove("komaMove")
        };
    };
    //右下
    if((1 <= Math.floor((n - 9)/10) && Math.floor((n - 9)/10) <= 9) && (1 <= Math.floor((n - 9)%10) && Math.floor((n - 9)%10) <= 9)){
        Color_change(n - 9,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n - 9)).alt) > 0){
            eval("img_" + (n - 9)).classList.remove("komaMove")
        }
        if(eval("img_" + (n - 9)).classList.contains("Oute_checkforS") && (Math.abs(k) == 3 ||Math.abs(k) == 9) && m == 0){
            eval("img_" + (n - 9)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n - 9)).classList.contains("Oute_checkforG") && (Math.abs(k) == -3 ||Math.abs(k) == -9) && m == 0){
            eval("img_" + (n - 9)).classList.remove("komaMove")
        };
    };
};
//十字(1マス)
function Cross(n,m,k){
    //下
    if((1 <= Math.floor((n + 10)/10) && Math.floor((n + 10)/10) <= 9) && (1 <= Math.floor((n + 10)%10) && Math.floor((n + 10)%10) <= 9)){
        Color_change(n + 10,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n + 10)).alt) > 0){
            eval("img_" + (n + 10)).classList.remove("komaMove")
        };
        if(eval("img_" + (n + 10)).classList.contains("Oute_checkforS") && (Math.abs(k) == 3 ||Math.abs(k) == 9) && m == 0){
            eval("img_" + (n + 10)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n + 10)).classList.contains("Oute_checkforG") && (Math.abs(k) == -3 ||Math.abs(k) == -9) && m == 0){
            eval("img_" + (n + 10)).classList.remove("komaMove")
        };
    };
    //右
    if((1 <= Math.floor((n - 1)/10) && Math.floor((n - 1)/10) <= 9) && (1 <= Math.floor((n - 1)%10) && Math.floor((n - 1)%10) <= 9)){
        Color_change(n - 1,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n - 1)).alt) > 0){
            eval("img_" + (n - 1)).classList.remove("komaMove")
        }
        if(eval("img_" + (n - 1)).classList.contains("Oute_checkforS") && (Math.abs(k) == 3 ||Math.abs(k) == 9) && m == 0){
            eval("img_" + (n - 1)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n - 1)).classList.contains("Oute_checkforG") && (Math.abs(k) == -3 ||Math.abs(k) == -9) && m == 0){
            eval("img_" + (n - 1)).classList.remove("komaMove")
        };
    };
    //上
    if((1 <= Math.floor((n - 10)/10) && Math.floor((n - 10)/10) <= 9) && (1 <= Math.floor((n - 10)%10) && Math.floor((n - 10)%10) <= 9)){
        Color_change(n - 10,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n - 10)).alt) > 0){
            eval("img_" + (n - 10)).classList.remove("komaMove")
        }
        if(eval("img_" + (n - 10)).classList.contains("Oute_checkforS") && (Math.abs(k) == 3 ||Math.abs(k) == 9) && m == 0){
            eval("img_" + (n - 10)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n - 10)).classList.contains("Oute_checkforG") && (Math.abs(k) == -3 ||Math.abs(k) == -9) && m == 0){
            eval("img_" + (n - 10)).classList.remove("komaMove")
        };
    };
    //左
    if((1 <= Math.floor((n + 1)/10) && Math.floor((n + 1)/10) <= 9) && (1 <= Math.floor((n + 1)%10) && Math.floor((n + 1)%10) <= 9)){
        Color_change(n + 1,m);
        if(m == 0  && (eval("img_" + n).alt * eval("img_" + (n + 1)).alt) > 0){
            eval("img_" + (n + 1)).classList.remove("komaMove")
        }
        if(eval("img_" + (n + 1)).classList.contains("Oute_checkforS") && (Math.abs(k) == 3 ||Math.abs(k) == 9) && m == 0){
            eval("img_" + (n + 1)).classList.remove("komaMove")
        }
        else if(eval("img_" + (n + 1)).classList.contains("Oute_checkforG") && (Math.abs(k) == -3 ||Math.abs(k) == -9) && m == 0){
            eval("img_" + (n + 1)).classList.remove("komaMove")
        };
    };
};

//駒の細かな動き
function Move_V(m,n,l){
    //先手歩の動き
    if(m == 1){
        if((1 <= Math.floor((n - 10)/10) && Math.floor((n - 10)/10) <= 9) && (1 <= Math.floor((n - 10)%10) && Math.floor((n - 10)%10) <= 9) && (eval("img_" + n).alt * eval("img_" + (n + 10)).alt) == 0){
            Color_change(n - 10,l);
            };
    }
    //後手歩の動き
    else if(m == -1){
        if((1 <= Math.floor((n + 10)/10) && Math.floor((n + 10)/10) <= 9) && (1 <= Math.floor((n + 10)%10) && Math.floor((n + 10)%10) <= 9) && (eval("img_" + n).alt * eval("img_" + (n - 10)).alt) == 0){
            Color_change(n + 10,l);
            };
    }
    //先手銀の動き
    else if(m == 2){
        Saltire(n,l,m);
        //上
    if((1 <= Math.floor((n - 10)/10) && Math.floor((n - 10)/10) <= 9) && (1 <= Math.floor((n - 10)%10) && Math.floor((n - 10)%10) <= 9)){
        Color_change(n - 10,l);
        if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 10)).alt) > 0){
            eval("img_" + (n - 10)).classList.remove("komaMove")
        };
    };
    }
    //後手銀の動き
    else if(m == -2){
        Saltire(n,l,m);
        //下
    if((1 <= Math.floor((n + 10)/10) && Math.floor((n + 10)/10) <= 9) && (1 <= Math.floor((n + 10)%10) && Math.floor((n + 10)%10) <= 9)){
        Color_change(n + 10,l);
        if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 10)).alt) > 0){
            eval("img_" + (n + 10)).classList.remove("komaMove")
        };
    };
    }
    //玉の動き
    else if(Math.abs(m) == 3){
        Saltire(n,l,m);
        Cross(n,l,m);
    }
    //飛車の動き
    else if(Math.abs(m) == 4){
        Cross_I(n,l);
    }
    //角の動き
    else if(Math.abs(m) == 5){
        Saltire_I(n,l);
    }
    //先手桂馬の動き
    else if(m == 6){
        //上開きY
        if((1 <= Math.floor((n - 21)/10) && Math.floor((n - 21)/10) <= 8) && (1 <= Math.floor((n - 21)%10) && Math.floor((n - 21)%10) <= 8)){
            Color_change(n - 21,l);
            if(l == 0 && (eval("img_" + n).alt * eval("img_" + (n - 21)).alt) > 0){
                eval("img_" + (n - 21)).classList.remove("komaMove")
            }
        };
        if((1 <= Math.floor((n - 19)/10) && Math.floor((n - 19)/10) <= 8) && (1 <= Math.floor((n - 19)%10) && Math.floor((n - 19)%10) <= 8)){
            Color_change(n - 19,l);
            if(l == 0 && (eval("img_" + n).alt * eval("img_" + (n - 19)).alt) > 0){
                eval("img_" + (n - 19)).classList.remove("komaMove")
            }
        };
        
    }
    //後手桂馬の動き
    else if(m == -6){
        //下開きY
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
    }
    //先手金の動き
    else if(m == 7){
        Cross(n,l,m);
        //左上
        if((1 <= Math.floor((n - 9)/10) && Math.floor((n - 9)/10) <= 9) && (1 <= Math.floor((n - 9)%10) && Math.floor((n - 9)%10) <= 9)){
            Color_change(n - 9,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 9)).alt) > 0){
                eval("img_" + (n - 9)).classList.remove("komaMove")
            };
        };
        //右上
        if((1 <= Math.floor((n - 11)/10) && Math.floor((n - 11)/10) <= 9) && (1 <= Math.floor((n - 11)%10) && Math.floor((n - 11)%10) <= 9)){
            Color_change(n - 11,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 11)).alt) > 0){
                eval("img_" + (n - 11)).classList.remove("komaMove")
            };
        };
    }
    //後手金の動き
    else if(m == -7){
        Cross(n,l,m);
        //左下
        if((1 <= Math.floor((n + 9)/10) && Math.floor((n + 9)/10) <= 9) && (1 <= Math.floor((n + 9)%10) && Math.floor((n + 9)%10) <= 9)){
            Color_change(n + 9,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 9)).alt) > 0){
                eval("img_" + (n + 9)).classList.remove("komaMove")
            }
        }
        //右下
        if((1 <= Math.floor((n + 11)/10) && Math.floor((n + 11)/10) <= 9) && (1 <= Math.floor((n + 11)%10) && Math.floor((n + 11)%10) <= 9)){
            Color_change(n + 11,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 11)).alt) > 0){
                eval("img_" + (n + 11)).classList.remove("komaMove")
            };
        };
    }
    //先手香車の動き
    else if(m == 8){
        //上
        for(let i = n - 10; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 9) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 9) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
            if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
                Color_change(i,l);
                i = i - 10;
            }
            else if((eval("img_" + n).alt * eval("img_" + i).alt) != 0){
                if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                    Color_change(i,l);
                }
                else if(l != 0 && (eval("img_" + n).alt * eval("img_" + i).alt) > 0){
                    Color_change(i,l);
                }
                break;
            };
        };
    }
    //後手香車の動き
    else if(m == -8){
        //下
        for(let i = n + 10; (1 <= Math.floor(i/10) && Math.floor(i/10) <= 9) && (1 <= Math.floor(i%10) && Math.floor(i%10) <= 9) && (eval("img_" + n).alt * eval("img_" + i).alt) <= 0;){
            if((eval("img_" + n).alt * eval("img_" + i).alt) == 0){
                Color_change(i,l);
                i = i + 10;
            }
            else if((eval("img_" + n).alt * eval("img_" + i).alt) != 0){
                if((eval("img_" + n).alt * eval("img_" + i).alt) < 0){
                    Color_change(i,l);
                }
                else if(l != 0 && (eval("img_" + n).alt * eval("img_" + i).alt) > 0){
                    Color_change(i,l);
                }
                break;
            };
        };
    }
    //王の動き
    else if(Math.abs(m) == 9){
        Saltire(n,l,m);
        Cross(n,l,m);
    }
    //先手と金の動き
    else if(m == 11){
        Cross(n,l,m);
        //左上
        if((1 <= Math.floor((n - 9)/10) && Math.floor((n - 9)/10) <= 9) && (1 <= Math.floor((n - 9)%10) && Math.floor((n - 9)%10) <= 9)){
            Color_change(n - 9,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 9)).alt) > 0){
                eval("img_" + (n - 9)).classList.remove("komaMove")
            };
        };
        //右上
        if((1 <= Math.floor((n - 11)/10) && Math.floor((n - 11)/10) <= 9) && (1 <= Math.floor((n - 11)%10) && Math.floor((n - 11)%10) <= 9)){
            Color_change(n - 11,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 11)).alt) > 0){
                eval("img_" + (n - 11)).classList.remove("komaMove")
            };
        };
    }
    //後手と金の動き
    else if(m == -11){
        Cross(n,l,m);
        //左下
        if((1 <= Math.floor((n + 9)/10) && Math.floor((n + 9)/10) <= 9) && (1 <= Math.floor((n + 9)%10) && Math.floor((n + 9)%10) <= 9)){
            Color_change(n + 9,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 9)).alt) > 0){
                eval("img_" + (n + 9)).classList.remove("komaMove")
            }
        }
        //右下
        if((1 <= Math.floor((n + 11)/10) && Math.floor((n + 11)/10) <= 9) && (1 <= Math.floor((n + 11)%10) && Math.floor((n + 11)%10) <= 9)){
            Color_change(n + 11,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 11)).alt) > 0){
                eval("img_" + (n + 11)).classList.remove("komaMove")
            };
        };
    }
    //先手成銀の動き
    else if(m == 12){
        Cross(n,l,m);
        //左上
        if((1 <= Math.floor((n - 9)/10) && Math.floor((n - 9)/10) <= 9) && (1 <= Math.floor((n - 9)%10) && Math.floor((n - 9)%10) <= 9)){
            Color_change(n - 9,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 9)).alt) > 0){
                eval("img_" + (n - 9)).classList.remove("komaMove")
            };
        };
        //右上
        if((1 <= Math.floor((n - 11)/10) && Math.floor((n - 11)/10) <= 9) && (1 <= Math.floor((n - 11)%10) && Math.floor((n - 11)%10) <= 9)){
            Color_change(n - 11,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 11)).alt) > 0){
                eval("img_" + (n - 11)).classList.remove("komaMove")
            };
        };
    }
    //後手成銀の動き
    else if(m == -12){
        Cross(n,l,m);
        //左下
        if((1 <= Math.floor((n + 9)/10) && Math.floor((n + 9)/10) <= 9) && (1 <= Math.floor((n + 9)%10) && Math.floor((n + 9)%10) <= 9)){
            Color_change(n + 9,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 9)).alt) > 0){
                eval("img_" + (n + 9)).classList.remove("komaMove")
            }
        }
        //右下
        if((1 <= Math.floor((n + 11)/10) && Math.floor((n + 11)/10) <= 9) && (1 <= Math.floor((n + 11)%10) && Math.floor((n + 11)%10) <= 9)){
            Color_change(n + 11,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 11)).alt) > 0){
                eval("img_" + (n + 11)).classList.remove("komaMove")
            };
        };
    }
    //竜王の動き
    else if(Math.abs(m) == 14){
        Cross_I(n,l);
        Saltire(n,l,m)
    }
    //竜馬の動き
    else if(Math.abs(m) == 15){
        Saltire_I(n,l)
        Cross(n,l,m);
    }
    //先手成桂の動き
    else if(m == 16){
        Cross(n,l,m);
        //左上
        if((1 <= Math.floor((n - 9)/10) && Math.floor((n - 9)/10) <= 9) && (1 <= Math.floor((n - 9)%10) && Math.floor((n - 9)%10) <= 9)){
            Color_change(n - 9,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 9)).alt) > 0){
                eval("img_" + (n - 9)).classList.remove("komaMove")
            };
        };
        //右上
        if((1 <= Math.floor((n - 11)/10) && Math.floor((n - 11)/10) <= 9) && (1 <= Math.floor((n - 11)%10) && Math.floor((n - 11)%10) <= 9)){
            Color_change(n - 11,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 11)).alt) > 0){
                eval("img_" + (n - 11)).classList.remove("komaMove")
            };
        };
    }
    //後手成桂の動き
    else if(m == -16){
        Cross(n,l,m);
        //左下
        if((1 <= Math.floor((n + 9)/10) && Math.floor((n + 9)/10) <= 9) && (1 <= Math.floor((n + 9)%10) && Math.floor((n + 9)%10) <= 9)){
            Color_change(n + 9,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 9)).alt) > 0){
                eval("img_" + (n + 9)).classList.remove("komaMove")
            }
        }
        //右下
        if((1 <= Math.floor((n + 11)/10) && Math.floor((n + 11)/10) <= 9) && (1 <= Math.floor((n + 11)%10) && Math.floor((n + 11)%10) <= 9)){
            Color_change(n + 11,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 11)).alt) > 0){
                eval("img_" + (n + 11)).classList.remove("komaMove")
            };
        };
    }
    //先手成香の動き
    else if(m == 18){
        Cross(n,l,m);
        //左上
        if((1 <= Math.floor((n - 9)/10) && Math.floor((n - 9)/10) <= 9) && (1 <= Math.floor((n - 9)%10) && Math.floor((n - 9)%10) <= 9)){
            Color_change(n - 9,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 9)).alt) > 0){
                eval("img_" + (n - 9)).classList.remove("komaMove")
            };
        };
        //右上
        if((1 <= Math.floor((n - 11)/10) && Math.floor((n - 11)/10) <= 9) && (1 <= Math.floor((n - 11)%10) && Math.floor((n - 11)%10) <= 9)){
            Color_change(n - 11,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 11)).alt) > 0){
                eval("img_" + (n - 11)).classList.remove("komaMove")
            };
        };
    }
    //後手成香の動き
    else if(m == -18){
        Cross(n,l,m);
        //左下
        if((1 <= Math.floor((n + 9)/10) && Math.floor((n + 9)/10) <= 9) && (1 <= Math.floor((n + 9)%10) && Math.floor((n + 9)%10) <= 9)){
            Color_change(n + 9,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 9)).alt) > 0){
                eval("img_" + (n + 9)).classList.remove("komaMove")
            }
        }
        //右下
        if((1 <= Math.floor((n + 11)/10) && Math.floor((n + 11)/10) <= 9) && (1 <= Math.floor((n + 11)%10) && Math.floor((n + 11)%10) <= 9)){
            Color_change(n + 11,l);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 11)).alt) > 0){
                eval("img_" + (n + 11)).classList.remove("komaMove")
            };
        };
    }
};

//ターン表示
function turn_E(){
    if(turn == 1){
        document.getElementById("S_turn_E").innerHTML = "先手の手番です";
        document.getElementById("G_turn_E").innerHTML = "先手の手番です";
    }
    else if(turn == -1){
        document.getElementById("S_turn_E").innerHTML = "後手の手番です";
        document.getElementById("G_turn_E").innerHTML = "後手の手番です";
    };
};

//行動範囲のクリーニング
function Cleaning(){
    for(let i = 1; i <= 9; i++){
        for(let j = 1;j <= 9; j++){
            let ij = (10 * i) + j
            if(eval("img_" + ij).classList.contains("komaMove")){
                eval("img_" + ij).classList.remove("komaMove");
            };
        };
    };
}

//王手のチェック
function Oute_check(){
    //クリーニング
    for(let i = 1; i <= 8; i++){
        for(let j = 1;j <= 8; j++){
            let ij = (10 * i) + j
            if(eval("img_" + ij).classList.contains("Oute_checkforS")){
                eval("img_" + ij).classList.remove("Oute_checkforS");
            };
            if(eval("img_" + ij).classList.contains("Oute_checkforG")){
                eval("img_" + ij).classList.remove("Oute_checkforG");
            };
        };
    };
    let S_king_P
    let G_king_P
    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            let ij = (10 * i) + j;
            if(eval("img_" + ij).alt < 0){
                Move_V(eval("img_" + ij).alt,ij,2)
            };
            if(eval("img_" + ij).alt == 3 || eval("img_" + ij).alt == 9){
                S_king_P = ij;
            };
        };
    };
    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            let ij = (10 * i) + j;
            if(eval("img_" + ij).alt > 0){
                Move_V(eval("img_" + ij).alt,ij,1)
            };
            if(eval("img_" + ij).alt == -3 || eval("img_" + ij).alt == -9){
                G_king_P = ij;
            };
        };
    };
    //王手の確認
    if(eval("img_" + S_king_P).classList.contains("Oute_checkforS")){
        document.getElementById("S_check_E").innerHTML = "王手されています"
    }
    else{
        document.getElementById("S_check_E").innerHTML = ""
    };
    if(eval("img_" + G_king_P).classList.contains("Oute_checkforG")){
        document.getElementById("G_check_E").innerHTML = "王手されています"
    }
    else{
        document.getElementById("G_check_E").innerHTML = ""
    };
}

//持ち駒の記録
function Moti(n){
    if((turn * (-1)) == 1){
        if((turn * (-1)) * eval("img_" + n).alt < 0){
            S_get.push(eval("img_" + n).alt)
        }
    }
    else if((turn * (-1)) == -1){
        if((turn * (-1)) * eval("img_" + n).alt < 0){
            G_get.push(eval("img_" + n).alt)
        }
    }
}

//持ち駒の表示
function Moti_E(){

}

//メインの関数
function Syougi(n){
    //自分の駒を触ったとき
    if(turn * eval("img_" + n).alt > 0){
        //さっきと同じ駒なら
        if(n == old_P){
            mode = 0;
            old_P = 0;
            //行動範囲のクリーニング
            Cleaning();
        }
        //さっきと別の自分の駒
        else if(n != old_P){
            //行動範囲のクリーニング
            Cleaning();

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
                    Ki.push(S_get);
                    Ki.push(G_get);
                    //駒の位置
                    for(let i = 1; i <= 8; i++){
                        for (let j = 1; j <= 8; j++){
                            let ij = (10 * i) + j;
                            Ki.push(eval("img_" + ij).alt);
                        };
                    };
                
                    kifu.push(Ki);
                    turn = turn * (-1);
                };
                
        //駒の移動
                //成り選択画面表示 
                
                
            //その他
                    Moti(n);
                    //駒の画像の入れ替え
                    eval("img_" + n).alt = eval("img_" + old_P).alt;
                    eval("img_" + old_P).alt = 0;
                    changeImage(n);
                    changeImage(old_P);
                

                //王手チェック
                Oute_check();

                mode = 0;

                //ターン表示
                turn_E();

                //行動範囲のクリーニング
                Cleaning();

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
                old_P = 0;
                Cleaning();
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
        S_get = N_kifu.slice(0,1);
        Ki.splice(0,1)
        G_get = N_kifu.slice(0,1);
        Ki.splice(0,1)
        for(let i = 0; i <= 8; i++){
            Ki.splice((10 * i),0,0);
        };
        console.log(Ki)

        for(let i = 1; i <= 9; i++){
            for(let j = 1; j <= 9; j++){
                let ij = (10 * i) + j;
                eval("img_" + ij).alt = parseInt(Ki.slice(ij - 10,ij - 9));
                changeImage(ij);
            };
        };
        turnsum = turnsum - 1;
        kifu.pop();
        Cleaning();

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
    N_kifu.push(S_get);
    N_kifu.push(G_get);
    //駒の位置
    for(let i = 1; i <= 9; i++){
        for (let j = 1; j <= 9; j++){
            let ij = (10 * i) + j;
            N_kifu.push(eval("img_" + ij).alt);
        };
    };
};

//盤面データの出力
function N_kifu_D_E(){
    S_kifu_N();
    let N_kifu_C = [].concat(N_kifu)
    N_kifu_C.splice(0,4)
    S_get = N_kifu[2]
    G_get = N_kifu[3]
    document.getElementsByClassName("data_E")[0].value = "[" + N_kifu[0] + "," + N_kifu[1] + ",[" + S_get + "]" + ",[" + G_get + "]," + N_kifu_C +"]";
}

//盤面データの復元
function kifu_D_R(){
    if(document.getElementsByClassName("data_E")[1].value !== null){
        N_kifu = eval(document.getElementsByClassName("data_E")[1].value);
        //棋譜から盤面を再現
        turn = parseInt(N_kifu.slice(0,1));
        N_kifu.splice(0,1);
        turnsum = parseInt(N_kifu.slice(0,1));
        N_kifu.splice(0,1);
        S_get = N_kifu.slice(0,1);
        N_kifu.splice(0,1)
        G_get = N_kifu.slice(0,1);
        N_kifu.splice(0,1)
        for(let i = 0; i <= 8; i++){
            N_kifu.splice((10 * i),0,0);
        };
        for(let i = 1; i <= 9; i++){
            for(let j = 1; j <= 9; j++){
                let ij = (10 * i) + j;
                eval("img_" + ij).alt = parseInt(N_kifu.slice(ij - 10,ij - 9));
                changeImage(ij);
            };
        };
        
        if(turn == 0){

        };
        //ターン表示
        turn_E();

        Oute_check();
        //行動範囲のクリーニング
        Cleaning();
    };
}

//リセット
function Reset(){
    //各種数値
    mode = 0;
    turn = 1;
    turnsum = 0;
    old_P = 0;
    prom_F = 0;
    prom_P = 0;
    kifu = [[1,0,[],[],-8,-6,-2,-7,-3,-7,-2,-6,-8,-5,0,0,0,0,0,-4,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,4,0,0,0,0,0,5,0,8,6,2,7,9,7,2,6,8]];
    N_kifu = [1,0,[],[],-8,-6,-2,-7,-3,-7,-2,-6,-8,-5,0,0,0,0,0,-4,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,4,0,0,0,0,0,5,0,8,6,2,7,9,7,2,6,8];

    //棋譜から盤面を再現
    turn = parseInt(N_kifu.slice(0,1));
    N_kifu.splice(0,1);
    turnsum = parseInt(N_kifu.slice(0,1));
    N_kifu.splice(0,1);
    S_get = N_kifu.slice(0,1);
    N_kifu.splice(0,1)
    G_get = N_kifu.slice(0,1);
    N_kifu.splice(0,1)
    for(let i = 0; i <= 8; i++){
        N_kifu.splice((10 * i),0,0);
    };
    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            let ij = (10 * i) + j;
            eval("img_" + ij).alt = parseInt(N_kifu.slice(ij - 10,ij - 9));
            changeImage(ij);
        };
    };

    //行動範囲のクリーニング
    Cleaning();

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
        S_get = N_kifu.slice(0,1);
        N_kifu.splice(0,1)
        G_get = N_kifu.slice(0,1);
        N_kifu.splice(0,1)
        for(let i = 0; i <= 8; i++){
            N_kifu.splice((10 * i),0,0);
        };
        for(let i = 1; i <= 9; i++){
            for(let j = 1; j <= 9; j++){
                let ij = (10 * i) + j;
                eval("img_" + ij).alt = parseInt(N_kifu.slice(ij - 10,ij - 9));
                changeImage(ij);
            };
        };
        
        if(turn == 0){
            
        };
        Oute_check();
        //ターン表示
        turn_E();
        //行動範囲のクリーニング
        Cleaning();
    };
});

function check(){
}
