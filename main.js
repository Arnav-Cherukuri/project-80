function para1(){
var input=[];
for(var i=1; i<=6; i++){
    input.push(document.getElementById("para1_Input_Box_" + i).value);
}
document.getElementById("show_para1").innerHTML=input.join("");
}
function para2(){
    var input=[];
    for(var i=1; i<=6; i++){
        input.push(document.getElementById("para2_Input_Box_" + i).value);
    }
    document.getElementById("show_para2").innerHTML=input.join("");
    }