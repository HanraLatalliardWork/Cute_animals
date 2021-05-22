function getLinks(lst,IDTo,tip){
    var output="",
    Alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    AlphabetInt=0;
    if (tip===1){Alphabet=0};
    if (tip===2){AlphabetInt=0};
    for (var i=0;i<lst.length;i++){
        if (tip==1){
            output+=Alphabet+" <a href=\""+lst[i]+"\" class=\"link\">"+lst[i]+"</a><br>";
            Alphabet++;
            console.log("Alphabet="+Alphabet)
        } else{
            output+=Alphabet[AlphabetInt]+" <a href=\""+lst[i]+"\" class=\"link\">"+lst[i]+"</a><br>";
            AlphabetInt++;
        };
    };
    document.getElementById(IDTo).innerHTML=output;
}
function putImagesLinks(lst,folder="",lstLink,IDTo,tip){
    //<a href="" class="link"><img class="" scr=""/></a>
    var output="",
    Alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    AlphabetInt=0,
    div ="";
    //div+=document.getElementById(IDTo);
    if (tip===1){Alphabet=0};
    if (tip===2){AlphabetInt=0};
    for (var i=0;i<lst.length;i++){
        if (tip==1){
            div+="<p>"+Alphabet+"</p><br><a href=\""+lstLink[i]+"\" class=\"link\"><img class=\"image_animals\" src=\"";//
            Alphabet++;
            console.log("Alphabet="+Alphabet);
            console.log("<p>"+Alphabet+"<a href=\""+lstLink[i]+"\" class=\"link\"><img class=\"image_animals\" src=\"");
        } else{
            div+="<p>"+Alphabet[AlphabetInt]+"<a href=\""+lstLink[AlphabetInt]+"\" class=\"link\"><img class=\"image_animals\" src=\"";
            AlphabetInt++;
        };
        var img = document.createElement("img");
        img.src = folder+lst[i];
        div+=img.src+"\"/></a><br>";
    };
    document.getElementById(IDTo).innerHTML=div;
    console.log(div);
}
