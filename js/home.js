var Home = (function(){
    
    function init () {
        $("#introduction").animate({"padding-top":"10%","opacity":1},1000,function() {
            $("#introduction span").animate({"opacity":1},2000);
            $("#introduction #about-me").animate({"opacity":1},1000);
            $("#introduction #my-pic").fadeIn("300").addClass("rotate");
            $("#callback-contact").animate({"opacity":1},2000);
        });
    }
    
    return {
        init : init
    }
})(jQuery);
Home.init();