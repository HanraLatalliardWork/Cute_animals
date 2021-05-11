function getLinks(lst,IDTo,tip){
    var output="",
    Alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    if (tip===1){Alphabet=0};
    if (tip===2){Alphabetint=0};
    for (var i=0;i<lst.length;i++){
        if (Alphabet==0){
            output+=Alphabet+" <a href=\""+lst[i]+"\" class=\"link\">"+lst[i]+"</a><br>";
            Alphabet++;
        } else{
            output+=Alphabet[Alphabetint]+" <a href=\""+lst[i]+"\" class=\"link\">"+lst[i]+"</a><br>";
            Alphabetint++;
        };
    };
    document.getElementById(IDTo).innerHTML=output;
}
function putImagesLinks(lst,lstLink,IDTo,tip){
    //<a href="" class="link"><img class="" scr=""/></a>
    var output="",
    Alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    if (tip===1){Alphabet=0};
    if (tip===2){Alphabetint=0};
    for (var i=0;i<lst.length;i++){
        if (Alphabet==0){
            output+="<p>"+Alphabet+"<a href=\""+lstLink[i]+"\" class=\"link\"><img class=\"image\" scr=\""+lst[i]+"\"/></a></p><br>";
            Alphabet++;
        } else{
            output+="<p>"+Alphabet[Alphabetint]+"<a href=\""+lstLink[Alphabetint]+"\" class=\"link\"><img class=\"image\" scr=\""+lst[i]+"\"/></a></p><br>";
            Alphabetint++;
        };
    };
    document.getElementById(IDTo).innerHTML=output;
}