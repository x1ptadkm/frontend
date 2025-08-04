# CSS Chi Tiết (hw1.css)

## 1. Header Styling
````css
/* Header styling */
header {
    background-color: #c0bfbf;    /* Màu nền xám cho header */
    text-align: center;           /* Căn giữa nội dung trong header */
}

h1 {
    color: yellow;                /* Màu chữ vàng cho tiêu đề h1 */
    text-transform: uppercase;    /* Chuyển chữ thành IN HOA */
}

h2 {
    text-transform: uppercase;    /* Chuyển chữ thành IN HOA */
    color: #646464;              /* Màu chữ xám đậm */
}
````

**Giải thích:**
- `background-color`: Đặt màu nền (#c0bfbf là mã màu xám)
- `text-align`: Căn chỉnh text (center = giữa)
- `text-transform`: Biến đổi text (uppercase = IN HOA)
- `color`: Màu chữ (có thể dùng tên màu hoặc mã màu hex)

## 2. Navigation Styling
````css
nav a {
    color: black;                 /* Màu chữ đen cho links */
    margin: 0 10px;              /* Khoảng cách giữa các links */
}

nav a {
    text-decoration: underline;   /* Gạch chân links */
    background-color: #8a8888;    /* Màu nền xám cho links */
}
````

**Giải thích:**
- `margin: 0 10px`: Tạo khoảng cách 
  - 0: không có khoảng cách trên/dưới
  - 10px: khoảng cách trái/phải
- `text-decoration`: Kiểu trang trí cho text (underline = gạch chân)

## 3. Image Styling
````css
/* Hide images */
aside.left {
    display: none;               /* Ẩn phần aside bên trái */
}
````

**Giải thích:**
- `display: none`: Ẩn hoàn toàn phần tử khỏi trang web

## 4. Main Content Styling
````css
/* Main content styling */
section.right {
    background-color: #c0bfbf;    /* Màu nền xám */
    margin: 20px 0;               /* Khoảng cách trên/dưới 20px */
}
````

## 5. Table Styling
````css
/* Table styling */
table {
    margin-left: 340px;          /* Khoảng cách từ lề trái */
    width: max-content;          /* Chiều rộng tự động theo nội dung */
}

th {
    background-color: rgb(252, 252, 103);  /* Màu nền vàng cho header */
    text-align: left;                      /* Căn trái nội dung */
}
````

## 6. Form Styling
````css
/* Form styling */
#myform {
    display: none;               /* Mặc định ẩn form */
    margin-top: 20px;           /* Khoảng cách phía trên 20px */
}

#myform input[type="text"] {
    padding: 5px;               /* Khoảng cách trong ô input */
}

/* Register form text styling */
#mytext {
    cursor: pointer;            /* Con trỏ chuột thành dạng pointer */
    margin-top: 20px;          /* Khoảng cách phía trên 20px */
}
````

**Giải thích các thuộc tính quan trọng:**
1. Margin và Padding:
   - `margin`: Khoảng cách bên ngoài phần tử
   - `padding`: Khoảng cách bên trong phần tử
   - Có thể đặt 1-4 giá trị: top, right, bottom, left

2. Display:
   - `none`: Ẩn phần tử
   - `block`: Hiển thị dạng khối
   - `inline`: Hiển thị trên cùng dòng

3. Colors:
   - Tên màu: `yellow`, `black`,...
   - Mã hex: `#c0bfbf`, `#646464`,...
   - RGB: `rgb(252, 252, 103)`

4. Cursor:
   - `pointer`: Con trỏ chuột thành hình bàn tay
   - Thường dùng cho các phần tử có thể click

5. Text Properties:
   - `text-align`: Căn chỉnh text
   - `text-transform`: Biến đổi text
   - `text-decoration`: Trang trí text
