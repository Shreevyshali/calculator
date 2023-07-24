sum =0;
string ="";
function Add(){
    data1=parseInt( document.getElementById("data1").value);
    sum+=parseInt(data1);
    if(string.length==0){
        string+=data1;
    }else{
        string+="+"+data1;
    }
    document.getElementById("print").innerHTML=string;
    document.getElementById("result").innerHTML=sum;
    document.getElementById("data1").value='';
 }

 function Sub(){
    data1=parseInt( document.getElementById("data1").value);
    sum-=parseInt(data1);
    if(string.length==0){
        string+=data1;
    }else{
        string+="-"+data1;
    }
    document.getElementById("print").innerHTML=string;
    document.getElementById("result").innerHTML=sum;
    document.getElementById("data1").value='';
 }

function Mul(){
    data1=parseInt( document.getElementById("data1").value);
    sum*=parseInt(data1);
    if(string.length==0){
        string+=data1;
    }else{
        string+="*"+data1;
    }
    document.getElementById("print").innerHTML=string;
    document.getElementById("result").innerHTML=sum;
    document.getElementById("data1").value='';
 }
 function Div(){
    data1=parseInt( document.getElementById("data1").value);
    sum/=parseInt(data1);
    if(string.length==0){
        string+=data1;
    }else{
        string+="/"+data1;
    }
    document.getElementById("print").innerHTML=string;
    document.getElementById("result").innerHTML=sum;
    document.getElementById("data1").value='';
 }
