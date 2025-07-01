# Hướng dẫn CSS cho người mới bắt đầu

## Phần 1: Giới thiệu về CSS
### CSS là gì?
- CSS (Cascading Style Sheets) là ngôn ngữ định dạng được sử dụng để tạo kiểu cho trang web
- CSS định nghĩa cách các phần tử HTML được hiển thị trên màn hình
- CSS giúp tách biệt nội dung (HTML) và cách trình bày (CSS)


### Cú pháp CSS cơ bản
```css
selector {
    property1: value1;
    property2: value2;
}
```
Ví dụ:
```css
p {
    color: blue;
    font-size: 16px;
}
```


### 3 cách thêm CSS vào HTML
1. **External CSS** (Khuyến nghị sử dụng)
```html
<link rel="stylesheet" href="styles.css">
```

2. **Internal CSS**
```html
<style>
    p {
        color: blue;
    }
</style>
```

3. **Inline CSS**
```html
<p style="color: blue;">Văn bản màu xanh</p>
```
```
┌──────────────────── Margin ───────────────────┐
│                                               │
│     ┌──────────── Border ────────────┐        │
│     │                                │        │
│     │    ┌─────── Padding ──────┐    │        │
│     │    │                      │    │        │
│     │    │      Content         │    │        │
│     │    │                      │    │        │
│     │    └──────────────────────┘    │        │
│     │                                │        │
│     └────────────────────────────────┘        │
│                                               │
└───────────────────────────────────────────────┘
```
### Margin và Padding
note: margin_padding.html
- **Margin**: Khoảng cách từ phần tử này đến phần tử khác
  ```css
  margin: 0px; /* Không có khoảng cách với các phần tử xung quanh */
  margin-left: 40px; /* Khoảng cách 40px về bên trái */
  ```

- **Padding**: Khoảng cách từ nội dung đến viền của chính phần tử đó
  ```css
  padding: 10px; /* Khoảng cách 10px từ nội dung đến viền */
  padding: 20px 0px; /* 20px trên dưới, 0px trái phải */
  padding: 10px 20px 30px; /* 10px trên, 20px trái phải, 30px dưới */
  padding: 10px 20px 30px 40px; /* 10px trên, 20px phải, 30px dưới, 40px trái */
  padding-top: 20px; /* Khoảng cách 20px từ nội dung đến viền trên */
  padding-bottom: 30px; /* Khoảng cách 30px từ nội dung đến viền dưới */
  ```

### Width và Height
- **Width**: Chiều rộng của phần tử
  ```css
  width: 100px; /* Rộng 100px */
  width: 100%; /* Rộng bằng 100% container cha */
  ```

- **Height**: Chiều cao của phần tử
  ```css
  height: 100px; /* Cao 100px */
  height: auto; /* Tự động điều chỉnh theo nội dung */
  ```

### Màu sắc
```css
color: white; /* Màu chữ */
background-color: black; /* Màu nền */
```

### Viền
```css
border: 1px solid black; /* Viền đen dày 1px */
border-radius: 10px; /* Bo góc 10px */
```

### Text
```css
text-decoration: none; /* Bỏ gạch chân của link */
font-weight: bold; /* Chữ đậm */
text-align: center; /* Căn giữa text */
font-style: italic; /* Chữ in nghiêng */
```

## Phần 2: Selectors (Bộ chọn)
### 1. Element Selector
```css
p {
    color: red;
}
```

### 2. Class Selector
```css
.highlight {
    background-color: yellow;
}
```

### 3. ID Selector
```css
#header {
    background-color: black;
    color: white;
}
```

### 4. Combinators
```css
/* Con trực tiếp */
div > p {
    margin: 10px;
}

/* Tất cả con */
div p {
    padding: 5px;
}
```
Tôi sẽ giải thích sự khác biệt giữa hai cách chọn phần tử (selectors) trong CSS:

1. `div > p` (Con trực tiếp / Direct child):
- Chọn tất cả các thẻ `<p>` là con trực tiếp của thẻ `<div>`
- Chỉ áp dụng cho thẻ `p` ở cấp độ ngay bên dưới `div`

Ví dụ:
```html
<div>
    <p>Đoạn này sẽ có margin 10px</p>  <!-- ✅ Áp dụng -->
    <section>
        <p>Đoạn này không có margin 10px</p>  <!-- ❌ Không áp dụng -->
    </section>
</div>
```

