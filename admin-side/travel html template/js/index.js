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



function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="col-md-4 col-sm-6">
        <div class="single-package" id="article-container">
            <div class="package-image">
                <a href="#"><img src="${item.pictures}" alt="">
                </a>
            </div>
            <div class="package-content">
                <h3>${item.title}</h3>
                <p>${item.body} <span>$500</span>
                </p>
            </div>
            <div class="package-calto-action">
                <ul class="ct-action">
                    <li><a href="#" class="travel-booking-btn hvr-shutter-out-horizontal">Book Now</a>
                    </li>
                    <li>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div> `;
        articleContainer.insertAdjacentHTML('beforeend', productHTML);
    });
    
}