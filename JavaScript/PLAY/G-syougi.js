//青が先手(+)、赤が後手(-)

//変数宣言
for (let i = 1; i<=9; i++){
    for(let j=1; j<=6; j++){
        let ij = (10 * i) + j;
        eval("var img_" + ij + "= document.getElementById('img_" + ij + "');")
    }
}

var img_0 = document.getElementById("img_0")

const R_W = document.getElementById("R_W");
const B_W = document.getElementById("B_W");

let mode = 0;
let turn = 1;   //1が先手、-1が後手の手番
let turnsum = 0;
let old_P = 0; //駒を動かす前の位置

function changeImage(n){
    if(Math.abs(eval("img_" + n).alt) == 1){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-MC.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 2){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-LC.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 3){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-C.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 4){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-MF.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 5){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-LF.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 6){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-F.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 7){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-MG.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 8){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-LG.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 9){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-G.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 10){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-spy.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 11){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-tank.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 12){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-N.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 13){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-A.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 14){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-Eng.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 15){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-land.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 16){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/b-WarF.png"
    }

    else if(Math.abs(eval("img_" + n).alt) == -1){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-MC.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -2){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-LC.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -3){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-C.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -4){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-MF.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -5){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-LF.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -6){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-F.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -7){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-MG.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == 81){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-LG.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -9){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-G.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -10){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-spy.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -11){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-tank.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -12){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-N.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -13){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-A.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -14){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-Eng.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -15){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-land.png"
    }
    else if(Math.abs(eval("img_" + n).alt) == -16){
        eval("img_" + n).src = "../images/PLAY/G-syougi koma/r-WarF.png"
    }
}

//渡した座標の背景を変える
function Color_change(n,m){
    if(m == 0){
        eval("img_" + n).classList.add("komaMove")
    }
};

