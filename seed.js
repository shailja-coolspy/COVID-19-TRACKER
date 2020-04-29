var mongoose= require("mongoose");
var covid=require("./model/contact");

 

var data=[{State:"Andhra Pradesh", Contact:"0866-2410978"},
			{State:"Arunachal Pradesh", Contact:"9436055743"},
			{State:"Assam", Contact:"6913347770"},
			{State:"Bihar", Contact:"104"},
			{State:"Chhattisgarh", Contact:"077122-35091"},
			{State:"Goa", Contact:"104"},
			{State:"Gujarat", Contact:"104"},
			{State:"Haryana", Contact:"8558893911"},
			{State:"Himachal Pradesh", Contact:"104"},
			{State:"Jharkhand", Contact:"104"},
			{State:"Karnataka", Contact:"104"},
			{State:"Kerala", Contact:"0471-2552056"},
			{State:"Madhya Pradesh", Contact:"0755-2527177"},
			{State:"Maharashtra", Contact:"020-26127394"},
			{State:"Manipur", Contact:"03852411668"},
			{State:"Meghalaya", Contact:"108"},
			{State:"Mizoram", Contact:"102"},
			{State:"Nagaland", Contact:"7005539653"},
			{State:"Odisha", Contact:"9439994859"},
			{State:"Punjab", Contact:"104"},
			{State:"Rajasthan", Contact:"0141-2225624"},
			{State:"Sikkim", Contact:"104"},
			{State:"Tamil Nadu", Contact:"044-29510500"},
			{State:"Telangana", Contact:"104"},
			{State:"Tripura", Contact:"0381-2315879"},
			{State:"Uttarakhand", Contact:"104"},
			{State:"Uttar Pradesh", Contact:"18001805145"},
			{State:"West Bengal", Contact:"03323412600"},
			{State:"Andaman & Nicobar Islands", Contact:"03192-232102"},
			{State:"Chandigarh", Contact:"9779558282"},
			{State:"Dadra & Nagar Haveli", Contact:"104"},
			{State:"Daman & Diu", Contact:"104"},
			{State:"Delhi", Contact:"011-22307145"},
			{State:"Jammu", Contact:"01912520982"},
			{State:"Kashmir", Contact:"01942440283"},
			{State:"Ladakh", Contact:"01982256462"},
			{State:"Lakshadweep", Contact:"104"},
			{State:"Puducherry", Contact:"104"}]

function seedDB() {
	// body...

	covid.remove({},function(err){
		if (err) {
			console.log(err);

		}
		console.log("removed detail");

		data.forEach(function(seed){
			covid.create(seed,function(err,data){
				if (err) {
					console.log(err);
				}else{
					console.log("added data");
				}

			});
		});
	});
}

module.exports=seedDB;