## Vị trí đặt thẻ `<script>` trong HTML và thuộc tính `defer`, `async`

Khi nhúng JavaScript vào trang web HTML, vị trí đặt thẻ `<script>` và việc sử dụng các thuộc tính `defer` hoặc `async` ảnh hưởng đáng kể đến hiệu suất và hành vi của trang web. Dưới đây là giải thích chi tiết:
### 1. Đặt `<script>` trong `<head>`:

Việc đặt mã JavaScript trong phần `<head>` có nghĩa là trình duyệt sẽ tải và thực thi mã này *trước* khi hiển thị nội dung HTML. Điều này có thể làm trang web load chậm hơn. Chỉ nên đặt JavaScript trong `<head>` khi thỏa mãn một trong các điều kiện sau và **kết hợp với thuộc tính `defer` hoặc `async`**:

* **Sử dụng `defer` hoặc `async`**:  Điều này giúp trình duyệt tải JavaScript song song với HTML mà không chặn việc hiển thị nội dung.
* **Code JS cần chạy trước khi trang web render (hiếm gặp)**: Ví dụ,  một số đoạn mã thiết lập cần thiết cho việc render trang web.
* **Các thư viện analytics hoặc tracking**:  Một số thư viện theo dõi yêu cầu được đặt trong `<head>` để bắt đầu thu thập dữ liệu sớm nhất có thể. Tuy nhiên, hãy luôn sử dụng `async` trong trường hợp này để tránh chặn render.


### 2. Đặt `<script>` ở cuối `<body>`:

Đây là cách phổ biến và được khuyến khích nhất trong hầu hết các trường hợp, đặc biệt khi JavaScript của bạn tương tác với DOM (Document Object Model - cấu trúc HTML của trang web). 

* **Không sử dụng `defer`/`async`**: Khi đặt `<script>` cuối `<body>`, trình duyệt sẽ tải và thực thi JavaScript *sau khi* đã tải xong toàn bộ HTML.  Điều này đảm bảo rằng JavaScript có thể tìm thấy và tương tác với tất cả các elements HTML trên trang.
* **JS cần tương tác với DOM**:  Nếu JavaScript cần thao tác với các elements HTML (ví dụ: thay đổi nội dung, thêm sự kiện click...),  hãy đặt nó ở cuối `<body>` để đảm bảo các elements đã được tải xong.
* **Muốn trang web load nhanh hơn**: Đặt JavaScript cuối `<body>` cho phép trình duyệt hiển thị nội dung HTML trước, mang lại trải nghiệm người dùng tốt hơn.

### Giải thích chi tiết về `defer` và `async`:

Hãy tưởng tượng việc tải trang web như việc chuẩn bị một bữa tiệc. Bạn cần trang trí (HTML) và chuẩn bị đồ ăn (JavaScript).  `defer` và `async` giúp bạn quản lý việc chuẩn bị đồ ăn sao cho bữa tiệc bắt đầu đúng giờ và suôn sẻ.

* **`defer`- Hoãn Lại (Chuẩn bị đồ ăn trước, dọn ra sau cùng):**

    * Bạn bắt đầu chuẩn bị đồ ăn (tải file JS) *đồng thời* với việc trang trí (tải HTML).  Cả hai việc diễn ra song song, tiết kiệm thời gian.
    * Tuy nhiên, bạn chỉ dọn đồ ăn ra (chạy JS) *sau khi* đã trang trí xong toàn bộ (HTML đã tải xong).  Điều này đảm bảo khách mời (người dùng) thấy được một bữa tiệc hoàn chỉnh trước khi bắt đầu thưởng thức.
    * Nếu bạn chuẩn bị nhiều món ăn (nhiều file JS với `defer`), chúng sẽ được dọn ra theo đúng thứ tự bạn đã chuẩn bị (thứ tự xuất hiện trong HTML).  Món khai vị trước, món chính sau, đúng trình tự.

* **`async`- Bất Đồng Bộ (Chuẩn bị xong món nào dọn ra món đó):**

    * Tương tự `defer`, bạn cũng chuẩn bị đồ ăn (tải file JS) *đồng thời* với việc trang trí (tải HTML).
    * Tuy nhiên, ngay khi một món ăn hoàn thành (một file JS tải xong), bạn sẽ dọn ra ngay lập tức (chạy JS) mà không cần đợi trang trí xong hoàn toàn.  Điều này có thể khiến khách mời thấy món ăn trước khi bàn tiệc được trang trí đầy đủ.
    * Nếu bạn chuẩn bị nhiều món ăn (nhiều file JS với `async`), chúng sẽ được dọn ra ngay khi hoàn thành, bất kể thứ tự chuẩn bị.  Món chính có thể được dọn ra trước món khai vị nếu nó được chuẩn bị xong trước.


Tóm lại:

* Dùng `defer` khi bạn muốn JavaScript chạy sau khi HTML đã tải xong và cần đảm bảo thứ tự thực thi.  Ví dụ: các script xử lý sự kiện cho các elements trên trang.
* Dùng `async` khi bạn muốn JavaScript tải và chạy càng nhanh càng tốt, không quan trọng thứ tự thực thi. Ví dụ: các script phân tích thống kê (analytics).

### Khuyến nghị:

* **Luôn dùng `defer` khi đặt JS trong `<head>`**. Điều này đảm bảo JavaScript không chặn việc render HTML.
* **Nếu không dùng `defer`/`async` thì đặt JS cuối `<body>`**. Đây là cách đơn giản và hiệu quả nhất trong hầu hết các trường hợp.
* **Tránh đặt JS trong `<head>` mà không có `defer`/`async**.  Điều này sẽ làm chậm thời gian tải trang web.


Ví dụ:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Ví dụ</title>
  <script src="my-script.js" defer></script>  <!-- Đặt trong head với defer -->
</head>
<body>
  <!-- Nội dung HTML -->

  <script src="another-script.js"></script> <!-- Đặt cuối body -->
</body>
</html>
```

# AUTHOR: Minthep