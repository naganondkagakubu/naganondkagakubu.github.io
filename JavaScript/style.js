//ハンバーガーメニュー
//メニューのON/OFF
jQuery(function(){
    jQuery(".menu-btn").on("click",function(){
        jQuery(".menu-btn, .menu").toggleClass("is-active");
    });
}());

//領域外クリックでメニューを閉じる
jQuery(function(){
    jQuery(".whole").on("click", function(event){
        if (!jQuery(event.target).closest(".menu-btn").length){
            jQuery(".menu-btn.is-active, .menu.is-active").removeClass("is-active")
        }
    })
});



//URL転送
function TP_URL(){
    URL1=prompt("URLを入力してください","https://")
    location.href=URL1
}



//PW機能
function PW(){
    PW1=prompt("URLを入力してください","")
    if(PW1=="URL")
        location.href="https://naganonkagakubu.github.io/HAL_TS/index.html";
    else if(PW1=="HAL")
        location.href="https://naganonkagakubu.github.io/HAL_TS/TS14789632147898452.html";
    else if(PW1=="PLAY")
        location.href="https://naganonkagakubu.github.io/PLAY/index.html";
    else if(PW1=="TEST")
        location.href="https://naganonkagakubu.github.io/testtest/index.html";
    else
        console.log("パスワードが違うﾖ")
}