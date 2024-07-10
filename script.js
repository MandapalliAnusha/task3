function convert(){
    const tempInput=document.getElementById("tempInput").value;
    const tempType=document.getElementById("tempType").value;
    let result;
    if(tempType=="Celsius"){
        result=(tempInput * 9/5)+ 32;
        result="Temperature in Fahrenheit is: "+result.toFixed(2)+" &#8457;";
    }
    else{
        result=(tempInput - 32) * 5/9;
        result="Temperature in Celsius is: "+result.toFixed(2)+" &#8451;";
    }
    document.getElementById("resultText").innerHTML=result;
}