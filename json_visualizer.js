var http=require("http");
var templates=require("./html_templates");
var pathJSONMap={};

function getURL(obj,key){
    if(typeof obj === 'object'){
        return "<a href='"+key+"'>"+String(obj)+"</a>";
    }
    return obj;
}

var separator=":";
if(process.platform==='win32'){
    separator=";";
}

function resolveMulti(multii,key) {
    if(multii==null){return "null";}
    var strr = "";
    if (multii.length !== undefined && typeof multii === 'object') {
        for (var i = 0; i < multii.length; i++) {
            strr += (i + 1) + "). " + getURL(multii[i],key+"_"+i);
            if (i < multii.length - 1) {
                strr += "<br>";
            }
        }
        return strr;
    }
    if(typeof multii === 'object') {
        return getURL(multii,key);
    }
    if(isNaN){
        if(separator===";"){
            return String(multii).replace(/;/g, "<br>");
        } else {
            return String(multii).replace(/:/g, "<br>");
        }
    }
    return multii;
}

function generateTable(json,key) {
    var tbl = "";
    for (k in json) {
        var v = resolveMulti(json[k],key+"_"+k);
        tbl += "<tr><td class='k'>" + k + "</td>";
        tbl += "<td class='v'>" + v + "</td></tr>";
    }
    tbl = "<br><table>" + tbl + "</table>";
    return tbl;
}

var convertToHtml=function(json,key){
    if(json===undefined){
        return templates.INVALID_URL_HTML;
    }
    var html=templates.home();
    return html.replace("_TBL",generateTable(json,key));
}

exports.mapPathToJson=function(PATH,json){
    pathJSONMap[PATH]=json;
    for(k in json){
        if(typeof json[k] === 'object'){
            exports.mapPathToJson(PATH+"_"+k,json[k]);
        }
    }
}

exports.hostToPort=function(PORT){
    server=http.createServer(function(req,res){
        var html=convertToHtml(pathJSONMap[req.url],req.url);
        res.end(html);
    });
    server.listen(PORT);
    console.log("Server hosted at: http://localhost:"+PORT);
    console.log("valid paths:");
    var count=0;
    for(k in pathJSONMap) {
        console.log((++count)+"). "+k);
    }
}