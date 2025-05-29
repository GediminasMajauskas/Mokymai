// let calculateButton = document.getElementById('calculate')
// calculateButton.addEventListener('click', function() {
//     console.log('clicked')
//     let employeeCount = document.getElementById('employee-count').valueAsNumber
//     let loavesPerEmployee = document.getElementById('loaves-per-employee').valueAsNumber
//     let orderCount = document.getElementById('order-count').valueAsNumber

//     let kepyklaTotal = employeeCount * loavesPerEmployee
//     let arPavyks = kepyklaTotal >= orderCount

//     let results = document.getElementById('results')
//     results.innerHTML = `<p><strong>Kepykla per dieną spės pagaminti:</strong> ${kepyklaTotal} kepalų</p>`
//     results.innerHTML += `<p><strong>Reikia pagaminti:</strong> ${orderCount} kepalų</p>`
//     results.innerHTML += `<p><strong>Ar spės pagaminti?</strong> ${arPavyks ? 'Taip' : 'Ne'}</p>`
// })

// document.getElementById('employee-count').addEventListener('keyup', function(event) {
//     let inputValue = event.target.valueAsNumber
//     if(inputValue < 0) {
//         event.target.classList.add('error')
//         event.target.nextElementSibling.classList.add('show')
//     } else {
//         event.target.classList.remove('error')
//         event.target.nextElementSibling.classList.remove('show')
//     }
// })

// document.getElementById('reset').addEventListener('click', function() {
//     document.getElementById('employee-count').valueAsNumber = 0
//     document.getElementById('loaves-per-employee').valueAsNumber = 0
//     document.getElementById('order-count').valueAsNumber = 0
//     document.getElementById('results').innerHTML = '<p>Kol kas nieko nėra.</p>'
// })

/* INSTRUKCIJOS:
Papildykite projektą:
- Šiame projekte atliktas tik pradinis stiliavimas, tačiau galima padaryti ir daugiau dalykų. Pagalvokite ar galima kaip nors atnaujinti dizainą, jo nesudarkant. Pavyzdžiui, gal gali įvesties laukeliai reaguoti į pelės užvedimą, 
  ar patvarkyti gal kokius tarpus, gal įnešti kokių spalvų įvairiose vietose, dar gal ką nors padaryti su įvesties laukeliais, mygtukų stiliai, ir pan.
- Iki galo padaryti validacijas su įvesties laukeliais (dabar yra atlikta tik su vienu).
- Pridėti daugiau įvesties laukelių ir/ar skaičiavimų iš duotos informacijos.
- Pridėti informacinių tekstų, kurie paaiškintų ką kuris laukelis ar skaičiavimas reiškia ir pan.
*/

// Elementai
const employeeInput = document.getElementById('employee-count');
const loavesInput = document.getElementById('loaves-per-employee');
const orderInput = document.getElementById('order-count');
const results = document.getElementById('results');
const calculateButton = document.getElementById('calculate');
const resetButton = document.getElementById('reset');

// Bendra funkcija vieno lauko validavimui
function validateInput(formosElementas) {
    const value = formosElementas.valueAsNumber;
    const errorSpan = formosElementas.nextElementSibling;

    if (isNaN(value) || value < 0) {
        formosElementas.classList.add('error');
        errorSpan.classList.add('show');
        return false;
    } else {
        formosElementas.classList.remove('error');
        errorSpan.classList.remove('show');
        return true;
    }
}

// Patikrina visus laukus
function validateAllInputs() {
    const valid1 = validateInput(employeeInput);
    const valid2 = validateInput(loavesInput);
    const valid3 = validateInput(orderInput);
    return valid1 && valid2 && valid3;
}

// Įvedimo metu rodom klaidą (jei reikia)
[employeeInput, loavesInput, orderInput].forEach(input => {
    input.addEventListener('input', () => validateInput(input));
});

// Skaičiavimo mygtukas
calculateButton.addEventListener('click', function () {
    console.log('clicked');

    if (!validateAllInputs()) {
        results.innerHTML = `<p style="color:red;">Prašome įvesti visus skaičius teisingai (>= 0).</p>`;
        return;
    }

    const employeeCount = employeeInput.valueAsNumber;
    const loavesPerEmployee = loavesInput.valueAsNumber;
    const orderCount = orderInput.valueAsNumber;

    const kepyklaTotal = employeeCount * loavesPerEmployee;
    const arPavyks = kepyklaTotal >= orderCount;

    results.innerHTML = `
        <p><strong>Kepykla per dieną spės pagaminti:</strong> ${kepyklaTotal} kepalų</p>
        <p><strong>Reikia pagaminti:</strong> ${orderCount} kepalų</p>
        <p><strong>Ar spės pagaminti?</strong> ${arPavyks ? 'Taip ✅' : 'Ne ❌'}</p>
    `;
});

// skaiciuoti mygtukas
resetButton.addEventListener('click', function () {
    [employeeInput, loavesInput, orderInput].forEach(input => {
        input.value = 0;
        input.classList.remove('error');
        input.nextElementSibling.classList.remove('show');
    });

    results.innerHTML = '<p>Kol kas nieko nėra.</p>';
});

const element = document.getElementById("calculate");
const reset = document.getElementById("reset");

element.addEventListener("click", () => {
    element.style.backgroundColor = "#6da890";
    element.style.color = "#6da890";
    element.innerText = "Skaičiuoti";
});

// grąžina į pradinę būseną
    reset.addEventListener("click", () => {
    element.style.backgroundColor = ""; // pašalina inline stilių
    element.style.color = "";

});

