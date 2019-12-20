var fs              = require('fs');
var fse             = require('fs-extra');
var express         = require('express');
var path            = require('path');

var app             = express();

//App Post
app.post('/public/data',function(req,res){
    console.log(req,res);

    // res.json(filePaths);
});

//App Listen
app.listen(8081,function(){
    console.log('Working on port 8081');
});
