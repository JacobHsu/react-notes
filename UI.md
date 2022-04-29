## Icons

[lineicons](https://lineicons.com/)

## No Scrollbar

index.css

```css
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
```

public\index.html

```html
  <body class="no-scrollbar">
    <noscript>You need to enable JavaScript to run this app.</noscript>
```


