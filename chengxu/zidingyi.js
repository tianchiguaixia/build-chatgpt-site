









function getStyle(el , attr) {
    return el.currentStyle ? el.currentStyle[attr] : getComputedStyle(el,null)[attr];
}
var guan = document.getElementsByClassName('close-sidebar')[0];
var kai = document.getElementsByClassName('show-sidebar')[0];
var box = document.getElementsByClassName('audio-box')[0];
window.onscroll=function(){
var t =document.documentElement.scrollTop||document.body.scrollTop;
var left =document.getElementsByTagName("body")[0];


 // 褰撶綉椤靛悜涓嬫粦鍔  20px 鍑虹幇"杩斿洖椤堕儴" 鎸夐挳
  window.onscroll = function() {
      scrollFunction()
  };
  
  

  
  
  
  
  
//   if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
//       $('.g-navlist').css('position','fixed');
//       $('.g-navlist').css('z-index','999999999999999999999');
//       $('.g-navlist').css('top','0%');
//       $('.g-navlist').css('box-shadow','unset');
//   }
  
  
  
function scrollFunction() {
    

//   if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
//       $('.g-navlist').css('position','fixed');
//       $('.g-navlist').css('z-index','999999999999999999999');
//       $('.g-navlist').css('top','0%');
//       $('.g-navlist').css('box-shadow','unset');
       
       
//   }else{
//       $('.g-navlist').css('position','unset');
//       $('.g-navlist').css('z-index','999999999999999999999');
//       $('.g-navlist').css('top','unset');
       
//       $('.g-navlist').css('box-shadow','0px 4px 4px #d0d0d0');
//   }





 
 
           if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $('.returnTop').fadeIn(500 , function(){
        $('.returnTop').css('display' , 'block');
    });
    
     } else {
        $('.returnTop').fadeOut(500 , function(){
                $('.returnTop').css('display' , 'none');
            });
     }
     
     
     if(document.body.scrollTop >= 1|| document.documentElement.scrollTop >= 1){
        $('.daohang').css('position' , 'fixed');
     }else{
         $('.daohang').css('position' , '');
     }
     
     
 }
  
 // 鐐瑰嚮鎸夐挳锛岃繑鍥為《閮 
$('.returnTop').click(function(){
                 // 鐐瑰嚮鎸夐挳锛岃繑鍥為《閮 
    document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
});

}



$('#dianjiwo').click(function(){

    $('#dianwo').fadeIn(1000).delay(1).fadeIn(1 , function(){
        $('#sysmask').css('display','inline');
        $('#sysmask').css('position','absolute');
$('#sysmask').css('height','100%');
$('#sysmask').css('width','100%');
$('#sysmask').css('background','rgba(0,0,0,.8)');
$('#sysmask').css('z-index','1500');
    });


});

$('#sys-btn-event').click(function(){
    // alert(1);
    $('#dianwo').fadeOut(1000).delay(1).fadeOut(1 , function(){
                $('#sysmask').css('display','none');

    });
});

$('.sys-oper-box').click(function(){
    // alert(1);
    $('#dianwo').fadeOut(1000).delay(1).fadeOut(1 , function(){
        $('#sysmask').css('display','none');
    });
});




$('.dlzc').click(function(){


    $('.zuiwaimt').css('display','block');
    
    $('.register-login-modal').fadeIn(500 , function(){
        $('.register-login-modal').css('display' , 'block');
    });
    
});


$('.zuiwaimt').click(function(){
    $('.register-login-modal').fadeOut(500 , function(){
        $('.register-login-modal').css('display' , 'none');
    });
    $('.zuiwaimt').fadeOut(500 , function(){
        $('.zuiwaimt').css('display' , 'none');
    });
    
    $('.register-login-modal2').fadeOut(500 , function(){
        $('.register-login-modal').css('display' , 'none');
    });
    
    
});



$('.grzxym').click(function(){
    
      if (confirm("你确定要退出嘛?")) {
         function clearAllCookie() {  
                var keys = document.cookie.match(/[^ =;]+(?=\=)/g);  
                for(i=0;i<keys.length;i++){
                    $.cookie(keys[i], '');
                }
                // console.log(keys)
                window.location.href=window.location.href;  
            }  
             clearAllCookie();
      } 

    
});



//登录注册
 function is_check_mail(e) {
        return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(e)
    }
    function is_check_name(e) {
        return /^[\w]{1,16}$/.test(e)
    }
    
    function is_check_pass(e) {
        return !(e.length < 6);
    }

    var body = jQuery("body"),
    st = 0,
    lastSt = 0,
    navText = ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
    iconspin = '<i class="fa fa-spinner fa-spin"></i> ',
    iconcheck = '<i class="fa fa-check"></i> ',
    iconwarning = '<i class="fa fa-warning "></i> ',
    is_tencentcaptcha = !1;
    
    
    $('.zcdd').click(function(){
        $('.dldd').css('opacity' , '0.3');
        
        $('#login666').css('display' , 'none');
        $('#signup666').css('display' , 'block');
        
        $('.zcdd').css('opacity' , '1'); 
    });
    
    
    
    $('.dldd').click(function(){
        $('.dldd').css('opacity' , '1');
        $('#login666').css('display' , 'block');
        $('#signup666').css('display' , 'none');
        $('.zcdd').css('opacity' , '0.3'); 
    });
    
        
        
        
    //$(".yaoqing").append('<br><br><div class="form-group"><input type="text" class="form-control yaoqingmas yhhyx" name="yaoqingma" placeholder="->请输入邀请码<-"><a target="_blank" href="http://a.upae.cn/tool/other/yaoqingma.html">->点击免费获取邀请码<-</a></div>');  
    

    
