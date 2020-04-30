var express= require("express");
var request= require('request');
var bodyParse=require('body-parser');
var mongoose= require("mongoose");
var covid=require("./model/contact");
var seedDB=require("./seed");
var app=express();
//mongoose.connect("mongodb://localhost/covid");
mongoose.connect("mongodb+srv://shailja:shailja123@cluster-sayxm.mongodb.net/test?retryWrites=true&w=majority")
app.use(express.static("public"));
app.use(bodyParse.urlencoded({extended:true}));


seedDB();
//Landing page
app.get("/",function(req,res) {
	// body...
res.redirect("/homepage");
});


//home page
app.get("/homepage",function(req,res){
	request('https://api.covid19api.com/summary', function (error, response, body) {
  
  if(!error && response.statusCode==200){
		var result=JSON.parse(body);

res.render("landing.ejs",{newconfirmed:result.Global.NewConfirmed,
							totalconfirmed:result.Global.TotalConfirmed,
							newdeath:result.Global.NewDeaths,
								totaldeath:result.Global.TotalDeaths,
								newrecovered:result.Global.NewRecovered,
								totalrecovered:result.Global.TotalRecovered,
								data:result.Countries
						});
  } 
  
});
	
  


});

//map
app.get("/map",function(req,res){
	

res.render("map.ejs");
  
});


//help contact
app.get("/contact",function(req,res){

	covid.find({},function(err,name){
		if(err){
			console.log(err);
		}else{
			res.render("help.ejs",{covid:name});
		}
	});
});
  


//port
app.listen("3000",function(){
	console.log("server started");
});