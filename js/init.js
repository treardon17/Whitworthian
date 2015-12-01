function setArticleBoxWidth(numArticles){
	var articleWidth = 100/numArticles;
	jQuery(".news-box").css({ "width": articleWidth+"%", "padding-bottom": articleWidth+"%"});
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

//initializes page and adds event listeners to interactive items on the page
function init(myPage){
	setArticleBoxWidth(3);
	jQuery("#menu-icon").on('click',function(){
		if(!myPage.menuShowing){
			showMenu(myPage);
		}else{
			hideMenu(myPage);
		}
	});
	jQuery("#content").on('click',function(){
		hideMenu(myPage);
	});
}

jQuery.noConflict()(function ($) {
    $(document).ready(function() {
       var myPage = {
			menuShowing: false
		};
		init(myPage);
    });
});