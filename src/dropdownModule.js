"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDropdownChange = void 0;
function handleDropdownChange() {
    const myOption = document.getElementById('my-option');
    const cash = document.getElementById('cash');
    const product = document.getElementById('product');
    const tableCash = document.getElementById('table-cash');
    const tableProduct = document.getElementById('table-product');
    return function dropdownFunc() {
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
    };
}
exports.handleDropdownChange = handleDropdownChange;
