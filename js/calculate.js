function cal()
{

    var x=parseInt(document.forms["f1"]["txt1"].value , 10);
    var y=parseInt(document.forms["f1"]["txt2"].value, 10);
    var z=parseInt(document.forms["f1"]["txt3"].value ,10);

    

    if( x> 100 || y > 100 || z >100 || x < 0 || y < 0 || z < 0  || Number.isNaN(x) || Number.isNaN(y) || Number.isNaN(z))
    {
        alert("values should be within range 0 to 100");
        location.reload();
    }
    else{
    var sum=x+y+z;
    var per=(sum/3);
    
    var g=( x >= y) ? (x >= z ? x : z) : ( y >= z ? y : z) ;
    
    document.getElementById('m').value = sum;
    document.getElementById('m1').value = per;
    document.getElementById('m2').value = g;

    }
    


}
function res()
{
    location.reload();
}
function load()
{
    window.open("welcome.html","","top=200,left=299,width=200,height=200");
}
function fun1()
{
    alert("you cannot enter this field");
    document.getElementById('i2').focus();
}
function myFunction1(x) {
    x.style.background = "yellow";

  }
  function ff()
  {

    if(w.t2.value=="")
    {
    alert("First NAME IS EMPTY");
    document.getElementById('i2').focus();
    }
  }
  function ss()
{
   
    var x=document.forms["w"]["t2"].value;
    var y=document.forms["w"]["t3"].value;
    var z=document.forms["w"]["t4"].value;
     
     alert(x+" "+y+" "+z);
    
}
function bb()
{
   
    alert("PICUTRE CLICKED");
}
function sel()
{

var x=document.getElementById("zod").value;
var z;
if(x=="Aries")
x="humble"

if(x=="Leo")
x="sharp"

if(x=="Gemini")
x="attractive"

document.getElementById("area").value=x;


}
function marks()
{
var x=frm.qz.value;
var y=frm.qz1.value;

if( x=="" || y=="")
alert("You need to attempt both the question");
else{

var sum=0
if(x=="ans")
sum=sum+2;
if(y=="ans4")
sum=sum+2;

if(sum==0)
alert("Sorry you got "+sum+" marks. No Scholarship");

if(sum==2)
alert("You got "+sum+" marks. 30 % Scholarship");

if(sum==4)
alert("You got "+sum+" marks. 50 % Scholarship");

location.reload();
}


}
function name1(val)
{

    var alphaExp = /^[a-zA-Z]+$/;
            if(!val.match(alphaExp))
            {
                document.getElementById("demo1").innerHTML= "Invalid Input : Only Alphabets" ;
                return false;
            }
            if(val.match(alphaExp))
            {
                document.getElementById("demo1").innerHTML= "" ;
                return true;
            }
   
       
}
function name2(val)
{

    var alphaExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
            if(!val.match(alphaExp))
            {
                document.getElementById("demo2").innerHTML= " password between 8 to 15 characters,at least one lowercase letter, one uppercase letter, one numeric digit, and one special character" ;
                return false;
            }
            if(val.match(alphaExp))
            {
                document.getElementById("demo2").innerHTML= "" ;
                return true;
            }
   
       
}


function redirect()
{

var searchitem = document.getElementById("search");
var searchurl = document.getElementById("webs").value;
var url = "https://"+ searchurl + "/search?q=" + searchitem.value;
window.open(url,"");

}


function myFunction() {
    var person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("de").innerHTML= person ;
     
    }
  }

  function fff()
  {

    if(frm1.n.value=="" || frm1.n1.value=="" || frm1.n2.value=="" || frm1.n3.value=="" )
    {
        document.getElementById("dem").innerHTML= "* fields are mandatory";
    
    
    }
    else
    {
        document.getElementById("de").innerHTML= frm1.n.value+" Your Login is Created";

    }
  }
  function myFun() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }