

MyApp = {
    loading: {
        init: function () {
            if (jQuery(".loading").length) {
                var timeline = gsap.timeline({
                    defaults: {
                        ease: "SlowMo.ease.config(0.7, 0.7, 0.7, 0.7, false)"
                    }
                });

                timeline.to(".loading h2", {
                    duration: 0.4,
                    opacity: 1,
                    scale: 1
                });

                timeline.to(".loading h2", {
                    duration: 0.4,
                    opacity: 0,
                    scale: 0.75,
                    delay: 0.4
                });

                timeline.to(".loading", {
                    duration: 0.8,
                    y: "-100%",
                    delay: 0.4
                }, "<");

            }
        }
    },
    header: {
        init: function () {
            window.addEventListener("DOMContentLoaded", function () {
                var header = document.querySelector("header");
                var headerClass = "hLTFFw";
                var prevScrollPos =
                    window.pageYOffset || document.documentElement.scrollTop;

                function handleScroll() {
                    var currentScrollPos =
                        window.pageYOffset || document.documentElement.scrollTop;
                    var isAtTop = currentScrollPos === 0;
                    var isScrollingUp = prevScrollPos > currentScrollPos;
                    var isScrollingDown = currentScrollPos > prevScrollPos + 3;

                    if (isAtTop) {
                        headerClass = "hLTFFw";
                    } else if (isScrollingUp) {
                        headerClass = "leoCdG";
                    } else if (isScrollingDown) {
                        headerClass = "bVLcxx";
                    }
                    header.className = headerClass;
                    prevScrollPos = currentScrollPos;
                }
                window.addEventListener("scroll", handleScroll);
            });
        }
    },
    menumovil: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest("header .container .menuMovil") || e.target.closest(".menumovilpage ul li a")) {
                    document.querySelector(".menumovilpage").classList.toggle("open");
                    document.querySelector("body").classList.toggle("menuopen");
                    document.querySelector("body").classList.toggle("scrollHidden");
                }
            })
        }
    }
}

if ($(".loading").length > 0) {
    MyApp.loading.init();
}

if ($("header").length > 0) {
    MyApp.header.init();
}

if ($(".menumovilpage").length > 0) {
    MyApp.menumovil.init();
}




