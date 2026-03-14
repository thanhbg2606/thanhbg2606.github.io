// JavaScript cho hệ thống hỗ trợ học tập (Menu & Sidebar)
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const lessonViewer = document.getElementById('lessonViewer');
const closeViewer = document.getElementById('closeViewer');
const lessonContent = document.getElementById('lessonContent');

// Logic Menu Hamburger
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Logic Đóng Viewer
if (closeViewer) {
    closeViewer.addEventListener('click', () => {
        lessonViewer.classList.remove('active');
    });
}

// Hàm tải bài học từ Markdown
async function loadLesson(day) {
    try {
        const response = await fetch(`docs/${day}.md`);
        if (!response.ok) throw new Error('Không tìm thấy bài học');
        const markdownText = await response.text();

        // Sử dụng marked.js được nạp trong index.html
        lessonContent.innerHTML = marked.parse(markdownText);

        lessonViewer.classList.add('active');
        sidebar.classList.remove('active');
        menuToggle.classList.remove('active');
    } catch (error) {
        alert("Có lỗi xảy ra khi tải bài học: " + error.message);
    }
}
