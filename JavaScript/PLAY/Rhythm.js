//変数宣言
var canvas;
var ctx;
var S_Wid = 800;
var S_Hei = 600;
var Asset = {};

//アセット読み込み
Asset.assets = [
    { type: "image", name: "tes", src: "../images/PLAY/Rhythm/images/bB.png"},
    { type: "image", name: "te", src: "../images/PLAY/Rhythm/images/bB.png"}
];

//読み込んだ画像
Asset.images = {};

//アセットの読み込み
Asset.loadAssets = function(onComplete){
    let total = Asset.assets.length;
    let loadCount = 0;

    var onLoad = function(){
        loadCount++;
        if(loadCount >= total){
            onComplete();
        };
    };

    Asset.assets.forEach(function(asset) {
        switch(asset.type){
            case "image":
                Asset._loadImage(asset, onLoad); //画像の読み込み
                break;
        }
    });
};

//画像の読み込み
Asset._loadImage = function(asset, onLoad){
    var image = new Image();
    image.src = asset.src;
    image.onload = onLoad;
    Asset.images[asset.name] = image;
};

//ウィンドウ読み込み時の処理
function init(){
    canvas = document.getElementById("M_canvas");
    ctx = canvas.getContext("2d");

    console.log("ok")
    
    canvas.width = S_Wid
    canvas.height = S_Hei

    Asset.loadAssets(function(){
        requestAnimationFrame(update);
    });
};

//フレームの更新
function update(){
    requestAnimationFrame(update);

    render();
};

//描画処理
function render(){
    //一旦全部クリア
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //背景の表示
    ctx.drawImage(Asset.images["tes"], 0, 0);
};

//ウィンドウ読み込み時の処理
window.addEventListener("load", init());