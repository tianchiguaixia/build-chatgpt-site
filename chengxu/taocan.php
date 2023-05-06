
<?php

require('./lib/init.php');


if($_GET['xxcx'] == '1'){
    
    
    $sql = 'select * from chat_taocan';
    $sytc = $mysql->getAll($sql);
    
    
    
    print_r(json_encode($sytc));
    
    exit();
    
    
    
}
    

?>

<!DOCTYPE html>
<html>
<head>
	<title>GPT套餐购买</title>
	<!-- 引入Bootstrap框架 -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
		    

	
	
	<link rel="stylesheet" href="/css/bootstrap.min.css">
		<link rel="stylesheet" href="/css/bootstrap.min2.css">
		<script type="text/javascript" src="jquery.js"></script>
		<link rel="stylesheet" href="/css/index.css">
		
		
<style>

a {
  text-decoration: none!important;
}


.dha a:active {
    background-color: unset!important; 
  /*background: unset!important;*/
  color:unset!important;
}


.page-title {
    
        width: 850px;
    margin: 0 auto;
    
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: black!important;
  color: #fff;
  padding: 0 20px;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.dropdown-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.ftth{
    background:black!important;  
    background: black!important;
    /*position: fixed;*/
    left: 0;
    bottom: 0;
    width: 100%;
}

@media (max-width: 768px) {
  .page-title {
    width: 100%;
  }
  
  .ftth{
    background:black!important;    background: black!important;
    position: unset;
    left: 0;
    bottom: 0;
    width: 100%;
}
  
}


html, body {
  height: 100%!important;
}

body {
  display: flex!important;
  flex-direction: column!important;
}

.content {
  flex-grow: 1!important;
}





</style>

</head>
<body>
    

    <div class="content" style="    background-color: black!important;">



<div class="page-title">
  <h4><a style="color: white;    font-size: 20px;" href="/" class="el-tooltip el-icon-s-home item" aria-describedby="el-tooltip-9813" tabindex="0"></a> <span style="    font-size: 15px;"><a style="color:white;" href="index.php">返回首页</a></span></h4>
  <div class="user-info">
    <div class="dropdown">
      <a  style="color:white;" class="dropdown-toggle" href="#" role="button" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img style="width:50px;height:50px;left: -5px;
    position: relative;" src="/assets/pic.png" alt="avatar" class="rounded-circle">
        <span style="color:white;"><?php echo $_COOKIE['dengluname'];?></span>
      </a>
      <div style="min-width: 8rem;" class="dropdown-menu dha" aria-labelledby="userDropdown">
        <a class="dropdown-item" href="/xiugaimima.php">修改密码</a>
        <a class="dropdown-item" href="/yaoqing.php">邀请好友(可提现)</a>
        <a class="dropdown-item" href="/index.php?tcdl=1">退出登录</a>
      </div>
    </div>
  </div>
</div>


    
    </div>
    
    
	<div class="container content">
	    


	    
		<div class="row justify-content-center mt-5">
			<div class="col-md-8">
			    

		    
			    
			    <?php
			    
			    $sql = "select kamikaqim from chat_admin where id = 1";
			    $sfkqkm = $mysql->getOne($sql);
			    
			    
			    if($sfkqkm == '开启'){
			        echo '	<div class="card" style="display:;">';
			    }else{
			        echo '	<div class="card" style="display:none;">';
			    }
			    
			    ?>
			    
			    
			 
				    
				    
		<div>
			<div style="     background: linear-gradient(to right, #03A9F4, #00BCD4);" class="card-header bg-primary text-white">
						<h4 class="card-title">使用卡密充值</h4>
					</div>			
	<div class="card-body">
					    

<div class="mb-3">
								<label for="name" class="form-label">充值账号</label>
								<input type="text" class="form-control" id="namezh" required value="<?php echo $_COOKIE['dengluname'];?>">
							</div>

<div class="mb-3">
								<label for="name" class="form-label">卡密内容</label>
								<input type="text" class="form-control kmnr" required="" value="">
							</div>
    
    <button type="submit " class="btn btn-primary kmczye">充值</button>
    
    
 
    
    
    
   <br> <br>
<p>卡密购买链接:

<?php

$sql = "select kamilj from chat_admin where id = 1";
$kaml = $mysql->getOne($sql);

?>

<a href="<?php echo $kaml;?>">点我打开</a>




</p>



</div>



</div>

</div>


		<br>	 

				    
			    
				    
				    	    
				<div class="card">
				    
				    
				    
					<div style="     background: linear-gradient(to right, #03A9F4, #00BCD4);" class="card-header bg-primary text-white">
						<h4 class="card-title">Chatgpt提问次数 套餐购买</h4>
					</div>
					<div class="card-body">
						<form>
						    
							<br>
							
						<p><b>下单后会自动给你账号充值，然后你就可以到网站首页提问了！</b></p>
						
						<p>是最新GPT多模态自然语言模型 非常聪明！</p>
				
				
				    <?php
				    

	$yhm = $_COOKIE['dengluname'];
	
	
	if($yhm != ''){
	    
	     $sql = "select vip from chat_yonghu where yhmc='$yhm'";
    $sfvip = $mysql->getOne($sql);

    if($sfvip != ''){
        //数据库的会员到期时间     
        $date1 = $sfvip;
        $time1 = strtotime($date1);
    }else{
        $time1 = 0;
    }

    //当前时间戳
    $date2 = date("Y-m-d");
    $time2 = strtotime($date2);


    //如果不会空 判断没有会员
    if($sfvip == ''){
        $sql = "select sycs from chat_yonghu where yhmc='$yhm'";
        $sycs = $mysql->getOne($sql);
        
        if($sycs != '0'){
            echo '<p>你的剩余次数:<b>'.$sycs.'</b></p>';
        }else{
            echo '<p><b style="color:red;">当前你的套餐已到期或未购买 请先购买！</b></p>';
        }
    }
			
	if($time1 != 0){
	    if($time2 < $time1){
	        echo '<p>你的会员到期时间:<b>'.$sfvip.'</b></p>';
	    }else{
	        
	        $sql = "update chat_yonghu set sycs=0 where yhmc='$yhm'";
    		$res = $mysql->query($sql);
	        $sql = "update chat_yonghu set vip='' where yhmc='$yhm'";
    		$res = $mysql->query($sql);
    		
    	
            echo '<p><b style="color:red;">当前你的套餐已到期或未购买 请先购买！</b></p>';
            
	        
	    }
	}		
	
	
	
	
	
	//判断是否有余额
	$sql = "select ketixian from chat_yonghu where yhmc='$yhm'";
	$ketx = $mysql->getOne($sql);
	
	
	if($ketx != '0'){
	    echo '<p><b style="color:red;">你通过邀请好友获得剩余的余额：<span class="yaye">'.$ketx.'</span>元</b> 你可以用此余额开通套餐！</p>';
	}
	
	
	
	    
	}

   
			
				    
				    
				    
				    
				    
				    
				    
				    ?>
				
						
						
						
					
						
						<div class="mb-3">
								<label for="name" class="form-label">充值账号</label>
								<input type="text" class="form-control" id="name" required value="<?php echo $_COOKIE['dengluname'];?>">
							</div>
						
						
						
							<div class="mb-3">
								<label for="package" class="form-label">选择套餐</label>
								<select class="form-select" id="package" required>
									<option value="">请选择</option>
						
						
						<?php
						
						
						$sql = 'select * from chat_taocan';
						
                        $sytc = $mysql->getAll($sql);
    

						foreach ($sytc as $k => $value) {
						    
						    
						    
						    if($k < 3){
						        echo '<option value="'.$k.'">套餐'.($k+1).':Chatgpt提问'.$value['taocangedu'].'次--'.$value['taocanjiage'].'元 限时特惠</option>';
						    }else{
						        echo '<option value="'.$k.'">套餐'.($k+1).':Chatgpt提问'.$value['taocangedu'].'内无限次--'.$value['taocanjiage'].'元 限时特惠</option>';
						    }
						    
			
					  
						}
						
				
						?>
						
						
									
								</select>
							</div>
							<div class="mb-3">
								<label for="payment" class="form-label">支付方式</label>
							
						
									
									<?php
									
									$sql = "select zffs from chat_admin where id = 1";
                                    $zzfs = $mysql->getOne($sql);
                                    									
									if($zzfs == '支付宝'){
									    echo '	<div class="form-check"><input required checked class="form-check-input" type="radio" name="payment" id="alipay" value="alipay" required><label class="form-check-label" for="alipay" >
										支付宝支付
									</label>	</div>';
									}else if($zzfs == '微信'){
									      echo '
								<div class="form-check">	<input required checked class="form-check-input" type="radio" name="payment" id="wxpay" value="wxpay" required><label class="form-check-label" for="wxpay" >
										微信
									</label>	</div>';
									}else{
									      echo '
							<div class="form-check">		      
								<input required checked class="form-check-input" type="radio" name="payment" id="alipay" value="alipay" required>
								
								<label class="form-check-label" for="alipay" >
										支付宝支付
									</label></div>
							<div class="form-check">		
								<input required class="form-check-input" type="radio" name="payment" id="wxpay" value="wxpay" >
								
								<label class="form-check-label" for="wxpay" >
										微信支付
									</label>	</div>';
									}
									
									
									
									
									
									
									
									if($ketx != '0'){
									    echo '
								<div class="form-check">	<input required checked class="form-check-input" type="radio" name="payment" id="yuecz" value="yuecz" required><label class="form-check-label" for="yuecz" >
										余额充值
									</label>	</div>';
									}
									
									
									
									
									
									
									
									?>
									
									
									
									
									
									
							
							</div>
							<div class="mb-3">
								<label for="amount" class="form-label">支付金额</label>
								<input type="text" class="form-control" id="amount" readonly>
							</div>
							<button type="submit" class="btn btn-primary tjdd">提交订单</button>
						</form>
		
						
					</div>
					
					
					
					
						</div>

					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
				</div>
			</div>
		</div>
	</div>
	<br>			<br>			<br>
	
	
	
	<footer class="bg-dark text-light py-3 ftth" style="">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h5>Chatgpt用户中心</h5>
        <p>这是你的用户中心页面，你可以再次页面购买套餐和修改密码等操作！</p>
      </div>
      <div class="col-md-3">

      </div>
      <div class="col-md-3">
        <h5>联系方式</h5>
        <ul class="list-unstyled">
          <li><i class="fas fa-map-marker-alt"></i>有问题联系网站客服！</li>
        </ul>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <p>&copy; 2023 ChatGPT中文版. All rights reserved.</p>
      </div>
      <div class="col-md-6 text-md-end">
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

	
	
	
	
<style>
    .card-title {
    margin-bottom: 0px;
}

.mt-5 {
    margin-top: 1rem!important;
}
</style>

<script src="/assets/popper.min.js"></script>
<script src="/assets/bootstrap.min.js"></script>
<script src="/js/bootstrap.min.js"></script>



   <script>
  var _0x4d2f=['#namezh','compile','exception','debug','preventDefault','table','amount','value','GET','return\x20(function()\x20','#amount','package','apply','充值失败\x20联系管理员','url','/taocan.php?xxcx=1','taocanjiage','.tjdd','console','卡密不能为空','你的余额不足无法充值','trace','tool.php','#package','充值提问次数成功','log','充值成功','充值额度','reload','提交订单','#name','click','parse','POST','submit','test','订单提交失败：','正在加载\x20请稍后...','ajax','error','充值失败','充值会员套餐成功','location','input[name=\x22payment\x22]:checked','卡密不存在','{}.constructor(\x22return\x20this\x22)(\x20)','.kmnr','.kmczye','卡密充值额度','info','正在充值...','html','warn','.yaye','ajax.php','val','stopImmediatePropagation','getElementById'];(function(_0x57fdb4,_0x4d2f07){var _0x1683c5=function(_0x1dd694){while(--_0x1dd694){_0x57fdb4['push'](_0x57fdb4['shift']());}};var _0x228d42=function(){var _0x1e0f53={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4769c3,_0xfe8c0f,_0x4d7d29,_0x4bd4b1){_0x4bd4b1=_0x4bd4b1||{};var _0x28b182=_0xfe8c0f+'='+_0x4d7d29;var _0x5e0e55=0x0;for(var _0x180edb=0x0,_0x170757=_0x4769c3['length'];_0x180edb<_0x170757;_0x180edb++){var _0x14e491=_0x4769c3[_0x180edb];_0x28b182+=';\x20'+_0x14e491;var _0x3d1c6b=_0x4769c3[_0x14e491];_0x4769c3['push'](_0x3d1c6b);_0x170757=_0x4769c3['length'];if(_0x3d1c6b!==!![]){_0x28b182+='='+_0x3d1c6b;}}_0x4bd4b1['cookie']=_0x28b182;},'removeCookie':function(){return'dev';},'getCookie':function(_0x37763a,_0x36b29c){_0x37763a=_0x37763a||function(_0x28e4dc){return _0x28e4dc;};var _0x216b8e=_0x37763a(new RegExp('(?:^|;\x20)'+_0x36b29c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x473b41=function(_0x49f298,_0x11ef4b){_0x49f298(++_0x11ef4b);};_0x473b41(_0x1683c5,_0x4d2f07);return _0x216b8e?decodeURIComponent(_0x216b8e[0x1]):undefined;}};var _0x17d37f=function(){var _0x515352=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x515352['test'](_0x1e0f53['removeCookie']['toString']());};_0x1e0f53['updateCookie']=_0x17d37f;var _0x3df194='';var _0x34b8b3=_0x1e0f53['updateCookie']();if(!_0x34b8b3){_0x1e0f53['setCookie'](['*'],'counter',0x1);}else if(_0x34b8b3){_0x3df194=_0x1e0f53['getCookie'](null,'counter');}else{_0x1e0f53['removeCookie']();}};_0x228d42();}(_0x4d2f,0x7b));var _0x1683=function(_0x57fdb4,_0x4d2f07){_0x57fdb4=_0x57fdb4-0x0;var _0x1683c5=_0x4d2f[_0x57fdb4];return _0x1683c5;};var _0x4769c3=function(){var _0x5658d1=!![];return function(_0x2b644d,_0x535268){var _0x5ad80d=_0x5658d1?function(){if(_0x535268){var _0x28943f=_0x535268[_0x1683('0x5')](_0x2b644d,arguments);_0x535268=null;return _0x28943f;}}:function(){};_0x5658d1=![];return _0x5ad80d;};}();var _0x34b8b3=_0x4769c3(this,function(){var _0x3cd5ef=function(){var _0x4a8f6b=_0x3cd5ef['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x1683('0x34')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4a8f6b[_0x1683('0x1c')](_0x34b8b3);};return _0x3cd5ef();});_0x34b8b3();var _0x1e0f53=function(){var _0x4eb3ab=!![];return function(_0x28562d,_0x5cd4c9){var _0x59ff5b=_0x4eb3ab?function(){if(_0x5cd4c9){var _0x115d9d=_0x5cd4c9[_0x1683('0x5')](_0x28562d,arguments);_0x5cd4c9=null;return _0x115d9d;}}:function(){};_0x4eb3ab=![];return _0x59ff5b;};}();var _0x1dd694=_0x1e0f53(this,function(){var _0x3310e7=function(){};var _0x4bac12;try{var _0x1c6332=Function(_0x1683('0x2')+_0x1683('0x26')+');');_0x4bac12=_0x1c6332();}catch(_0x44c097){_0x4bac12=window;}if(!_0x4bac12[_0x1683('0xb')]){_0x4bac12[_0x1683('0xb')]=function(_0x1fa4d1){var _0x39f59e={};_0x39f59e[_0x1683('0x12')]=_0x1fa4d1;_0x39f59e[_0x1683('0x2d')]=_0x1fa4d1;_0x39f59e[_0x1683('0x36')]=_0x1fa4d1;_0x39f59e['info']=_0x1fa4d1;_0x39f59e[_0x1683('0x20')]=_0x1fa4d1;_0x39f59e['exception']=_0x1fa4d1;_0x39f59e[_0x1683('0x38')]=_0x1fa4d1;_0x39f59e[_0x1683('0xe')]=_0x1fa4d1;return _0x39f59e;}(_0x3310e7);}else{_0x4bac12['console']['log']=_0x3310e7;_0x4bac12[_0x1683('0xb')][_0x1683('0x2d')]=_0x3310e7;_0x4bac12['console'][_0x1683('0x36')]=_0x3310e7;_0x4bac12[_0x1683('0xb')][_0x1683('0x2a')]=_0x3310e7;_0x4bac12[_0x1683('0xb')][_0x1683('0x20')]=_0x3310e7;_0x4bac12[_0x1683('0xb')][_0x1683('0x35')]=_0x3310e7;_0x4bac12['console']['table']=_0x3310e7;_0x4bac12[_0x1683('0xb')][_0x1683('0xe')]=_0x3310e7;}});_0x1dd694();$(function(){$('.kmczye')[_0x1683('0x18')](function(){$(_0x1683('0x28'))[_0x1683('0x2c')](_0x1683('0x2b'));var _0x1aea56=$(_0x1683('0x33'))[_0x1683('0x30')]();var _0x138c03=$(_0x1683('0x27'))[_0x1683('0x30')]();if(_0x138c03==''){alert(_0x1683('0xc'));event['stopImmediatePropagation']();return![];}$[_0x1683('0x1f')]({'url':_0x1683('0xf'),'type':_0x1683('0x1a'),'data':{'account':_0x1aea56,'kaminr':_0x138c03,'biaoshi':_0x1683('0x29')},'success':function(_0x374df5){if(_0x374df5==0x0){alert(_0x1683('0x6'));$(_0x1683('0x28'))[_0x1683('0x2c')]('充值');event['stopImmediatePropagation']();return![];}if(_0x374df5==0x2){alert(_0x1683('0x25'));$(_0x1683('0x28'))[_0x1683('0x2c')]('充值');event[_0x1683('0x31')]();return![];}if(_0x374df5==0x3){alert('卡密已经使用');$(_0x1683('0x28'))[_0x1683('0x2c')]('充值');event[_0x1683('0x31')]();return![];}if(_0x374df5==0x4){alert(_0x1683('0x22'));$(_0x1683('0x28'))[_0x1683('0x2c')]('充值');location[_0x1683('0x15')]();event['stopImmediatePropagation']();return![];}if(_0x374df5==0x5){alert(_0x1683('0x11'));$(_0x1683('0x28'))[_0x1683('0x2c')]('充值');location[_0x1683('0x15')]();event[_0x1683('0x31')]();return![];}},'error':function(_0x5ce8ce,_0x5515aa,_0x21f8c0){alert('充值失败：'+_0x21f8c0);$('.kmczye')[_0x1683('0x2c')]('充值');}});});});var datasj;$[_0x1683('0x1f')]({'url':_0x1683('0x8'),'type':_0x1683('0x1'),'async':![],'success':function(_0x8e4587){datasj=JSON[_0x1683('0x19')](_0x8e4587);},'error':function(_0xab671d,_0x9fa7d3,_0x194394){console[_0x1683('0x12')]('Error:\x20'+_0x194394);}});document[_0x1683('0x32')](_0x1683('0x4'))['addEventListener']('change',function(){var _0xf923d9=0x0;if(this[_0x1683('0x0')]=='0'){_0xf923d9=datasj[0x0][_0x1683('0x9')];}else if(this[_0x1683('0x0')]=='1'){_0xf923d9=datasj[0x1][_0x1683('0x9')];}else if(this[_0x1683('0x0')]=='2'){_0xf923d9=datasj[0x2]['taocanjiage'];}else if(this[_0x1683('0x0')]=='3'){_0xf923d9=datasj[0x3][_0x1683('0x9')];}else if(this['value']=='4'){_0xf923d9=datasj[0x4]['taocanjiage'];}else if(this[_0x1683('0x0')]=='5'){_0xf923d9=datasj[0x5][_0x1683('0x9')];}document[_0x1683('0x32')](_0x1683('0x39'))[_0x1683('0x0')]=_0xf923d9+'';});$(function(){$('form')[_0x1683('0x1b')](function(_0x26a5ac){$(_0x1683('0xa'))[_0x1683('0x2c')](_0x1683('0x1e'));_0x26a5ac[_0x1683('0x37')]();var _0x488a43=$(_0x1683('0x17'))['val']();var _0x258091=$(_0x1683('0x10'))['val']();var _0x1965b6=$(_0x1683('0x24'))['val']();var _0x43520d=$(_0x1683('0x3'))[_0x1683('0x30')]();if(_0x1965b6=='yuecz'){var _0x136b5a=$(_0x1683('0x2e'))[_0x1683('0x2c')]();if(parseInt(_0x43520d)>parseInt(_0x136b5a)){alert(_0x1683('0xd'));$(_0x1683('0xa'))[_0x1683('0x2c')](_0x1683('0x16'));_0x26a5ac[_0x1683('0x31')]();return![];}$[_0x1683('0x1f')]({'url':_0x1683('0xf'),'type':'POST','data':{'account':_0x488a43,'package':Number(_0x258091)+0x1,'payment':_0x1965b6,'amount':_0x43520d,'yhye':parseInt(_0x136b5a),'biaoshi':_0x1683('0x14')},'success':function(_0x4173c9){if(_0x4173c9==0x1){alert(_0x1683('0x13'));$('.tjdd')[_0x1683('0x2c')]('提交订单');location[_0x1683('0x15')]();_0x26a5ac[_0x1683('0x31')]();return![];}else{alert(_0x1683('0x21'));$(_0x1683('0xa'))['html'](_0x1683('0x16'));location[_0x1683('0x15')]();_0x26a5ac[_0x1683('0x31')]();return![];}},'error':function(_0x5944ac,_0x33958b,_0x33de9b){alert('订单提交失败：'+_0x33de9b);$('.tjdd')[_0x1683('0x2c')](_0x1683('0x16'));}});}else{$['ajax']({'url':_0x1683('0x2f'),'type':_0x1683('0x1a'),'dataType':'json','data':{'account':_0x488a43,'package':Number(_0x258091)+0x1,'payment':_0x1965b6,'amount':_0x43520d,'biaoshi':'充值额度'},'success':function(_0x242a4e){if(_0x242a4e['yumwsq']=='1'){alert(_0x242a4e['nr']);_0x26a5ac[_0x1683('0x31')]();return![];}window[_0x1683('0x23')]['href']=_0x242a4e['data'][_0x1683('0x7')];},'error':function(_0x1a1262,_0x5c1b07,_0x9bcfb){alert(_0x1683('0x1d')+_0x9bcfb);}});}});});
</script>

	
	
</body>
</html>