//  setTimeout(function(){   
// var _0xodf='jsjiami.com.v6',_0xodf_=['‮_0xodf'],_0x24df=[_0xodf,'RMKzIcOGag==','w7UdF8O2FA==','w6tuw5PCmTk=','w7/DssK2WcOr','dMKDwrfCpsK7M2zCmDcowrzCh21uwrrDrxHCscKXwqnDrGgcw4DCo0tTwrrDoMKYw5A4CcK8GjJqGjh6S1LDpFrDjmHCiF/DtjjCosO0woTCtm9YOcOzwovDmsOSwq7DkVIlwrIhHX/CrsOqwr0OUcKjUsOBwqHDvsKew6E3GSDDjzDDmykdw6zCgVMjwpnCoTTDhsOnTnrCmnMHEMOXwrjCqnbDlg1cHQ==','VF12','wqXCqMOqYE4=','fcKfSQ==','woDDuMOBV8KRwrs0Pw==','w7NIw77CogduwobCpkJeMld7LsKwRcO8TsOAw6XDpiLDpcKcwozDiirCo8OswovCtcOBZsOvdsKKw7/DrTcxw65Ww6jClsKgwqdtw59eXcK4w6pACcKewoHCu8OiwoELJcO/wqbDjCvDo8Knw78YBCbDuMKbw6jCs8KJFMOPaMOvWFDCm8O0w7zCtMKjf2HCn8OFw4MCwqfDh8KIw5oAwrPCicK4wpsfw5YhC2ZowqVaw5kswpDDsMOFSkPClSMqwrVswr3ngI7lhrzoj7Xlj6Tpg6Tor5bno5BlwoXCtcK5X8OLcE1sOcOCwrUaZMK7wqTCq8Krw7AyecKUwo9mUBQQLcO9wr7orIjovpDlha3pgbroroTnoZ7CuFoAwoTDjsKKwrE6IMOQfAsqew==','w5/Ds8KQecOn','HBnCrA==','w6wOUA==','QcOHfHt5','XxBLI2EMw7g=','WDh2ClE=','QVt8w7w9','wqfDp8OBdMKA','wpRvPkXCoQ==','fgnCvMK0w7k=','wpY+LcK5wqM=','fMKhHcOWcg==','J8OTw4fDgsKN','d8Opw4k=','wrcww4Mew7k=','QmQKw6fDiw==','eMOdfTfDhw==','FxLCt8KQw5Q=','TEzDjwvCng==','E8KFwpAMwps=','wrTCs8OCRHE=','ecKPGsOBRw==','QnLDl8OPwrQ=','WjLfMYsjOCtDiamDGUdid.wcom.v6=='];if(function(_0x34d38a,_0x45b1e6,_0x38e645){function _0x169554(_0x46a780,_0xad006c,_0x1e1fed,_0x1af3a7,_0x12c468,_0x1e3ba3){_0xad006c=_0xad006c>>0x8,_0x12c468='po';var _0x2a5181='shift',_0x186195='push',_0x1e3ba3='‮';if(_0xad006c<_0x46a780){while(--_0x46a780){_0x1af3a7=_0x34d38a[_0x2a5181]();if(_0xad006c===_0x46a780&&_0x1e3ba3==='‮'&&_0x1e3ba3['length']===0x1){_0xad006c=_0x1af3a7,_0x1e1fed=_0x34d38a[_0x12c468+'p']();}else if(_0xad006c&&_0x1e1fed['replace'](/[WLfMYOCtDDGUddw=]/g,'')===_0xad006c){_0x34d38a[_0x186195](_0x1af3a7);}}_0x34d38a[_0x186195](_0x34d38a[_0x2a5181]());}return 0xca5db;};return _0x169554(++_0x45b1e6,_0x38e645)>>_0x45b1e6^_0x38e645;}(_0x24df,0xee,0xee00),_0x24df){_0xodf_=_0x24df['length']^0xee;};function _0xec88(_0x1186d3,_0x1be8f4){_0x1186d3=~~'0x'['concat'](_0x1186d3['slice'](0x1));var _0x45e4d9=_0x24df[_0x1186d3];if(_0xec88['LiKsFW']===undefined){(function(){var _0x34f4c6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4c5c7d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x34f4c6['atob']||(_0x34f4c6['atob']=function(_0x46dfcb){var _0x511033=String(_0x46dfcb)['replace'](/=+$/,'');for(var _0xbb2cc6=0x0,_0x1fe9f8,_0x5ba905,_0x152689=0x0,_0x3cb9bd='';_0x5ba905=_0x511033['charAt'](_0x152689++);~_0x5ba905&&(_0x1fe9f8=_0xbb2cc6%0x4?_0x1fe9f8*0x40+_0x5ba905:_0x5ba905,_0xbb2cc6++%0x4)?_0x3cb9bd+=String['fromCharCode'](0xff&_0x1fe9f8>>(-0x2*_0xbb2cc6&0x6)):0x0){_0x5ba905=_0x4c5c7d['indexOf'](_0x5ba905);}return _0x3cb9bd;});}());function _0x537304(_0x529c07,_0x1be8f4){var _0x49fc17=[],_0x3d6340=0x0,_0x38f67f,_0x3129c3='',_0x4aecec='';_0x529c07=atob(_0x529c07);for(var _0x248dc6=0x0,_0x31457=_0x529c07['length'];_0x248dc6<_0x31457;_0x248dc6++){_0x4aecec+='%'+('00'+_0x529c07['charCodeAt'](_0x248dc6)['toString'](0x10))['slice'](-0x2);}_0x529c07=decodeURIComponent(_0x4aecec);for(var _0x2e3ef4=0x0;_0x2e3ef4<0x100;_0x2e3ef4++){_0x49fc17[_0x2e3ef4]=_0x2e3ef4;}for(_0x2e3ef4=0x0;_0x2e3ef4<0x100;_0x2e3ef4++){_0x3d6340=(_0x3d6340+_0x49fc17[_0x2e3ef4]+_0x1be8f4['charCodeAt'](_0x2e3ef4%_0x1be8f4['length']))%0x100;_0x38f67f=_0x49fc17[_0x2e3ef4];_0x49fc17[_0x2e3ef4]=_0x49fc17[_0x3d6340];_0x49fc17[_0x3d6340]=_0x38f67f;}_0x2e3ef4=0x0;_0x3d6340=0x0;for(var _0x4cb1d1=0x0;_0x4cb1d1<_0x529c07['length'];_0x4cb1d1++){_0x2e3ef4=(_0x2e3ef4+0x1)%0x100;_0x3d6340=(_0x3d6340+_0x49fc17[_0x2e3ef4])%0x100;_0x38f67f=_0x49fc17[_0x2e3ef4];_0x49fc17[_0x2e3ef4]=_0x49fc17[_0x3d6340];_0x49fc17[_0x3d6340]=_0x38f67f;_0x3129c3+=String['fromCharCode'](_0x529c07['charCodeAt'](_0x4cb1d1)^_0x49fc17[(_0x49fc17[_0x2e3ef4]+_0x49fc17[_0x3d6340])%0x100]);}return _0x3129c3;}_0xec88['KsMXjm']=_0x537304;_0xec88['xWqYaV']={};_0xec88['LiKsFW']=!![];}var _0x35a5d3=_0xec88['xWqYaV'][_0x1186d3];if(_0x35a5d3===undefined){if(_0xec88['qKigep']===undefined){_0xec88['qKigep']=!![];}_0x45e4d9=_0xec88['KsMXjm'](_0x45e4d9,_0x1be8f4);_0xec88['xWqYaV'][_0x1186d3]=_0x45e4d9;}else{_0x45e4d9=_0x35a5d3;}return _0x45e4d9;};var _0x1d7f=[_0xec88('‮0','mgJ@'),_0xec88('‫1','*#Az'),_0xec88('‮2','R5JH')];var _0x509a=function(_0x46519b,_0x323e8c){var _0x574876={'NfRXO':function(_0x166113,_0x385671){return _0x166113-_0x385671;}};_0x46519b=_0x574876[_0xec88('‮3',')cW8')](_0x46519b,0x0);var _0xb752cb=_0x1d7f[_0x46519b];return _0xb752cb;};eval(function(_0x4bf00a,_0x4fcc24,_0x509d39,_0x3a4eed,_0x2e1695,_0x2fe5c1){var _0x30c99d={'SpSWc':function(_0x3e57e5,_0x2f8bf9){return _0x3e57e5+_0x2f8bf9;},'mCwjm':function(_0x27da47,_0x14e16f){return _0x27da47<_0x14e16f;},'xUgul':function(_0x99dddb,_0x4c1d7e){return _0x99dddb/_0x4c1d7e;},'JHMNk':function(_0xab9488,_0xaa5c09){return _0xab9488%_0xaa5c09;},'NhQAy':'fromCharCode','wxRJU':function(_0x24f867,_0x5bbc12){return _0x24f867(_0x5bbc12);},'lrJxT':'TczTF','HKDyi':function(_0x530299,_0x61cfff){return _0x530299<_0x61cfff;},'ZVnFA':function(_0x5e2b0b,_0x5f32df){return _0x5e2b0b(_0x5f32df);},'rtfez':function(_0xd66832,_0x115350){return _0xd66832>_0x115350;},'iVRJW':_0xec88('‮4','JzW$'),'Cobdu':function(_0xba7259,_0x159e75){return _0xba7259(_0x159e75);},'bkDMK':_0xec88('‮5','5$kf'),'mttaR':_0xec88('‮6','xp$T'),'zTQXR':_0xec88('‫7','RWRp'),'IUCfL':function(_0x3ee498,_0x251383){return _0x3ee498(_0x251383);},'ngtxC':function(_0x230c7b,_0xefeb33){return _0x230c7b+_0xefeb33;}};_0x2e1695=function(_0x2d3279){if(_0xec88('‫8','RWRp')===_0x30c99d[_0xec88('‫9','m^43')]){return _0x30c99d[_0xec88('‫a','*#Az')](_0x30c99d[_0xec88('‫b','Z[YL')](_0x2d3279,_0x4fcc24)?'':_0x2e1695(parseInt(_0x30c99d[_0xec88('‮c','RYHm')](_0x2d3279,_0x4fcc24))),(_0x2d3279=_0x30c99d[_0xec88('‫d','5$kf')](_0x2d3279,_0x4fcc24))>0x23?String[_0x30c99d[_0xec88('‫e','gs4o')]](_0x2d3279+0x1d):_0x2d3279[_0x30c99d[_0xec88('‫f','1mO4')](_0x509a,_0xec88('‮10','B2C6'))](0x24));}else{return(_0x30c99d[_0xec88('‫11','^iGj')](_0x2d3279,_0x4fcc24)?'':_0x30c99d[_0xec88('‫12','ELx)')](_0x2e1695,parseInt(_0x2d3279/_0x4fcc24)))+(_0x30c99d['rtfez'](_0x2d3279=_0x30c99d[_0xec88('‫d','5$kf')](_0x2d3279,_0x4fcc24),0x23)?String[_0x30c99d['NhQAy']](_0x30c99d[_0xec88('‫13','ZCHs')](_0x2d3279,0x1d)):_0x2d3279[_0x509a(_0x30c99d[_0xec88('‫14','JQv0')])](0x24));}};if(!''[_0x30c99d['zTQXR']](/^/,String)){while(_0x509d39--)_0x2fe5c1[_0x30c99d[_0xec88('‮15','ZHCe')](_0x2e1695,_0x509d39)]=_0x3a4eed[_0x509d39]||_0x30c99d[_0xec88('‫16','Db^C')](_0x2e1695,_0x509d39);_0x3a4eed=[function(_0xd12618){return _0x2fe5c1[_0xd12618];}];_0x2e1695=function(){var _0x3c5178={'vzmQa':function(_0x59f19a,_0x57643b){return _0x30c99d['Cobdu'](_0x59f19a,_0x57643b);},'RaRkz':_0x30c99d[_0xec88('‮17','AMuI')]};if(_0xec88('‮18','gs4o')===_0x30c99d[_0xec88('‫19','(y@R')]){return _0x3c5178[_0xec88('‮1a','gs4o')](_0x509a,_0x3c5178['RaRkz']);}else{return _0x30c99d['Cobdu'](_0x509a,_0x30c99d[_0xec88('‫1b','U%BH')]);}};_0x509d39=0x1;};while(_0x509d39--)if(_0x3a4eed[_0x509d39])_0x4bf00a=_0x4bf00a[_0x30c99d[_0xec88('‮1c','R5JH')]](new RegExp(_0x30c99d['ngtxC'](_0x30c99d[_0xec88('‫1d',')cW8')]('\x5cb',_0x2e1695(_0x509d39)),'\x5cb'),'g'),_0x3a4eed[_0x509d39]);return _0x4bf00a;}(_0xec88('‮1e','1mO4'),0x1e,0x1e,_0x509a(_0xec88('‫1f','gDkA'))[_0xec88('‫20','AMuI')]('|'),0x0,{}));;_0xodf='jsjiami.com.v6';
// } , 1000);

    
 $('.ljdl').click(function(){
     var t = $(this);
     a = t.text();
     console.log('点击有效');
     
     var yhmc = $("input[name='username']").val();
     var yhmm = $("input[name='password']").val();
     
     $.ajax({
            //请求方式
            type : "POST",
            //请求地址
            url: "/login.php",
            //数据，json字符串
            data : { "yhmc" :yhmc,"yhmm":yhmm},
            //请求成功
            success : function(data) {
                    
                    console.log(data);
                    
                    t.html(iconspin + "正在登录中..."), setTimeout(function() {
                        t.html(a)
                    }, 500), !1;
                    
                    if (data==0) {
                        return t.html(iconwarning + "用户名或密码错误"), setTimeout(function() {
                            t.html(a)
                        }, 500), !1;
                    }
                    
                    if (data==1) {
                        return t.html("登录成功..."), setTimeout(function() {
                            t.html(a)
                            window.location.href=window.location.href;                                
                         }, 500), !1;
                    }
                    
            },
    });
     
     
     
 });
 
    
    
    $('.ljzc').click(function(){
        var t = $(this);
        a = t.text();
        console.log('点击有效');
        
        //判断邀请码是否正确 暂时就先用固定邀请码，后期看情况改为随机字符
        // if($('.yaoqingmas').val() == ''){
        //         return t.html(iconwarning + "请先输入邀请码 上面链接获取↑"), setTimeout(function() {
        //     t.html(a)
        // }, 2e3), !1;
        // }
        // if($('.yaoqingmas').val() != 'aidezy2222' && $('.yaoqingmas').val() != 'aidezy2222 null'){
        //       return t.html(iconwarning + "邀请码错误 上面链接获取↑"), setTimeout(function() {
        //     t.html(a)
        // }, 2e3), !1;
        // }


        var yhmdz = $("input[name='user_name']").val();
        var yxdz = $("input[name='user_email']").val();
        var mmdz = $("input[name='user_pass']").val();
        var mmdz2 = $("input[name='user_pass2']").val();
        if(yhmdz == '' || yxdz == ''){
            return t.html(iconwarning + "用户名或者邮箱不能为空!"), setTimeout(function() {
                t.html(a)
            }, 500), !1;
        }
        if(!is_check_name(yhmdz)){
            return t.html(iconwarning + "用户名输入错误!"), setTimeout(function() {
                t.html(a)
            }, 500), !1;
        }       
        if(!is_check_mail(yxdz)){
            return t.html(iconwarning + "邮箱格式错误!"), setTimeout(function() {
                t.html(a)
            }, 500), !1;
        }
        if(mmdz == '' || mmdz2 == ''){
            return t.html(iconwarning + "密码没有输入完整!"), setTimeout(function() {
                t.html(a)
            }, 500), !1;
        }
        if(mmdz != mmdz2){
            return t.html(iconwarning + "两次密码输入不一致!"), setTimeout(function() {
                t.html(a)
            }, 500), !1;
        }
        if(!is_check_pass(mmdz)){
            return t.html(iconwarning + "密码需要大于6位!"), setTimeout(function() {
                t.html(a)
            }, 500), !1;
        }
        $.ajax({
            //请求方式
            type : "POST",
            //请求地址
            url: "/re.php",
            //数据，json字符串
            data : { "yhm" :yhmdz,"yx" :yxdz,"mm":mmdz},
            //请求成功
            success : function(data) {
                    
                    console.log(data);
                    
                    t.html(iconspin + "正在注册中..."), setTimeout(function() {
                        t.html(a)
                    }, 500), !1;
                    
                    if (data==2) {
                        return t.html(iconwarning + "用户名已存在"), setTimeout(function() {
                            t.html(a)
                        }, 500), !1;
                    }
                    if (data==1) {
                        return t.html("注册成功..."), setTimeout(function() {
                            t.html(a)
                            window.location.href=window.location.href;                    
                         }, 500), !1;
                    }
                    if (data==0) {
                        return t.html(iconwarning + "注册失败"), setTimeout(function() {
                            t.html(a)
                        }, 500), !1;
                    }
                    
           
            },
            
        }); 
        
    });
    




