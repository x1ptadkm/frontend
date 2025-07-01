## Các trick HTML/CSS viết nhanh
Lưu ý này chỉ là tips làm html nhanh thôi nhé, học cũng tốt nhưng không cần học cũng không sao nhé.
### 1. Emmet Shortcuts

**Cấu trúc cơ bản:**
* `!` → Tạo template HTML cơ bản
* `.classname` → `<div class="classname"></div>`
* `#idname` → `<div id="idname"></div>`
* `element#idname` → `<element id="idname"></element>`

**Tạo nhiều phần tử:**
* `div*5` → Tạo 5 thẻ div
* `ul>li*3` → Tạo ul với 3 thẻ li
* `table>tr*3>td*4` → Tạo bảng 3 hàng 4 cột

**Phân cấp:**
* `div>p` → `<div><p></p></div>`
* `div+p` → `<div></div><p></p>`
* `div>p+span` → `<div><p></p><span></span></div>`

**Nội dung:**
* `p{Text content}` → `<p>Text content</p>`
* `li{Item $}*3` → Tạo 3 li với nội dung Item 1, Item 2, Item 3

**Thuộc tính:**
* `img[src="image.jpg"][alt="text"]`
* `a[href="#"][target="_blank"]`
* `input[type="text"][placeholder="Enter name"]`

### 2. CSS Shortcuts

**Flexbox:**
* `d:f` → `display: flex`
* `jc:c` → `justify-content: center`
* `ai:c` → `align-items: center`

**Box Model:**
* `m10` → `margin: 10px`
* `p20` → `padding: 20px`
* `bd1` → `border: 1px solid`

**Colors & Background:**
* `c:#fff` → `color: #fff`
* `bg:#000` → `background: #000`
* `bgc:t` → `background-color: transparent`

**Position:**
* `pos:r` → `position: relative`
* `pos:a` → `position: absolute`
* `t0` → `top: 0`

### 3. Ví dụ thực tế

```html
<!-- Card layout nhanh -->
.card>img+h3{Title}+p{Description}

<!-- Form login nhanh -->
form>input[type="text"]*2+button{Submit}

<!-- Navigation menu -->
nav>ul>li*4>a[href="#"]{Menu $}
```
# AUTHOR: Minthep