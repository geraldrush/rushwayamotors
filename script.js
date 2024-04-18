//jQuery dropdown menu for staff page.
$(()=> {
	
	$('li#about').mouseover( e => {
		$(e.currentTarget).children("ul").show()
	});
	$('li#about').mouseout(e => {
		$(e.currentTarget).children("ul").hide()
	});
	
});

// Selection lists in the web form
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");
let input = document.querySelectorAll('input[type="number"]');
let productname = document.querySelectorAll("input.productname");
let quantity = document.querySelectorAll("input.quantity");
let price = document.querySelectorAll("input.price");

// The number of options within each selection list
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");


/*let brakeprice = (document.getElementById('brakeprice').value);
let engineOilprice = (document.getElementById('eoprice').value);
let OilFilterprice = (document.getElementById('ofprice').value);
let brakeQuantity = document.getElementById("bqty").value;
let engineOilQuantity = document.getElementById("eoqty").value;
let OilFilterQuantity = document.getElementById("ofqty").value;*/

let brakeprice;
let engineOilprice;
let OilFilterprice;
let brakeQuantity;
let engineOilQuantity;
let OilFilterQuantity;

// Event handler to modify the content of the Model selection list
// when the Make selection list changes

make.onchange = function() {
   let makeIndex = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;
   
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
}

// Event handler to modify the content of the Trim selection list
// when the Model selection list changes

model.onchange = function() {
   let modelIndex = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;
   
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
}
function showAll(selectList){
	let options = selectList.querySelectorAll('option');
	let optionLength = options.length;
	
	for(let i=0; i< optionLength; i++){
		options[i].style.display = "block";
	}
}

function filterSelect(selectList, category) {
	let options = selectList.querySelectorAll('option');
	let optionLength = options.length;
	
	for (let i=0; i < optionLength; i++) {
		if(options[i].className === category){
			options[i].style.display = "block";
		} else {
			options[i].style.display = "none";
		};
	}
};

// adding my code
	let cars = [ "empty","Convenience Group 4dr SUV (3.6L 6cyl 6A)","Leather Group 4dr SUV (3.6L 6cyl 6A)","Premium Group 4dr SUV (3.6L 6cyl 6A)",
				"4dr SUV (1.4L 4cyl Turbo 6A)","Convenience 4dr SUV (1.4L 4cyl Turbo 6A)","Premium 4dr SUV (1.4L 4cyl Turbo 6A)",
				"4dr Sedan (2.4L 4cyl gas/electric hybrid 6A)", "Leather Group 4dr Sedan AWD (3.6L 6cyl 6A)","Premium I Group 4dr Sedan (3.6L 6cyl 6A)",
				"Premium II Group 4dr Sedan (3.6L 6cyl 6A)",          
				"EX 2dr Coupe (2.4L 4cyl 6M)",
				"EX-L 4dr Sedan (2.4L 4cyl CVT)",
             "Sport 4dr Sedan (2.4L 4cyl 6M)",
              "EX 4dr Sedan (1.8L 4cyl CVT)",
               "LX 2dr Coupe (1.8L 4cyl 5M)",
              "4dr Sedan (2.4L 4cyl gas/electric hybrid 6A)",
               "Natural Gas 4dr Sedan (1.8L 4cyl 5A)",
               "EX 4dr Minivan (3.5L 6cyl 6A)",
               "LX 4dr Minivan (3.5L 6cyl 6A)",
             "Touring 4dr Minivan (3.5L 6cyl 6A)", 
               "EX 4dr SUV (3.5L 6cyl 5A)",
               "LX 4dr SUV (3.5L 6cyl 5A)",              
               "2dr Coupe (3.7L 6cyl 7A)",
               "Sport 2dr Coupe (3.7L 6cyl 6M)",
              "Touring 2dr Coupe (3.7L 6cyl 7A)",
              "2.5 4dr Sedan (2.5L 4cyl CVT)",
               "3.5 SL 4dr Sedan (3.5L 6cyl CVT)",
           "S 4dr Hatchback (electric DD)",
              "SL 4dr Hatchback (electric DD)",
               "SV 4dr Hatchback (electric DD)",
               "S 4dr SUV (2.5L 4cyl CVT)",
              "SV 4dr SUV AWD (2.5L 4cyl CVT)",           
               "FE+ S 4dr Sedan (1.8L 4cyl CVT)",
               "S 4dr Sedan (1.8L 4cyl 6M)",
               "SL 4dr Sedan (1.8L 4cyl CVT)", 
               "Limited 4dr SUV (4.0L 6cyl 5A)",
               "SR5 4dr SUV (4.0L 6cyl 5A)",
               "Trail 4dr SUV 4WD (4.0L 6cyl 5A)",
               "TRD PRO 4dr SUV 4WD (4.0L 6cyl 5A)",
               "LE 4dr Sedan (2.5L 4cyl 6A)",
               "SE 4dr Sedan (2.5L 4cyl 6A)",
               "XLE 4dr Sedan (3.5L 6cyl 6A)",
               "XSE 4dr Sedan (3.5L 6cyl 6A)",
               "L 4dr Sedan (1.8L 4cyl 4A)",
               "LE Plus 4dr Sedan (1.8L 4cyl CVT)",             
               "S 4dr Sedan (1.8L 4cyl CVT)",
               "LE 4dr SUV (2.5L 4cyl 6A)",
               "Limited 4dr SUV (2.5L 4cyl 6A)", 
               "XLE 4dr SUV (2.5L 4cyl 6A)",  
               "LE 4dr SUV (2.5L 4cyl 6A)",
               "L 7-Passenger 4dr Minivan (3.5L 6cyl 6A)", 
               "Limited 7-Passenger 4dr Minivan (3.5L 6cyl 6A)"];
			   
			   let bprices = ['none', 345.65, 666.71];
			   let engOlprices = ["none", 67.14, 185.50];
			   let OlFltprices = ["none", 55.12, 342.40];
			   

selectVehicle.addEventListener("click", function() {
document.getElementById("vehicle").textContent = make.value + " " + model.value + " " + trim.value;	   
	
	for(i = 0; i < cars.length; i++){
		if(trim.value === cars[i]){
		/*document.getElementById('brakeprice').value = bprices[i];
		document.getElementById('eoprice').value = engOlprices[i];
		document.getElementById('ofprice').value = OlFltprices[i];*/
		
		brakeprice = bprices[i];
		eoprice = engOlprices[i];
		ofprice = OlFltprices[i];
		
		}
	};

let priceList = [brakeprice, eoprice, ofprice];

 let check = document.querySelectorAll("input[type='checkbox']");
	for(let i=0; i< check.length; i++){
		if (check[i].checked == true){
		productname[i].value = check[i].name;
		price[i].value = priceList[i];
		quantity[i].value = 1;
		}
	}
});


/*

document.addEventListener('input', calcTotal);

function calcTotal(){
		
		let updatebrprice = 0;
		let updateengOilprice = 0;
		let updateOfprice = 0;
		
		let brakeQuantity = document.getElementById("bqty").value;
		let engineOilQuantity = document.getElementById("eoqty").value;
		let OilFilterQuantity = document.getElementById("ofqty").value;
	
		brakeprice = document.getElementById('brakeprice').textContent;
		engineOilprice = document.getElementById('eoprice').textContent;
		OilFilterprice = document.getElementById('ofprice').textContent;
	
	parseInt(brakeprice) * brakeQuantity = brakeprice;
	parseInt(engineOilprice) * engineOilQuantity = engineOilprice;
	parseInt(OilFilterprice) * OilFilterQuantity = OilFilterprice;
}
*/
