//変数宣言
for (let i = 1; i<=8; i++){
    for(let j=1; j<=8; j++){
        let ij = String(i) + String(j)
        eval("var img_" + ij + "= document.getElementById('img" + ij + "');")
    }
}

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
        eval("img_" + n).src = "" , eval("img_" + n).alt = "";
    }
};

function Chess(){
    if(a){

    };
};

function check(){
    img_18.alt = 2;
    changeImage(18);
};