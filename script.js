function toogleMode() {
    if ($(".toggle-mode-icon").hasClass("bxs-sun")) {
        $(".toggle-mode-icon").removeClass("bxs-sun");
        $(".toggle-mode-icon").addClass("bxs-moon");
    } else {
        $(".toggle-mode-icon").removeClass("bxs-moon");
        $(".toggle-mode-icon").addClass("bxs-sun");
    }
    $("body").toggleClass("dark-mode");
}

function toogleMenu() {
    if ($(".toogle-menu-icon").hasClass("bx-menu")) {
        $(".toogle-menu-icon").removeClass("bx-menu");
        $(".toogle-menu-icon").addClass("bx-x");
        $(".nav-links").css("top", "3.75rem");
    } else {
        $(".toogle-menu-icon").removeClass("bx-x");
        $(".toogle-menu-icon").addClass("bx-menu");
        $(".nav-links").css("top", "-18rem");
    }
}