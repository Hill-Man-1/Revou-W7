const myOption:HTMLSelectElement = document.getElementById('my-option') as HTMLSelectElement;
const product:HTMLElement = document.getElementById('product') as HTMLElement;
const cash:HTMLElement = document.getElementById('cash') as HTMLElement;
const tableCash:HTMLElement = document.getElementById('table-cash') as HTMLElement;
const tableProduct:HTMLElement = document.getElementById('table-product') as HTMLElement;

myOption.addEventListener("change", dropdownFunc);

function dropdownFunc() {
    if (myOption.value === "1") {
        cash.style.display = "block";
        product.style.display = "none";
        tableCash.hidden = false;
        tableProduct.hidden = true;
    } else if (myOption.value === "2") {
        cash.style.display = "none";
        product.style.display = "block";
        tableProduct.hidden = false;
        tableCash.hidden = true;
    } else {
        cash.style.display = "none";
        product.style.display = "none";
        tableProduct.hidden = true;
        tableCash.hidden = true;
    }
}

const formCash:HTMLFormElement = document.getElementById('form-cash') as HTMLFormElement;
const cashDesc:HTMLInputElement = document.getElementById('cash-desc') as HTMLInputElement;
const cashAmount:HTMLInputElement = document.getElementById('cash-amount') as HTMLInputElement;
const cashNote:HTMLInputElement = document.getElementById('cash-note') as HTMLInputElement;
const btnCash:HTMLButtonElement = document.getElementById('btnCash') as HTMLButtonElement;

btnCash.addEventListener('click', cashData);

function cashData(e:Event):void {
    e.preventDefault();
    const formValue:string = String (formCash.value);
    const descValue:string = String (cashDesc.value);
    const cashValue:number = Number (cashAmount.valueAsNumber);
    const noteValue:string = String (cashNote.value);

    if (formCash.value == '' || cashDesc.value == '' || cashAmount.value == '' || cashNote.value == '') {
        alert('Please Fill the Form');
    } else {
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

const formProduct:HTMLFormElement = document.getElementById('form-product') as HTMLFormElement;
const productDesc:HTMLInputElement = document.getElementById('product-desc') as HTMLInputElement;
const productPrice:HTMLInputElement = document.getElementById('product-price') as HTMLInputElement;
const productNote:HTMLInputElement = document.getElementById('product-note') as HTMLInputElement;
const btnProduct:HTMLButtonElement = document.getElementById('btnProduct') as HTMLButtonElement;

btnProduct.addEventListener('click', productData);

function productData(e: Event): void {
    e.preventDefault();
    const formProValue: string = String(formProduct.value);
    const descProValue: string = String(productDesc.value);
    const priceValue: number = Number(productPrice.valueAsNumber);
    const noteProValue: string = String(productNote.value);

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
}

document.addEventListener('click', (e: Event) => {
    const isTodoDelete = (e.target as Element).classList.contains('btn-delete');
    if (isTodoDelete) {
        const btnDelete = e.target as Element;
        const isConfirm = confirm('Are You Sure?');
        if (isConfirm) {
            const btnTR = btnDelete.closest('tr');
            if (btnTR) {
                btnTR.remove();
            }
        }
    }
});