//駒の細かな動き
function Move_V(m,n,l){
    //将官、佐官、尉官、スパイ
    if(Math.abs(m) <= 9){
        //左下
        if((1 <= Math.floor((n + 11)/10) && Math.floor((n + 11)/10) <= 9) && (1 <= Math.floor((n + 11)%10) && Math.floor((n + 11)%10) <= 6)){
            Color_change(n + 11,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 11)).alt) > 0){
                eval("img_" + (n + 11)).classList.remove("komaMove")
            }
        };
        //右上
        if((1 <= Math.floor((n - 11)/10) && Math.floor((n - 11)/10) <= 9) && (1 <= Math.floor((n - 11)%10) && Math.floor((n - 11)%10) <= 6)){
            Color_change(n - 11,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 11)).alt) > 0){
                eval("img_" + (n - 11)).classList.remove("komaMove")
            }
        };
        //左上
        if((1 <= Math.floor((n + 9)/10) && Math.floor((n + 9)/10) <= 9) && (1 <= Math.floor((n + 9)%10) && Math.floor((n + 9)%10) <= 6)){
            Color_change(n + 9,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 9)).alt) > 0){
                eval("img_" + (n + 9)).classList.remove("komaMove")
            }
        };
        //右下
        if((1 <= Math.floor((n - 9)/10) && Math.floor((n - 9)/10) <= 9) && (1 <= Math.floor((n - 9)%10) && Math.floor((n - 9)%10) <= 6)){
            Color_change(n - 9,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 9)).alt) > 0){
                eval("img_" + (n - 9)).classList.remove("komaMove")
            }
        };
            //下
        if((1 <= Math.floor((n + 10)/10) && Math.floor((n + 10)/10) <= 9) && (1 <= Math.floor((n + 10)%10) && Math.floor((n + 10)%10) <= 6)){
            Color_change(n + 10,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 10)).alt) > 0){
                eval("img_" + (n + 10)).classList.remove("komaMove")
            };
        };
        //右
        if((1 <= Math.floor((n - 1)/10) && Math.floor((n - 1)/10) <= 9) && (1 <= Math.floor((n - 1)%10) && Math.floor((n - 1)%10) <= 6)){
            Color_change(n - 1,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 1)).alt) > 0){
                eval("img_" + (n - 1)).classList.remove("komaMove")
            }
        };
        //上
        if((1 <= Math.floor((n - 10)/10) && Math.floor((n - 10)/10) <= 9) && (1 <= Math.floor((n - 10)%10) && Math.floor((n - 10)%10) <= 6)){
            Color_change(n - 10,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 10)).alt) > 0){
                eval("img_" + (n - 10)).classList.remove("komaMove")
            }
        };
        //左
        if((1 <= Math.floor((n + 1)/10) && Math.floor((n + 1)/10) <= 9) && (1 <= Math.floor((n + 1)%10) && Math.floor((n + 1)%10) <= 6)){
            Color_change(n + 1,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 1)).alt) > 0){
                eval("img_" + (n + 1)).classList.remove("komaMove")
            }
        };
    }
    //青側戦車、騎兵
    else if(m == 11 || m == 12){
        //下
        if((1 <= Math.floor((n + 10)/10) && Math.floor((n + 10)/10) <= 9) && (1 <= Math.floor((n + 10)%10) && Math.floor((n + 10)%10) <= 6)){
            Color_change(n + 10,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 10)).alt) > 0){
                eval("img_" + (n + 10)).classList.remove("komaMove")
            };
        };
        //右
        if((1 <= Math.floor((n - 1)/10) && Math.floor((n - 1)/10) <= 9) && (1 <= Math.floor((n - 1)%10) && Math.floor((n - 1)%10) <= 6)){
            Color_change(n - 1,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 1)).alt) > 0){
                eval("img_" + (n - 1)).classList.remove("komaMove")
            }
        };
        //上
        if((1 <= Math.floor((n - 10)/10) && Math.floor((n - 10)/10) <= 9) && (1 <= Math.floor((n - 10)%10) && Math.floor((n - 10)%10) <= 6)){
            Color_change(n - 10,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 10)).alt) > 0){
                eval("img_" + (n - 10)).classList.remove("komaMove")
            }
        };
        //2コ上
        if((1 <= Math.floor((n - 20)/10) && Math.floor((n - 20)/10) <= 9) && (1 <= Math.floor((n - 20)%10) && Math.floor((n - 20)%10) <= 6) && eval("img_" + n).alt * eval("img_" + (n - 10)).alt == 0){
            Color_change(n - 20,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 20)).alt) > 0){
                eval("img_" + (n - 20)).classList.remove("komaMove")
            }
        };
        //左
        if((1 <= Math.floor((n + 1)/10) && Math.floor((n + 1)/10) <= 9) && (1 <= Math.floor((n + 1)%10) && Math.floor((n + 1)%10) <= 6)){
            Color_change(n + 1,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 1)).alt) > 0){
                eval("img_" + (n + 1)).classList.remove("komaMove")
            }
        }
    }
    //赤側戦車、騎兵
    else if(m == 11 || m == 12){
        //下
        if((1 <= Math.floor((n + 10)/10) && Math.floor((n + 10)/10) <= 9) && (1 <= Math.floor((n + 10)%10) && Math.floor((n + 10)%10) <= 6)){
            Color_change(n + 10,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 10)).alt) > 0){
                eval("img_" + (n + 10)).classList.remove("komaMove")
            };
        };
        //2コ下
        if((1 <= Math.floor((n + 20)/10) && Math.floor((n + 20)/10) <= 9) && (1 <= Math.floor((n + 20)%10) && Math.floor((n + 20)%10) <= 6 && eval("img_" + n).alt * eval("img_" + (n + 10)).alt == 0)){
            Color_change(n + 20,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 20)).alt) > 0){
                eval("img_" + (n - 20)).classList.remove("komaMove")
            }
        };
        //右
        if((1 <= Math.floor((n - 1)/10) && Math.floor((n - 1)/10) <= 9) && (1 <= Math.floor((n - 1)%10) && Math.floor((n - 1)%10) <= 6)){
            Color_change(n - 1,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 1)).alt) > 0){
                eval("img_" + (n - 1)).classList.remove("komaMove")
            }
        };
        //上
        if((1 <= Math.floor((n - 10)/10) && Math.floor((n - 10)/10) <= 9) && (1 <= Math.floor((n - 10)%10) && Math.floor((n - 10)%10) <= 6)){
            Color_change(n - 10,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 10)).alt) > 0){
                eval("img_" + (n - 10)).classList.remove("komaMove")
            }
        };
        //左
        if((1 <= Math.floor((n + 1)/10) && Math.floor((n + 1)/10) <= 9) && (1 <= Math.floor((n + 1)%10) && Math.floor((n + 1)%10) <= 6)){
            Color_change(n + 1,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 1)).alt) > 0){
                eval("img_" + (n + 1)).classList.remove("komaMove")
            }
        };
    }
    //飛行機
    else if(Math.abs(m) == 13){
        //左
        if((1 <= Math.floor((n + 1)/10) && Math.floor((n + 1)/10) <= 9) && (1 <= Math.floor((n + 1)%10) && Math.floor((n + 1)%10) <= 6)){
            Color_change(n + 1,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n + 1)).alt) > 0){
                eval("img_" + (n + 1)).classList.remove("komaMove")
            }
        };
        //右
        if((1 <= Math.floor((n - 1)/10) && Math.floor((n - 1)/10) <= 9) && (1 <= Math.floor((n - 1)%10) && Math.floor((n - 1)%10) <= 6)){
            Color_change(n - 1,m);
            if(l == 0  && (eval("img_" + n).alt * eval("img_" + (n - 1)).alt) > 0){
                eval("img_" + (n - 1)).classList.remove("komaMove")
            }
        };
        //前後

    }
    //工兵
    else if(Math.abs(m) == 14){
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
    }
}

