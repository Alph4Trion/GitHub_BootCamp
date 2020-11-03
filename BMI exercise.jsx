<script>

//function declaration

function bmi(ht, wg) {
	var bmi = wg / (ht * ht);
    document.write(bmi + "<br>");
   if(bmi <= 18.4) {
   return "Underweight";
   } 
   else if(bmi => 18.5 && bmi <= 24.9) {
   return "Normal weight";
   }
   else if(bmi => 25 && bmi <= 29.9) {
   return "Overweight";
   } 
   else {
   return "Obese"
   }
   return bmi;
}

//function call
document.write(bmi(1.70, 70));

</script>
