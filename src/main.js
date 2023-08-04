"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cashModule_1 = require("./cashModule");
const productModule_1 = require("./productModule");
const dropdownModule_1 = require("./dropdownModule");
const cashData = (0, cashModule_1.handleCashSubmit)();
const productData = (0, productModule_1.handleProductSubmit)();
const dropdownFunc = (0, dropdownModule_1.handleDropdownChange)();
const myOption = document.getElementById('my-option');
const btnCash = document.getElementById('btnCash');
const btnProduct = document.getElementById('btnProduct');
myOption.addEventListener("change", dropdownFunc);
btnCash.addEventListener('click', cashData);
btnProduct.addEventListener('click', productData);
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
