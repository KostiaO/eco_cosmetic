import "./scss/app.scss"

import shopStore from "./shop-store";

import Alpine from 'alpinejs';

(window as any).Alpine = Alpine;

Alpine.data('shopIndexState', shopStore);

Alpine.start();
