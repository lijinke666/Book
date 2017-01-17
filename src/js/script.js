//回到顶部
(function($, showHeight ){
    var $dom = $('<div class="back-top"><i class="icon icon-shang"></i></div>');
    var $body = $('body'),
        $win = $(window);
    $body.append($dom);
    $win.on('scroll',function(){
        var $scrollTop = $(document).scrollTop();
        if($scrollTop >= showHeight){
            $dom.fadeIn();
        }else{
            $dom.fadeOut();
        }
    })
    $dom.on('click',function(){
        $body.animate({
            "scrollTop":0
        },700)
    })
})(jQuery,200);

/*弹出框*/
window.MAlert = function(msg,type,callback,time ){
	var icon="";
	if( type === true ){
		icon="icon-true color-green";
	}else if( type === false ){
		icon="icon-false color-red";
	}else{
		icon="icon-gantanhao-copy color-orange";
	}
	var $dom = $('<div class="window-confirm"><div class="wrap-icon"><p class="box-icon iconfont '+ icon +'"></p><p class="text-icon text-center">'+msg+'</p><div>');
	$('body').append($dom);

	if(typeof time=="undefined"){
		time = 1100;
	}else{
		time = Math.max ( parseInt(time) , 1100 );
	}
	var i=setTimeout(function(){
		clearTimeout(i);
		setTimeout(function(){
			$dom.remove();
			if( typeof(callback) == 'function'){
				callback();
			}
		}, 500);
		$dom.css("opacity",0);
	}, time);
};
/*确认框*/
window.MConfim = function(html,title,onHideHandler,btnTxtArr){
    var htmls = '',titles='',btns='';
    if(typeof html == 'object'){
        htmls = $(html).html();
    }else{
        htmls = html;
    }
    if(!!title){
        titles='<div class="title">'+title+'<span class="close">×</span></div>';
    }else{
        titles='';
    }
    if(btnTxtArr!=false){
        var txt = typeof btnTxtArr == 'object' && btnTxtArr.length==2 ? btnTxtArr : ['取消', '确定'];
        btns = '<div class="window-pop-btns"><span class="cancel">'+txt[0]+'</span><span class="ok">'+txt[1]+'</span></div>';
    }else{
        btns = '';
    }
    var $dom = $('<div class="window-pop"><div class="wrap">'+titles+'<div class="window-pop-content">'+htmls+'</div>'+btns+'</div></div>');
    $('body').append($dom);
    $(".window-pop .wrap").addClass("window-pop-ani");
   //setTimeout(function(){ $('body').append($dom);},300);
    $dom.find('.window-pop-btns span,.close').on('click', function(){
        var $span = $(this);
        setTimeout(function(){
            $dom.remove();
            if( typeof onHideHandler == 'function' ){
                onHideHandler( $span.hasClass('ok') );
            }
        }, 500);
        $dom.css('opacity', 0);
    });
}
/*后退*/
window.back=function(url){
    if(history.length>1){
        history.back();
    }else{
        if(typeof url =="undefined" || !url){
            url="/"
        }
        history.href=url;
    }
};