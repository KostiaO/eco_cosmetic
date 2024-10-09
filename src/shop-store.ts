const shopAdvertImage1 = require("public/assets/images/shop_advert1.png");
const shopAdvertImage2 = require("public/assets/images/shop_advert2.png");
const shopAdvertImage3 = require("public/assets/images/shop_advert3.png");

export default () => ({
    products: [
        {
            category: 'BODY',
            items: [
                {
                    id: 1,
                    title: 'HYDROPHILIC OIL',
                    price: '160 EUR',
                    img: shopAdvertImage1,
                }
            ]
        },
        {
            category: 'FACE',
            items: [
                {
                    id: 22,
                    title: 'FACE CREAM',
                    price: '210 EUR',
                    img: shopAdvertImage2
                }
            ]
        },
        {
            category: 'CANDLES',
            items: [
                {
                    id: 33,
                    title: 'UBTAN',
                    price: '160 EUR',
                    img: shopAdvertImage3
                }
            ]
        },
        {
            category: 'HAIR',
            items: [
                {
                    id: 44,
                    title: 'PROPAN',
                    price: '310 EUR',
                    img: shopAdvertImage1
                },
                {
                    id: 44333000100,
                    title: 'PROPAN2',
                    price: '310 EUR',
                    img: shopAdvertImage1
                }
            ]
        }
    ],
    currentActiveCategory: 'HAIR',
    isCurrentTab(category: string) {
        return category === this.currentActiveCategory;
    },
    changeShopTab(category: string) {
        this.currentActiveCategory = category;
    },
    findActiveCategoryItems() {
        return this.products.find((p: { category: string }) =>
            p.category === this.currentActiveCategory).items;
    }
});
