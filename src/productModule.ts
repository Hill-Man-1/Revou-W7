export function handleProductSubmit() {
    const formProduct = document.getElementById('form-product') as HTMLInputElement;
    const productDesc = document.getElementById('product-desc') as HTMLInputElement;
    const productPrice = document.getElementById('product-price') as HTMLInputElement;
    const productNote = document.getElementById('product-note') as HTMLTextAreaElement;
    const tableProduct = document.getElementById('table-product') as HTMLTableElement;

    return function productData(e: Event) {
    e.preventDefault();
    const formProValue = String(formProduct.value);
    const descProValue = String(productDesc.value);
    const priceValue = Number(productPrice.valueAsNumber);
    const noteProValue = String(productNote.value);
    if (formProduct.value == '' || productDesc.value == '' || productPrice.value == '' || productNote.value == '') {
        alert('Please Fill the Form');
    } else {
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