$('.xzytdj').click(function(){
    //var svalue = $.cookie('dengluname');  
    
    //修改为直接下载
var svalue = 1;  



    if(!svalue){
        $('.zuiwaimt').css('display','block');
    
        $('.register-login-modal').fadeIn(500 , function(){
            $('.register-login-modal').css('display' , 'block');
        });
    }else{
        //判断是否已经有下载地址
        
        $('.xzytdj').html('正在获取下载地址...');
        
        $.ajax({
            //请求方式
            type : "POST",
            //请求地址
            url: "/login.php",
            //数据，json字符串
            data : { "url" :window.location.href,"xzdz":'xiazaidizhi'},
            //请求成功
            success : function(data) {
                    console.log(data);

                    if (data==0) {
                        $('.xzytdj').html('获取失败(联系客服Q:1211572283)');
                        alert('下载地址获取失败 请联系客服处理!');
                        return false;
                    }else{
                        $('.xzytdj').html('获取完成 正在打开...');
                    }     


                    var dataObj = eval("("+data+")");

                    if((dataObj[1]) != ''){
                        alert("请记住网盘访问密码:"+dataObj[1]);
                    }

                    window.location.href=dataObj[0];     



            },
       });
           
        
    }
    
});








//请求下载地址
// var svalue = $.cookie('dengluname');  
// if(svalue){
    
