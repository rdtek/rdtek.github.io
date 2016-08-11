/**
 * hamburger.js
 *
 * Mobile Menu Hamburger
 * =====================
 * A hamburger menu for mobile websites
 *
 * Created by Thomas Zinnbauer YMC AG  |  http://www.ymc.ch
 * Date: 21.05.13
 */

$(document).ready(function () {

    //Open the menu
    $("#hamburger").click(function () {

        console.log('hello');
        
        $('#pageContent').css('min-height', $(window).height());

        $('nav').css('opacity', 1);

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
        $("#pageContainer").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
            duration: 700
        });

    });

    //close the menu
    $("#contentLayer").click(function () {

        //enable all scrolling on mobile devices when menu is closed
        $('#pageContainer').off('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        $("#pageContainer").animate({"marginLeft": ["-1", 'easeOutExpo']}, {
            duration: 700,
            complete: function () {
                $('#pageContent').css('width', 'auto');
                $('#contentLayer').css('display', 'none');
                $('nav').css('opacity', 0);
                $('#pageContent').css('min-height', 'auto');

            }
        });
    });

});