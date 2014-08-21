jQuery(document).ready(function(){

    var jsFolder = "../images/";

    jQuery("#amazingslider-12").amazingslider({

        jsfolder:jsFolder,

        width:600,

        height:400,

        autoplay:true,

        loop:0,

        navwidth:120,

        arrowimage:"arrows-32-32-0.png",

        timeropacity:0.6,

        navthumbnavigationarrowimage:"carouselarrows-32-32-0.png",

        navarrowimage:"navarrows-28-28-0.png",

        arrowtop:50,

        navbuttonbgimage:"navbuttonbgimage-28-28-0.png",

        navborder:2,

        bottomshadowimagewidth:110,

        navradius:0,

        navshowpreview:false,

        navpreviewarrowheight:8,

        navmarginx:16,

        navfeaturedarrowimage:"featuredarrow-16-8-0.png",

        navfeaturedarrowimageheight:8,

        
        slide: {

            duration:1000,

            easing:"easeOutCubic",

            checked:true

        },

        transition:"slide"

    });

});