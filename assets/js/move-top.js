!function(o){o.fn.UItoTop=function(n){var e=o.extend({text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1e3,easingType:"linear"},n),t="#"+e.containerID,i="#"+e.containerHoverID;o("body").append('<a href="#" id="'+e.containerID+'">'+e.text+"</a>"),o(t).hide().on("click.UItoTop",function(){return o("html, body").animate({scrollTop:0},e.scrollSpeed,e.easingType),o("#"+e.containerHoverID,this).stop().animate({opacity:0},e.inDelay,e.easingType),!1}).prepend('<span id="'+e.containerHoverID+'"></span>').hover(function(){o(i,this).stop().animate({opacity:1},600,"linear")},function(){o(i,this).stop().animate({opacity:0},700,"linear")}),o(window).scroll(function(){var n=o(window).scrollTop();void 0===document.body.style.maxHeight&&o(t).css({position:"absolute",top:n+o(window).height()-50}),n>e.min?o(t).fadeIn(e.inDelay):o(t).fadeOut(e.Outdelay)})}}(jQuery);