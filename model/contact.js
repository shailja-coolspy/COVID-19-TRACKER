var mongoose= require("mongoose");
var covidSchema= new mongoose.Schema({
	State:String,
	Contact:String
});
//schema creation
module.exports=mongoose.model("covid",covidSchema);