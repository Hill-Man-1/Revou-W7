"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCashSubmit = void 0;
function handleCashSubmit() {
    const formCash = document.getElementById('form-cash');
    const cashDesc = document.getElementById('cash-desc');
    const cashAmount = document.getElementById('cash-amount');
    const cashNote = document.getElementById('cash-note');
    const tableCash = document.getElementById('table-cash');
    return function cashData(e) {
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
    };
}
exports.handleCashSubmit = handleCashSubmit;