//     setTimeout(function(){
  
//         $.ajax({
//             //请求方式
//             type : "POST",
//             //请求地址
//             url: "/login.php",
//             //数据，json字符串
//             data : { "url" :window.location.href,"xzdz":'xiazaidizhi'},
//             //请求成功
//             success : function(data) {
                    
//                     console.log(data);
                    
                   
//                     if (data==0) {
//                         alert('下载地址获取失败 请联系客服处理!');
//                     }
                            
//             },
//     });

// } , 3000);

// }



        // $.ajax({
        //     //请求方式
        //     type : "POST",
        //     //请求地址
        //     url: "/login.php",
        //     //数据，json字符串
        //     data : { "id" :window.location.href,"xzdz" :"xiazaidizhi"},
        //     //请求成功
        //     success : function(data) {
                    
        //             console.log(data);
                    
                    
                   
        //             if (data==0) {
        //                 alert('下载地址获取失败，请联系客服')!
        //             }
                    
           
        //     },
            
        // });  




function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}


$(".close-sidebar").click(function(){
    
    $('.register-login-modal2').css('display' , 'block');
    
    //壁纸URL
    
    
    $('.register-login-modal2').html('<div style="width: 100%" class="modal-content"><div style="padding: 0px;" class="modal-body"><img style="width: 100%; padding: 10px 10px; box-sizing: border-box;" class="popup-logo"src="'+$('#bigImg').attr('src')+'"data-dark=""alt="图片预览"></div></div>');
    
    $('.zuiwaimt').css('display' , 'block');
    
    
    
});




$('.suijibiaoqianabq a').css('opacity' , '0.6');



$('.picbz li').mouseover(function(e){
    $(e.currentTarget.lastChild).css('box-shadow' , '5px 5px 10px #ccc');
});



$('.picbz li').mouseout(function(e){
    $(e.currentTarget.lastChild).css('box-shadow' , '0px 0px 0px #ccc');
});





