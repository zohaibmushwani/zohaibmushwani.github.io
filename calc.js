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