var myOption = document.getElementById('my-option');
var product = document.getElementById('product');
var cash = document.getElementById('cash');
var tableCash = document.getElementById('table-cash');
var tableProduct = document.getElementById('table-product');
myOption.addEventListener("change", dropdownFunc);
function dropdownFunc() {
    if (myOption.value === "1") {
        cash.style.display = "block";
        product.style.display = "none";
        tableCash.hidden = false;
        tableProduct.hidden = true;
    }
    else if (myOption.value === "2") {
        cash.style.display = "none";
        product.style.display = "block";
        tableProduct.hidden = false;
        tableCash.hidden = true;
    }
    else {
        cash.style.display = "none";
        product.style.display = "none";
        tableProduct.style.display = "none";
        tableCash.style.display = "none";
    }
}
var formCash = document.getElementById('form-cash');
var cashDesc = document.getElementById('cash-desc');
var cashAmount = document.getElementById('cash-amount');
var cashNote = document.getElementById('cash-note');
var btnCash = document.getElementById('btnCash');
btnCash.addEventListener('click', cashData);
function cashData() {
    var formValue = formCash.value;
    var descValue = cashDesc.value;
    var cashValue = parseFloat(cashAmount.value);
    var noteValue = cashNote.value;
    if (formValue == '' || descValue == '' || isNaN(cashValue) || noteValue == '') {
        alert('Please Fill the Form');
    }
    else {
        var oldTableCash = tableCash.innerHTML;
        var newTableCash = "\n            <tr>\n                <td>".concat(formValue, "</td>\n                <td>").concat(descValue, "</td>\n                <td>").concat(cashValue, "</td>\n                <td>").concat(noteValue, "</td>\n            </tr>\n        ");
        oldTableCash += newTableCash;
        tableCash.innerHTML = oldTableCash;
    }
}
var formProduct = document.getElementById('form-product');
var productDesc = document.getElementById('product-desc');
var productPrice = document.getElementById('product-price');
var productNote = document.getElementById('product-note');
var btnProduct = document.getElementById('btnProduct');
btnProduct.addEventListener('click', productData);
function productData() {
    
    var formProValue = formProduct.value;
    var descProValue = productDesc.value;
    var priceValue = parseFloat(productPrice.value);
    var noteProValue = productNote.value;
    if (formProValue == '' || descProValue == '' || isNaN(priceValue) || noteProValue == '') {
        alert('Please Fill the Form');
    }
    else {
        var oldTableProduct = tableProduct.innerHTML;
        var newTableProduct = "\n            <tr>\n                <td>".concat(formProValue, "</td>\n                <td>").concat(descProValue, "</td>\n                <td>").concat(priceValue, "</td>\n                <td>").concat(noteProValue, "</td>\n            </tr>\n        ");
        oldTableProduct += newTableProduct;
        tableProduct.innerHTML = oldTableProduct;
    }
}