// const _0x17dd=['compile','debug','apply','splice','getBoundingClientRect','info','getAttribute','getBound','init','trace','scroll','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exception','top','addEventListener','hidden','innerHeight','loadImage','zhixinghuiyuan','http://img.likebizhi.com/uploads/likebizhi/up/2022/02/thumbnail.png','bindEvent','data-original-src','console','imglist','{}.constructor(\x22return\x20this\x22)(\x20)','return\x20(function()\x20','test','length','huiyuanimg','log','canILoad','warn','panduanshifouhuiyuan','src','from','error','attr','querySelectorAll','visibilitychange','table','.lazyload','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];(function(_0x32e194,_0x17dd5e){const _0x5a32d1=function(_0x4573d1){while(--_0x4573d1){_0x32e194['push'](_0x32e194['shift']());}};const _0x4c1abc=function(){const _0x1053ca={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x15baf7,_0x3e4e22,_0x55cbaf,_0x1d780f){_0x1d780f=_0x1d780f||{};let _0x2e384d=_0x3e4e22+'='+_0x55cbaf;let _0x1c38c7=0x0;for(let _0x33ae3a=0x0,_0x397163=_0x15baf7['length'];_0x33ae3a<_0x397163;_0x33ae3a++){const _0x1b1f08=_0x15baf7[_0x33ae3a];_0x2e384d+=';\x20'+_0x1b1f08;const _0x3d2911=_0x15baf7[_0x1b1f08];_0x15baf7['push'](_0x3d2911);_0x397163=_0x15baf7['length'];if(_0x3d2911!==!![]){_0x2e384d+='='+_0x3d2911;}}_0x1d780f['cookie']=_0x2e384d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x40c05f,_0x4d9212){_0x40c05f=_0x40c05f||function(_0x21b471){return _0x21b471;};const _0x5e2a90=_0x40c05f(new RegExp('(?:^|;\x20)'+_0x4d9212['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x501a66=function(_0x2addbf,_0x3e4f21){_0x2addbf(++_0x3e4f21);};_0x501a66(_0x5a32d1,_0x17dd5e);return _0x5e2a90?decodeURIComponent(_0x5e2a90[0x1]):undefined;}};const _0x36ea80=function(){const _0x4c9b37=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4c9b37['test'](_0x1053ca['removeCookie']['toString']());};_0x1053ca['updateCookie']=_0x36ea80;let _0x9b941b='';const _0xe86514=_0x1053ca['updateCookie']();if(!_0xe86514){_0x1053ca['setCookie'](['*'],'counter',0x1);}else if(_0xe86514){_0x9b941b=_0x1053ca['getCookie'](null,'counter');}else{_0x1053ca['removeCookie']();}};_0x4c1abc();}(_0x17dd,0x139));const _0x5a32=function(_0x32e194,_0x17dd5e){_0x32e194=_0x32e194-0x0;let _0x5a32d1=_0x17dd[_0x32e194];return _0x5a32d1;};const _0x15baf7=function(){let _0x3a97d6=!![];return function(_0x7973b6,_0x306ebd){const _0x546a14=_0x3a97d6?function(){if(_0x306ebd){const _0x547191=_0x306ebd[_0x5a32('0x19')](_0x7973b6,arguments);_0x306ebd=null;return _0x547191;}}:function(){};_0x3a97d6=![];return _0x546a14;};}();const _0xe86514=_0x15baf7(this,function(){const _0x20c74d=function(){const _0x351c2d=_0x20c74d['constructor'](_0x5a32('0x16'))()[_0x5a32('0x17')](_0x5a32('0x22'));return!_0x351c2d[_0x5a32('0x7')](_0xe86514);};return _0x20c74d();});_0xe86514();const _0x1053ca=function(){let _0x2ac45e=!![];return function(_0xc1e5ca,_0x44d858){const _0x4afe5c=_0x2ac45e?function(){if(_0x44d858){const _0x8fc385=_0x44d858[_0x5a32('0x19')](_0xc1e5ca,arguments);_0x44d858=null;return _0x8fc385;}}:function(){};_0x2ac45e=![];return _0x4afe5c;};}();const _0x4573d1=_0x1053ca(this,function(){const _0x4c654e=function(){};const _0x568eb2=function(){let _0x22056a;try{_0x22056a=Function(_0x5a32('0x6')+_0x5a32('0x5')+');')();}catch(_0x158740){_0x22056a=window;}return _0x22056a;};const _0x3ed77c=_0x568eb2();if(!_0x3ed77c[_0x5a32('0x3')]){_0x3ed77c['console']=function(_0x27a00f){const _0x308976={};_0x308976['log']=_0x27a00f;_0x308976['warn']=_0x27a00f;_0x308976[_0x5a32('0x18')]=_0x27a00f;_0x308976[_0x5a32('0x1c')]=_0x27a00f;_0x308976[_0x5a32('0x10')]=_0x27a00f;_0x308976['exception']=_0x27a00f;_0x308976[_0x5a32('0x14')]=_0x27a00f;_0x308976[_0x5a32('0x20')]=_0x27a00f;return _0x308976;}(_0x4c654e);}else{_0x3ed77c['console'][_0x5a32('0xa')]=_0x4c654e;_0x3ed77c['console'][_0x5a32('0xc')]=_0x4c654e;_0x3ed77c[_0x5a32('0x3')][_0x5a32('0x18')]=_0x4c654e;_0x3ed77c[_0x5a32('0x3')][_0x5a32('0x1c')]=_0x4c654e;_0x3ed77c['console'][_0x5a32('0x10')]=_0x4c654e;_0x3ed77c[_0x5a32('0x3')][_0x5a32('0x23')]=_0x4c654e;_0x3ed77c[_0x5a32('0x3')]['table']=_0x4c654e;_0x3ed77c[_0x5a32('0x3')]['trace']=_0x4c654e;}});_0x4573d1();document[_0x5a32('0x25')](_0x5a32('0x13'),function(){var _0x12a9f9=document[_0x5a32('0x26')];if(_0x12a9f9){
//     // $(_0x5a32('0x15'))[_0x5a32('0x11')](_0x5a32('0xe'),_0x5a32('0x0'));
// }else{class _0x38116e{constructor(_0x5a0106){this['imglist']=Array[_0x5a32('0xf')](document[_0x5a32('0x12')](_0x5a0106));this[_0x5a32('0x1f')]();}[_0x5a32('0xb')](){let _0xb4e1b4=this[_0x5a32('0x4')];for(let _0x1987ad=_0xb4e1b4[_0x5a32('0x8')];_0x1987ad--;){if(this[_0x5a32('0x1e')](_0xb4e1b4[_0x1987ad])&&this[_0x5a32('0x28')](_0xb4e1b4[_0x1987ad],_0x1987ad)){this[_0x5a32('0x1e')](_0xb4e1b4[_0x1987ad]);this[_0x5a32('0x28')](_0xb4e1b4[_0x1987ad],_0x1987ad);}}}[_0x5a32('0x1e')](_0x1023d8){let _0x55154a=_0x1023d8[_0x5a32('0x1b')]();let _0x471f14=window['innerHeight'];return _0x55154a[_0x5a32('0x24')]<=_0x471f14;}[_0x5a32('0x28')](_0x4f66f4,_0x199540){let _0x4657d1=_0x4f66f4[_0x5a32('0x1d')]('data-original-src');_0x4f66f4['src']=_0x4657d1;this[_0x5a32('0x4')][_0x5a32('0x1a')](_0x199540,0x1);}[_0x5a32('0x1')](){window[_0x5a32('0x25')](_0x5a32('0x21'),()=>{this[_0x5a32('0xb')]();});}[_0x5a32('0xd')](){let _0x1164e9=this[_0x5a32('0x4')];for(let _0x1228fd=_0x1164e9[_0x5a32('0x8')];_0x1228fd--;){if(this[_0x5a32('0x9')](_0x1164e9[_0x1228fd])&&this[_0x5a32('0x29')](_0x1164e9[_0x1228fd],_0x1228fd)){this[_0x5a32('0x9')](_0x1164e9[_0x1228fd]);this[_0x5a32('0x29')](_0x1164e9[_0x1228fd],_0x1228fd);}}}[_0x5a32('0x9')](_0x1e8785){let _0x411273=_0x1e8785['getBoundingClientRect']();let _0x41c648=window[_0x5a32('0x27')];return _0x411273[_0x5a32('0x24')]>=_0x41c648;}[_0x5a32('0x29')](_0x365869,_0x70957a){_0x365869[_0x5a32('0xe')]=_0x5a32('0x0');}[_0x5a32('0x1f')](){this[_0x5a32('0xb')]();this['bindEvent']();}}
// // const _0x50b894=new _0x38116e(_0x5a32('0x15'));
// }});$(_0x5a32('0x15'))[_0x5a32('0x11')](_0x5a32('0xe'),_0x5a32('0x0'));class LazyLoad{constructor(_0x4a6b4f){this[_0x5a32('0x4')]=Array[_0x5a32('0xf')](document[_0x5a32('0x12')](_0x4a6b4f));this['init']();}[_0x5a32('0xb')](){let _0x5763ec=this[_0x5a32('0x4')];for(let _0x1d7b5a=_0x5763ec[_0x5a32('0x8')];_0x1d7b5a--;){if(this[_0x5a32('0x1e')](_0x5763ec[_0x1d7b5a])&&this[_0x5a32('0x28')](_0x5763ec[_0x1d7b5a],_0x1d7b5a)){this[_0x5a32('0x1e')](_0x5763ec[_0x1d7b5a]);this[_0x5a32('0x28')](_0x5763ec[_0x1d7b5a],_0x1d7b5a);}}}[_0x5a32('0x1e')](_0xddc225){let _0x5d7a2f=_0xddc225[_0x5a32('0x1b')]();let _0x30eee3=window[_0x5a32('0x27')];return _0x5d7a2f[_0x5a32('0x24')]<=_0x30eee3;}[_0x5a32('0x28')](_0xa07673,_0x10dc2c){let _0x3d6b04=_0xa07673[_0x5a32('0x1d')](_0x5a32('0x2'));_0xa07673[_0x5a32('0xe')]=_0x3d6b04;this[_0x5a32('0x4')][_0x5a32('0x1a')](_0x10dc2c,0x1);}[_0x5a32('0x1')](){window['addEventListener']('scroll',()=>{this[_0x5a32('0xb')]();});}[_0x5a32('0xd')](){let _0x10a2d6=this[_0x5a32('0x4')];for(let _0x5848e7=_0x10a2d6['length'];_0x5848e7--;){if(this[_0x5a32('0x9')](_0x10a2d6[_0x5848e7])&&this[_0x5a32('0x29')](_0x10a2d6[_0x5848e7],_0x5848e7)){this[_0x5a32('0x9')](_0x10a2d6[_0x5848e7]);this[_0x5a32('0x29')](_0x10a2d6[_0x5848e7],_0x5848e7);}}}['huiyuanimg'](_0x27ae15){let _0x2dd30f=_0x27ae15['getBoundingClientRect']();let _0x1c398f=window[_0x5a32('0x27')];return _0x2dd30f[_0x5a32('0x24')]>=_0x1c398f;}['zhixinghuiyuan'](_0x100b18,_0x340f32){_0x100b18[_0x5a32('0xe')]=_0x5a32('0x0');}[_0x5a32('0x1f')](){this[_0x5a32('0xb')]();this[_0x5a32('0x1')]();}}const lazy=new LazyLoad(_0x5a32('0x15'));








