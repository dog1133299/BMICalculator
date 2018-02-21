 function s(e) {
 	return document.querySelector(e);
 }
 
 var height=s("#height");
 var weight=s("#weight");
 var button=s("#button");
 var bmi=s("#bmi");
var  underweight=s('#underweight');
var healthy=s('#healthy');
var obese=s('#obese');
var overweight=s('#overweight');
  button.onclick=function(){
obese.classList.remove("select");
overweight.classList.remove("select");
healthy.classList.remove("select");
underweight.classList.remove("select");
 	 	if (height.value!=0&&weight.value!=0) {
 	 		var i=weight.value/height.value/height.value*10000;
 	 		if (i>=30) {
 	 		bmi.innerHTML=i.toFixed(2);obese.classList.add("select");
 	 		}else if(i>=25){
 	 		bmi.innerHTML=i.toFixed(2);overweight.classList.add("select");
 	 		}else if(i>=18.5){
 	 		bmi.innerHTML=i.toFixed(2);healthy.classList.add("select");
 	 		}else{bmi.innerHTML=i.toFixed(2);underweight.classList.add("select");}
 
 	 	}else{
 	 		bmi.innerHTML="Please enter Number!"
 	 	}
 };