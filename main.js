window.addEventListener("load", initialize);
var id = 0;

function initialize()
{
	document.body.innerHTML = "<div id=\"console\"></div>";
	delayed_type("Hey guys, I'am KAPILDEV ,Very Happy to tell about myself!!! please TYPE help ", 50, take_input);
}

function delayed_type(text, delay, callback)
{
	var j=0;
	function type()
	{
		if(j<text.length)
		{
			document.getElementById('console').innerHTML += text[j];
			j++;
			setTimeout(type, delay);
		}
		else
		{
			console.log("else me gya\n");
			document.getElementById('console').innerHTML += "<br>";
			callback();
		}
	}
	type();
}

function take_input()
{
	console.log("id = "+id+"\n");
	document.getElementById('console').innerHTML += "> ";
	document.getElementById('console').innerHTML += "<input type=\"text\" id=\""+id+"\" maxlength=\"20\" />";
	document.getElementById(id).focus();
	document.getElementById(id).onkeypress = function(event){
	    if (event.keyCode == 13 || event.which == 13){
	    	var input = document.getElementById(id).value;
	    	document.getElementById(id).remove();
	    	document.getElementById('console').innerHTML += input+"<br>";
	    	id++;
	        process_input(input);
	    }
	};
}

function process_input(input)
{
	console.log("input = "+input+"\n");
	if(input == "help")
	{
		document.getElementById('console').innerHTML += "Try one of these commands :<br>";
		arr = new Array("<span class=\"highlight\">about<br></span>", "<span class=\"highlight\">resume<br></span>",
		 "<span class=\"highlight\">projects<br></span>","<span class=\" highlight\" >myworks<br></span>", "<span class=\" highlight\" >skills<br></span>", "<span class=\"highlight\">contact<br></span>", "<span class=\"highlight\">clear</span>");
		delayed_type(arr, 200, take_input);
	}
	else if(input == "about")
	{
		var about = "Computer science BE., Anna University chennai. \n 2018 passed out<br>";
		about+="crazy @design, \n Backend and Frontend developer <br>"
		about+= "To work as a Designer and Web Developer in  a leading company where I can apply my skills and expertise in various spheres and efficiently contribute towards the achievement of mission and goals and proﬁtability of the organization.<br>"
		document.getElementById('console').innerHTML += "<span class=\"text\">"+about+"</span>";
		take_input();
	}
	else if(input == "resume")
	{
		openInNewTab("kapildev-resume.pdf");
		take_input();
	}
	else if(input == "myworks")
	{
		var flink = "<span class=\"highlight\">indcon: </span>";
		flink+= "<span class=\"text\"><br>&emsp;&emsp;&emsp;&emsp;&emsp;https://drive.google.com/open?id=1KbJZsSsNJ1Jd25y-9nrQN49tjt9_9Lx4 <br></span>";

		var slink = "<span class=\"highlight\">civilisation: </span>";
		slink+= "<span class=\"text\"><br>&emsp;&emsp;&emsp;&emsp;&emsp;https://drive.google.com/open?id=1EITbIAKOM_G8y6FdV-1GtwsFqavlRw98 <br></span>";

		var git = "<span class=\"highlight\">github: </span>";
		git+= "<span class=\"text\"><br>&emsp;&emsp;&emsp;&emsp;&emsp;http://github.com/karunakapil <br></span>";

		arr=new Array(flink,slink,git);
		delayed_type(arr,500,take_input);
	}
	else if(input == "projects")
	{
		var soccer= "<span class=\"highlight\">ONLINE SOCCER SHOP : </span>";
		soccer += "<span class=\"text\">An Online Store where sports goods predominantly Soccer Items are sold Done with PHP and MySQL as the Backend, HTML, CSS as the Front End Includes Certified Reviewer Status for Each Customer, ";
		soccer += "mathematical operators, conditional and loop statements.<br></span>"


		var alarm = "<span class=\"highlight\">WAKE ME UP APP USING GPS : </span>";
		alarm+= "<span class=\"text\">•	Developed an android app named ‘Wake Me Up’, which rings an alarm if the desired location is reached. The app works with the help of tracing the latitude and longitude positions.<br></span>"

		var object = "<span class=\"highlight\">OBJECT DETECTION USING MATLAB : </span>";
		object += "<span class=\"text\">Developed a project called object detection using convolution neural nertwork using matlab code which detects real time objects <br></span>";

		arr = new Array(soccer, alarm, object);
		delayed_type(arr, 500, take_input);
	}
	else if(input == "skills")
	{
		var skills = "<span class=\"highlight\">programming :</span>";
		skills += "<span class=\"text\"> C, C++ ,JAVA. ";
		skills += "<br></span>"


		var web = "<span class=\"highlight\">web development:</span>";
		web += "<span class=\"text\"> html, css ,Javascript,Angular js. ";
		web += "<br></span>"


		var back = "<span class=\"highlight\">Back End:</span>";
		back += "<span class=\"text\"> PHP , mySql ,node.js </span>";

		arr=new Array(skills ,web ,back);
		delayed_type(arr,500,take_input);
	}
	else if(input == "contact")
	{
		var phone = "<span class=\"highlight\">Phone: </span>";
		phone += "<span class=\"text\">8056823665<br></span>";

		var mail = "<span class=\"highlight\">E-mail: </span>";
		mail += "<span class=\"text\"><br>&emsp;&emsp;&emsp;&emsp;&emsp;karunakapildev485@gmail.com<br></span>";

		var address = "<span class=\"highlight\">Address: </span>";
		address += "<span class=\"text\"><br></span>";
		address += "<span class=\"text\"><br>&emsp;&emsp;&emsp;&emsp;&emsp;permanent Add : 471 ,new colony senthamangalam villupuram 607204. \n Recent Add: chennai,koturpuram <br></span>";
        
		var linked = "<span class=\"highlight\">linkedin: </span>";
		linked+= "<span class=\"text\"><br>&emsp;&emsp;&emsp;&emsp;&emsp;http://www.linkedin.com/in/kapildev3546<br></span>";

		arr = new Array(phone, mail, address,linked);
		delayed_type(arr, 500, take_input);
	}
	else if(input == "clear")
	{
		initialize();
	}
	else
	{
		document.getElementById('console').innerHTML += "<span class=\"error\">Error: Command \""+input+"\" not found. Try \"help\"</span><br>";
		take_input();
	}
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}