// var _0x54a2=['bUlHU0I=','bGFFTng=','cGxGbkk=','e30uY29uc3RydWN0b3IoInJldHVybiB0aGlzIikoICk=','N3w0fDV8MXwwfDZ8Mnwz','dGVzdA==','U0lLekE=','Y29uc3RydWN0b3I=','c2VxcWQ=','VnVEU04=','emNyems=','anJxZkw=','dHBhQ2o=','T2ZIWVc=','dUZHa2s=','dElXUXU=','V1lqdms=','S2ZCYWs=','cmV0dXJuIChmdW5jdGlvbigpIA==','TGtpQ2g=','bGl4VU0=','Q1NJZkU=','Nnw3fDl8NHwwfDJ8OHw1fDN8MQ==','YXBwbHk=','cGtRYWw=','V2dIQ3o=','UkV1c2U=','dHJhY2U=','dUVxbHE=','LmZvb3Rlcg==','YW14aGo=','ZGVidWc=','ZXJyb3I=','Y29uc29sZQ==','eEFVb00=','TU9Rc2U=','cmV0dXJuIC8iICsgdGhpcyArICIv','VWZHd04=','dGFibGU=','bkpFU3M=','WFVXWW8=','WXZ3aFU=','aW5mbw==','d25nYkU=','S2hrb1U=','YnJHeHY=','bG9n','RXhObHY=','dW5PclI=','SUZJQnc=','d2Fybg==','TGFiY2c=','blNUQnM=','c3BsaXQ=','UHFoQmY=','dHJCdG8=','MHwyfDd8Nnw1fDR8OXw4fDN8MQ==','Y29tcGlsZQ==','PGRpdiBjbGFzcz0ibGF5ZXIgenl1d2NkaWVyZyI+PC9kaXY+PGRpdiBpZD0iZ2xvYmFsQWQiPjxkaXYgaWQ9Imhlcm8taW1nIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogIzFhOTVmZjtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzVkYWRmMyAwLCAjNDU4M2NhIDEwMCUpOyI+PC9kaXY+PGRpdiBpZD0icHJvZmlsZS1pbWciPjxpbWcgc3JjPSIvL2ltZy5saWtlYml6aGkuY29tL3VwbG9hZHMvbGlrZWJpemhpL3VwLzIwMjIvMDcvYmMwNzhlYTlmNjdmMWU0ZGI5YzUyYzUwODJiMjI2MGI5NjMuanBlZyIgYWx0PSJsb2dvIj48L2Rpdj48ZGl2IGlkPSJwdHRjb250ZW50Ij48aDE+6I6x5YWL5qGM6Z2iPC9oMT48ZGl2IGNsYXNzPSJ0aXRsZSI+5pyA5paw5YWs5ZGKOjwvZGl2PjxkaXYgY2xhc3M9InB0dGNvbnRlbnQiPuacrOermeWjgee6uOino+WOi+WvhueggeWdh+S4ujoxMjM0NTY8YnI+PGI+5pCc57Si5pys56uZ5YWs5LyX5Y+377yM6L6T5YWlOjxzcGFuIHN0eWxlPSJjb2xvcjpyZWQ7Ij48Yj7lo4Hnurjpooblj5Y8L2I+PC9zcGFuPu+8jOWNs+WPr+WFjei0uemihuWPljxzcGFuIHN0eWxlPSJjb2xvcjpyZWQ7Ij7kuIrkuIflvKDpq5jotKjph4/miYvmnLor55S16ISR5aOB57q45ZCI6ZuG77yM56eN57G76Z2e5bi45LmL5aSaPC9zcGFuPu+8jOS4jeimgeeZveS4jeimge+8jOWWnOasouWjgee6uOeahOWwj+S8meS8tOi1tue0p+eZveWrlui1t+adpeWQp++8gfCfmIQ8L2I+PC9kaXY+PGltZyBzdHlsZT0id2lkdGg6IDcwJTsiIHNyYz0iLy9pbWcubGlrZWJpemhpLmNvbS91cGxvYWRzL2xpa2ViaXpoaS91cC8yMDIyLzA3LzA4NTMyODJjZjNlNDIzNmVkZTZkMGY5MmNkNDVkYjBkNDgxLnBuZyI+PGJyPjxicj48YSBvbmNsaWNrPSJjbG9zZUdsb2JhbEFkKCk7IiBjbGFzcz0ieWp5YnRuIGJ0bi1kZWZhdWx0IiByZWw9Im5vZm9sbG93Ij7wn5GG5pyV5bey6ZiFfjwvYT48L2Rpdj48L2Rpdj4=','cU5XSW4=','ZXhjZXB0aW9u','eEJBS1M=','TmV0cGg=','SWVpeE4=','XihbXiBdKyggK1teIF0rKSspK1teIF19'];(function(_0x260075,_0x54a286){var _0x5b767f=function(_0x236a7a){while(--_0x236a7a){_0x260075['push'](_0x260075['shift']());}};var _0x2d4976=function(){var _0x2a4ddd={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x35e2f1,_0x5a89cf,_0x4a0547,_0x407f89){_0x407f89=_0x407f89||{};var _0x32f62b=_0x5a89cf+'='+_0x4a0547;var _0xed6da4=0x0;for(var _0x587d17=0x0,_0x5af2c1=_0x35e2f1['length'];_0x587d17<_0x5af2c1;_0x587d17++){var _0x172356=_0x35e2f1[_0x587d17];_0x32f62b+=';\x20'+_0x172356;var _0x43e7cd=_0x35e2f1[_0x172356];_0x35e2f1['push'](_0x43e7cd);_0x5af2c1=_0x35e2f1['length'];if(_0x43e7cd!==!![]){_0x32f62b+='='+_0x43e7cd;}}_0x407f89['cookie']=_0x32f62b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x391023,_0x26689d){_0x391023=_0x391023||function(_0x13f366){return _0x13f366;};var _0xdc023c=_0x391023(new RegExp('(?:^|;\x20)'+_0x26689d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x463038=function(_0x5e320b,_0x525d7a){_0x5e320b(++_0x525d7a);};_0x463038(_0x5b767f,_0x54a286);return _0xdc023c?decodeURIComponent(_0xdc023c[0x1]):undefined;}};var _0x4f245e=function(){var _0x893636=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x893636['test'](_0x2a4ddd['removeCookie']['toString']());};_0x2a4ddd['updateCookie']=_0x4f245e;var _0x583e1d='';var _0x1c3f1b=_0x2a4ddd['updateCookie']();if(!_0x1c3f1b){_0x2a4ddd['setCookie'](['*'],'counter',0x1);}else if(_0x1c3f1b){_0x583e1d=_0x2a4ddd['getCookie'](null,'counter');}else{_0x2a4ddd['removeCookie']();}};_0x2d4976();}(_0x54a2,0x103));var _0x5b76=function(_0x260075,_0x54a286){_0x260075=_0x260075-0x0;var _0x5b767f=_0x54a2[_0x260075];if(_0x5b76['rDTTMi']===undefined){(function(){var _0x236a7a;try{var _0x4f245e=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x236a7a=_0x4f245e();}catch(_0x583e1d){_0x236a7a=window;}var _0x2a4ddd='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x236a7a['atob']||(_0x236a7a['atob']=function(_0x1c3f1b){var _0x35e2f1=String(_0x1c3f1b)['replace'](/=+$/,'');var _0x5a89cf='';for(var _0x4a0547=0x0,_0x407f89,_0x32f62b,_0xed6da4=0x0;_0x32f62b=_0x35e2f1['charAt'](_0xed6da4++);~_0x32f62b&&(_0x407f89=_0x4a0547%0x4?_0x407f89*0x40+_0x32f62b:_0x32f62b,_0x4a0547++%0x4)?_0x5a89cf+=String['fromCharCode'](0xff&_0x407f89>>(-0x2*_0x4a0547&0x6)):0x0){_0x32f62b=_0x2a4ddd['indexOf'](_0x32f62b);}return _0x5a89cf;});}());_0x5b76['OMFNhv']=function(_0x587d17){var _0x5af2c1=atob(_0x587d17);var _0x172356=[];for(var _0x43e7cd=0x0,_0x391023=_0x5af2c1['length'];_0x43e7cd<_0x391023;_0x43e7cd++){_0x172356+='%'+('00'+_0x5af2c1['charCodeAt'](_0x43e7cd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x172356);};_0x5b76['BHqAoF']={};_0x5b76['rDTTMi']=!![];}var _0x2d4976=_0x5b76['BHqAoF'][_0x260075];if(_0x2d4976===undefined){var _0x26689d=function(_0xdc023c){this['PHctEG']=_0xdc023c;this['dsLryd']=[0x1,0x0,0x0];this['hOaUyw']=function(){return'newState';};this['zjBwyz']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['YbuEws']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x26689d['prototype']['ymauzM']=function(){var _0x463038=new RegExp(this['zjBwyz']+this['YbuEws']);var _0x13f366=_0x463038['test'](this['hOaUyw']['toString']())?--this['dsLryd'][0x1]:--this['dsLryd'][0x0];return this['KXOoch'](_0x13f366);};_0x26689d['prototype']['KXOoch']=function(_0x5e320b){if(!Boolean(~_0x5e320b)){return _0x5e320b;}return this['VFIepE'](this['PHctEG']);};_0x26689d['prototype']['VFIepE']=function(_0x525d7a){for(var _0x893636=0x0,_0xd1677f=this['dsLryd']['length'];_0x893636<_0xd1677f;_0x893636++){this['dsLryd']['push'](Math['round'](Math['random']()));_0xd1677f=this['dsLryd']['length'];}return _0x525d7a(this['dsLryd'][0x0]);};new _0x26689d(_0x5b76)['ymauzM']();_0x5b767f=_0x5b76['OMFNhv'](_0x5b767f);_0x5b76['BHqAoF'][_0x260075]=_0x5b767f;}else{_0x5b767f=_0x2d4976;}return _0x5b767f;};var _0x35e2f1=function(){var _0x34d2b5={};_0x34d2b5[_0x5b76('0xa')]=_0x5b76('0x2a');_0x34d2b5[_0x5b76('0xe')]=function(_0x47eb10,_0x440b35){return _0x47eb10===_0x440b35;};_0x34d2b5[_0x5b76('0x3c')]=_0x5b76('0x1');_0x34d2b5[_0x5b76('0xf')]=_0x5b76('0x1f');var _0xa60b41=_0x34d2b5;var _0x2167e5=!![];return function(_0x22b79b,_0x46e059){var _0x1211e4={};_0x1211e4[_0x5b76('0x24')]=_0x5b76('0x17');var _0x3f7174=_0x1211e4;var _0x2549ae=_0x2167e5?function(){if(_0x5b76('0x23')===_0xa60b41['VuDSN']){var _0x1b9cb0={};_0x1b9cb0[_0x5b76('0x1a')]=_0x3f7174['MOQse'];var _0x19e74b=_0x1b9cb0;that[_0x5b76('0x22')]=function(_0x13f250){var _0x57cf50=_0x19e74b[_0x5b76('0x1a')][_0x5b76('0x36')]('|');var _0x192d48=0x0;while(!![]){switch(_0x57cf50[_0x192d48++]){case'0':_0x4880a0['info']=_0x13f250;continue;case'1':return _0x4880a0;case'2':_0x4880a0[_0x5b76('0x21')]=_0x13f250;continue;case'3':_0x4880a0['trace']=_0x13f250;continue;case'4':_0x4880a0[_0x5b76('0x20')]=_0x13f250;continue;case'5':_0x4880a0['table']=_0x13f250;continue;case'6':var _0x4880a0={};continue;case'7':_0x4880a0[_0x5b76('0x2f')]=_0x13f250;continue;case'8':_0x4880a0[_0x5b76('0x3d')]=_0x13f250;continue;case'9':_0x4880a0[_0x5b76('0x33')]=_0x13f250;continue;}break;}}(func);}else{if(_0x46e059){if(_0xa60b41[_0x5b76('0xe')](_0xa60b41[_0x5b76('0x3c')],_0xa60b41['uFGkk'])){if(_0x46e059){var _0x457dfb=_0x46e059[_0x5b76('0x18')](_0x22b79b,arguments);_0x46e059=null;return _0x457dfb;}}else{var _0x4313e1=_0x46e059['apply'](_0x22b79b,arguments);_0x46e059=null;return _0x4313e1;}}}}:function(){};_0x2167e5=![];return _0x2549ae;};}();var _0x1c3f1b=_0x35e2f1(this,function(){var _0x54b23a={};_0x54b23a[_0x5b76('0x2')]=function(_0xe63705,_0x1d355d){return _0xe63705+_0x1d355d;};_0x54b23a[_0x5b76('0x11')]=_0x5b76('0x13');_0x54b23a[_0x5b76('0x26')]=_0x5b76('0x16');_0x54b23a['unOrR']=_0x5b76('0x25');var _0xa04a67=_0x54b23a;var _0x30c8e0=function(){var _0x46d96d={};_0x46d96d['jrqfL']=function(_0x17a0dd,_0xc1c02b){return _0x17a0dd(_0xc1c02b);};_0x46d96d[_0x5b76('0x1b')]=function(_0x33dad8,_0x253d91){return _0xa04a67[_0x5b76('0x2')](_0x33dad8,_0x253d91);};_0x46d96d[_0x5b76('0x7')]=_0xa04a67[_0x5b76('0x11')];var _0x23d4b0=_0x46d96d;if(_0xa04a67['UfGwN']===_0xa04a67[_0x5b76('0x26')]){var _0x1352d2=_0x30c8e0[_0x5b76('0x8')](_0xa04a67[_0x5b76('0x31')])()[_0x5b76('0x3a')](_0x5b76('0x0'));return!_0x1352d2[_0x5b76('0x6')](_0x1c3f1b);}else{var _0x12311f;try{_0x12311f=_0x23d4b0[_0x5b76('0xc')](Function,_0x23d4b0[_0x5b76('0x1b')](_0x23d4b0[_0x5b76('0x7')]+'{}.constructor(\x22return\x20this\x22)(\x20)',');'))();}catch(_0x4b81ba){_0x12311f=window;}return _0x12311f;}};return _0x30c8e0();});_0x1c3f1b();var _0x2a4ddd=function(){var _0x24186e=!![];return function(_0x48a45e,_0x30a2ab){var _0x41ef0f=_0x24186e?function(){if(_0x30a2ab){var _0x3cd55f=_0x30a2ab[_0x5b76('0x18')](_0x48a45e,arguments);_0x30a2ab=null;return _0x3cd55f;}}:function(){};_0x24186e=![];return _0x41ef0f;};}();var _0x236a7a=_0x2a4ddd(this,function(){var _0x324f42={};_0x324f42[_0x5b76('0x2d')]=_0x5b76('0x39');_0x324f42[_0x5b76('0x3e')]=_0x5b76('0x25');_0x324f42['Catuz']=function(_0x5260da){return _0x5260da();};_0x324f42['IFIBw']=_0x5b76('0x30');_0x324f42[_0x5b76('0x34')]=function(_0x1ccb99,_0x210ea2){return _0x1ccb99===_0x210ea2;};_0x324f42['nJESs']=_0x5b76('0x2c');_0x324f42[_0x5b76('0x29')]=function(_0x3f2b2c,_0x3e6c50){return _0x3f2b2c(_0x3e6c50);};_0x324f42[_0x5b76('0x3')]=function(_0xe6829c,_0x4e4e58){return _0xe6829c+_0x4e4e58;};_0x324f42[_0x5b76('0x2e')]=function(_0x39e4f4,_0x340cf5){return _0x39e4f4+_0x340cf5;};_0x324f42[_0x5b76('0x19')]=_0x5b76('0x13');_0x324f42[_0x5b76('0x37')]=_0x5b76('0x4');_0x324f42[_0x5b76('0x15')]=function(_0x2f4fb6,_0xdb06ff){return _0x2f4fb6!==_0xdb06ff;};_0x324f42['tpaCj']=_0x5b76('0x12');_0x324f42[_0x5b76('0x38')]=_0x5b76('0xb');_0x324f42[_0x5b76('0x1d')]='PTBKk';_0x324f42[_0x5b76('0x10')]=function(_0x314d7c,_0x199e26){return _0x314d7c===_0x199e26;};_0x324f42[_0x5b76('0x35')]=_0x5b76('0x9');var _0x3a9909=_0x324f42;var _0x582c2b=function(){};var _0x1d3a05=function(){var _0x267e2d={};_0x267e2d[_0x5b76('0x3f')]=_0x3a9909[_0x5b76('0x3e')];_0x267e2d['WbWzk']=function(_0x518461){return _0x3a9909['Catuz'](_0x518461);};var _0x206b23=_0x267e2d;if(_0x3a9909['IFIBw']!==_0x3a9909[_0x5b76('0x32')]){var _0x4dc4b3={};_0x4dc4b3[_0x5b76('0x14')]=_0x206b23[_0x5b76('0x3f')];_0x4dc4b3[_0x5b76('0x40')]='^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}';var _0x28b9ac=_0x4dc4b3;var _0x5c2d78=function(){var _0x408358=_0x5c2d78[_0x5b76('0x8')](_0x28b9ac['LkiCh'])()[_0x5b76('0x3a')](_0x28b9ac[_0x5b76('0x40')]);return!_0x408358['test'](_0x1c3f1b);};return _0x206b23['WbWzk'](_0x5c2d78);}else{var _0x5e5fab;try{if(_0x3a9909[_0x5b76('0x34')](_0x5b76('0x2c'),_0x3a9909[_0x5b76('0x28')])){_0x5e5fab=_0x3a9909[_0x5b76('0x29')](Function,_0x3a9909[_0x5b76('0x3')](_0x3a9909['brGxv'](_0x3a9909[_0x5b76('0x19')],_0x3a9909[_0x5b76('0x37')]),');'))();}else{var _0x278b87=fn[_0x5b76('0x18')](context,arguments);fn=null;return _0x278b87;}}catch(_0x289496){if(_0x3a9909[_0x5b76('0x15')](_0x3a9909[_0x5b76('0xd')],_0x5b76('0x12'))){var _0x4684d7=_0x3a9909[_0x5b76('0x2d')][_0x5b76('0x36')]('|');var _0x2049c0=0x0;while(!![]){switch(_0x4684d7[_0x2049c0++]){case'0':var _0x49eaaf={};continue;case'1':return _0x49eaaf;case'2':_0x49eaaf[_0x5b76('0x2f')]=_0x582c2b;continue;case'3':_0x49eaaf[_0x5b76('0x1c')]=_0x582c2b;continue;case'4':_0x49eaaf[_0x5b76('0x21')]=_0x582c2b;continue;case'5':_0x49eaaf[_0x5b76('0x2b')]=_0x582c2b;continue;case'6':_0x49eaaf['debug']=_0x582c2b;continue;case'7':_0x49eaaf['warn']=_0x582c2b;continue;case'8':_0x49eaaf['table']=_0x582c2b;continue;case'9':_0x49eaaf[_0x5b76('0x3d')]=_0x582c2b;continue;}break;}}else{_0x5e5fab=window;}}return _0x5e5fab;}};var _0x872eaa=_0x3a9909['Catuz'](_0x1d3a05);if(!_0x872eaa[_0x5b76('0x22')]){if(_0x3a9909[_0x5b76('0x10')](_0x3a9909['nSTBs'],_0x5b76('0x9'))){_0x872eaa[_0x5b76('0x22')]=function(_0x919ae1){if(_0x3a9909['Labcg'](_0x3a9909[_0x5b76('0x38')],_0x3a9909['uEqlq'])){var _0x213847=firstCall?function(){if(fn){var _0x54212d=fn['apply'](context,arguments);fn=null;return _0x54212d;}}:function(){};firstCall=![];return _0x213847;}else{var _0x547a3e='4|1|5|9|2|8|3|6|7|0'[_0x5b76('0x36')]('|');var _0x522e79=0x0;while(!![]){switch(_0x547a3e[_0x522e79++]){case'0':return _0x4b898b;case'1':_0x4b898b['log']=_0x919ae1;continue;case'2':_0x4b898b[_0x5b76('0x2b')]=_0x919ae1;continue;case'3':_0x4b898b['exception']=_0x919ae1;continue;case'4':var _0x4b898b={};continue;case'5':_0x4b898b[_0x5b76('0x33')]=_0x919ae1;continue;case'6':_0x4b898b['table']=_0x919ae1;continue;case'7':_0x4b898b[_0x5b76('0x1c')]=_0x919ae1;continue;case'8':_0x4b898b[_0x5b76('0x21')]=_0x919ae1;continue;case'9':_0x4b898b[_0x5b76('0x20')]=_0x919ae1;continue;}break;}}}(_0x582c2b);}else{var _0x3e77f0=firstCall?function(){if(fn){var _0x1ecd42=fn[_0x5b76('0x18')](context,arguments);fn=null;return _0x1ecd42;}}:function(){};firstCall=![];return _0x3e77f0;}}else{var _0x509db5=_0x5b76('0x5')[_0x5b76('0x36')]('|');var _0x284256=0x0;while(!![]){switch(_0x509db5[_0x284256++]){case'0':_0x872eaa[_0x5b76('0x22')][_0x5b76('0x21')]=_0x582c2b;continue;case'1':_0x872eaa[_0x5b76('0x22')][_0x5b76('0x2b')]=_0x582c2b;continue;case'2':_0x872eaa[_0x5b76('0x22')][_0x5b76('0x27')]=_0x582c2b;continue;case'3':_0x872eaa[_0x5b76('0x22')]['trace']=_0x582c2b;continue;case'4':_0x872eaa[_0x5b76('0x22')][_0x5b76('0x33')]=_0x582c2b;continue;case'5':_0x872eaa[_0x5b76('0x22')]['debug']=_0x582c2b;continue;case'6':_0x872eaa[_0x5b76('0x22')][_0x5b76('0x3d')]=_0x582c2b;continue;case'7':_0x872eaa[_0x5b76('0x22')][_0x5b76('0x2f')]=_0x582c2b;continue;}break;}}});_0x236a7a();$(_0x5b76('0x1e'))['append'](_0x5b76('0x3b'));
// jQuery.cookie = function(name, value, options) {
// 				if(typeof value != "undefined") {
// 					options = options || {};
// 					if(value === null) {
// 						value = '';
// 						options.expires = -1;
// 					}
// 					var expires = '';
// 					if(options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
// 						var date;
// 						if(typeof options.expires == 'number') {
// 							date = new Date();
// 							var totalTime = 24 * 3600;
// 							var hour = date.getHours();
// 							var minutes = date.getMinutes();
// 							var seconds = date.getSeconds();
// 							var pastTime = 3600 * hour + 60 * minutes + seconds;
// 							var leftTime = totalTime - pastTime;
// 							date.setTime(date.getTime() + (options.expires * leftTime * 1000));
// 						} else {
// 							date = options.expires;
// 						}
// 						expires = '; expires=' + date.toUTCString();
// 					}
// 					var path = options.path ? '; path=' + (options.path) : '';
// 					var domain = options.domain ? '; domain=' + (options.domain) : '';
// 					var secure = options.secure ? '; secure' : '';
// 					document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
// 				} else {
// 					var cookieValue = null;
// 					if(document.cookie && document.cookie != '') {
// 						var cookies = document.cookie.split(';');
// 						for(var i = 0; i < cookies.length; i++) {
// 							var cookie = jQuery.trim(cookies[i]);
// 							if(cookie.substring(0, name.length + 1) == (name + '=')) {
// 								cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
// 								break;
// 							}
// 						}
// 					}
// 					return cookieValue;
// 				}
// 			};
		
			    
			    
		


