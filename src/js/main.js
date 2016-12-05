'use strict';

var head = document.querySelector('head');
var icons = [
  {rel: 'apple-touch-icon', href: './assets/apple-icon-57x57.png', type: 'image/png', sizes: '57x57'},
  {rel: 'apple-touch-icon', href: './assets/apple-icon-180x180.png', type: 'image/png', sizes: '180x180'},
  {rel: 'icon', href: './assets/android-icon-192x192.png', type: 'image/png'}
];

icons.forEach(function (icon) {
  var link = document.createElement('link');
  var keys = Object.keys(icon);

  keys.forEach(function (key) {
    link.setAttribute(key, icon[key]);
  });

  head.append(link);
});
