function body_OnLoad(){
	//body.background = "0xFFFF00";
	alert("Welcome to my website!");
}

function welcome(){
	document.write("Welcome to this website!<br />");
	document.write('<input type="button" onclick="back("../index.html")" />');
}

function back(path){
	//TODO: write back function
	alert("Back function has run!");	
}

function doFirst(){
	document.write("first ");
	doSecond();
}

function doSecond(){
	document.write("second ");
	doFirst();
}

function start(){
	doFirst();
}

function postBlog(){
	document.Blog.addChild("<article class=\">");
}
