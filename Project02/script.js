const height = document.getElementById('height');
const weight = document.getElementById('weight');
const button = document.getElementById('button');

const checkBmi = (h, w)=>{
    const heightinmeter = h/100;
    const bmi = w/(heightinmeter*heightinmeter);
    return bmi;
}

button.addEventListener('click',()=>{
    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);

    if(!h || !w){
        alert("Please enter the valid height and weight");
        return;
    }
const bmi = checkBmi(h, w);

if(bmi < 18.6){
    alert(`You are Under Weight ${bmi}`);
}
else if(bmi >= 18.6 && bmi<=24.9){
    alert(`Your BMI is normal ${bmi}`);
}
else{
    alert(`You are OverWeight ${bmi}`);
}
})



