// Working with Remote Data
// For the solution of some of the following tasks, you will need to use an up-to-date version of the local REST service, provided in the lesson’s resources archive. You can read the documentation here.
//     Environment Specifics
// Please be aware that every JS environment may behave differently when executing code. Certain things that work in the browser are not supported in Node.js, which is the environment used by Judge.
//     The following actions are NOT supported:
//     ⦁	.forEach() with NodeList (returned by querySelector() and querySelectorAll())
// ⦁	.forEach() with HTMLCollection (returned by getElementsByClassName() and element.children)
// ⦁	Using the spread-operator (...) to convert a NodeList into an array
// ⦁	append() in Judge (use only appendChild())
// ⦁	prepend()
// ⦁	replaceWith()
// ⦁	replaceAll()
// ⦁	closest()
// ⦁	replaceChildren()
// ⦁	Always turn the collection into a JS array (forEach, forOf, et.)
// If you want to perform these operations, you may use Array.from() to first convert the collection into an array.




const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
const productName = document.getElementById('product');
const productQuantity = document.getElementById('count');
const productPrice = document.getElementById('price');
const addBtn = document.getElementById('add-product');
const updateBtn = document.getElementById('update-product');
const loadBtn = document.getElementById('load-product');
const tbody = document.getElementById("tbody");
// const thead = document.getElementById("tbl-header");


//⦁	Load Products
// Clicking the [Load Products] button should send a GET request to the server to fetch all products in your local database.
// Each task is a list item in the following format:
// <tr>
//  	<td class="name">{Product}</td>
// 	<td class="count-product">{count}</td>
// 	<td class="product-price">{price}</td>
// 	<td class="btn">
// 		<button class="update">Update</button>
// 		<button class="delete">Delete</button>
// 	</td>
// <tr>

loadBtn.addEventListener('click', loadProducts);

function loadProducts(e) {

    if (e){
        e.preventDefault();
    }
    tbody.innerHTML = '';
    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(product => {
                const tr = document.createElement('tr');
                tr.setAttribute('data-id', product._id);
                tr.innerHTML = `
                <td class="name">${product.product}</td>
                <td class="count-product">${product.count}</td>
                <td class="product-price">${product.price}</td>
                <td class="btn">
                    <button class="update">Update</button>
                    <button class="delete">Delete</button>
                </td>
                `;
                tbody.appendChild(tr);
            })
        });
}

addBtn.addEventListener('click', addProduct);

function addProduct(e) {
    e.preventDefault();
    const product = productName.value;
    const count = productQuantity.value;
    const price = productPrice.value;

    if (product == '' || count == '' || price == '') {
        return;
    }

    const body = {
        product,
        count,
        price
    };

    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(data => {
            loadProducts();
        });
}

// ⦁	Delete Products
// Clicking the [Delete] button should send a DELETE request to the server and remove the item from your local database. After you’ve removed it successfully, fetch the items again.

tbody.addEventListener('click', deleteProduct);

function deleteProduct(e) {
    if (e.target.className == 'delete') {
        const id = e.target.parentNode.parentNode.getAttribute('data-id');
        fetch(BASE_URL + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                loadProducts();
            });
    }
}

tbody.addEventListener('click', updateProduct);

function updateProduct(e) {
    if (e.target.className == 'update') {
        const id = e.target.parentNode.parentNode.getAttribute('data-id');
        const product = e.target.parentNode.parentNode.children[0].textContent;
        const count = e.target.parentNode.parentNode.children[1].textContent;
        const price = e.target.parentNode.parentNode.children[2].textContent;
        productName.value = product;
        productQuantity.value = count;
        productPrice.value = price;
        updateBtn.addEventListener('click', updateProduct);
        updateBtn.disabled = false;
        updateBtn.addEventListener('click', () => {
            const body = {
                product: productName.value,
                count: productQuantity.value,
                price: productPrice.value
            };
            fetch(BASE_URL + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => {
                    loadProducts();
                    updateBtn.disabled = true;
                    productName.value = '';
                    productQuantity.value = '';
                    productPrice.value = '';
                });
        });
    }
}