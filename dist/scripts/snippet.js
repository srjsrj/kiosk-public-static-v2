!function(t,r){function n(t,n){var e=r.getElementsByTagName("head")[0],c=r.createElement("script");n=n||function(){},c.async=!0,c.src=t,c.onload=function(){this.onerror=this.onload=null,n(null,c)},e.appendChild(c)}t.mrch=t.mrch||{widgets:{},registerWidget:function(t,r){this.widgets[t]=r}},mrch.showProduct=function(t,e,c,i){mrch.config=i=i||{};var o=r.querySelector(c);o&&n("http://assets.kiiiosk.ru/widgets/ProductCard.js",function(){var t=mrch.widgets.ProductCard;t&&t.render({productCardID:e},o)})}}(window,document);
