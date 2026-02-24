$(document).ready(function() {
    const $intro    = $("#intro h3");
    const $introBtn = $("#intro a");
    const $menuBtn  = $("#menu-button");
    const $overlay  = $("#menu-overlay");
    const $navCont  = $("#nav-container");
    const $navItems = [$("#nav1"), $("#nav2"), $("#nav3")];
    let menuOpen    = false;

    // --- Intro animations ---
    $intro.delay(1000).queue(function(n) {
        $(this).toggleClass("fuller");
        n();
    });

    $introBtn.delay(1400).queue(function(n) {
        $(this).toggleClass("fuller2");
        n();
    });

    // --- Hover effects ---
    $introBtn.hover(function() {
        $("#button-overlay").toggleClass("loader");
        $("#button-container a").toggleClass("loader2");
    });

    $menuBtn.hover(function() {
        $(this).toggleClass(menuOpen ? "hover-color2" : "hover-color");
        $(this).toggleClass("hover-animation");
    });

    // --- Menu toggle ---
    $menuBtn.click(function() {
        menuOpen = !menuOpen;

        $intro.toggleClass("fuller");
        $introBtn.toggleClass("fuller2");

        $menuBtn
            .toggleClass("animate")
            .toggleClass("change-color");

        $overlay.toggleClass("reveal");

        // Staggered nav reveal
        $navCont.stop(true).delay(200).queue(function(n) {
            $(this).toggleClass("hidden");
            n();
        });

        $navItems.forEach(function($item, i) {
            $item.stop(true).delay(400 + i * 200).queue(function(n) {
                $(this).toggleClass("hidden");
                n();
            });
        });
    });
});