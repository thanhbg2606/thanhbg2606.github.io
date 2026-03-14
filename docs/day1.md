# 🚀 Ngày 1: Nhập Môn Lập Trình Web - Đặt Những Viên Gạch Đầu Tiên (HTML)

Chào em, buổi học đầu tiên này, anh sẽ hướng dẫn em đi từ những khái niệm căn bản nhất của lập trình Web: hiểu cấu trúc nền tảng, cài đặt công cụ và tự viết ra những dòng code đầu tiên.

Mục tiêu cốt lõi của hôm nay là sử dụng **HTML** để xây dựng bộ khung xương cứng cho tấm thiệp.

---

## 🌻 Phân Vùng Kiến Thức: Web hoạt động như thế nào?

Để tạo nên một trang web hoàn chỉnh, chúng ta cần 3 thành phần (ngôn ngữ) phối hợp với nhau. Hãy hình dung việc làm web giống hệt như **Xây Một Ngôi Nhà**:

1. **HTML (HyperText Markup Language - Nền tảng cấu trúc):**
   Tương đương với gạch, xi măng, kết cấu của ngôi nhà. HTML quyết định ngôi nhà này có bao nhiêu phòng, đâu là cửa, đâu là tường. Trong trang web, nó tạo ra bố cục chứa văn bản, nút bấm, hình ảnh.
   👉 *Hôm nay chúng ta chỉ dùng HTML để tạo bộ khung.*

2. **CSS (Cascading Style Sheets - Lớp sơn trang trí):**
   Nếu chỉ có HTML, "ngôi nhà" của em sẽ như một bản vẽ thô đen trắng. CSS đóng vai trò là kiến trúc sư nội thất, nhận nhiệm vụ tô màu, căn lề, tạo bo góc, đổ bóng. Nó biến trang web thô cứng thành một giao diện lộng lẫy.

3. **JavaScript (JS - Hệ thống điều khiển):**
   Ngôi nhà đẹp nhưng phải có điện nước để sử dụng. JavaScript chính là "bộ não" điều khiển. Nó giúp trang web có thể tương tác (Ví dụ: Khi em click chuột thì lá thư lật tung ra; bấm nút thì bài nhạc vang lên).

> 💡 **Tóm tắt:** HTML là Khung xương, CSS là Lớp da trang trí, JavaScript là Hệ thần kinh điều khiển.

---

## 🛠 Thực Hành: Cài Đặt Môi Trường Lập Trình

Để viết code hiệu quả, lập trình viên không dùng Word hay Notepad, mà dùng công cụ chuyên dụng gọi là **Code Editor**. Phần mềm phổ biến nhất, nhẹ và hoàn toàn miễn phí là **Visual Studio Code (VS Code)**.

