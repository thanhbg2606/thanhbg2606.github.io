# 🚀 Ngày 1: Nhập Môn Lập Trình Web & Xây Dựng Khung Xương (HTML)

Chào mừng bạn đến với ngày đầu tiên trong hành trình 10 ngày tự tay tạo ra một tấm thiệp điện tử vô cùng sinh động! Hôm nay, chúng ta sẽ bắt đầu từ con số 0 tròn trĩnh: Cài đặt công cụ, hiểu cách thế giới Web hoạt động và tự tay viết những dòng Code đầu tiên.

## 1. Chuẩn Bị Hành Trang (Cài Đặt Công Cụ)

Để viết code, chúng ta cần một phần mềm chuyên dụng soạn thảo văn bản gọi là **Code Editor** (trình chỉnh sửa mã nguồn). Trình duyệt (Chrome, Safari, Edge) sẽ đóng vai trò là "chiếc kính lúp" để đọc và hiển thị những dòng code đó thành hình ảnh.

### Bước 1.1: Cài đặt Visual Studio Code (VS Code)
VS Code là công cụ viết code miễn phí, phổ biến nhất thế giới do Microsoft phát triển.
* **Tải về:** Bạn truy cập trang web [https://code.visualstudio.com/](https://code.visualstudio.com/)
* **Cài đặt:** Bấm tải về bản dành cho máy tính của bạn (Windows hoặc Mac). Sau khi tải xong, nháy đúp chuột vào file vừa tải và cứ bấm "Next" cho đến khi hoàn tất.

### Bước 1.2: Cài đặt phần mở rộng (Extension) "Live Server"
"Live Server" là một tính năng phép thuật giúp trang web của bạn tự động cập nhật ngay lập tức mỗi khi bạn bấm lưu sửa code, mà không cần phải thủ công F5 (Tải lại) trình duyệt báo cáo.

* Mở VS Code lên.
* Nhìn sang cột chứa biểu tượng bên trái, click vào ô vuông xếp hình (hoặc bấm tổ hợp phím `Ctrl + Shift + X` trên Windows / `Cmd + Shift + X` trên Mac). Đây là kho tiện ích (Extensions).
* Gõ chữ `Live Server` vào ô tìm kiếm.
* Bạn sẽ thấy công cụ có biểu tượng hình sóng wifi màu tím của tác giả Ritwick Dey. Bấm nút **Install** (Cài đặt).

---

## 2. Các Khái Niệm Cơ Bản Phải Biết

Trước khi gõ code, hãy hiểu chúng ta đang làm gì:

* **Trang web là gì?** Trang web giống như một căn nhà.
    * **HTML (HyperText Markup Language):** Là gạch, xi măng, cột trụ. Nó xây dựng nên bộ khung xương và Nội Dung của căn nhà (Đâu là cửa, đâu là phòng làm khách).
    * **CSS (Cascading Style Sheets):** Là sơn tường, rèm cửa, nội thất. Nó làm căn nhà đẹp hơn (Màu đỏ, rèm che, căn giữa màn hình...).
    * **JavaScript (JS):** Là điện, nước, các công tắc thông minh. Nó làm căn nhà hoạt động được (Bấm vào thì hộp thư mở ra, nhạc phát lên).

Ngày hôm nay, chúng ta **chỉ tập trung vào HTML** xây khung xương thôi nhé!

* **Thẻ (Tag) trong HTML là gì?**
    * HTML sử dụng các dấu ngoặc nhọn `< >` để chứa các lệnh, gọi là **Thẻ**.
    * Hầu hết mọi thứ tồn tại theo cặp: Một thẻ Mở `<...>` và Một thẻ Đóng `</...>` (có dấu gạch chéo).
    * _Ví dụ:_ Để tạo một đoạn văn bản, ta dùng thẻ `p` (viết tắt của paragraph): `<p>Xin chào thế giới!</p>`

---

## 3. Thực Hành: Tạo Dự Án & Chạy Code Đầu Tiên

### Bước 3.1: Tạo thư mục chứa dự án
* Tắt VS Code đi. Ra ngoài màn hình nền máy tính (Desktop), nhấp chuột phải -> Chọn **New Folder** (Tạo thư mục mới). Đặt tên nó là `Thiep-Dien-Tu` (Không nên xếp khoảng trắng, không dấu).
* Mở thư mục đó ra. Nhấp chuột phải vào khoảng không bên trong, chọn **Open with Code** (hoặc mở VS Code lên, chọn File -> Open Folder -> chọn đến thư mục `Thiep-Dien-Tu` vừa tạo).

### Bước 3.2: Tạo file HTML đầu tiên
* Trong bảng điều khiển bên trái của VS Code (vùng Explorer), rê chuột vào vùng trống, click chuột phải chọn **New File**.
* Đặt tên file là **`index.html`** và ấn Enter. (`index` là tên quy chuẩn cho trang chính của một website giống như "Cửa chính" của căn nhà).

### Bước 3.3: Viết bộ khung chuẩn của HTML
Đừng hoảng sợ bởi mớ chữ dưới đây, hãy gõ dấu chấm than `!` trong file `index.html` và bấm phím `Tab` (hoặc `Enter`). VS Code sẽ tự động sinh ra một bộ khung chuẩn như sau:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

**Giải thích siêu tốc:**
* `<!DOCTYPE html>`: Nói cho máy tính biết đây là file HTML đời mới nhất (HTML5).
* `<html> ... </html>`: Chứa toàn bộ nội dung trang web.
* `<head> ... </head>`: Chứa các thông tin Cài đặt ẩn (Như bảng điều khiển não bộ), ví dụ cấu hình ngôn ngữ, thẻ `<title>` là Tựa đề hiện trên thẻ tab của Chrome.
* `<body> ... </body>`: Đây là nơi chứa MỌI THỨ người dùng sẽ **nhìn thấy** (Thân hình). Chúng ta sẽ code toàn bộ thiệp điện tử VÀO GIỮA hai thẻ này.

Hãy đổi từ `Document` trong thẻ `<title>` thành `Thiệp Đặc Biệt`.

### Bước 3.4: Xem thành quả đầu tiên với Live Server
* Nhấp chuột phải vào một vùng trống bất kỳ bên trong file `index.html` đang mở.
* Chọn dòng **Open with Live Server**.
* Ngay lập tức, trình duyệt của bạn sẽ tự động bật lên và hiển thị một trang trắng tinh. Nhìn lên tab trình duyệt, nó đã có tên "Thiệp Đặc Biệt". Cứ giữ nguyên đó nhé!

---

## 4. Bắt Tay Xây Dựng Khung Xương Tấm Thiệp

Bây giờ ta sẽ chèn các cục gạch vào trong <body>. Chúng ta sẽ dùng thẻ `<div>` bổ sung vô số lần. `<div>` (division) giống như một cái **Hộp nhựa rỗng**, dùng để gom cụm và nhóm các đồ vật lại với nhau.

Để phân biệt chiếc hộp này với chiếc hộp kia, ta dùng "Tên gọi" (Class) hoặc "Mã số CMT" (ID):
* `class`: Một nhóm hộp có chung tính chất (như nhóm học sinh lớp 12A).
* `id`: Chỉ một hộp duy nhất, không đụng hàng (như số báo danh).

Hãy COPY đoạn code dưới đây vào **giữa khoảng trống của thẻ `<body>` và `</body>`** và bấm Lưu File (`Ctrl + S` / `Cmd + S`):

```html
    <!-- Khu vực bọc ngoài tất cả (Làm lớp vỏ Tổng) -->
    <div class="envelope-wrapper" id="envelope">

        <!-- 1. Mặt sau bao thư (Lót dưới cùng) -->
        <div class="envelope-back envelope-part"></div>

        <!-- 2. Lá thư trắng chứa nội dung lời chúc -->
        <div class="letter">
            <div class="text-content">
                <h2>Gửi người đặc biệt! 💌</h2>
                <p>Bây giờ lá thư đã lộ diện. Chúc bạn một ngày thật rực rỡ và muôn vàn hạnh phúc!</p>
            </div>
        </div>

        <!-- 3. Mặt trước bao thư (Gắn lên che lá thư lại) -->
        <div class="envelope-front envelope-part"></div>

        <!-- 4. Nắp đậy bao thư có biểu tượng sáp -->
        <div class="envelope-flap envelope-part">
            <div class="wax-seal">❤️</div>
        </div>

    </div>
```

*(Mẹo: Bất kì dòng nào bị kẹp giữa `<!--` và `-->` là Dòng Ghi Chú, nó giúp bạn dễ đọc lệnh, máy tính sẽ bỏ qua không dịch nó ra màn hình).*

### 5. Kết quả Ngày 1

Hãy bật trình duyệt lên xem (nhờ có Live Server, trang đã tự làm mới lại rồi).
Trông nó... rất xấu! 😂 Chỉ có mỗi 2 dòng chữ trắng bóc và chữ màu đen đè lên nhau, và trái tim lạc lõng.

**Đừng lo lắng!** Đây là chuyện RẤT BÌNH THƯỜNG. Máy tính chỉ mới biết bạn đang tạo ra những cái Hộp rỗng (thẻ div) và một vài dòng text, ta chưa dạy nó hộp nào màu gì, to nhỏ ra sao.

Khung xương của chúng ta đã hoàn chỉnh vững chắc! Hẹn gặp lại bạn vào Ngày 2: Khoác chiếc áo lộng lẫy lên với CSS!
