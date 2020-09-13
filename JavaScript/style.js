jQuery(function(){
    jQuery(".menu-btn").on("click",function(){
        jQuery(".menu-btn, .menu").toggleClass("is-active");
    });
}());

jQuery(function(){
    jQuery(document).on("click", function(event){
        if (!jQuery(event.target).closest(".menu-btn").length){
            jQuery(".menu-btn.is-active, .menu.is-active").removeClass("is-active")
        }
    })
});