
# Hướng Dẫn JavaScript Từ A Đến Z

JavaScript là một ngôn ngữ lập trình phổ biến, được sử dụng rộng rãi trong phát triển web để tạo ra các trang web tương tác và động. Hướng dẫn này sẽ giúp bạn bắt đầu từ những khái niệm cơ bản đến việc thao tác với DOM (Document Object Model) trong JavaScript.

## Mục Lục

1. [Giới Thiệu Về JavaScript](#giới-thiệu-về-javascript)
2. [Cách Nhúng JavaScript Vào HTML](#cách-nhúng-javascript-vào-html)
3. [Cú Pháp Cơ Bản](#cú-pháp-cơ-bản)
4. [Biến và Kiểu Dữ Liệu](#biến-và-kiểu-dữ-liệu)
5. [Toán Tử](#toán-tử)
6. [Câu Lệnh Điều Kiện](#câu-lệnh-điều-kiện)
7. [Vòng Lặp](#vòng-lặp)
8. [Hàm](#hàm)
9. [Mảng](#mảng)
10. [Đối Tượng](#đối-tượng)
11. [DOM và Cách Sử Dụng Trong JavaScript](#dom-và-cách-sử-dụng-trong-javascript)

## 1. Giới Thiệu Về JavaScript

JavaScript là một ngôn ngữ lập trình được sử dụng chủ yếu để tạo ra các trang web tương tác. Nó cho phép bạn thực hiện các hành động như cập nhật nội dung động, xử lý sự kiện người dùng, và tương tác với máy chủ.

## 2. Cách Nhúng JavaScript Vào HTML

Có ba cách chính để nhúng JavaScript vào trang HTML:

1. **Nhúng trực tiếp trong thẻ HTML (inline JavaScript):**
   ```html
   <button onclick="alert('Xin chào!')">Nhấn vào đây</button>
   ```

2. **Nhúng trong thẻ `<script>` trong file HTML:**
   - Có thể đặt trong `<head>`:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Trang Web</title>
       <script>
           function sayHello() {
               alert('Xin chào!');
           }
       </script>
   </head>
   <body>
       <h1>Trang web của tôi</h1>
   </body>
   </html>
   ```
   
   - Hoặc đặt cuối `<body>` (khuyến nghị):
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Trang Web</title>
   </head>
   <body>
       <h1>Trang web của tôi</h1>
       <script>
           function sayHello() {
               alert('Xin chào!');
           }
       </script>
   </body>
   </html>
   ```

3. **Nhúng từ file JavaScript bên ngoài:**
   ```html
   <!-- Trong head -->
   <head>
       <script src="main.js" defer></script>
   </head>

   <!-- Hoặc cuối body -->
   <body>
       <h1>Trang web của tôi</h1>
       <script src="main.js"></script>
   </body>
   ```

Lưu ý quan trọng:
- Thuộc tính `defer` giúp file JavaScript chỉ thực thi sau khi HTML được tải xong
- Thuộc tính `async` cho phép JavaScript tải bất đồng bộ
- Có thể nhúng nhiều file JavaScript:
  ```html
  <script src="utility.js"></script>
  <script src="main.js"></script>
  ```
- Vị trí đặt script ảnh hưởng đến hiệu suất tải trang:
  - Đặt trong `<head>`: trang có thể bị chặn việc hiển thị cho đến khi JavaScript tải xong
  - Đặt cuối `<body>`: trang HTML sẽ hiển thị trước, sau đó mới tải JavaScript

## 3. Cú Pháp Cơ Bản

JavaScript sử dụng cú pháp tương tự như nhiều ngôn ngữ lập trình khác. Dưới đây là một số ví dụ cơ bản:

- **In ra console:**
  
  ```javascript
  // In một chuỗi đơn giản
  console.log('Xin chào, thế giới!');
  
  // In nhiều giá trị
  console.log('Số:', 42, 'Chuỗi:', 'JavaScript');
  
  // In đối tượng
  console.log({name: 'John', age: 30});
  
  // In mảng
  console.log([1, 2, 3, 4, 5]);
  ```

- **Gán giá trị cho biến:**

  ```javascript
  // let - có thể thay đổi giá trị sau khi khai báo
  let x = 5;
  x = 10; // hợp lệ
  
  // const - không thể thay đổi giá trị sau khi khai báo
  const y = 10;
  // y = 20; // lỗi!
  
  // var - cách khai báo cũ, không nên sử dụng
  var z = 15;
  z = 10; // hợp lệ
  ```

- **Chuỗi và nối chuỗi:**

  ```javascript
  // Nối chuỗi với dấu +
  let firstName = "John";
  let lastName = "Doe";
  let fullName = firstName + " " + lastName;

  // Template literals (ES6)
  let greeting = `Xin chào ${firstName} ${lastName}!`;
  ```

- **Comment trong JavaScript:**

  ```javascript
  // Đây là comment một dòng

  /*
    Đây là comment
    nhiều dòng
  */
  ```

## 4. Biến và Kiểu Dữ Liệu

Trong JavaScript, bạn có thể khai báo biến bằng các từ khóa `var`, `let`, hoặc `const`. Các kiểu dữ liệu cơ bản bao gồm:

- **Số (Number):** `let age = 25;`
- **Chuỗi (String):** `let name = 'John';`
- **Boolean:** `let isStudent = true;`
- **Mảng (Array):** `let colors = ['red', 'green', 'blue'];`
- **Đối tượng (Object):** `let person = { firstName: 'John', lastName: 'Doe' };`

## 5. Toán Tử

JavaScript hỗ trợ nhiều loại toán tử:

- **Toán tử số học:** `+`, `-`, `*`, `/`, `%`
- **Toán tử gán:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- **Toán tử so sánh:** `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Toán tử logic:** `&&`, `||`, `!`

## 6. Câu Lệnh Điều Kiện

Câu lệnh điều kiện cho phép bạn thực hiện các hành động khác nhau dựa trên điều kiện:

- **Câu lệnh `if...else`:**

  ```javascript
  let hour = 10;
  if (hour < 12) {
      console.log('Chào buổi sáng!');
  } else {
      console.log('Chào buổi chiều!');
  }
  ```

- **Câu lệnh `switch`:**

  ```javascript
  let day = 3;
  switch (day) {
      case 1:
          console.log('Thứ Hai');
          break;
      case 2:
          console.log('Thứ Ba');
          break;
      case 3:
          console.log('Thứ Tư');
          break;
      default:
          console.log('Không biết');
  }
  ```

## 7. Vòng Lặp

Vòng lặp cho phép bạn thực hiện một khối mã nhiều lần:

- **Vòng lặp `for`:**

  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log('Số:', i);
  }
  ```

- **Vòng lặp `while`:**

  ```javascript
  let i = 0;
  while (i < 5) {
      console.log('Số:', i);
      i++;
  }
  ```

## 8. Hàm

Hàm (function) trong JavaScript là một khối mã được định nghĩa để thực hiện một nhiệm vụ cụ thể và có thể được tái sử dụng nhiều lần trong chương trình.

**Cách định nghĩa hàm:**

```javascript
function tenHam(thamSo1, thamSo2) {
    // Khối lệnh thực thi
    return giaTriTraVe;
}
```

**Ví dụ:**

```javascript
function tinhTong(a, b) {
    return a + b;
}

let ketQua = tinhTong(5, 3); // ketQua sẽ là 8
console.log(ketQua);
```

**Hàm ẩn danh (Anonymous Function):**

Hàm ẩn danh là hàm không có tên, thường được sử dụng trong các biểu thức hoặc được truyền như một đối số cho hàm khác.

**Ví dụ:**

```javascript
let chao = function() {
    console.log('Xin chào!');
};

chao(); // Gọi hàm chao
```

**Hàm mũi tên (Arrow Function):**

Hàm mũi tên cung cấp cú pháp ngắn gọn hơn để viết hàm.

**Ví dụ:**

```javascript
let nhanDoi = (x) => x * 2;

console.log(nhanDoi(4)); // Kết quả: 8
```

## 9. Mảng

Mảng (Array) là một cấu trúc dữ liệu cho phép lưu trữ nhiều giá trị trong một biến duy nhất.

**Cách khai báo mảng:**

```javascript
let mangSo = [1, 2, 3, 4, 5];
let mangChuoi = ['a', 'b', 'c'];
```

**Truy cập phần tử trong mảng:**

```javascript
let phanTuDauTien = mangSo[0]; // Giá trị: 1
let phanTuThuHai = mangChuoi[1]; // Giá trị: 'b'
```

**Thêm phần tử vào mảng:**

```javascript
mangSo.push(6); // Thêm 6 vào cuối mảng
```

**Duyệt qua các phần tử trong mảng:**

```javascript
for (let i = 0; i < mangSo.length; i++) {
    console.log(mangSo[i]);
}
```

## 10. Đối Tượng

Đối tượng (Object) trong JavaScript là một tập hợp các cặp khóa-giá trị, cho phép lưu trữ dữ liệu phức tạp.

**Cách khai báo đối tượng:**

```javascript
let nguoi = {
    ten: 'Nguyễn Văn A',
    tuoi: 30,
    gioiTinh: 'Nam'
};
```

**Truy cập thuộc tính của đối tượng:**

```javascript
console.log(nguoi.ten); // Kết quả: Nguyễn Văn A
console.log(nguoi['tuoi']); // Kết quả: 30
```

**Thêm thuộc tính mới vào đối tượng:**

```javascript
nguoi.diaChi = 'Hà Nội';
```

**Xóa thuộc tính khỏi đối tượng:**

```javascript
delete nguoi.gioiTinh;
```

## 11. DOM và Cách Sử Dụng Trong JavaScript
# DOM (Document Object Model) Trong JavaScript

## 1. DOM là gì?

DOM là viết tắt của Document Object Model (Mô hình Đối tượng Tài liệu). Đây là một giao diện lập trình cho phép JavaScript:
- Truy cập và thay đổi nội dung trang web
- Thay đổi cấu trúc trang
- Thay đổi style của các phần tử
- Phản ứng với các sự kiện người dùng

## 2. Cấu Trúc DOM

DOM được tổ chức theo cấu trúc cây phân cấp:

```plaintext
document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── div
        │   ├── h1
        │   └── p
        └── form
            ├── input
            └── button
```

## 3. Các Phương Thức Truy Cập DOM Phổ Biến

### 3.1. Truy cập phần tử

```javascript
// Theo ID
const element = document.getElementById('myId');

// Theo class name (trả về HTMLCollection)
const elements = document.getElementsByClassName('myClass');

// Theo tag name (trả về HTMLCollection)
const paragraphs = document.getElementsByTagName('p');

// Sử dụng CSS selector (trả về phần tử đầu tiên)
const firstElement = document.querySelector('.myClass');

// Sử dụng CSS selector (trả về tất cả phần tử phù hợp - NodeList)
const allElements = document.querySelectorAll('.myClass');
```

### 3.2. Di chuyển trong DOM

```javascript
const element = document.getElementById('myId');

// Di chuyển lên node cha
const parent = element.parentNode; // Cái này xài tốt

// Di chuyển đến node con
const children = element.childNodes;       // Bao gồm cả text nodes
const elements = element.children;         // Chỉ các element nodes

// Di chuyển đến node anh/em
const nextSibling = element.nextSibling;           // Bao gồm text nodes
const nextElement = element.nextElementSibling;    // Chỉ element nodes
const prevSibling = element.previousSibling;
```

## 4. Thao Tác với DOM

### 4.1. Thay đổi nội dung

```javascript
// Thay đổi text
element.textContent = 'Nội dung mới';

// Thay đổi HTML
element.innerHTML = '<span>Nội dung HTML mới</span>';

// Thay đổi giá trị (cho input, textarea)
element.value = 'Giá trị mới';
```

### 4.2. Thao tác với thuộc tính

```javascript
// Đọc thuộc tính
const src = element.getAttribute('src');

// Thiết lập thuộc tính
element.setAttribute('class', 'newClass');

// Kiểm tra thuộc tính tồn tại
const hasAttribute = element.hasAttribute('id');

// Xóa thuộc tính
element.removeAttribute('style');
```

### 4.3. Thao tác với classes

```javascript
// Thêm class
element.classList.add('newClass');

// Xóa class
element.classList.remove('oldClass');

// Toggle class (thêm nếu chưa có, xóa nếu đã có)
element.classList.toggle('activeClass');

// Kiểm tra class tồn tại
const hasClass = element.classList.contains('myClass');
```

## 5. Tạo và Xóa Phần Tử

### 5.1. Tạo phần tử mới

```javascript
// Tạo element mới
const newDiv = document.createElement('div');

// Tạo text node
const textNode = document.createTextNode('Hello World');

// Thêm text vào div
newDiv.appendChild(textNode);

// Thêm div vào document
document.body.appendChild(newDiv);
```

### 5.2. Xóa phần tử

```javascript
// Xóa phần tử
element.remove();

// Xóa phần tử con
parent.removeChild(child);
```

## 6. Xử Lý Sự Kiện (Event Handling)

### 6.1. Thêm sự kiện

```javascript
// Cách 1: addEventListener
element.addEventListener('click', function(event) {
    console.log('Đã click!');
});

// Cách 2: Sử dụng thuộc tính on-event
element.onclick = function(event) {
    console.log('Đã click!');
};
```

### 6.2. Các sự kiện phổ biến

```javascript
// Click event
element.addEventListener('click', handleClick);

// Double click
element.addEventListener('dblclick', handleDoubleClick);

// Mouse events
element.addEventListener('mouseover', handleMouseOver);
element.addEventListener('mouseout', handleMouseOut);

// Keyboard events
element.addEventListener('keydown', handleKeyDown);
element.addEventListener('keyup', handleKeyUp);

// Form events
form.addEventListener('submit', handleSubmit);
input.addEventListener('change', handleChange);
```

### 7. Chỉnh sửa Style
```javascript
// Thay đổi style trực tiếp
element.style.backgroundColor = 'red';
element.style.fontSize = '16px';
element.style.padding = '10px';

// Nhiều style cùng lúc
Object.assign(element.style, {
    backgroundColor: 'blue',
    color: 'white',
    margin: '10px'
});
```


