var headList=[],
    home="https://hanralatalliardwork.github.io/Cute_animals",
    verification="odjoqpsdpoqjdpqjdojqpojodqjdspqjdpojdod",
    favicon_ie="files/img/icon/GFEQ2227.ico",//size 16x16 (for IE), format:.ico
    favicon_all="files/img/icon/GFEQ2227.png";//size 32x32 (for all), format:.png

//<title></title>
headList.push("        <meta charset=\"UTF-8\"/>");
headList.push("        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
headList.push("        <meta name=\"Index\" content=\"This is a sub page of the server "+home+".\" />");
headList.push("        <meta name=\"Language\" CONTENT=\"en,fr\" />");
headList.push("        <meta name=\"robots\" content=\"index,follow,max-image-preview:standard\" />");
headList.push("        <meta name=\"copyright\" content=\"&copy; Henry Letellier 2021\"/>");
headList.push("        <meta name=\"publisher\" content=\"Henry Letellier\" />");
headList.push("        <meta name=\"googlebot\" content=\"index,follow,nosnippet\" />");
headList.push("        <meta name=\"google\" content=\"translate,sitelinkssearchbox\" />");
headList.push("        <meta name=\"google-site-verification\" content=\""+verification+"\" />");
headList.push("        <meta http-equiv=\"pragma\" content=\"cache\" />");
headList.push("        <meta http-equiv=\"Cache-control\" content=\"public\" />");
headList.push("        <link rel=\"stylesheet\" href=\""+home+"/files/style/bootstrap_style/bootstrap.css\"/>");
headList.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/redirect.js\"></script>");
headList.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/header.js\"></script>");
headList.push("        <script type=\"text/JavaScript\" src=\""+home+"/files/actions/footer.js\"></script>");
headList.push("        <link rel=\"icon\" type=\"image/png\" href=\""+favicon_all+"\" />");//all
headList.push("        <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\""+favicon_ie+"\" />");//IE
//<script src="js/script.js"></script>

function head(ID){
    var bb="";
    for (var i=0;i<headList.length;i++){
        bb+=headList[i];
    }
  document.getElementById(ID).innerHTML=bb;
};
