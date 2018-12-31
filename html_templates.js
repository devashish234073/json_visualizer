exports.meta="<meta name='viewport' content='width=device-width, intial-scale=1.0'>";

exports.INVALID_URL_HTML="<html>"+exports.meta+"<body><font color='red'>Invalid URL</font></body></html>";

exports.homestyle = `
<style>
table{
border-collapse:collapse;
}
td{
font-size:12px;
padding-left:6px;
border:1px solid black;
}
.k{
background-color:khaki;
color:black;
}
.v{
background-color:moccasin;
color:blue;
}
</style>
`;

var home = `
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
${exports.homestyle}
<title>_TITLE</title>
</head>
<body>
_TBL
</body>
</html>
`;

exports.home=function(title){
    if(title===undefined){
        return home.replace("_TITLE","Json Visualizer");
    }
    return home.replace("_TITLE",title);
}