2. `div p` (Tất cả con / Descendant):
- Chọn tất cả các thẻ `<p>` nằm bên trong thẻ `<div>`
- Áp dụng cho tất cả thẻ `p` bên trong `div`, không quan trọng cấp độ sâu

Ví dụ:
```html
<div>
    <p>Đoạn này sẽ có padding 5px</p>  <!-- ✅ Áp dụng -->
    <section>
        <p>Đoạn này cũng có padding 5px</p>  <!-- ✅ Áp dụng -->
    </section>
</div>
```

Tóm lại:
- `>` chỉ chọn con trực tiếp (cấp 1)
- Khoảng trắng ` ` chọn tất cả con (mọi cấp)


## Phần 4: Display và Positioning
file:///D:/WED201c-20241116T092110Z-001/WED201c/CSS/X_Tools/display.html
### Display
- **Block**
  - Chiếm toàn bộ chiều ngang
  - Luôn xuống dòng mới
  - Ví dụ: `<div>`, `<p>`, `<h1>`
- **Inline**
  - Chỉ chiếm không gian cần thiết
  - Không xuống dòng
  - Không set được width/height
  - Ví dụ: `<span>`, `<a>`
- **Inline-block**
  - Kết hợp cả block và inline
  - Có thể set width/height
  - Không xuống dòng

```css
/* Block elements */
div {
    display: block;
}

/* Inline elements */
span {
    display: inline;
}

/* Inline-block elements */
.box {
    display: inline-block;
}

/* Flex container */
.container {
    display: flex;
}
```

### Position
- **Static**: Vị trí mặc định, không thể di chuyển
- **Relative**: Di chuyển so với vị trí gốc của chính nó
- **Absolute**: Di chuyển so với phần tử cha gần nhất có position
- **Fixed**: Cố định so với cửa sổ trình duyệt, không thay đổi khi cuộn
```css
/* Static (mặc định) */
div {
    position: static;
}

/* Relative */
.relative-box {
    position: relative;
    top: 20px;
    left: 30px;
}

/* Absolute */
.absolute-box {
    position: absolute;
    top: 0;
    right: 0;
}

/* Fixed */
.fixed-header {
    position: fixed;
    top: 0;
    width: 100%;
}
```

## Phần 5 Flexbox - Cách dàn trang hiện đại
file:///D:/WED201c-20241116T092110Z-001/WED201c/CSS/X_Tools/gridsystem.html
### Display Flex
```css
.container {
    display: flex; /* Kích hoạt flexbox */
}
```
```css
/* Hướng sắp xếp */
flex-direction: row;         /* ngang (mặc định) */
flex-direction: column;      /* dọc */
flex-direction: row-reverse; /* ngang ngược */
flex-direction: column-reverse; /* dọc ngược */
```
### Các thuộc tính flex phổ biến
- **justify-content**: Căn chỉnh theo chiều ngang
  ```css
   justify-content: flex-start;    /* Bắt đầu */
    justify-content: center;        /* Giữa */
    justify-content: flex-end;      /* Cuối */
    justify-content: space-between; /* Cách đều, sát 2 mép */
    justify-content: space-around;  /* Cách đều xung quanh */
  ```

- **align-items**: Căn chỉnh theo chiều dọc
  ```css
  align-items: stretch;        /* Kéo dãn (mặc định) */
  align-items: center;         /* Giữa */
  align-items: flex-start;     /* Đầu */
  align-items: flex-end;       /* Cuối */
  ```

- **gap**: Khoảng cách giữa các phần tử con
  ```css
  gap: 30px; /* Khoảng cách 30px giữa các phần tử */
  ```


## Phần 6: Responsive Design
note: minmaxwidth.html
### Media Queries
- **max-width**: Nghĩa là: "từ 0px đến width này"
  - Áp dụng khi màn hình NHỎ HƠN hoặc BẰNG giá trị định sẵn
- **min-width**: Nghĩa là: "từ width này đến vô cùng"
  - Áp dụng khi màn hình LỚN HƠN hoặc BẰNG giá trị định sẵn
```css
/* Màn hình điện thoại */
@media screen and (max-width: 768px) {
    .container {
        flex-direction: column;
    }
    
    .item {
        width: 100%;
    }
}
```

## Lời khuyên khi học CSS
1. Luôn bắt đầu với reset CSS hoặc normalize CSS
2. Sử dụng các class name có ý nghĩa
3. Học cách sử dụng DevTools để debug CSS


## Tài nguyên học tập
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/CSS
- CSS-Tricks: https://css-tricks.com/
- W3Schools CSS Tutorial: https://www.w3schools.com/css/