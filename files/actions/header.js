var headList=[],
    home="https://hanralatalliardwork.github.io/Cute_animals/";

//<title></title>
headList.push("        <p>Nothing</p>");

function head(ID){
    var bb="";
    for (var i=0;i<headList.length;i++){
        bb+=headList[i];
    }
  document.getElementById(ID).innerHTML=bb;
};