const btn = document.getElementById('bmiBtn');
let resultHtml = document.getElementById('res');
let result;

function bmiCalc(weight, height) {
    let bmi = Math.round(weight / Math.pow(height, 2));
    if (isNaN(bmi)) {
        msg = 'Enter numbers only';
        return msg;
    } else {
        let w = bmi < 18.5 ? 'underweight' : (bmi > 18.5 && bmi < 24.9) ?
            'normal weight' : (bmi > 24.9) ? 'overweight' : 'in an unkwown weight';
        let msg = `Your BMI is ${bmi} so you are ${w}`;
        return msg;
    }
}


function lifeInWeeks(age) {
    if (!isNaN(age)) {
        let ageLeft = 90 - age;
        console.log(`You have ${ageLeft * 365} days, ${ageLeft * 52} weeks, and ${ageLeft * 12} months left.`
        );
    }
}

function handleSubmit() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value;
    result = bmiCalc(w, h);

    resultHtml.innerText = result;

}
