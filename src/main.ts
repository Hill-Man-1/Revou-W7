import {handleCashSubmit} from './cashModule.js';
import  {handleProductSubmit} from './productModule';
import  {handleDropdownChange}  from './dropdownModule';

const cashData = handleCashSubmit();
const productData = handleProductSubmit();
const dropdownFunc = handleDropdownChange();

const myOption = document.getElementById('my-option') as HTMLSelectElement;
const btnCash = document.getElementById('btnCash') as HTMLButtonElement;
const btnProduct = document.getElementById('btnProduct') as HTMLButtonElement;

myOption.addEventListener("change", dropdownFunc);
btnCash.addEventListener('click', cashData);
btnProduct.addEventListener('click', productData);

document.addEventListener('click', (e: Event) => {
    const isTodoDelete = (e.target as HTMLElement).classList.contains('btn-delete');
    if (isTodoDelete) {
    const btnDelete = e.target as HTMLButtonElement;
    const isConfirm = confirm('Are You Sure?');
    if (isConfirm) {
        const btnTR = btnDelete.closest('tr');
        if (btnTR) {
        btnTR.remove();
        }
    }
    }
});