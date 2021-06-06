const btn = document.getElementById('bmiBtn');
let resultHtml = document.getElementById('res');
let result;

function bmiCalc(weight, height) {
    if (!isNaN(weight) || !isNaN(height)) {
        let bmi = Math.round(weight / Math.pow(height, 2));
        let w = bmi < 18.5 ? 'underweight' : (bmi > 18.5 && bmi < 24.9) ? 'normal weight' : 'overweight';
        let msg = `Your BMI is ${bmi} so you are ${w}`;
        return msg;
    } else {
        console.log('NOT A NUMBER');
        return 'NOT A NUMBER';
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
