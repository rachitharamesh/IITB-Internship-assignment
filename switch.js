function display(id,e) 
{
	var x = e.clientX +window.pageXOffset +'px';
    var y = e.clientY + window.pageYOffset + 'px'; 
    document.getElementById(id).style.position = 'absolute';
    document.getElementById(id).style.display = 'inline';
    document.getElementById(id).style.left = x;
    document.getElementById(id).style.top = y;


}

function hide(id) 
{
	document.getElementById(id).style.display = 'none'; 
}

function rmswitchmenu() 
{
	var r = document.getElementById("switchmenu");
	document.style.display = 'none';
}

function configure() 
{
	
	var config = document.getElementById("config");
	config.style.position = 'absolute';
	config.style.display = 'inline';
	config.style.top ='15%';
	config.style.left = '50%';

	document.body.appendChild(config);

	var r = document.getElementById("switchmenu");
	document.style.display = 'none';
}

function validate() 
{
	var ipadd = document.getElementById("ipadd").value;
	var dns = document.getElementById("dns").value;
	ip(ipadd);
	ip(dns);
}

function ip(str)
	{
		var valid = false; 
        var ipParts = str.split(".");
    	if(ipParts.length==4)
    	{
      		for(i=0;i<4;i++)
      		{
         
        		var num = parseInt(ipParts[i]);
        		if(num >= 0 && num <= 255){

        		}
        		else{break;}
         
     		 }
      		if(i==4)
      			valid=true; 
    	}
    	if(valid==false)
    		alert("Enter valid address!");
    }