//ターン表示
function turn_E(){
    if(turn == 1){
        document.getElementById("B_turn_E").innerHTML = "青の手番です";
        document.getElementById("R_turn_E").innerHTML = "青の手番です";
    }
    else if(turn == -1){
        document.getElementById("B_turn_E").innerHTML = "赤の手番です";
        document.getElementById("R_turn_E").innerHTML = "赤の手番です";
    };
};

//行動範囲のクリーニング
function Cleaning(){
    for(let i = 1; i <= 9; i++){
        for(let j = 1;j <= 6; j++){
            let ij = (10 * i) + j
            if(eval("img_" + ij).classList.contains("komaMove")){
                eval("img_" + ij).classList.remove("komaMove");
            };
        };
    };
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
                    //駒の位置
                    for(let i = 1; i <= 9; i++){
                        for (let j = 1; j <= 6; j++){
                            let ij = (10 * i) + j;
                            Ki.push(eval("img_" + ij).alt);
                        };
                    };
                
                    kifu.push(Ki);
                    turn = turn * (-1);
                };
                
            //駒の移動
                
                //駒の画像の入れ替え
                eval("img_" + n).alt = eval("img_" + old_P).alt;
                eval("img_" + old_P).alt = 0;
                changeImage(n);
                changeImage(old_P);

                mode = 0;

                //ターン表示
                turn_E();

                //行動範囲のクリーニング
                Cleaning();

                //N_kifuの更新
                S_kifu_N();

                if(localStorage.getItem("kifu_H") !== null){
                    localStorage.removeItem("kifu_H");
                }
                try{
                    let kifu_H = kifu.concat();
                    kifu_H.push(N_kifu);
                    localStorage.setItem("kifu_H", JSON.stringify(kifu_H));
                }
                catch(e){
                    console.log(e);
                };
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
        for(let i = 0; i <= 8; i++){
            Ki.splice((10 * i),0,0);
        };

        for(let i = 1; i <= 9; i++){
            for(let j = 1; j <= 6; j++){
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
    //駒の位置
    for(let i = 1; i <= 9; i++){
        for (let j = 1; j <= 6; j++){
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
        for(let i = 0; i <= 8; i++){
            N_kifu.splice((10 * i),0,0);
        };
        for(let i = 1; i <= 9; i++){
            for(let j = 1; j <= 6; j++){
                let ij = (10 * i) + j;
                eval("img_" + ij).alt = parseInt(N_kifu.slice(ij - 10,ij - 9));
                changeImage(ij);
            };
        };
        
        if(turn == 0){
            if(Math.floor(turnsum % 2) == 0){
                turn = 1;
            }
            else if(Math.floor(turnsum % 2) == 1){
                turn = -1;
            }
        };
        //ターン表示
        turn_E();

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

    //棋譜から盤面を再現
    turn = parseInt(N_kifu.slice(0,1));
    N_kifu.splice(0,1);
    turnsum = parseInt(N_kifu.slice(0,1));
    N_kifu.splice(0,1);
    for(let i = 0; i <= 8; i++){
        N_kifu.splice((10 * i),0,0);
    };
    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 6; j++){
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
        for(let i = 0; i <= 8; i++){
            N_kifu.splice((10 * i),0,0);
        };
        for(let i = 1; i <= 9; i++){
            for(let j = 1; j <= 6; j++){
                let ij = (10 * i) + j;
                eval("img_" + ij).alt = parseInt(N_kifu.slice(ij - 10,ij - 9));
                changeImage(ij);
            };
        };
        
        if(turn == 0){
            if(Math.floor(turnsum % 2) == 0){
                turn = 1;
            }
            else if(Math.floor(turnsum % 2) == 1){
                turn = -1;
            }
        };
        //ターン表示
        turn_E();
        //行動範囲のクリーニング
        Cleaning();
    };
});