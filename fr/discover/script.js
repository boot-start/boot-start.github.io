$(document).ready(function(){
    
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
    
    var heightContent=500; //% total
    var minHeight=4000; //px total
    
    // Init
    
    var vitesse=0;
    var vitesseTime=null;
    var vitesseMore=null;
    var parachute=false;
    var rotat=2;
    var numberStars=2000;
    var toTheTop=null;
    var top=-heightContent+100;
    
    
    var windowH=$(window).height();
    
    var minH=800;
    var smallH=false;
    
    if(windowH<=minH){
        smallH=true;
        top=-minH*5+windowH;
        $("#homePageSpace").css("top",top+"px");
        console.log(top);
   }
    else{
        top=-heightContent+100; //Varie entre -400 et 0
    }
    
    setInterval(function(){
        rotat=-rotat;
    },500)
    
    // Stars init
    
    var svg = $("#homePageSpace svg")[0];
    var stars=[];
    
    for(var i=0; i<numberStars; i++){
        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');
        
        var x=Math.floor(Math.random()*$(window).width());
        var y=0;
        if(smallH){
           y=Math.floor(Math.random()*800*((heightContent*2)/100));
       }
       else{
           y=Math.floor(Math.random()*windowH*((heightContent*2)/100));
       }
        
        
        var r=Math.random()+0.5;
        
        newElement.setAttribute("cx", x );
        newElement.setAttribute("cy", y );
        newElement.setAttribute("rx",r);
        newElement.setAttribute("ry",r);
        newElement.setAttribute("data-r",r);
        newElement.setAttribute("class","cls-1");
        
        stars[i]=newElement;
        
        svg.appendChild(newElement);
    }  
    
    // Scroll
    
    
    
    function wheel(event){
        var delta = 0;
        if (!event){
            event = window.event;
        }
        if (event.wheelDelta) {
            delta = event.wheelDelta/120;
        } else {
            if (event.detail) {
                delta = -event.detail/3;
            }
        }
        if (delta){
            handle(delta);
        }
        if (event.preventDefault){
            event.preventDefault();
        }
       event.returnValue = false;
    }

    if (window.addEventListener){
        window.addEventListener('DOMMouseScroll', wheel, false);
    }

    window.onmousewheel = document.onmousewheel = wheel;
    
    /*******************/
    
    function handle(delta) {
        vitesse++;
        
        //Arret du scrolling
        clearTimeout(vitesseTime);
        
        vitesseTime=setTimeout(function(){
            vitesse=0;
            $("#homePageSpace .fusée").css("transform","rotateZ(0deg) translateY(0px)");
            if(parachute==false){
                $("#homePageSpace .stay img").css("top","0%");
            }
            
            $("#homePageSpace .flamme").css("margin-top","-20px");
            $("#homePageSpace .flamme").css("opacity","0");
            
            for(var j=0; j<stars.length; j++){
                stars[j].setAttribute("rx","1");
                stars[j].setAttribute("ry","1");
            };
            
            $("#homePageSpace .stay").css("transform","rotateZ(0deg)")
            rotat=-rotat;
            
        },100)
        
        clearTimeout(vitesseMore);
        
        vitesseMore=setTimeout(function(){
            setTimeout(function(){
                $("#homePageSpace .normale").css("opacity","1");
                $("#homePageSpace .parachute").css("opacity","0");
                $("#homePageSpace .stay img").css("top","0%");
            },1000);
        },1000)
        
        //Monte
        if (delta < 0)
		{
            if(top<0){
                parachute=false;
                
                if(smallH){
                    top=top+10*vitesse;
                }
                else{
                    top=top+3*vitesse;
                }
                
                if(top>0){
                    top=0;
                }
                
                var rota=Math.random()*2 -1;
                var transla=Math.random()*10 -5;
                for(var j=0; j<stars.length; j++){
                    stars[j].setAttribute("rx",stars[j].getAttribute("data-r")/(2*(vitesse/2)));
                    stars[j].setAttribute("ry",stars[j].getAttribute("data-r")*(3*(vitesse/2)));
                }
                
                if(smallH){
                   $("#homePageSpace").css("top",top+"px");
                    $("#homePageSpace .stars").css("top",top/(heightContent-100)*100+"px");
               }else{
                   $("#homePageSpace").css("top",top+"%");
                   $("#homePageSpace .stars").css("top",top/(heightContent-100)*100+"%");
               }
                
                
                
                $("#homePageSpace .fusée").css("transform","rotateZ("+ rota +"deg) translateY("+transla+"px)");
                $("#homePageSpace .stay img").css("top","-10%");
                $("#homePageSpace .flamme").css("margin-top","0");
                $("#homePageSpace .flamme").css("opacity","1");
                
                $("#homePageSpace .normale").css("opacity","1");
                $("#homePageSpace .parachute").css("opacity","0");
                
                $("#homePageSpace .fleche").css("opacity","1");
                $("#homePageSpace .scroll").css("opacity", "0");
                
                
                /*$("#homePageSpace article").each(function(){
                    console.log($("#homePageSpace .stars").position().top+" > "+$(this).position().top);
                    
                    if($("#homePageSpace .stars").position().top>parseFloat(-$(this).position().top)+parseFloat($(window).windowH)){
                       $(this).css("opacity","1");
                       }
                });*/
                
           }
        }
        
        //Descend
        else
		{
            if((top>-heightContent+100 && !smallH) || (smallH && top>-minH*5+windowH)){
                parachute=true;
                if(smallH){
                    top=top-10*vitesse;
                }
                else{
                    top=top-3*vitesse;
                }
                
                if(top<-heightContent+100 && !smallH){
                    top=-heightContent+100;
                }
                if(smallH && top<-minH*5+windowH){
                    top=-minH*5+windowH;
                }
                
                for(var j=0; j<stars.length; j++){
                    stars[j].setAttribute("rx",stars[j].getAttribute("data-r")/(2*(vitesse/2)));
                    stars[j].setAttribute("ry",stars[j].getAttribute("data-r")*(3*(vitesse/2)));
                }
                
                if(smallH){
                   $("#homePageSpace").css("top",top+"px");
                    $("#homePageSpace .stars").css("top",top/(heightContent-100)*100+"px");
               }else{
                   $("#homePageSpace").css("top",top+"%");
                   $("#homePageSpace .stars").css("top",top/(heightContent-100)*100+"%");
               }
                
                
                $("#homePageSpace .normale").css("opacity","0");
                $("#homePageSpace .parachute").css("opacity","1");
                $("#homePageSpace .stay img").css("top","10%");
                
                $("#homePageSpace .stay").css("transform","rotateZ("+rotat+"deg)")
                
                if(top==-heightContent+100){
                    $("#homePageSpace .scroll").css("opacity", "0.5");
                    $("#homePageSpace .fleche").css("opacity","0");
                }
            }
        }
    }
    
    
    $("#homePageSpace .fleche").click(function(){
        
        toTheTop = setInterval(function(){
            if(top<0){
                parachute=false;
                vitesse=3;
                if(top < -50){
                    
                    if(smallH){
                    top=top+50;
                    }
                    else{
                        top=top+10;
                    }
                }
                else {
                    top=top+Math.floor(-top/5 +1);
                }
                
                
                var rota=Math.random()*2 -1;
                var transla=Math.random()*10 -5;
                $("#homePageSpace .fusée").css("transform","rotateZ("+ rota +"deg) translateY("+transla+"px)");
                $("#homePageSpace .stay img").css("top","-10%");
                $("#homePageSpace .flamme").css("margin-top","0");
                $("#homePageSpace .flamme").css("opacity","1");

                for(var j=0; j<stars.length; j++){
                    stars[j].setAttribute("rx",stars[j].getAttribute("data-r")/(2*(vitesse/2)));
                    stars[j].setAttribute("ry",stars[j].getAttribute("data-r")*(3*(vitesse/2)));
                }
                
                if(smallH){
                   $("#homePageSpace").css("top",top+"px");
                    $("#homePageSpace .stars").css("top",top/(heightContent-100)*100+"px");
               }else{
                   $("#homePageSpace").css("top",top+"%");
                   $("#homePageSpace .stars").css("top",top/(heightContent-100)*100+"%");
               }

                $("#homePageSpace .normale").css("opacity","1");
                $("#homePageSpace .parachute").css("opacity","0");
                
                if(top==0){
                    stopIt();
                }
           }
        },50);
        
        function stopIt(){
            clearInterval(toTheTop);
            
            vitesse=0;
            $("#homePageSpace .fusée").css("transform","rotateZ(0deg) translateY(0px)");
            if(parachute==false){
                $("#homePageSpace .stay img").css("top","0%");
            }
            
            $("#homePageSpace .flamme").css("margin-top","-20px");
            $("#homePageSpace .flamme").css("opacity","0");
            
            for(var j=0; j<stars.length; j++){
                stars[j].setAttribute("rx","1");
                stars[j].setAttribute("ry","1");
            };
            
            $("#homePageSpace .stay").css("transform","rotateZ(0deg)")
            
        }
        
        
    });
    
    var navOpen=false;
    
    $("#homePageSpace nav").click(function(){
        if(navOpen){
            $("#homePageSpace nav").removeAttr("style");
            $("#homePageSpace nav ul").removeAttr("style");
            $("#homePageSpace nav .left").removeAttr("style");
            navOpen=false;
        }else{
            $("#homePageSpace nav").css({
                "border-left":"1px solid #C11759",
                "width":"85px"
            });
            $("#homePageSpace nav ul").css({
                "opacity":"1"
            });
            $("#homePageSpace nav .left").css({
                "width":"100px",
                "opacity":"0",
                "background":"rgba(0,0,0,0)"
            });
            navOpen=true;
        }
    });
    
    $("#homePageSpace nav ul li").click(function(){
        $("#homePageSpace nav").removeAttr("style");
        $("#homePageSpace nav ul").removeAttr("style");
        $("#homePageSpace nav .left").removeAttr("style");
        navOpen=true;
        setInterval(function(){
            navOpen=false;
        },500)
    });
    
    
});