### Bước 1: Trình soạn thảo VS Code
* **Cài đặt:** Em truy cập [https://code.visualstudio.com/](https://code.visualstudio.com/), tải bộ cài về và cài đặt theo các bước mặc định (Cứ nhấn Next cho đến khi Finish).

### Bước 2: Bổ sung tiện ích (Extensions)
VS Code có một kho "vũ khí" mở rộng để hỗ trợ gõ code nhanh hơn. Mở phần mềm VS Code, nhấn vào biểu tượng **4 ô vuông xếp hình** bên trái (hoặc `Ctrl + Shift + X`). Tìm và cài đặt 3 tiện ích sau:

1. **Live Server (Tác giả: Ritwick Dey):**
   * *Tác dụng:* Mỗi lần gõ code xong, bình thường em phải tự F5 trình duyệt để xem kết quả. Live Server giúp trình duyệt *tự động cập nhật* ngay khoảnh khắc em vừa bấm Lưu file (`Ctrl + S`).
   * ⚠️ **Lưu ý cực kỳ quan trọng:** Live Server chỉ phát hiện thay đổi khi em **Lưu file** (Save). Nếu em chỉ gõ mà không lưu, trình duyệt sẽ không bao giờ cập nhật cái mới đâu nhé!
2. **Material Icon Theme:**
   * *Tác dụng:* Đổi giao diện các icon của thư mục/file trở nên sinh động, trực quan và dễ nhìn hơn, giúp quản lý kho project dễ dàng.
3. **Prettier - Code formatter:**
   * *Tác dụng:* Công cụ tự động dọn dẹp, căn lề thẳng hàng, giúp đoạn code của em luôn gọn gàng và chuẩn format.

### Bước 3: Khởi tạo Project (Thư mục dự án)
* Quay ra màn hình Desktop, tạo một thư mục mới đặt tên là `Thiep-Dien-Tu` (Lưu ý: Không dùng tiếng Việt có dấu và dấu khoảng trắng trong tên file/thư mục lập trình).
* Vào VS Code, chọn **File -> Open Folder...** và trỏ đến thư mục vừa tạo. Toàn bộ tài nguyên ảnh, âm thanh, code của dự án sẽ nằm gọn trong này.

---

## 🏗 Thực Hành: Viết Những Dòng Code Đầu Tiên

Một trang web bắt đầu bằng tệp định dạng `.html`.

### Bước 1: Khởi tạo file giao diện chính
* Trong VS Code, nhấp chuột phải vào không gian trống bên dải Explorer trái, chọn **New File** và đặt tên là **`index.html`** (index luôn là cổng vào mặc định của một hệ thống web).

### Bước 2: Khung chuẩn HTML5
Không cần nhớ toàn bộ cú pháp loằng ngoằng.
* Click vào bên trong file `index.html`.
* Gõ duy nhất dấu chấm than **`!`** và ấn phím **`Tab`** (hoặc Enter). Bộ khung cơ bản sẽ hiện ra:

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

**Bóc tách cú pháp:**
* `<!DOCTYPE html>`: Định nghĩa phiên bản HTML mới nhất.
* `<html> ... </html>`: Thẻ gốc lớn nhất. (Nên đổi `lang="en"` thành `lang="vi"` để khai báo trang tiếng Việt).
* `<head> ... </head>`: **Phần cài đặt ẩn**. Chứa các thiết lập không hiển thị ra màn hình như quy định cấu hình bảng mã UTF-8 (để gõ tiếng Việt).
    * Thuộc tính `<title>` sẽ thay đổi cái tên nằm trên Tab của trình duyệt. (Hãy đổi "Document" thành "Thiệp Đặc Biệt").
* `<body> ... </body>`: **Cơ thể Website**. TẤT CẢ mọi thành phần hiển thị trên màn hình (văn bản, hình ảnh, nút bấm) bắt buộc phải viết vào khoảng trống giữa 2 thẻ `<body>` này.

### Bước 3: Hello World
Thử viết một nội dung nho nhỏ vào giữa thẻ `<body>`:

```html
<body>
    <h1>Trang web đầu tiên của tôi</h1>
    <p>Bắt đầu viết code thật sự thú vị!</p>
</body>
```
*Ghi chú: Thẻ `<h1>` là tiêu đề to nhất, thẻ `<p>` là đoạn văn bản thường.*

* **Lưu file:** Bấm `Ctrl + S`.
* **Chạy thử:** Click chuột phải vào màn hình gõ code (vừa lưu), chọn **"Open with Live Server"**. Trình duyệt sẽ mở lên trang web trắng phau với các dòng chữ em vừa gõ!

---

## 💌 Hoàn Thiện: Xây Bộ Khung Xương Bao Thư

Giờ hãy xóa đoạn "Hello World" đi, chúng ta bắt đầu dựng khung xương 1 tấm thiệp.

Trong HTML, thẻ chúng ta sẽ dùng nhiều nhất là **`<div>`** (Division).
* `<div>` đóng vai trò như một chiếc **hộp carton rỗng**, dùng để phân chia khu vực và nhóm các phần tử lại với nhau.
* Để cỗ máy tính nhận diện được đâu là hộp chứa nắp thư, đâu là hộp chứa bề mặt phong bì, ta cần gán **nhãn dán**.
* Nhãn dán này gọi là **Class** (Lớp - Dùng cho nhiều yếu tố) hoặc **ID** (Định danh - Chỉ có một cái duy nhất tồn tại).

Dưới đây là sơ đồ sắp xếp các hộp carton tạo nên cấu trúc phong bì thư. Em hãy gõ (hoặc copy) chính xác vào khoảng trống giữa thẻ `<body>` và `</body>`:

```html
<body>
    <!-- Lớp vỏ Bọc Tổng (id="envelope" định danh duy nhất cho nguyên tấm thiệp) -->
    <div class="envelope-wrapper" id="envelope">

        <!-- Lớp 1: Mặt sau của bao thư (Tấm lót dưới cùng) -->
        <div class="envelope-back envelope-part"></div>

        <!-- Lớp 2: Tờ lá thư (Chứa văn bản, nằm kẹp ở giữa) -->
        <div class="letter">
            <div class="text-content">
                <h2>Gửi người đặc biệt nhất! 💌</h2>
                <p>Bất ngờ chưa, nắp thư đã lật mở rồi nè. Chúc cậu một ngày thật rực rỡ và muôn vàn hạnh phúc đang chờ đón phía trước nhé!</p>
            </div>
        </div>

        <!-- Lớp 3: Mặt trước của phong bì (Gắn đè lên để che lá thư lại) -->
        <div class="envelope-front envelope-part"></div>

        <!-- Lớp 4: Cái nắp tam giác của phong bì (Nằm trên cùng) -->
        <div class="envelope-flap envelope-part">
            <!-- Con dấu sáp đỏ dán đè lên nắp -->
            <div class="wax-seal">❤️</div>
        </div>

    </div>
</body>
```
*(Lưu ý: Các dòng nằm giữa `<!--` và `-->` là comments. Nó giúp lập trình viên ghi chú lại mã nguồn cho dễ đọc, hệ thống sẽ bỏ qua đoạn này và không hiển thị nó ra ngoài trình duyệt).*

---

### 🎉 Tổng kết Ngày 1:

Em hãy bấm `Ctrl + S` lưu lại và quan sát kết quả trên Live Server ở trình duyệt.

> [!IMPORTANT]
> **Nhắc lại một lần nữa:** Bất cứ khi nào em chỉnh sửa dù chỉ một dấu chấm, hãy luôn nhớ nhấn **Ctrl + S** (Windows) hoặc **Cmd + S** (Mac). Live Server giống như một người đưa thư, nếu em chưa "đóng gói và dán băng keo" (Lưu file) thì người đưa thư sẽ không biết có hàng mới để chuyển đi đâu!

Mọi thứ lúc này trông chỉ toàn là chữ đen trắng xếp chồng chéo lên nhau, cái cần thì không thấy, cái không cần lại chình ình góc trái.
👉 **Điều này hoàn toàn chính xác!** Vì chúng ta mới chỉ tạo ra các HỘP RỖNG vô hình và nhập văn bản text thô (HTML). Hôm nay máy tính chưa được em chỉ dạy xem cái hộp nào có màu đỏ, nẩy kích thước dài rộng bao nhiêu.

Phần xương cốt đã dựng xong cực kỳ chuẩn chỉ! Ở buổi Ngày 2, em sẽ học cách dùng ma thuật có tên là **CSS** để gọt rũa các thẻ `div` này thành hình đa giác, biến chúng thành một chiếc phong bì lấp lánh có màu sắc thực sự.

Nghỉ ngơi chút nhé, ngày 1 qua xuất sắc!
