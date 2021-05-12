var headList=[];

//<title></title>
headList.push("<script src=\"js/letter_by_letter.js\"></script>")
headList.push("<script src=\"js/sad_face.js\"></script>")
headList.push("<script src=\"js/script.js\"></script>")
headList.push("<script src=\"js/sleep.js\"></script>")
headList.push("<script src=\"js/sleep2.js\"></script>")
headList.push("<link rel=\"text/css\" src=\"css/stylesheet.css\"/>")

var headList2=[],
    home="https://hanralatalliardwork.github.io/Cute_animals",
    verification="odjoqpsdpoqjdpqjdojqpojodqjdspqjdpojdod",
    favicon_ie="files/img/icon/GFEQ2227.ico",//size 16x16 (for IE), format:.ico
    favicon_all="files/img/icon/GFEQ2227.png";//size 32x32 (for all), format:.png
headList2.push("        <meta charset=\"UTF-8\"/>");
headList2.push("        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
headList2.push("        <meta name=\"Index\" content=\"This is a sub page of the server "+home+".\" />");
headList2.push("        <meta name=\"Language\" CONTENT=\"en,fr\" />");
headList2.push("        <meta name=\"robots\" content=\"index,follow,max-image-preview:standard\" />");
headList2.push("        <meta name=\"copyright\" content=\"&copy; Henry Letellier 2021\"/>");
headList2.push("        <meta name=\"publisher\" content=\"Henry Letellier\" />");
headList2.push("        <meta name=\"googlebot\" content=\"index,follow,nosnippet\" />");
headList2.push("        <meta name=\"google\" content=\"translate,sitelinkssearchbox\" />");
headList2.push("        <meta name=\"google-site-verification\" content=\""+verification+"\" />");
headList2.push("        <meta http-equiv=\"pragma\" content=\"cache\" />");
headList2.push("        <meta http-equiv=\"Cache-control\" content=\"public\" />");
headList2.push("        <link rel=\"stylesheet\" href=\""+home+"/files/style/bootstrap_style/bootstrap.css\"/>");
headList2.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/redirect.js\"></script>");
headList2.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/header.js\"></script>");
headList2.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/footer.js\"></script>");
headList2.push("        <link rel=\"icon\" type=\"image/png\" href=\""+favicon_all+"\" />");//all
headList2.push("        <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\""+favicon_ie+"\" />");//IE

function head(ID){
    
};

function head(ID1,ID2){
 var r="",
 bb="";
 for (var i=0;i<headList.length;i++){
  r+=headList[i];
 }
 document.getElementById(ID1).innerHTML=r;
 for (var i=0;i<headList.length;i++){
        bb+=headList2[i];
    }
  document.getElementById(ID2).innerHTML=bb;
};
//head()