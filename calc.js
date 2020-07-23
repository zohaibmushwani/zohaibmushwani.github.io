var dfvalue = "";
function inputValue(inputval) { 
    if(inputval == '='){
        document.getElementById('output').innerHTML = eval(dfvalue);
    }
    else{
    dfvalue = dfvalue + inputval;
    document.getElementById('inputData').innerHTML = dfvalue;
    }
}
function del(){
    if(dfvalue.length != 0){
        dfvalue = dfvalue.slice(0,dfvalue.length-1);
        document.getElementById('inputData').innerHTML = dfvalue;
    }
}
function clr(){
    dfvalue = ""
    document.getElementById('inputData').innerHTML = dfvalue;
    document.getElementById('output').innerHTML ="";
}
function square(){
    if(dfvalue != "")
    document.getElementById('output').innerHTML =Math.pow(parseFloat(dfvalue),2);
}
function square_rt(){
    if(dfvalue != ""  && parseFloat(dfvalue)>=0 )
    document.getElementById('output').innerHTML =Math.sqrt(parseFloat(dfvalue));
}
