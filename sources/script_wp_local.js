function fullWin(name,url){

	// IE PC
	if((navigator.appName == "Microsoft Internet Explorer") && (navigator.platform != "MacPPC"))
	{
		fenetre=window.open(url,name,'fullscreen=no');
	}
	// safari mac
	
	else {
		height = screen.availHeight;
		width = screen.availWidth;
	
		try
		{
			tmp = window.open(url, null, "height=" + height + "px,width=" + width + "px,top=0,left=0,location=0,menubar=0,resizable=0,scrollbars=0,toolbar=0");
			tmp.resizeTo(width, height);
		} catch(e) {}
	}
}


function launchMini(launcher, path, ispop, coulfond, width, height){
	tellTarget = "target=\"_blank\"";
	if (ispop == "true"){
		path = "javascript:fullWin('pop1','" + path + "')";
		tellTarget = "";
	}
	launcher = launcher + "projet/integration/";
	document.write("<table border=\"0\" width=\"" + width + "\" height=\"" + height + "\"><tr><td valign=\"top\"><div style=\"position:absolute;z-index:2;width:" + width + "px;height:" + height + "px\"><a " + tellTarget + " href=\"" + path +"\"><img src=\"" + launcher + "spacer.gif\"  width=\"" + width + "\" height=\"" + height + "\" border=\"0\" /></a></div><!--[if IE]><object type=\"application/x-shockwave-flash\" data=\"" + launcher + "mini.swf?dirPath=" + launcher + "&fondCoul=" + coulfond + "\" width=\"" + width + "\" height=\"" + height + "\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\"><param name=\"movie\" value=\"" + launcher + "mini.swf?dirPath=" + launcher + "&fondCoul=" + coulfond + "\" /><img src=\"alternatif-animation.jpg\" alt=\"Texte alternatif si aucune image\" width=\"" + width + "\" height=\"" + height + "\" /><param name=\"wmode\" value=\"transparent\" /><param name=\"allowScriptAccess\" value=\"sameDomain\" /></object><![endif]--><!--[if !IE]> <--><object type=\"application/x-shockwave-flash\" data=\"" + launcher + "mini.swf?dirPath=" + launcher + "&fondCoul=" + coulfond + "&LinkURL="+ path +"\" width=\"" + width + "\" height=\"" + height + "\"><param name=\"movie\" value=\"" + launcher + "dirPath=" + launcher + "mini.swf?dirPath=" + launcher + "&fondCoul=" + coulfond + "\" /><img src=\"images/design/alternatif-animation.jpg\" alt=\"Texte alternatif si aucune image\" width=\"" + width + "\" height=\"" + height + "\" /><param name=\"wmode\" value=\"transparent\" /><param name=\"allowScriptAccess\" value=\"sameDomain\" /></object><!--> <![endif]--></td></tr></table>");
}