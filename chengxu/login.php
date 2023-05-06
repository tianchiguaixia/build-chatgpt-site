<?php
/*
 
*/

echo "";echo "
";echo "
";$S2w8E=require './lib/init.php';if(empty($_POST))goto S2weWjgx2;goto S2wldMhx2;S2weWjgx2:exit();goto S2wx1;S2wldMhx2:S2wx1:$S2wzA8I=array();$S2wzA8I[]=$_POST;$S2weF8H=call_user_func_array("is_array",$S2wzA8I);unset($S2wzA8I);if($S2weF8H)goto S2weWjgx4;goto S2wldMhx4;S2weWjgx4:$S2wcV8F=&$_POST['yhmc'];goto S2wx3;S2wldMhx4:$S2wcV8F=$_POST['yhmc'];S2wx3:$S2wzA8G=array();$S2wzA8G[]=&$S2wcV8F;$S2weF8E=call_user_func_array("trim",$S2wzA8G);unset($S2wzA8G);unset($S2wcV8F);unset($S2wtI8E);$S2wtI8E=$S2weF8E;$zhu['yhmc']=$S2wtI8E;$S2wzA8I=array();$S2wzA8I[]=$_POST;$S2weF8H=call_user_func_array("is_array",$S2wzA8I);unset($S2wzA8I);if($S2weF8H)goto S2weWjgx6;goto S2wldMhx6;S2weWjgx6:$S2wcV8F=&$_POST['yhmm'];goto S2wx5;S2wldMhx6:$S2wcV8F=$_POST['yhmm'];S2wx5:$S2wzA8G=array();$S2wzA8G[]=&$S2wcV8F;$S2weF8E=call_user_func_array("trim",$S2wzA8G);unset($S2wzA8G);unset($S2wcV8F);unset($S2wtI8E);$S2wtI8E=$S2weF8E;$zhu['yhmm']=$S2wtI8E;$S2w8E="select yhmc from chat_yonghu where yhmc='" . $zhu["yhmc"];$S2w8F=$S2w8E . "'";unset($S2wtI8G);$S2wtI8G=$S2w8F;$sql=$S2wtI8G;$S2wzA8F=array();$S2wzA8F[]=&$sql;$S2wzA8G=array();$S2wzA8G[]=$mysql;$S2wzA8G[]="getOne";$S2whC8E=call_user_func_array($S2wzA8G,$S2wzA8F);unset($S2wzA8F);unset($S2wzA8G);$S2w8E=!$S2whC8E;if($S2w8E)goto S2weWjgx8;goto S2wldMhx8;S2weWjgx8:echo '0';exit();goto S2wx7;S2wldMhx8:S2wx7:$S2w8E="select yhmm from chat_yonghu where yhmm='" . $zhu["yhmm"];$S2w8F=$S2w8E . "'";unset($S2wtI8G);$S2wtI8G=$S2w8F;$sql=$S2wtI8G;$S2wzA8F=array();$S2wzA8F[]=&$sql;$S2wzA8G=array();$S2wzA8G[]=$mysql;$S2wzA8G[]="getOne";$S2whC8E=call_user_func_array($S2wzA8G,$S2wzA8F);unset($S2wzA8F);unset($S2wzA8G);$S2w8E=$S2whC8E!=$zhu['yhmm'];if($S2w8E)goto S2weWjgxa;goto S2wldMhxa;S2weWjgxa:echo '0';exit();goto S2wx9;S2wldMhxa:echo '1';S2wx9:$S2wzA8F=array();$S2weFvP8E=call_user_func_array("time",$S2wzA8F);unset($S2wzA8F);$S2wvP8E=$S2weFvP8E+86400;$S2wzA8K=array();$S2wzA8K[]=$zhu;$S2weF8J=call_user_func_array("is_array",$S2wzA8K);unset($S2wzA8K);if($S2weF8J)goto S2weWjgxc;goto S2wldMhxc;S2weWjgxc:$S2wcV8H=&$zhu['yhmc'];goto S2wxb;S2wldMhxc:$S2wcV8H=$zhu['yhmc'];S2wxb:$S2wzA8I=array();$S2wzA8I[]='dengluname';$S2wzA8I[]=&$S2wcV8H;$S2wzA8I[]=&$S2wvP8E;$S2wzA8I[]='/';$S2weF8G=call_user_func_array("setcookie",$S2wzA8I);unset($S2wzA8I);unset($S2wcV8H);echo "";echo "
";echo "
";echo "
";echo "
";echo "
";
?>