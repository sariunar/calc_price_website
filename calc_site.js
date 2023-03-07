const landing = [['Выберите', 0], ['1', 1500]];
const coat = [['Выберите', 0], ['1-3', 1500], ['4-6', 1800], ['>7', 2300]];
const portal = [['Выберите', 0], ['1-3', 2000], ['4-6', 2700], ['7-9', 3200], ['>10', 4000]];
const online_store = [['Выберите', 0], ['1-3', 2500], ['4-6', 3700], ['7-9', 5200], ['>10', 6100]];
const form = document.querySelector('.form');
const selectType = form.querySelector('.selectType');
const selectPages = form.querySelector('.selectPages');
const selectDesign = form.querySelector('.selectDesign');
const selectVer = document.querySelectorAll('input[name="ver"]');
const selectTime = form.querySelectorAll('input[name="time"]');
selectType.addEventListener('click', () => {
    selectPages.disabled = false;
    let a = '';

    if (selectType.value == '12000') {
        landing.forEach((element) => {
            a += `<option value="${element[1]}">${element[0]}</option>`;
        });
        selectPages.innerHTML = a;
    }
    else if (selectType.value == '10000') {
        coat.forEach((element) => {
            a += `<option value="${element[1]}">${element[0]}</option>`;
        });
        selectPages.innerHTML = a;
    }
    else if (selectType.value == '40000') {
        portal.forEach(element => {
            a += `<option value="${element[1]}">${element[0]}</option>`;
        });
        selectPages.innerHTML = a;
    }
    else if (selectType.value == '45600') {
        online_store.forEach(element => {
            a += `<option value="${element[1]}">${element[0]}</option>`;
        });
        selectPages.innerHTML = a;
    }
    else {
        selectPages.disabled = true;
        selectPages.innerHTML = '';
    }
});

form.addEventListener('change', () => {
    let result = document.getElementById("result");
    let price = 0;
    let p = 0;
    let t = 0;
    for (const element of selectVer) {
        if (element.checked) {
            p = element.value;
        }
    }
    for (const element of selectTime) {
        if (element.checked) {
            t = element.value;
        }
    }

    price += +selectType.value;
    price += +selectPages.value;
    price += +selectDesign.value;
    price += +p;
    price += +t;
    result.innerHTML = price;

    console.log(price);
});