// DROP DOWN VARIABLES START
var myOption = document.getElementById('my-option');
var product = document.getElementById('product');
var cash = document.getElementById('cash');
var tableCash = document.getElementById('table-cash');
var tableProduct = document.getElementById('table-product');
// DROP DOWN VARIABLES END
//  INPUT CASH VARIABLES START
var formCash = document.getElementById('form-cash');
var cashDesc = document.getElementById('cash-desc');
var cashAmount = document.getElementById('cash-amount');
var cashNote = document.getElementById('cash-note');
var btnCash = document.getElementById('btnCash');
// INPUT CASH VARIABLES END
// INPUT PRODUCT VARIABLES START
var formProduct = document.getElementById('form-product');
var productDesc = document.getElementById('product-desc');
var productPrice = document.getElementById('product-price');
var productNote = document.getElementById('product-note');
var btnProduct = document.getElementById('btnProduct');
// INPUT PRODUCT VARIABLES END
function show(element) {
    element.hidden = false;
}
function hide(element) {
    element.hidden = true;
}
function emptyForm() {
    alert('Please Fill the Form');
}
;
myOption.addEventListener("change", dropdownFunc);
function dropdownFunc() {
    if (myOption.value === "1") {
        show(cash);
        show(tableCash);
        hide(product);
        hide(tableProduct);
    }
    else if (myOption.value === "2") {
        hide(cash);
        hide(tableCash);
        show(product);
        show(tableProduct);
    }
    else {
        hide(cash);
        hide(tableCash);
        hide(product);
        hide(tableProduct);
    }
}
btnCash.addEventListener('click', cashData);
function cashData(e) {
    e.preventDefault();
    var formValue = String(formCash.value);
    var descValue = String(cashDesc.value);
    var cashValue = Number(cashAmount.valueAsNumber);
    var noteValue = String(cashNote.value);
    if (formCash.value == '' || cashDesc.value == '' || cashAmount.value == '' || cashNote.value == '') {
        emptyForm();
    }
    else {
        var oldTableCash = tableCash.innerHTML;
        var newTableCash = "\n            <tr>\n                <td>".concat(formValue, "</td>\n                <td>").concat(descValue, "</td>\n                <td>").concat(cashValue, "</td>\n                <td>").concat(noteValue, "</td>\n                <td><button type=\"submit\" class=\"btn-delete\">x</button></td>\n            </tr>\n        ");
        oldTableCash += newTableCash;
        tableCash.innerHTML = oldTableCash;
    }
}
btnProduct.addEventListener('click', productData);
function productData(e) {
    e.preventDefault();
    var formProValue = String(formProduct.value);
    var descProValue = String(productDesc.value);
    var priceValue = Number(productPrice.valueAsNumber);
    var noteProValue = String(productNote.value);
    if (formProduct.value == '' || productDesc.value == '' || productPrice.value == '' || productNote.value == '') {
        emptyForm();
    }
    else {
        var oldTableProduct = tableProduct.innerHTML;
        var newTableProduct = "\n            <tr>\n                <td>".concat(formProValue, "</td>\n                <td>").concat(descProValue, "</td>\n                <td>").concat(priceValue, "</td>\n                <td>").concat(noteProValue, "</td>\n                <td><button type=\"submit\" class=\"btn-delete\">x</button></td>\n            </tr>\n        ");
        oldTableProduct += newTableProduct;
        tableProduct.innerHTML = oldTableProduct;
    }
}
document.addEventListener('click', function (e) {
    var isTodoDelete = e.target.classList.contains('btn-delete');
    if (isTodoDelete) {
        var btnDelete = e.target;
        var isConfirm = confirm('Are You Sure?');
        if (isConfirm) {
            var btnTR = btnDelete.closest('tr');
            if (btnTR) {
                btnTR.remove();
            }
        }
    }
});
