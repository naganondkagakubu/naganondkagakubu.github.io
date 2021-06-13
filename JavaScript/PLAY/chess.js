//変数宣言
for (let i = 1; i<=8; i++){
    for(let j=1; j<=8; j++){
        let ij = String(i) + String(j)
        eval("var img_" + ij + "= document.getElementById('img" + ij + "');")
    }
}

function changeImage(n){
    if(eval("img_" + n).alt == 1){
        eval("img_" + n).src = ../images/PLAY/chasspieces/bB.png;
    }
    else if(eval("img_" + n).alt == 2){
        eval("img_" + n).src = ../images/PLAY/chasspieces/bK.png;
    }
    else if(eval("img_" + n).alt == 3){
        eval("img_" + n).src = ../images/PLAY/chasspieces/bN.png;
    }
    else if(eval("img_" + n).alt == 4){
        eval("img_" + n).src = "../images/PLAY/chasspieces/bP.png"
    }
    else if(eval("img_" + n).alt == 5){
        eval("img_" + n).src= "../images/PLAY/chasspieces/bQ.png"
    }
    else if(eval("img_" + n).alt == 6){
        eval("img_" + n).src = "../images/PLAY/chasspieces/bR.png"
    }
    else if(eval("img_" + n).alt == -1){
        eval("img_" + n).src = "../images/PLAY/chasspieces/wB.png"
    }
    else if(eval("img_" + n).alt == -2){
        eval("img_" + n).src = "../images/PLAY/chasspieces/wK.png"
    }
    else if(eval("img_" + n).alt == -3){
        eval("img_" + n).src = "../images/PLAY/chasspieces/wN.png"
    }
    else if(eval("img_" + n).alt == -4){
        eval("img_" + n).src = "../images/PLAY/chasspieces/wP.png"
    }
    else if(eval("img_" + n).alt == -5){
        eval("img_" + n).src = "../images/PLAY/chasspieces/wQ.png"
    }
    else if(eval("img_" + n).alt == -6){
        eval("img_" + n).src = "../images/PLAY/chasspieces/wR.png"
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