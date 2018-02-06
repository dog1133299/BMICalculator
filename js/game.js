 function s(e) {
 	return document.querySelector(e);
 }


 var head=s(".head");
 var body=s(".body");
 var handL=s(".handLeft");
 var handR=s(".handRight");
 var legL=s(".legLeft");
 var legR=s(".legRight");
 var text=s(".BMI");
 var height=s(".heightNumber>input");
 var weight=s(".weightScale>input");
 var button=s("#button");

 head.onclick=function(){
 	head.classList.toggle("girl");
 	body.classList.toggle("girl");
 	handL.classList.toggle("girl");
 	handR.classList.toggle("girl");
 	legL.classList.toggle("girl");
 	legR.classList.toggle("girl"); 

 };
 button.onclick=function(){

 	 	if (height.value!=0&&weight.value!=0) {
 	 		var bmi=weight.value/height.value/height.value*10000;
 	 		if (bmi>=30) {
 	 		text.innerHTML=bmi.toFixed(2)+"<br>Obesity";
 	 		}else if(bmi>=25){
 	 		text.innerHTML=bmi.toFixed(2)+"<br>Overweight";
 	 		}else if(bmi>=18.5){
 	 		text.innerHTML=bmi.toFixed(2)+"<br>Normal weight ";
 	 		}else{text.innerHTML=bmi.toFixed(2)+"<br>Underweight";}
 
 	 	}else{
 	 		text.innerHTML="Please enter Number!"
 	 	}
 };