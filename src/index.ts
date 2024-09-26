import $ from 'jquery';

enum ShopTabs {
    FACE = 'FACE',
    BODY = 'BODY',
    HAIR = 'HAIR',
    CANDLES = 'CANDLES',
}

interface Item {
    id: number;
    title: string;
    price: string;
    img: string;
}

interface Product {
    category: ShopTabs | string;
    items: Item[];
}

const products: Product[] = [
    {
        category: "BODY",
        items: [
            {
                id: 1,
                title: "HYDROPHILIC OIL",
                price: "160 EUR",
                img: "assets/images/shop_advert1.png"
            },
        ]
    },
    {
        category: "FACE",
        items: [
            {
                id: 22,
                title: "FACE CREAM",
                price: "210 EUR",
                img: "assets/images/shop_advert2.png"
            },
        ]
    },
    {
        category: "CANDLES",
        items: [
            {
                id: 33,
                title: "UBTAN",
                price: "160 EUR",
                img: "assets/images/shop_advert3.png"
            },
        ]
    },
    {
        category: "HAIR",
        items: [
            {
                id: 44,
                title: "PROPAN",
                price: "310 EUR",
                img: "assets/images/shop_advert1.png"
            },
            {
                id: 44,
                title: "PROPAN2",
                price: "310 EUR",
                img: "assets/images/shop_advert1.png"
            },
        ]
    }
]

import "./scss/app.scss";

$('.header-burger-btn').on('click', () => {
    $('.burger').addClass('burger--active');

    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
});

$('.burger-btn').on('click', () => {
    $('.burger').removeClass('burger--active');

    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    })
});

// Shop main page logic
const DEFAULT_SHOP_TAB_CLASS =  ".shop_section-nav-list-item";
const ACTIVE_SHOP_TAB_CLASS = DEFAULT_SHOP_TAB_CLASS + "--is-active";

let currentActive = $(DEFAULT_SHOP_TAB_CLASS + ACTIVE_SHOP_TAB_CLASS)[0];

$('.shop_section-nav-list-item').on('click', (e: any) => {
    const currentElement = $(e.currentTarget)[0];
    const isActive = currentElement.classList.length > 1;

    if (!isActive) {
        currentElement.classList.add(ACTIVE_SHOP_TAB_CLASS.slice(1));
        currentActive.classList.remove(ACTIVE_SHOP_TAB_CLASS.slice(1));
        currentActive = currentElement;

        handleTabChange(e.target.innerText);
    }
})

function handleTabChange(activeTabName: ShopTabs) {
    const findedGroupCategory = products.find(product => product.category === activeTabName);

    if (findedGroupCategory) {
        $('.shop_section-cards').empty();

        const shopCardBuilder = (shopCard: Item) => {
            return `<div class="shop_card">
                    <img
                        class="shop_card-img"
                        src="${shopCard.img}"
                        alt="shop_card1"
                    />
                    <h5 class="shop_card-title">${shopCard.title}</h5>
                    <p class="shop_card-price">${shopCard.price}</p>
                </div>`;
        }

        for (const item of findedGroupCategory.items) {
            $('.shop_section-cards').append(shopCardBuilder(item));
        }
    }
}

// Init
handleTabChange(ShopTabs.CANDLES);
