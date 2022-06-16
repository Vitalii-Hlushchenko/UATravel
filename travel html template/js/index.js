const articleContainer = document.querySelector('#article-container');

// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	// Получаем данные из products.json
    const response = await fetch('http://localhost:5000/posts');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProducts(productsArray);

    
}


// ../travel html template/images/blog/1.jpg

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="col-md-4 col-sm-6">
        <div class="single-package" id="article-container">
            <div class="package-image">
                <a href="#"><img src="${item.img}" alt="">
                </a>
            </div>
            <div class="package-content">
                <h3>${item.place}</h3>
                <p>${item.body}&nbsp&nbsp&nbsp<span>$${item.price}</span>
                </p>
            </div>
            <div class="package-calto-action">
                <ul class="charact">
                    <li>Тип подорожі:&nbsp${item.type}</li>
                    <li>Проживання:&nbsp${item.residence}</li>
                    <li>Харчування:&nbsp${item.food}</li>

                </ul>
                <ul class="ct-action">
                    <a href="#request" class="travel-booking-btn hvr-shutter-out-horizontal">Замовити тур</a>
                </ul>
                
            </div>
        </div>
    </div> `;
        articleContainer.insertAdjacentHTML('beforeend', productHTML);
    });
    
}
const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const commentForm = document.querySelector('#commentForm');
const requestForm = document.querySelector('#request-form');

// async function SendForm(e)
// {
//     e.preventDefault();

//     let response = await fetch('http://localhost:5000/clients', {
//         method: 'POST',          // метод POST
//         body: new FormData(form) // в класс FormData передаем ссылку на форму
//     });


//     let result = await response.json();

//     console.log(result);
// };
// btn.onclick = SendForm;

(function() {
    form.addEventListener('submit', function(e) {
    // Prevent default behavior
    e.preventDefault();
    // Create new FormData object
    const formData = new FormData(form);
    // Convert formData object to URL-encoded string
    const payload = new URLSearchParams(formData);
    // Post the payload using Fetch
    fetch('http://localhost:5000/clients', {
    method: 'POST',
    body: payload,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    })
    })();

    (function() {
        commentForm.addEventListener('submit', function(e) {
        // Prevent default behavior
        e.preventDefault();
        // Create new FormData object
        const formData = new FormData(commentForm);
        // Convert formData object to URL-encoded string
        const payload = new URLSearchParams(formData);
        // Post the payload using Fetch
        fetch('http://localhost:5000/comments', {
        method: 'POST',
        body: payload,
        })
        .then(res => res.json())
        .then(data => console.log(data))
        })
        })();



        (function() {
            requestForm.addEventListener('submit', function(e) {
            // Prevent default behavior
            e.preventDefault();
            // Create new FormData object
            const formData = new FormData(requestForm);
            // Convert formData object to URL-encoded string
            const payload = new URLSearchParams(formData);
            // Post the payload using Fetch
            fetch('http://localhost:5000/request', {
            method: 'POST',
            body: payload,
            })
            .then(res => res.json())
            .then(data => console.log(data))
            })
            })();