
# Ultimate Frisbee Website Tutorial.md

## 1. Cấu trúc thư mục
```
├── index.html
├── teams.html 
├── css/
│   └── hw1.css
├── js/
│   └── yourCode.js
└── Images/
    └── (các ảnh frisbee)
```


# 2. JavaScript Chi Tiết (yourCode.js)

## 2.1. Hàm Show() - Quản lý hiển thị form

```javascript
function Show() {
    // Lấy các phần tử từ DOM
    var form = document.getElementById("myform");     // Lấy form theo ID "myform"
    var text = document.getElementById("mytext");     // Lấy text theo ID "mytext"
    
    // Kiểm tra trạng thái hiển thị của form
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";    // Hiện form
        text.innerHTML = "Hide Register Form";    // Đổi text thành "Hide Register Form"
    } else {
        form.style.display = "none";     // Ẩn form
        text.innerHTML = "Show Register Form";    // Đổi text thành "Show Register Form"
    }
}
```

**Giải thích chi tiết:**
1. `document.getElementById()`: 
   - Là phương thức của JavaScript để lấy phần tử HTML theo ID
   - Ví dụ: `<form id="myform">` sẽ được lấy bằng `document.getElementById("myform")`

2. `form.style.display`:
   - Thuộc tính CSS để điều khiển cách hiển thị của phần tử
   - `"none"`: ẩn phần tử
   - `"block"`: hiện phần tử
   - `""`: giá trị mặc định (tương đương none trong trường hợp này)

3. `text.innerHTML`:
   - Dùng để thay đổi nội dung text bên trong phần tử HTML
   - Khi form ẩn → text hiển thị "Show Register Form"
   - Khi form hiện → text hiển thị "Hide Register Form"

## 2.2. Hàm checkForm() - Kiểm tra dữ liệu form

```javascript
function checkForm() {
    // Lấy giá trị từ các input
    var name = document.getElementById("t1").value;   // Lấy giá trị từ input name
    var email = document.getElementById("t2").value;  // Lấy giá trị từ input email
    
    // Kiểm tra dữ liệu
    if (name === "" || email === "") {   // Nếu name HOẶC email trống
        alert("Please fill in all fields!");  // Hiện thông báo lỗi
        return false;   // Trả về false (form không hợp lệ)
    }
    return true;    // Trả về true (form hợp lệ)
}
```

**Giải thích chi tiết:**
1. `.value`:
   - Dùng để lấy giá trị người dùng nhập vào input
   - Ví dụ: `<input type="text" id="t1">` → giá trị được lấy bằng `document.getElementById("t1").value`

2. Toán tử `||` (OR):
   - Trả về true nếu một trong hai điều kiện đúng
   - Trong trường hợp này: `name === "" || email === ""` 
   - → true nếu name trống HOẶC email trống

3. `alert()`:
   - Hiển thị hộp thoại thông báo cho người dùng
   - Thường dùng để thông báo lỗi

4. `return`:
   - `return false`: form không hợp lệ, ngăn việc submit
   - `return true`: form hợp lệ, cho phép submit

**Ví dụ sử dụng:**
1. Khi người dùng click vào "Show Register Form":
   - Hàm `Show()` được gọi
   - Form hiện ra
   - Text đổi thành "Hide Register Form"

2. Khi người dùng nhập form và submit:
   - Hàm `checkForm()` được gọi
   - Nếu có trường trống → hiện thông báo lỗi
   - Nếu đầy đủ → cho phép submit
