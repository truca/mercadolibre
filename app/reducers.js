import R from 'ramda';

export default (state = { loading: true, results:
  {
  "limit": 5,
  "category": "MLC1051",
  "results": [
    {
      "id": "MLC436682963",
      "site_id": "MLC",
      "title": "Antena De Señal Wifi Para Ipad 2",
      "subtitle": "",
      "listing_type_id": "gold_special",
      "price": 3990,
      "original_price": 4500,
      "currency_id": "CLP",
      "accepts_mercado_pago": true,
      "permalink": "http://articulo.mercadolibre.cl/MLC-436682963-antena-de-senal-wifi-para-ipad-2-_JM",
      "thumbnail": "http://mlc-s1-p.mlstatic.com/924111-MLC20484742851_112015-I.jpg",
      "secure_thumbnail": "https://mlc-s1-p.mlstatic.com/924111-MLC20484742851_112015-I.jpg",
      "listing_mode": "buy_it_now",
      "currency_symbol": "$",
      "seller_id": 144066650,
      "sold_quantity": 26,
      "shipping": {
        "free_shipping": false,
        "mode": "custom"
      }
    },
    {
      "id": "MLC435999879",
      "site_id": "MLC",
      "title": "Samsung Galaxy S7 Edge / Iprotech",
      "subtitle": "",
      "listing_type_id": "gold_special",
      "price": 369990,
      "original_price": 739990,
      "currency_id": "CLP",
      "accepts_mercado_pago": true,
      "permalink": "http://articulo.mercadolibre.cl/MLC-435999879-samsung-galaxy-s7-edge-iprotech-_JM",
      "thumbnail": "http://mlc-s1-p.mlstatic.com/373811-MLC20634433954_032016-I.jpg",
      "secure_thumbnail": "https://mlc-s1-p.mlstatic.com/373811-MLC20634433954_032016-I.jpg",
      "listing_mode": "buy_it_now",
      "currency_symbol": "$",
      "seller_id": 38290309,
      "sold_quantity": 827,
      "shipping": {
        "free_shipping": true,
        "mode": "me2"
      }
    },
    {
      "id": "MLC445065052",
      "site_id": "MLC",
      "title": "Carcasa 360 + Lám Protectora Iphone 7/7 Plus - Nice Home",
      "subtitle": "",
      "listing_type_id": "gold_pro",
      "price": 3990,
      "original_price": null,
      "currency_id": "CLP",
      "accepts_mercado_pago": true,
      "permalink": "http://articulo.mercadolibre.cl/MLC-445065052-carcasa-360-lam-protectora-iphone-77-plus-nice-home-_JM",
      "thumbnail": "http://mlc-s2-p.mlstatic.com/794606-MLC25580088676_052017-I.jpg",
      "secure_thumbnail": "https://mlc-s2-p.mlstatic.com/794606-MLC25580088676_052017-I.jpg",
      "listing_mode": "buy_it_now",
      "currency_symbol": "$",
      "seller_id": 172107928,
      "sold_quantity": 0,
      "shipping": {
        "free_shipping": false,
        "mode": "me2"
      }
    },
    {
      "id": "MLC436440287",
      "site_id": "MLC",
      "title": "Pantalla Lcd Iphone 6g Envio Gratis",
      "subtitle": "",
      "listing_type_id": "gold_special",
      "price": 22990,
      "original_price": 34990,
      "currency_id": "CLP",
      "accepts_mercado_pago": true,
      "permalink": "http://articulo.mercadolibre.cl/MLC-436440287-pantalla-lcd-iphone-6g-envio-gratis-_JM",
      "thumbnail": "http://mlc-s1-p.mlstatic.com/22407-MLC20229875351_012015-I.jpg",
      "secure_thumbnail": "https://mlc-s1-p.mlstatic.com/22407-MLC20229875351_012015-I.jpg",
      "listing_mode": "buy_it_now",
      "currency_symbol": "$",
      "seller_id": 167070580,
      "sold_quantity": 33,
      "shipping": {
        "free_shipping": true,
        "mode": "me2"
      }
    },
    {
      "id": "MLC436316979",
      "site_id": "MLC",
      "title": "Tapa Trasera Sony Xperia Z3  Compact Calidad Original",
      "subtitle": "",
      "listing_type_id": "gold_special",
      "price": 6990,
      "original_price": null,
      "currency_id": "CLP",
      "accepts_mercado_pago": true,
      "permalink": "http://articulo.mercadolibre.cl/MLC-436316979-tapa-trasera-sony-xperia-z3-compact-calidad-original-_JM",
      "thumbnail": "http://mlc-s1-p.mlstatic.com/440321-MLC20746552811_052016-I.jpg",
      "secure_thumbnail": "https://mlc-s1-p.mlstatic.com/440321-MLC20746552811_052016-I.jpg",
      "listing_mode": "buy_it_now",
      "currency_symbol": "$",
      "seller_id": 141163042,
      "sold_quantity": 16,
      "shipping": {
        "free_shipping": false,
        "mode": "me2"
      }
    }
  ]
  }
}, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'LOADING':
      return R.merge(state, { loading: true });
    case 'READY':
      return R.merge(state, { loading: false });
    default:
      return state
  }
}
