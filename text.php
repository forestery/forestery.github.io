<?php
header("Content-type: image/png");
$im = @imagecreate(400, 300)
    or die("Cannot Initialize new GD image stream");
if(isset($_POST["msg"])) $text = $_POST["msg"];
if(!isset($_POST["msg"])) $text  = "no input";
$background_color = imagecolorallocate($im, 0, 0, 0);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im,160, 5, 5,$text, $text_color);
imagepng($im);
imagedestroy($im);
?> 
