// DROP DOWN VARIABLES START

const myOption:HTMLSelectElement = document.getElementById('my-option') as HTMLSelectElement;
const product:HTMLElement = document.getElementById('product') as HTMLElement;
const cash:HTMLElement = document.getElementById('cash') as HTMLElement;
const tableCash:HTMLElement = document.getElementById('table-cash') as HTMLElement;
const tableProduct:HTMLElement = document.getElementById('table-product') as HTMLElement;

// DROP DOWN VARIABLES END

//  INPUT CASH VARIABLES START

const formCash:HTMLFormElement = document.getElementById('form-cash') as HTMLFormElement;
const cashDesc:HTMLInputElement = document.getElementById('cash-desc') as HTMLInputElement;
const cashAmount:HTMLInputElement = document.getElementById('cash-amount') as HTMLInputElement;
const cashNote:HTMLInputElement = document.getElementById('cash-note') as HTMLInputElement;
const btnCash:HTMLButtonElement = document.getElementById('btnCash') as HTMLButtonElement;

// INPUT CASH VARIABLES END


// INPUT PRODUCT VARIABLES START

const formProduct:HTMLFormElement = document.getElementById('form-product') as HTMLFormElement;
const productDesc:HTMLInputElement = document.getElementById('product-desc') as HTMLInputElement;
const productPrice:HTMLInputElement = document.getElementById('product-price') as HTMLInputElement;
const productNote:HTMLInputElement = document.getElementById('product-note') as HTMLInputElement;
const btnProduct:HTMLButtonElement = document.getElementById('btnProduct') as HTMLButtonElement;

// INPUT PRODUCT VARIABLES END

// REUSABLE FUNCTIONS START

function show(element:HTMLElement):void{
    element.hidden = false;
}

function hide(element:HTMLElement):void{
    element.hidden = true;
}

function emptyForm():void{
    alert('Please Fill the Form')
};

// REUSABLE FUNCTIONS END


myOption.addEventListener("change", dropdownFunc);

function dropdownFunc():void {
    if (myOption.value === "1") {
        show(cash);
        show(tableCash);
        hide(product);
        hide(tableProduct);
    } else if (myOption.value === "2") {
        hide(cash);
        hide(tableCash);
        show(product);
        show(tableProduct);
    } else {
        hide(cash);
        hide(tableCash);
        hide(product);
        hide(tableProduct);
    }
}

btnCash.addEventListener('click', cashData);

function cashData(e:Event):void {
    e.preventDefault();
    const formValue:string = String (formCash.value);
    const descValue:string = String (cashDesc.value);
    const cashValue:number = Number (cashAmount.valueAsNumber);
    const noteValue:string = String (cashNote.value);

    if (formCash.value == '' || cashDesc.value == '' || cashAmount.value == '' || cashNote.value == '') {
        emptyForm();
    } else {
        let oldTableCash = tableCash.innerHTML;
        const newTableCash = `
            <tr>
                <td>${formValue}</td>
                <td>${descValue}</td>
                <td>${cashValue}</td>
                <td>${noteValue}</td>
                <td><button type="submit" class="btn-delete">x</button></td>
            </tr>
        `;
        oldTableCash += newTableCash;
        tableCash.innerHTML = oldTableCash;
    }
}



btnProduct.addEventListener('click', productData);

function productData(e: Event): void {
    e.preventDefault();
    const formProValue: string = String(formProduct.value);
    const descProValue: string = String(productDesc.value);
    const priceValue: number = Number(productPrice.valueAsNumber);
    const noteProValue: string = String(productNote.value);

    if (formProduct.value == '' || productDesc.value == '' || productPrice.value == '' || productNote.value == '') {
        emptyForm();
    } else {
        let oldTableProduct = tableProduct.innerHTML;
        const newTableProduct = `
            <tr>
                <td>${formProValue}</td>
                <td>${descProValue}</td>
                <td>${priceValue}</td>
                <td>${noteProValue}</td>
                <td><button type="submit" class="btn-delete">x</button></td>
            </tr>
        `;
        oldTableProduct += newTableProduct;
        tableProduct.innerHTML = oldTableProduct;
    }
}

document.addEventListener('click', (e: Event):void => {
    const isTodoDelete:boolean = (e.target as Element).classList.contains('btn-delete');
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

