"use strict";
const myOption = document.getElementById('my-option');
const product = document.getElementById('product');
const cash = document.getElementById('cash');
const tableCash = document.getElementById('table-cash');
const tableProduct = document.getElementById('table-product');
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
        tableProduct.hidden = true;
        tableCash.hidden = true;
    }
}
const formCash = document.getElementById('form-cash');
const cashDesc = document.getElementById('cash-desc');
const cashAmount = document.getElementById('cash-amount');
const cashNote = document.getElementById('cash-note');
const btnCash = document.getElementById('btnCash');
btnCash.addEventListener('click', cashData);
function cashData(e) {
    e.preventDefault();
    const formValue = String(formCash.value);
    const descValue = String(cashDesc.value);
    const cashValue = Number(cashAmount.valueAsNumber);
    const noteValue = String(cashNote.value);
    if (formCash.value == '' || cashDesc.value == '' || cashAmount.value == '' || cashNote.value == '') {
        alert('Please Fill the Form');
    }
    else {
        let oldTableCash = tableCash.innerHTML;
        const newTableCash = `
            <tr>
                <td>${formValue}</td>
                <td>${descValue}</td>
                <td>${cashValue}</td>
                <td>${noteValue}</td>
                <td><button type="submit" class="btn-delete">DELETE</button></td>
            </tr>
        `;
        oldTableCash += newTableCash;
        tableCash.innerHTML = oldTableCash;
    }
}
const formProduct = document.getElementById('form-product');
const productDesc = document.getElementById('product-desc');
const productPrice = document.getElementById('product-price');
const productNote = document.getElementById('product-note');
const btnProduct = document.getElementById('btnProduct');
btnProduct.addEventListener('click', productData);
function productData(e) {
    e.preventDefault();
    const formProValue = String(formProduct.value);
    const descProValue = String(productDesc.value);
    const priceValue = Number(productPrice.valueAsNumber);
    const noteProValue = String(productNote.value);
    if (formProduct.value == '' || productDesc.value == '' || productPrice.value == '' || productNote.value == '') {
        alert('Please Fill the Form');
    }
    else {
        let oldTableProduct = tableProduct.innerHTML;
        const newTableProduct = `
            <tr>
                <td>${formProValue}</td>
                <td>${descProValue}</td>
                <td>${priceValue}</td>
                <td>${noteProValue}</td>
                <td><button type="submit" class="btn-delete">DELETE</button></td>
            </tr>
        `;
        oldTableProduct += newTableProduct;
        tableProduct.innerHTML = oldTableProduct;
    }
}
document.addEventListener('click', (e) => {
    const isTodoDelete = e.target.classList.contains('btn-delete');
    if (isTodoDelete) {
        const btnDelete = e.target;
        const isConfirm = confirm('Are You Sure?');
        if (isConfirm) {
            const btnTR = btnDelete.closest('tr');
            if (btnTR) {
                btnTR.remove();
            }
        }
    }
});
