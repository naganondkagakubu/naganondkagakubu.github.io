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