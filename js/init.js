//returns the number of class occurances
function getClassCount(className){
	return jQuery("."+className).length;
}

function setArticleBoxWidth(numArticles){
	var highPriorityCount = getClassCount("high-priority-news");
	var mediumPriorityCount = getClassCount("medium-priority-news");
	var lowPriorityCount = getClassCount("low-priority-news");
	var articleWidth = 100/numArticles;

	//var marginSize = .3;
	jQuery(".news-box").css({"width": (articleWidth)+"%", "padding-bottom": articleWidth/1.5+"%" });
	//jQuery(".high-priority-news").css({"min-width": (100-marginSize)+"%", "padding-bottom": articleWidth/1.5+"%"});
	//jQuery(".medium-priority-news").css({"min-width": (50-marginSize)+"%", "padding-bottom": articleWidth/1.5+"%"})
}

//sets the height of the intro screen
function setIntroHeight(){
	var newHeight = jQuery(window).height();
	newHeight = newHeight - jQuery("header").height();
	jQuery(".news-page-intro").css({"height":newHeight+"px"});
}

//makes image background look like its scrolling slower than the content of the page
function parallax(myPage){
	if(!myPage.mobile){
		var currentScroll = -(jQuery(window).scrollTop())/10; //determines the speed of the scrolling effect
		myPage.scrollPosCurrent = currentScroll;
		myPage.scrollPosPrev = myPage.scrollPosCurrent;
		// Put together final background position
	    var coords = '50% '+ currentScroll + 'px';
	    // Move the background
	    jQuery(".parallax").css({ "backgroundPosition": coords });
    }
}

//NAVIGATION STUFF
//shows the navigation bar
function showMenu(myPage){
	jQuery("#nav-bar").removeClass("menu-hiding").addClass("menu-showing");
	jQuery(".nav-item").removeClass("nav-item-hiding").addClass("nav-item-showing");
	myPage.menuShowing = true;
}
//hides the navigation bar
function hideMenu(myPage){
	jQuery(".nav-item").removeClass("nav-item-showing").addClass("nav-item-hiding");
	jQuery("#nav-bar").removeClass("menu-showing").addClass("menu-hiding");
	myPage.menuShowing = false;
}
//END NAVIGATION STUFF

//SCROLL STUFF-----------
//determines the direction the user is scrolling
function showFooter(myPage){
	if(myPage.scrollPosPrev < jQuery("#content").scrollTop() || jQuery("#content").scrollTop() == 0){
		jQuery("footer").removeClass("footer-show").addClass("footer-hide");
	}else{	
		jQuery("footer").removeClass("footer-hide").addClass("footer-show");
	}
	myPage.scrollPosPrev = jQuery("#content").scrollTop();
}
//END SCROLL STUFF

//initializes page and adds event listeners to interactive items on the page
function init(myPage){
	setArticleBoxWidth(3);
	setIntroHeight();
	
	jQuery("#menu-icon").on('click',function(){
		if(!myPage.menuShowing){
			showMenu(myPage);
		}else{
			hideMenu(myPage);
		}
	});
	
	jQuery(window).on('resize',function(){
		setIntroHeight();
	});
	
	//hide the menu if the user clicks on the content of the page
	jQuery("#content").on('click',function(){
		hideMenu(myPage);
	});
	
	jQuery("#content").on("scroll",function(){	
		//shrinks the header if the user scrolls past the top of the page	
		if(jQuery("#content").scrollTop() > 0){
			jQuery("header").removeClass("big-header").addClass("small-header");
		}else{
			jQuery("header").removeClass("small-header").addClass("big-header");
		}
		showFooter(myPage);
		//parallax(myPage); //makes the parallax effect
	});
	
	//on news box hover, change the appearance of the boxes
	jQuery(".news-box").on('mouseenter', function(){
		jQuery(this).find(".news-box-info").addClass("news-box-info-active");
		jQuery(this).find(".news-box-title-external-box").addClass("news-box-title-external-hiding");
	});
	jQuery(".news-box").on('mouseleave', function(){
		jQuery(this).find(".news-box-info").removeClass("news-box-info-active");
		jQuery(this).find(".news-box-title-external-box").removeClass("news-box-title-external-hiding");
	});
}

jQuery.noConflict()(function ($) {
    $(document).ready(function() {
       var myPage = {
			menuShowing: false,
			scrollPosCurrent: 0,
			scrollPosPrev: 0,
			mobile: false
		};
		init(myPage);
    });
});