const form = document.querySelector('form');
const list = document.querySelector('#list')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    const newListItem = document.createElement('li');
    newListItem.innerText = `${qtyInput.value} ${productInput.value}`;
    list.appendChild(newListItem);
    productInput.value = '';
    qtyInput.value = '';
})