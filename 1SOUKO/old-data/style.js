//メニューのON/OFF
jQuery(function(){
    jQuery(".menu-btn").on("click",function(){
        jQuery(".menu-btn, .menu").toggleClass("is-active");
    });
}());
// サブメニューのON/OFF
jQuery(function(){
    jQuery('.menu_item_li').each(function(){
        jQuery(this).on('click',function(){
            jQuery("+.submenu_item_ul",this).slideToggle();
            return false;
        });
    });
});
//領域外クリックでメニューを閉じる
jQuery(function(){
    jQuery(".whole").on("click", function(event){
        if (!jQuery(event.target).closest(".menu-btn").length){
            jQuery(".menu-btn.is-active, .menu.is-active").removeClass("is-active")
        }
    })
});