var i=0;
var imagefile=['];
setInterval(startSlider,2000);

function startSlider()
{
		document.getElementById("slide1").src="images/"+ imagefile[i];
	i++;
	if(i>3)
	{
		i=0;
	}
}
var today=new Date();
var element=document.getElementById("new").innerHTML=today.toDateString();

var hour=today.getHours();
var greet;
if(hour>=18)
{
	greet=" Good Evening";
}
else if(hour>=12)
{
	greet=" Good Afternoon";
}	
else{
	greet=" Good Morning";
}
document.getElementById("greeting").innerHTML=greet;


