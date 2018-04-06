$(document).ready(function () {

    console.log("----------------------------------------------------------");
    console.log("------------|||||||||---||||||||--------------------------");
    console.log("-------||||||||||-------||||||||-----------||||||---------");
    console.log("-----||||||||-----------||||||||-------|||||||||||||------");
    console.log("----||||||||------------||||||||----||||||-||||||-|||||---");
    console.log("---||||||||-------------||||||||----------|||||||---------");
    console.log("---||||||||-------------------------------|||||||---------");
    console.log("----||||||||----------------------------||||||||----------");
    console.log("-----|||||||||------------------------||||||||------------");
    console.log("---------|||||||||||||-----------||||||||||||-------------");
    console.log("----------------||||||||||||||||||||||--------------------");
    console.log("----------------------------------------------------------");

    var heightContent = 500; //% total
    var minHeight = 4000; //px total

    // Init
    var vitesse = 0; //vitesse du scroll
    var vitesseTime = null; //arret du scroll
    var nowResize = null;
    var parachute = false;
    var rotationParachute = 2; //rotation pour le parachute
    var numberStars = 2000;
    var toTheTop = null;
    var top = -heightContent + 100;
    var svg = $("#homePageSpace .stars svg")[0];
    var svg2 = $("#homePageSpace .stars2 svg")[0];
    var svg3 = $("#homePageSpace .stars3 svg")[0];
    var phone = 500;

    var windowH = $(window).height();

    var minH = 700;
    var smallH = false

    function init() {


        if ($(window).width() > phone) {
            if (windowH <= minH) {
                smallH = true;
                top = -minH * 5 + windowH;
                $("#homePageSpace").css("top", "0");
            } else {
                top = -heightContent + 100; //Varie entre -400 et 0
            }
        }else{
            smallH = true;
                top = -minH * 5 + windowH;
                $("#homePageSpace").css("top", "0");
        }

        setInterval(function () {
            rotationParachute = -rotationParachute;
        }, 500)

        for (var i = 0; i < numberStars/3; i++) {
            var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');

            var x = Math.floor(Math.random() * $(window).width());
            var y = 0;
            if (smallH) {
                y = Math.floor(Math.random() * minH * ((heightContent * 2) / 100));
            } else {
                y = Math.floor(Math.random() * windowH * ((heightContent * 2) / 100));
            }


            var r = Math.random()*0.5 + 0.5;

            newElement.setAttribute("cx", x);
            newElement.setAttribute("cy", y);
            newElement.setAttribute("rx", r);
            newElement.setAttribute("ry", r);
            newElement.setAttribute("data-r", r);
            newElement.setAttribute("class", "cls-1");

            svg.appendChild(newElement);
        }
        
        for (var i = 0; i < numberStars/3; i++) {
            var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');

            var x = Math.floor(Math.random() * $(window).width());
            var y = 0;
            if (smallH) {
                y = Math.floor(Math.random() * minH * ((heightContent * 2) / 100));
            } else {
                y = Math.floor(Math.random() * windowH * ((heightContent * 2) / 100));
            }


            var r = Math.random()*1 + 0.5;

            newElement.setAttribute("cx", x);
            newElement.setAttribute("cy", y);
            newElement.setAttribute("rx", r);
            newElement.setAttribute("ry", r);
            newElement.setAttribute("data-r", r);
            newElement.setAttribute("class", "cls-1");

            svg2.appendChild(newElement);
        }
        
        for (var i = 0; i < numberStars/3; i++) {
            var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');

            var x = Math.floor(Math.random() * $(window).width());
            var y = 0;
            if (smallH) {
                y = Math.floor(Math.random() * minH * ((heightContent * 2) / 100));
            } else {
                y = Math.floor(Math.random() * windowH * ((heightContent * 2) / 100));
            }


            var r = Math.random()*1.5 + 0.5;

            newElement.setAttribute("cx", x);
            newElement.setAttribute("cy", y);
            newElement.setAttribute("rx", r);
            newElement.setAttribute("ry", r);
            newElement.setAttribute("data-r", r);
            newElement.setAttribute("class", "cls-1");

            svg3.appendChild(newElement);
        }
        
        if (smallH) {
            console.log("ok");
            $("#homePageSpace").css("top", "0px");
            $("#homePageSpace .stars").css("top", "0px");
            $("#homePageSpace .stars2").css("top", "0px");
        } else {
            $("#homePageSpace").css("top", top + "%");
            $("#homePageSpace .stars").css("top",  -100 - (100 + top / (heightContent - 100) * 100)/3 + "%");
            $("#homePageSpace .stars2").css("top",  -100 - (100 + top / (heightContent - 100) * 100)/5 + "%");
        }
        
        setInterval(function(){
                        
            var toto=Math.floor(Math.random()*20);
            
            var glob=$(".shooting svg").length;
            
            if(toto==12){
                
                $(".shooting svg").each(function(){
                    var sc=1-($(this).index()+1)/glob;
                    sc=1-(1/500*($(this).index()+1)*($(this).index()+1));
                    $(this).css("transform","scale("+sc+")");
                    var elem=$(this);
                    
                    setTimeout(function(){
                        elem.css("animation","anim1 0.4s ease-in-out 1s forwards");
                    },$(this).index());
                    
                    
                })
            }
            
            if(toto==18){
                
                $(".shooting svg").each(function(){
                    var sc=1-($(this).index()+1)/glob;
                    sc=1-(1/500*($(this).index()+1)*($(this).index()+1));
                    $(this).css("transform","scale("+sc+")");
                    var elem=$(this);
                    
                    setTimeout(function(){
                        elem.css("animation","anim2 0.4s ease-in-out 1s forwards");
                    },$(this).index());
                    
                    
                })
            }
            if(toto==8){
                
                $(".shooting svg").each(function(){
                    var sc=1-($(this).index()+1)/glob;
                    sc=1-(1/500*($(this).index()+1)*($(this).index()+1));
                    $(this).css("transform","scale("+sc+")");
                    var elem=$(this);
                    
                    setTimeout(function(){
                        elem.css("animation","anim3 0.4s ease-in-out 1s forwards");
                    },$(this).index());
                    
                    
                })
            }
        },3000);

    }

    init();

    // Scroll

    var scrolling = false; //Savoir si on peut repeter l'action ou pas

    setInterval(function () {

        scrolling = false;

    }, 40);

    function wheel(event) {

        if (!scrolling) {

            var delta = 0;
            if (!event) {
                event = window.event;
            }
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
            } else {
                if (event.detail) {
                    delta = -event.detail / 3;
                }
            }
            if (delta) {
                handle(delta);
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            event.returnValue = false;

        } //end if scrolling
    }

    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }

    window.onmousewheel = document.onmousewheel = wheel;

    /*******************/

    function handle(delta) {

        vitesse++;
        
        

        if (vitesse > 3) {
            vitesse = 3;
        }

        //Arret du scrolling
        
        clearTimeout(vitesseTime);

        vitesseTime = setTimeout(function () {
            vitesse = 0;
            $("#homePageSpace .fusée").css("transform", "rotateZ(0deg) translateY(0px)");
            
            
            if (parachute == false) {
                $("#homePageSpace .stay img").css("top", "0%");
            }

            $("#homePageSpace .flamme").css("margin-top", "-20px");
            $("#homePageSpace .flamme").css("opacity", "0");

            $("#homePageSpace .stay").css("transform", "rotateZ(0deg)")
            rotationParachute = -rotationParachute;

            setTimeout(function () {
                $("#homePageSpace .normale").css("opacity", "1");
                $("#homePageSpace .parachute").css("opacity", "0");
                $("#homePageSpace .stay img").css("top", "0%");
                
                
            }, 2000);
            
            

        }, 100);

        //Monte
        
        if (delta < 0) {
            if (top < 0) {
                
                
                parachute = false;

                if (smallH) {
                    top = top + 10 * vitesse;
                } else {
                    top = top + 3 * vitesse;
                }

                if (top > 0) {
                    top = 0;
                }

                var rota = Math.random() * 8 - 4; //rotation de la fusée
                var transla = Math.random() * 10 - 5;
                

                if (smallH) {
                    $("#homePageSpace").css("top", top + "px");
                    $("#homePageSpace .stars").css("top",  -100 - (100 + top / (heightContent - 100) * 100)/3 + "px");
                    $("#homePageSpace .stars2").css("top",  -100 - (100 + top / (heightContent - 100) * 100)/5 + "px");
                } else {
                    $("#homePageSpace").css("top", top + "%");
                    $("#homePageSpace .stars").css("top",  -100 - (100 + top / (heightContent - 100) * 100)/3 + "%");
                    $("#homePageSpace .stars2").css("top",  -100 - (100 + top / (heightContent - 100) * 100)/5 + "%");
                }



                $("#homePageSpace .fusée").css("transform", "rotateZ(" + rota + "deg) translateY(" + transla + "px)");
                $("#homePageSpace .fusée").css("animation", "none");
                $("#homePageSpace .stay img").css("top", "-10%");
                $("#homePageSpace .flamme").css("margin-top", "0");
                $("#homePageSpace .flamme").css("opacity", "1");
                $("#homePageSpace .flamme").css("transform", "translateY(" + transla + "px)");

                $("#homePageSpace .normale").css("opacity", "1");
                $("#homePageSpace .parachute").css("opacity", "0");

                $("#homePageSpace .fleche").css("opacity", "0.8");
                $("#homePageSpace .fleche").css("top", "10px");
                $("#homePageSpace .scroll").css("opacity", "0");
            }
        } //end if

        //Descend
        else {
            if ((top > -heightContent + 100 && !smallH) || (smallH && top > -minH * 5 + windowH)) {
                
                
                
                parachute = true;
                if (smallH) {
                    top = top - 10 * vitesse;
                } else {
                    top = top - 3 * vitesse;
                }

                if (top < -heightContent + 100 && !smallH) {
                    top = -heightContent + 100;
                }
                if (smallH && top < -minH * 5 + windowH) {
                    top = -minH * 5 + windowH;
                }
                
                if (smallH) {
                    $("#homePageSpace").css("top", top + "px");
                    $("#homePageSpace .stars").css("top",  -100 - (100 + top / (heightContent - 100) * 100)/3 + "px");
                    $("#homePageSpace .stars2").css("top",  -100 - (100 + top / (heightContent - 100) * 100)/5 + "px");
                } else {
                    $("#homePageSpace").css("top", top + "%");
                    $("#homePageSpace .stars").css("top",  -100 - (100 + top / (heightContent - 100) * 100)/3 + "%");
                    $("#homePageSpace .stars2").css("top",  -100 - (100 + top / (heightContent - 100) * 100)/5 + "%");
                }


                $("#homePageSpace .normale").css("opacity", "0");
                $("#homePageSpace .fusée").css("animation", "none");
                $("#homePageSpace .parachute").css("opacity", "1");
                $("#homePageSpace .stay img").css("top", "10%");

                $("#homePageSpace .stay").css("transform", "rotateZ(" + rotationParachute + "deg)")

                if (top == -heightContent + 100) {
                    $("#homePageSpace .scroll").css("opacity", "0.5");
                    $("#homePageSpace .fleche").css("opacity", "0");
                    $("#homePageSpace .fleche").css("top", "20px");
                }
            }
        } //end else

        scrolling = true;

        $("article").each(function(){
            
            if($(this).position().top+$("#homePageSpace").position().top>-400){
                $(this).addClass("active");  
           }
        })

    } //end handle

    var articleActive = $("#homePageSpace article").length - 1;
    var articleNb = $("#homePageSpace article").length - 1;

    $("#homePageSpace article").eq(articleActive).css("transform", "rotate(0deg) translateX(0%)");
    
    $("#homePageSpace").mousemove(function(e){
        var decalx=null;
        var decaly=null;
        
        if(e.pageX > $(window).width()/2){
            decalx=e.pageX - $(window).width()/2;
        }else{
            decalx=e.pageX - $(window).width()/2;
        }
        if(e.pageY < $(window).height()/2){
            decaly=-(e.pageY - $(window).height()/2);
        }else{
            decaly=-(e.pageY - $(window).height()/2);
        }
        
        $("#homePageSpace .stars2").css("left",  -decalx/40 + "px");
        $("#homePageSpace .stars3").css("left",  -decalx/20 + "px");
        
        $("#homePageSpace .stars2").css("margin-top",  decaly/40 + "px");
        $("#homePageSpace .stars3").css("margin-top",  decaly/20 + "px");
        
    })

    //avancer
    $("body").hammer().on("swipeleft", function (event) {
        if (articleActive > 0 && $(window).width() <= phone) {
            $("#homePageSpace article").eq(articleActive).css("animation", "toLeft 0.4s linear forwards");
            articleActive--;
            $("#homePageSpace article").eq(articleActive).css("animation", "fromRight 0.4s linear forwards");

            $("#littleCircles svg").removeClass("active");
            $("#littleCircles svg").eq(articleNb - articleActive).addClass("active");
            
        }
    });

    //reculer
    $("body").hammer().on("swiperight", function (event) {
        if (articleActive < articleNb && $(window).width() <= phone) {
            $("#homePageSpace article").eq(articleActive).css("animation", "toRight 0.4s linear forwards");
            articleActive++;
            $("#homePageSpace article").eq(articleActive).css("animation", "fromLeft 0.4s linear forwards");

            $("#littleCircles svg").removeClass("active");
            $("#littleCircles svg").eq(articleNb - articleActive).addClass("active");
        }

    });

    
    

    $("#homePageSpace .fleche").click(function () {

        toTheTop = setInterval(function () {
            if (top < 0) {
                parachute = false;
                vitesse = 3;
                if (top < -50) {

                    if (smallH) {
                        top = top + 50;
                    } else {
                        top = top + 10;
                    }
                } else {
                    top = top + Math.floor(-top / 5 + 1);
                }


                var rota = Math.random() * 2 - 1;
                var transla = Math.random() * 10 - 5;
                $("#homePageSpace .fusée").css("transform", "rotateZ(" + rota + "deg) translateY(" + transla + "px)");
                $("#homePageSpace .stay img").css("top", "-10%");
                $("#homePageSpace .flamme").css("margin-top", "0");
                $("#homePageSpace .flamme").css("opacity", "1");

                for (var j = 0; j < stars.length; j++) {
                    stars[j].setAttribute("rx", stars[j].getAttribute("data-r") / (2 * (vitesse / 2)));
                    stars[j].setAttribute("ry", stars[j].getAttribute("data-r") * (3 * (vitesse / 2)));
                }

                if (smallH) {
                    $("#homePageSpace").css("top", top + "px");
                    $("#homePageSpace .stars").css("top", top / (heightContent - 100) * 100 + "px");
                } else {
                    $("#homePageSpace").css("top", top + "%");
                    $("#homePageSpace .stars").css("top", top / (heightContent - 100) * 100 + "%");
                }

                $("#homePageSpace .normale").css("opacity", "1");
                $("#homePageSpace .parachute").css("opacity", "0");

                if (top == 0) {
                    stopIt();
                }
            }
        }, 50);

        function stopIt() {
            clearInterval(toTheTop);

            vitesse = 0;
            $("#homePageSpace .fusée").css("transform", "rotateZ(0deg) translateY(0px)");
            if (parachute == false) {
                $("#homePageSpace .stay img").css("top", "0%");
            }

            $("#homePageSpace .flamme").css("margin-top", "-20px");
            $("#homePageSpace .flamme").css("opacity", "0");

            for (var j = 0; j < stars.length; j++) {
                stars[j].setAttribute("rx", "1");
                stars[j].setAttribute("ry", "1");
            };

            $("#homePageSpace .stay").css("transform", "rotateZ(0deg)")

        }


    });

    var navOpen = false;

    $("#homePageSpace nav").click(function () {
        if ($(window).width() > phone) {
            if (navOpen) {
                console.log("ok");
                $("#homePageSpace nav").removeAttr("style");
                $("#homePageSpace nav ul").removeAttr("style");
                $("#homePageSpace nav .left").removeAttr("style");
                navOpen = false;
            } else {
                $("#homePageSpace nav").css({
                    "border-left": "1px solid #C11759",
                    "width": "85px"
                });
                $("#homePageSpace nav ul").css({
                    "opacity": "1"
                });
                $("#homePageSpace nav .left").css({
                    "width": "100px",
                    "opacity": "0",
                    "background": "rgba(0,0,0,0)"
                });
                navOpen = true;
            }
        }



    });

    $("#homePageSpace nav ul li").click(function () {
        if ($(window).width() > phone) {
            console.log("ok");
            $("#homePageSpace nav").removeAttr("style");
            $("#homePageSpace nav ul").removeAttr("style");
            $("#homePageSpace nav .left").removeAttr("style");
            navOpen = true;
            setInterval(function () {
                navOpen = false;
            }, 500)
        }

    });


    $(window).resize(function () {

        clearTimeout(nowResize);

        nowResize = setTimeout(function () {
            $("#homePageSpace svg").html("");
            init();
        }, 100)

    });


});