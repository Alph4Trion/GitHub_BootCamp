<script>

//Function Declaration
//Your height in meters
//Your weight in kilograms

function bmi(wg,ht) {
    let BMI = wg /(ht*ht);
    document.write(BMI + "<br>");
    if (BMI<18.5) {
        return("Underweight");
    } 
    else if(BMI>=18.5 && BMI<=24.9) {
        return("Normal Weight");
    } 
    else if(BMI>=25 && BMI<=29.9){
        return("Overweight");
    } 
    else{
        return("Obesity");
    }
}

//function call
document.write(bmi(70,1.70));

</script>