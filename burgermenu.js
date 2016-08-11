var menuOpening = 0;
var menuClosing = 0;

function openMenu() {
    
    if(menuOpening == 1 || menuClosing == 1) return;
    
    menuOpening = 1;
    
    $('#pageContent').css('min-height', $(window).height());

    //$('nav').css('opacity', 1);

    //set the width of primary content container -> content should not scale while animating
    var contentWidth = $('#pageContent').width();

    //set the content with the width that it has originally
    $('#pageContent').css('width', contentWidth);

    //display a layer to disable clicking and scrolling on the content while menu is shown
    $('#contentLayer').css('display', 'block');

    //disable all scrolling on mobile devices while menu is shown
    $('#pageContainer').on('touchmove', function (e) {
        e.preventDefault()
    });

    //set margin for the whole container with a jquery UI animation
    $("#pageContent").animate({"marginLeft": ["-200px", 'easeOutExpo']}, {
        duration: 600,
        complete: function () {
            $('nav').css('opacity', 1);
            menuOpening = 0;
        }
    });
} 
 
function closeMenu(){

    if(menuOpening == 1 || menuClosing == 1) return;

    menuClosing = 1;
    $('nav').css('opacity', 0);

    //enable all scrolling on mobile devices when menu is closed
    $('#pageContainer').off('touchmove');

    //set margin for the whole container back to original state with a jquery UI animation
    $("#pageContent").animate({"marginLeft": ["0", 'easeOutExpo']}, {
        duration: 600,
        complete: function () {
            $('#pageContent').css('width', 'auto');
            $('#contentLayer').css('display', 'none');
            $('#pageContent').css('min-height', 'auto');
            menuClosing = 0;
            $('nav').css('opacity', 0);
        }
    });
 }
 
$(document).ready(function () {
    $("#hamburger").click(function(){
        if($('nav').css('opacity') == 1){
            closeMenu();
        } else {
            openMenu();
        }
    });
    $("#contentLayer").click(closeMenu);
});