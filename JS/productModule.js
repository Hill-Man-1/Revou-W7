"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleProductSubmit = void 0;
function handleProductSubmit() {
    const formProduct = document.getElementById('form-product');
    const productDesc = document.getElementById('product-desc');
    const productPrice = document.getElementById('product-price');
    const productNote = document.getElementById('product-note');
    const tableProduct = document.getElementById('table-product');
    return function productData(e) {
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
    };
}
exports.handleProductSubmit = handleProductSubmit;