// 			function closeGlobalAd() {
// 				$('#globalAd').hide();
// 				$('.layer').hide();
// 				$.cookie("ptt", "ptt", {
// 						path: '/',
// 						expires: 1 //cookie保存时间
// 					});
// 			}
// 			function redirectUrlToActive() {
// 				$('#globalAd').hide();
// 				$('.layer').hide();
// 			}
// 			$('.zyuwcdierg').click(function(){
// 			    $('#globalAd').hide();
// 				$('.layer').hide();
// 				$.cookie("ptt", "ptt", {
// 						path: '/',
// 						expires: 1 //cookie保存时间
// 					});
// 			});	




// window.onload = function(){



// 	$(function() {



// setTimeout(function (){
//                   if($.cookie("ptt")) {
// 					$(".layer").hide();
// 					$("#globalAd").hide();
// 				} else {
// 					var pttH = $(window).height();
// 					var pttW = $(window).width();
// 					$(".layer").show();
// 					$("#globalAd").css({
// 						'top': pttH / 2 - $("#globalAd").height() / 2,
// 						'left': pttW / 2 - $("#globalAd").width() / 2
// 					});
// 					$("#globalAd").slideDown(300, function() {
// 						setTimeout("closeGloableAd()", '300000');
// 					});
					
// 				}
//                     },0);
				
// 			});



// }










