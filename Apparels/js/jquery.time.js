$(function(){
    /*his*/
    var _mouseD = false;//判断鼠标按下
    var _mousePX = 0;//鼠标按下时的x
    var _mouseX = 0;//鼠标当前的X
    var _scPL = 0;//当前纽扣的left
    var _menuNum = 0;//menu移动个数
    var _hisbdUl = 0;//ul移动个数


    var _hisLiLength = $(".his-bg .bd li").length;//li（年份）个数
    //$(".his-bg .bd ul").width(1000*_hisLiLength);
    $(".scale-div ul").width(136*(_hisLiLength - 1));
    $(".year-div ul").width(136*_hisLiLength);
    /*$(".his-bg .bd li").css({"opacity":0});
    $(".his-bg .bd li").eq(0).css({"opacity":1});*/
    $(".his-bg .bd li").eq(0).fadeIn(100);

    $("#sc-buttom").mousedown(function(e){
        e = e || window.event;
        _mouseD = true;
        _mousePX = e.pageX;
        _scPL = $("#sc-buttom").position().left;//当前纽扣的left
    });
    $(".his-bg").mouseup(function(e){
        e = e || window.event;
        _mousePX = 0;
        _mouseX = 0;

        if(_mouseD == true){
            _scPL = $("#sc-buttom").position().left;//移动后纽扣的left
            scButtomLeft();
        }
        
        _mouseD = false;
    });

    $(".his-bg").mousemove(function(e){
        e = e || window.event;
        if(_mouseD == true){
            _mouseX = e.pageX;
            var _btnL = _mouseX - _mousePX;//鼠标移动距离

            var _moveL = _scPL + _btnL;//纽扣应该移动的left
            _moveL < 0 ? _moveL = 0 : _moveL = _moveL;
            _moveL > 952 ? _moveL = 952 : _moveL = _moveL;
            $("#sc-buttom").css({"left":_moveL});
            $(document).bind('selectstart',function(e){  // 防止页面内容被选中 IE 
                return false;
            });
            e.preventDefault();
        }
    })

    $("#sc-buttom").mousemove(function(e){
        e = e || window.event;
        $(document).bind('selectstart',function(e){  // 防止页面内容被选中 IE 
            return false;
        });
        e.preventDefault();
    })

    $(".his-bg .next").click(function(){
        /*_menuNum++;
        _menuNum > _hisLiLength - 7 ? _menuNum = _hisLiLength - 7 : _menuNum = _menuNum;
        hismenuLeft();*/
        _scPL = $("#sc-buttom").position().left;//当前纽扣的left
        _scPL = _scPL + 136;//纽扣应该移动的left
        if(_scPL > 952){
            _menuNum++;
            if(_menuNum > _hisLiLength - 8 ){
                _menuNum = 0;
                _scPL = 0;
            }else{
                _menuNum = _menuNum;
                _scPL = 952;
            }
        }else{
            _scPL = _scPL ;
        }
        hismenuLeft();
        scButtomLeft();
    });

    $(".his-bg .prev").click(function(){
        /*_menuNum--;
        _menuNum < 0 ? _menuNum = 0 : _menuNum = _menuNum;
        hismenuLeft();*/
        _scPL = $("#sc-buttom").position().left;//当前纽扣的left
        _scPL = _scPL - 136;//纽扣应该移动的left
        if(_scPL < 0){
            _menuNum--;
            if(_menuNum < 0){
                _menuNum = _hisLiLength - 8;
                _scPL = 952;
            }else{
                _menuNum = _menuNum;
                _scPL = 0;
            }
        }else{
            _scPL = _scPL;
        }
        hismenuLeft();
        scButtomLeft();

    });

    function hismenuLeft(){//menu切换
        $(".scale-div ul").stop().animate({"left":-_menuNum*136},300);
        $(".year-div ul").stop().animate({"left":-_menuNum*136},300);

        hisbdLeft(_menuNum+_hisbdUl);
    }

    function hisbdLeft(k){//历史内容切换
        //$(".his-bg .bd ul").stop().animate({"left":-1000*k},300);
        //$(".his-bg .bd ul li").eq(k).stop().animate({"opacity":1},300).siblings().stop().animate({"opacity":0},300);
        $(".his-bg .bd ul li").eq(k).stop(true,true).fadeIn(300).siblings().stop(true,true).fadeOut(300);
        $(".year-div li").removeClass("on").eq(k).addClass("on");
    }

    function scButtomLeft(){//按钮移动

            for (var i = 0; i <= _hisLiLength; i++) {
                if( _scPL >= (i*136-68) && _scPL <= (i*136+67) ){
                    _scPL = i*136;
                    _hisbdUl = i;
                    break;
                }
            };//按钮移动偏差定位

            $("#sc-buttom").stop().animate({"left":_scPL},100);
            hisbdLeft(_menuNum+_hisbdUl);
    }
})