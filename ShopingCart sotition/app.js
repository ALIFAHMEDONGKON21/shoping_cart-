function updateproductNumber(product, price, isIncareasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;

    if (isIncareasing) {
        productNumber = parseInt(productNumber) + 1
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1
    }
    productInput.value = productNumber;
    const produtotal = document.getElementById(product + "-total")
    produtotal.innerText = productNumber * price;

    calculateTolat();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value)
    return productNumber;
}

function calculateTolat() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalAmount = subTotal + taxAmount;



    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = taxAmount;
    document.getElementById("total-amount").innerHTML = totalAmount;

}

// hanle cases

document.getElementById("case-pluss").addEventListener('click', function () {
    /*  const caseInput = document.getElementById("case-number");
     const caseNumber = caseInput.value;
     caseInput.value = parseInt(caseNumber) + 1; */
    updateproductNumber('case', 59, true)
});

document.getElementById("case-minus").addEventListener('click', function () {
    /*  const caseInput = document.getElementById("case-number")
     const caseNumber = caseInput.value; */
    updateproductNumber('case', 59, false);
    // caseInput.value = parseInt(caseNumber) - 1;
});
// handlephone
document.getElementById('phone-plus').addEventListener('click', function () {
    updateproductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateproductNumber('phone', 1219, false);
});
