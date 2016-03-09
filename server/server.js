var port =9000;
var express = require('express');
var app = new express();

app.route('/api')
.get(function(req,res){
	res.status(200).send("This is the api");
});

var items=
[{
	name:"let it be",
	line:"http://oreilly.com",
	rank:1,
},
{
	name:"Hey Jade",
	line:"http://oreilly.com",
	rank:2,
},
{
	name:"Get back",
	line:"http://oreilly.com",
	rank:3,
}]
app.route('/api/items')
.get(function(req,res){
	res.status(200).json(items);
});
app.listen(port,function(){
	console.log("App listen"+port);
})