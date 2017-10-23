$(document).ready(function() {
    $("#steps-menu a").click(function(event) {
        // Replaces main content
        event.preventDefault();
        $(this).parent().addClass("is-active");
        $(this).parent().siblings().removeClass("is-active");
        var step = $(this).attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();
        
        // Rotates the wheel
        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);
        switch((stepClass-0)){
    case 1:
           $("#pdd li:eq(0) img").attr("src","img/hongren10.jpg");
           $("#pdd li:eq(1) img").attr("src","img/hongren11.jpg");
           $("#pdd li:eq(2) img").attr("src","img/hongren12.jpg");
           $("#pdd li:eq(3) img").attr("src","img/hongren2.jpg");
           $("#pdd li:eq(4) img").attr("src","img/hongren3.jpg");
            break;
        case 2:
           $("#pdd li:eq(0) img").attr("src","img/wyfg1.jpg");
           $("#pdd li:eq(1) img").attr("src","img/wyfg2.jpg");
           $("#pdd li:eq(2) img").attr("src","img/wyfg3.jpg");
           $("#pdd li:eq(3) img").attr("src","img/wyfg4.jpg");
           $("#pdd li:eq(4) img").attr("src","img/wyfg5.jpg");
            break;
        case 3:
           $("#pdd li:eq(0) img").attr("src","img/sweet2.jpg");
           $("#pdd li:eq(1) img").attr("src","img/sweet3.jpg");
           $("#pdd li:eq(2) img").attr("src","img/sweet4.jpg");
           $("#pdd li:eq(3) img").attr("src","img/sweet5.jpg");
           $("#pdd li:eq(4) img").attr("src","img/sweet6.jpg");
            break;
        case 4:
           $("#pdd li:eq(0) img").attr("src","img/wyfg6.jpg");
           $("#pdd li:eq(1) img").attr("src","img/wyfg7.jpg");
           $("#pdd li:eq(2) img").attr("src","img/wyfg8.jpg");
           $("#pdd li:eq(3) img").attr("src","img/wyfg9.jpg");
           $("#pdd li:eq(4) img").attr("src","img/wyfg10.jpg");
            break
        case 5:
            $("#pdd li:eq(0) img").attr("src","img/sweet7.jpg");
           $("#pdd li:eq(1) img").attr("src","img/sweet8.jpg");
           $("#pdd li:eq(2) img").attr("src","img/sweet9.jpg");
           $("#pdd li:eq(3) img").attr("src","img/sweet10.jpg");
           $("#pdd li:eq(4) img").attr("src","img/sweet11.jpg");
            break; 
        default:
            $("#pdd li:eq(0) img").attr("src","img/hongren4.jpg");
           $("#pdd li:eq(1) img").attr("src","img/hongren5.jpg");
           $("#pdd li:eq(2) img").attr("src","img/hongren6.jpg");
           $("#pdd li:eq(3) img").attr("src","img/hongren7.jpg");
           $("#pdd li:eq(4) img").attr("src","img/hongren8.jpg");
            break;
          }
        currentNum=step.substr(6,1)-0+1;
        
    });


    //slideshow style interval
    var autoSwap = setInterval( swap,5000);
    var currentNum = 2;
    //pause slideshow and reinstantiate on mouseout
    $('#read-more a, #steps-menu a').hover(
      function () {
        clearInterval(autoSwap);
    }, 
      function () {
       autoSwap = setInterval( swap,5000);
    });

    //swap images function
    function swap(action) {
      $("#bbp").fadeOut(100);

        console.log(currentNum);
        $("#steps-menu li a:eq("+ (currentNum-1) +")").parent().addClass("is-active");
        $("#steps-menu li a:eq("+ (currentNum-1) +")").parent().siblings().removeClass("is-active");
        var step = $("#steps-menu li a:eq("+ (currentNum-1) +")").attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();
        
        // Rotates the wheel
        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);

        switch(currentNum){
            case 1:
           $("#pdd li:eq(0) img").attr("src","img/hongren10.jpg");
           $("#pdd li:eq(1) img").attr("src","img/hongren11.jpg");
           $("#pdd li:eq(2) img").attr("src","img/hongren12.jpg");
           $("#pdd li:eq(3) img").attr("src","img/hongren2.jpg");
           $("#pdd li:eq(4) img").attr("src","img/hongren3.jpg");
            break;
        case 2:
           $("#pdd li:eq(0) img").attr("src","img/wyfg1.jpg");
           $("#pdd li:eq(1) img").attr("src","img/wyfg2.jpg");
           $("#pdd li:eq(2) img").attr("src","img/wyfg3.jpg");
           $("#pdd li:eq(3) img").attr("src","img/wyfg4.jpg");
           $("#pdd li:eq(4) img").attr("src","img/wyfg5.jpg");
            break;
        case 3:
           $("#pdd li:eq(0) img").attr("src","img/sweet2.jpg");
           $("#pdd li:eq(1) img").attr("src","img/sweet3.jpg");
           $("#pdd li:eq(2) img").attr("src","img/sweet4.jpg");
           $("#pdd li:eq(3) img").attr("src","img/sweet5.jpg");
           $("#pdd li:eq(4) img").attr("src","img/sweet6.jpg");
            break;
        case 4:
           $("#pdd li:eq(0) img").attr("src","img/wyfg6.jpg");
           $("#pdd li:eq(1) img").attr("src","img/wyfg7.jpg");
           $("#pdd li:eq(2) img").attr("src","img/wyfg8.jpg");
           $("#pdd li:eq(3) img").attr("src","img/wyfg9.jpg");
           $("#pdd li:eq(4) img").attr("src","img/wyfg10.jpg");
            break
        case 5:
            $("#pdd li:eq(0) img").attr("src","img/sweet7.jpg");
           $("#pdd li:eq(1) img").attr("src","img/sweet8.jpg");
           $("#pdd li:eq(2) img").attr("src","img/sweet9.jpg");
           $("#pdd li:eq(3) img").attr("src","img/sweet10.jpg");
           $("#pdd li:eq(4) img").attr("src","img/sweet11.jpg");
            break; 
        default:
            $("#pdd li:eq(0) img").attr("src","img/hongren4.jpg");
           $("#pdd li:eq(1) img").attr("src","img/hongren5.jpg");
           $("#pdd li:eq(2) img").attr("src","img/hongren6.jpg");
           $("#pdd li:eq(3) img").attr("src","img/hongren7.jpg");
           $("#pdd li:eq(4) img").attr("src","img/hongren8.jpg");
            break;
          }


        $("#bbp").fadeIn(800);

      
        currentNum+=1;
        if(currentNum==7) {
            currentNum=1;
        }

       
    }

});