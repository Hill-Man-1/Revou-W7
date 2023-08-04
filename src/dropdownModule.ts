export function handleDropdownChange() {
    const myOption = document.getElementById('my-option') as HTMLSelectElement;
    const cash = document.getElementById('cash') as HTMLFormElement;
    const product = document.getElementById('product') as HTMLFormElement;
    const tableCash = document.getElementById('table-cash') as HTMLTableElement;
    const tableProduct = document.getElementById('table-product') as HTMLTableElement;

    return function dropdownFunc() {
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
        };
    }